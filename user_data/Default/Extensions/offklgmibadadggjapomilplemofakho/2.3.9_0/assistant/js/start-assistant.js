!function(){if(window.top===window&&document.documentElement instanceof HTMLElement&&"undefined"!=typeof contentPage){var s,o=null;document.addEventListener("contextmenu",function(e){2===event.button&&(o=event.target)},!1),contentPage.onMessage.addListener(function(e){switch(e.type){case"initAssistant":var t;s?s.destroy():s=new YiclearAssistant(balalaika);var n=e.options;n.cssSelector?t=document.querySelector(n.cssSelector):o&&n.selectElement&&(t=o),s.init({selectedElement:t});break;case"destroyAssistant":s&&(s.destroy(),s=null)}})}}();