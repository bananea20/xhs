"use strict";(globalThis.webpackChunkinfinity_hitab_client=globalThis.webpackChunkinfinity_hitab_client||[]).push([[774],{10774:(t,e,i)=>{i.r(e),i.d(e,{useBookStore:()=>r});var a=i(84522),o=i(10435),s=i(74003),l=i(17904);const n={_id:"1",link:"https://book.douban.com/subject/36104107/",bookId:"36104107",title:"长安的荔枝",type:"all",cover:"https://static.wetab.link/hitab/book-widget/1674147631355.jpg",desc:"马伯庸 / 2022-10 / 湖南文艺出版社 / 45.00元 / 平装",score:"8.5",subTitle:"",oriTitle:"",intro:"大唐天宝十四年，长安城的小吏李善德突然接到一个任务：要在贵妃诞日之前，从岭南运来新鲜荔枝。荔枝“一日色变，两日香变，三日味变”，而岭南距长安五千余里，山水迢迢，这是个不可能完成的任务，可为了家人，李善德决心放手一搏：“就算失败，我也想知道，自己倒在距离终点多远的地方。”    《长安的荔枝》是马伯庸备受好评的历史小说。    唐朝诗人杜牧的一句“一骑红尘妃子笑，无人知是荔枝来”一千多年来引发了人们的无限遐想，但鲜荔枝的保鲜时限仅有三天，这场跨越五千余里的传奇转运之旅究竟是如何达成的，谁让杨贵妃在长安吃到了来自岭南的鲜荔枝？作者马伯庸就此展开了一场脑洞非常大的想象。    沿袭马伯庸写作一贯以来的时空紧张感，不仅让读者看到了小人物的乱世生存之道，也感受到了事在人为的热血奋斗。随书附赠“荔枝鲜转运舆图”。    ★ 编辑推荐    唐朝诗人杜牧的一句“一骑红尘妃子笑，无人知是荔枝来”...(展开全部)"},u=[{name:"全部",value:"all",list:[],updatetime:0},{name:"文学",value:"literary",list:[],updatetime:0},{name:"小说",value:"novel",list:[],updatetime:0},{name:"历史文化",value:"history",list:[],updatetime:0},{name:"社会纪实",value:"social",list:[],updatetime:0},{name:"科学新知",value:"tech",list:[],updatetime:0},{name:"艺术设计",value:"art",list:[],updatetime:0},{name:"影视戏剧",value:"drama",list:[],updatetime:0},{name:"商业经管",value:"business",list:[],updatetime:0},{name:"绘本漫画",value:"comics",list:[],updatetime:0},{name:"悬疑推理",value:"suspense_novel",list:[],updatetime:0},{name:"科幻奇幻",value:"science_fiction",list:[],updatetime:0}],r=(0,o.Q_)(a.BU.book,{syncStorage:{watch:["bookList","homeBookItem"]},state:()=>({modalShow:!1,bookList:u,currentType:"all",homeBookItem:n}),actions:{setModal(t){this.modalShow=t},setCurrentType(t){t!==this.currentType&&(this.currentType=t,this.reqBookList())},async reqBookList(){const t=this.currentType,e=this.bookList.find((e=>e.value===t)),i=(new Date).valueOf(),a=this.bookList[0].list;if("all"===t&&a.length>0){const t=Math.floor(10*Math.random());this.homeBookItem=a[t]}if(i-e.updatetime<72e6)return!1;const[o,n]=await(async t=>{try{const e=await l.hj.get(`${s.H}book/list`,{type:t},{_single:!0});if(0===e.code&&e.data.length>0)return[null,e.data];throw e}catch(t){return["catch error"]}})(t);if(o||!n)return;if("all"===t&&n.length>0){const t=Math.floor(10*Math.random());this.homeBookItem=n[t]}const u=[...this.bookList],r=u.findIndex((e=>e.value===t));u[r]={...u[r],list:n,updatetime:i},this.bookList=u}}})}}]);