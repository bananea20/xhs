from selenium import webdriver
from selenium.common.exceptions import TimeoutException
from selenium.webdriver.edge.service import Service
from urllib.parse import urlencode
from selenium.webdriver.edge.options import Options
import time
import re
import pandas as pd
from selenium.webdriver.common.by import By

def findstr(pattern, string):
    # 正则表达式匹配字符串
    ans = re.search(pattern, string)
    if ans:
        span = ans.span()
        return string[span[0] : span[1]]
    return ""

HEAD = {
    "User-Agent" : "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36"
}

_keyword = "默认"
keyword = urlencode({
    "keyword"  :_keyword
})

if __name__ == "__main__":
    print("启动中，请等待...")
    options = Options()
    options.add_experimental_option("debuggerAddress", "127.0.0.1:9222")
    driver = webdriver.Edge(service=Service(r"./edgedriver_win64/msedgedriver.exe"), options=options)
    print("启动完成")
    driver.set_page_load_timeout(5)
    # xhs首页
    url = "https://www.xiaohongshu.com"
    driver.get(url)
    
    print("请扫描登陆，在这里输入关键词后按回车键继续:")
    _keyword = input()
    keyword = urlencode({
        "keyword"  :_keyword
    })
    print("关键词为{},正在爬取帖子摘要...".format(_keyword))
    
    url = "https://www.xiaohongshu.com/search_result?{}&source=web_explore_feed".format(keyword)
    driver.get(url)
    time.sleep(2)
    
    had = {}
    new_add = 0
    while new_add < 5:
        driver.execute_script('window.scrollBy(0,400)')
        res = driver.page_source
        lst = re.findall(r'(?<=<section)(.*?)(?=</section>)', res)
        new_add += 1
        for each in lst:
            if "大家都在搜" in each:
                continue
            img = findstr(r'(?<=background: url\(&quot;)(.*?)(?=;\))', each)
            if not (img in had):
                new_add = 0
                intro = findstr(r'(?<=class="title"><span)(.*?)(?=</span>)', each)
                had[img] = {
                    "intro" : findstr(r'(?<=>)(.*)', intro) if intro else "",
                    "user" : findstr(r'(?<=class="name">)(.*?)(?=</span>)', each),
                    "likes" : findstr(r'(?<=class="count">)(.*?)(?=</span>)', each),
                    "explore" : findstr(r'(?<=href="/explore/)(.*?)(?=")', each),
                }
        time.sleep(2)
        
    print("笔记摘要爬取完毕，正在爬取笔记详情...")
    
    explores = {}
    success = 0
    failed = 0
    for each in had:
        if had[each]["explore"] in explores:
            continue
        url = "https://www.xiaohongshu.com/explore/{}".format(had[each]["explore"])
        try:
            driver.get(url)
            success += 1
        except TimeoutException:
            driver.execute_script('window.stop()')
            failed += 1
            continue
        time.sleep(1.5)
        res = driver.page_source
        # 楼主id
        author = findstr(r'(?<=class="author")(.*?)(?=关注)', res)
        author = findstr(r'(?<=/user/profile/)(.*?)(?=")', author)
        # 说明
        desc = findstr(r'(?<=class="desc")(.*?)(?=</div>)', res)
        desc = findstr(r'(?<=>)(.*?)(?=<)', desc)
        # 发表日期
        date = findstr(r'(?<=class="date")(.*?)(?=</div>)', res)
        date = findstr(r'(?<=>)(.*)', date)
        # 评论
        comments = []
        _comments = re.findall(r'(?<=class="comment-item")(.*?)(?=</use>)', res)
        for comment in _comments:
            content = findstr(r'(?<=class="content">)(.*?)(?=</div>)', comment)
            user = findstr(r'(?<=/user/profile/)(.*?)(?=")', comment)
            date = findstr(r'(?<=<span)(.*?)(?=</span>)', comment)
            date = findstr(r'(?<=>)(.*)', date)
            comments.append({
                "content" : content,
                "user" : user,
                "date" : date
            })
        # 交互
        inters = re.findall(r'(?<=interactions)(.*?)(?=</div></div></div>)', res)
        # cnt = len(inters)
        # for i in range(len(inters)):
        #     cnt -= 1
        #     if cnt:
        #         inter = inters[i]
        #         like = findstr(r'(?<=#like)(.*?)(?=class="reply)', inter)
        #         like = findstr(r'(?<=class="count">)(.*?)(?=</span>)', like)
        #         like = like if like else "0"
        #         reply = findstr(r'(?<=#reply)(.*?)(?=</span>)', inter)
        #         reply = findstr(r'(?<=class="count">)(.*)', reply) if reply else "0"
        #         comments[i]["likes"] = like
        #         comments[i]["reply"] = reply
        #     else:
        #         like = findstr(r'(?<=#like)(.*?)(?=class="collect-wrapper")', inter)
        #         like = findstr(r'(?<=class="count")(.*?)(?=</span>)', like)
        #         like = findstr(r'(?<=>(.*)', like) if like else "0"
                
        #         collect = findstr(r'(?<=#collect)(.*?)(?=class="chat-wrapper")', inter)
        #         collect = findstr(r'(?<=class="count")(.*?)(?=</span>)', collect)
        #         collect = findstr(r'(?<=>(.*)', collect) if collect else "0"
    
        explores[had[each]["explore"]] = {
            "author" : author,
            "desc" : desc,
            "date" : date,
            "comments" : comments,
            # "like" : like,
            # "collect" : collect
        }
        
    img = []
    id = []
    like = []  
    author = []
    desc = []
    date = []      
    for each in had:
        img.append(each)
        id.append(had[each]["explore"])
        like.append(had[each]["likes"])
        each = had[each]
        author.append(explores[each["explore"]]["author"])
        date.append(explores[each["explore"]]["date"])
        desc.append(explores[each["explore"]]["desc"])
    df = pd.DataFrame({'img':img,'id':id,"like":like,"author":author,"desc":desc,"date":date})
    df.to_csv("小红书-{}-笔记摘要.csv".format(_keyword),index=False,sep=',',encoding='utf_8_sig')

    id = []
    content = []
    user = []
    date = []
    for each in explores:
        for _each in explores[each]["comments"]:
            id.append(each)
            content.append(_each["content"])
            user.append(_each["user"])
            date.append(_each["date"])
    df = pd.DataFrame({'user':user,'id':id,"content":content,"date":date})
    df.to_csv("小红书-{}-笔记详情.csv".format(_keyword),index=False,sep=',',encoding='utf_8_sig')
    print("笔记详情爬取完毕, 成功{}个，失败{}个，正在爬取相关用户信息...".format(success, failed))
        
    users = {}
    success = 0
    failed = 0
    for each in explores:
        _users = [explores[each]["author"]]
        for comment in explores[each]["comments"]:
            _users.append(comment["user"])
        for user in _users:
            if not (user in users):
                url = "https://www.xiaohongshu.com/user/profile/{}".format(user)
                try:
                    driver.get(url)
                    success += 1
                except TimeoutException:
                    driver.execute_script('window.stop()')
                    failed += 1
                    continue
                time.sleep(1.5)
                res = driver.page_source
                name = findstr(r'(?<=class="user-name")(.*?)(?=<!---->)', res)
                name = findstr(r'(?<=>)(.*)', name)
                
                desc = findstr(r'(?<=class="user-desc")(.*?)(?=</div>)', res)
                desc = findstr(r'(?<=>)(.*)', desc) if desc else ""
                
                sex = "女" if findstr(r"#female", res) else "男"
                
                age = findstr(r'(?<=class="gender-text")(.*?)(?=</span>)', res)
                age = findstr(r'(?<=>)(.*?)(?=岁)', age) if age else ""
                
                loc =  findstr(r'(?<=IP属地：)(.*?)(?=<)', res)
                
                
                titles = []
                notes = re.findall(r'(?<=<section)(.*?)(?=</section>)', res)
                for note in notes:
                    title = findstr(r'(?<=class="title">)(.*?)(?=</span>)', note)
                    title = findstr(r'(?<=>)(.*)', title)
                    titles.append(title)
                users[user] = {
                    "titles" : titles,
                    "sex" : sex,
                    "desc" : desc,
                    "name" : name,
                    "age" : age,
                    "loc" : loc
                }
                print(users[user])
    

    id = []
    titles = []
    sex = []
    desc = []
    name = []
    age = []
    loc = []
    for each in users:
        id.append(each)
        each = users[each]
        titles.append(';'.join(each["titles"]))
        sex.append(each["sex"])
        desc.append(each["desc"])
        name.append(each["name"])
        age.append(each["age"])
        loc.append(each["loc"])
    df = pd.DataFrame({'id':id,"title":titles,"sex":sex,"desc":desc,"name":name,"age":age,"loc":loc})
    df.to_csv("小红书-{}-用户.csv".format(_keyword),index=False,sep=',',encoding='utf_8_sig')
    print("相关用户信息爬取完毕, 成功{}个，失败{}个，程序结束".format(success, failed))