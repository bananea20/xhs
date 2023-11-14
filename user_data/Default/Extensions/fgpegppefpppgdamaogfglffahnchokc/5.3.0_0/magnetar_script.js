
chrome.runtime.sendMessage({
  action: 'getUserInfo'
}, function(response) {
  if(response){
    var style_green = "font-family:'微软雅黑';font-size:1em;background-color:#666;color:#fff;padding:4px;";
    var style_green_light = "font-family:'微软雅黑';font-size:1em;background-color:#666;color:#fff;padding:4px;";
    console.log('%c© 2019-2022 Magnetar-Extension  All Rights Reserved.%c', style_green, style_green_light);
    localStorage.setItem('Magnetar-Extensions-User', JSON.stringify(response))
  }
});