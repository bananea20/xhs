(window.webpackJsonp=window.webpackJsonp||[]).push([["chunk-34994e89"],{"3cd5":function(t,e,o){"use strict";o("55d4")},"55d4":function(t,e,o){},"5ced":function(t,e,o){},bb51:function(t,e,o){"use strict";o.r(e);var n=o("5530"),r=o("2f62"),a=(o("7db0"),o("96cf"),o("1da1")),c=o("8334"),s=o("5f87"),i={name:"HomeUser",props:{msg:String},components:{Uploadheadimg:c.a},data:function(){return{menustatus:!1}},computed:Object(n.a)(Object(n.a)({},Object(r.c)({name:"user/name",avatar:"user/avatar",leave:"user/leave",credits:"user/credits",token:"user/token",proxyCheckedNodeId:"proxy/proxyCheckedNodeId",proxySwitch:"proxy/proxySwitch",proxyNodeList:"proxy/proxyNodeList",initconfig:"app/initconfig"})),{},{NodeInfo:function(){var t=this;return this.proxyNodeList.find((function(e){return e.id==t.proxyCheckedNodeId}))},CmdList:function(){return this.initconfig.proxy_cmd?JSON.parse(this.initconfig.proxy_cmd):[]}}),created:function(){this.init()},filters:{proxySwitchtotype:function(t){return t?"success":"default"}},methods:Object(n.a)(Object(n.a)({},Object(r.b)({GetUserInfo:"user/GetUserInfo",LogOut:"user/LogOut",GetProxyList:"proxy/GetProxyList",CloseProxy:"proxy/CloseProxy",SetProxySwitch:"proxy/SetProxySwitch",SetProxyCheckedNodeId:"proxy/SetProxyCheckedNodeId"})),{},{changeProxySwitch:function(){var t=this;this.SetProxySwitch(!this.proxySwitch).then((function(e){t.$Message.success({background:!0,content:e})})).catch((function(e){t.$Message.error({background:!0,content:e})}))},changeProxyCheckedNodeId:function(t){var e=this;this.SetProxyCheckedNodeId(t).then((function(t){e.$Message.success({background:!0,content:t})})).catch((function(t){e.$Message.error({background:!0,content:t})}))},copy_value:function(t){var e=this;this.$copyText(t).then((function(){e.$Message.success({content:"已复制到粘贴板",background:!0})}),(function(){e.$Message.error({content:"复制失败，可能浏览器不支持该功能，请手动复制: "+t,background:!0,duration:10})}))},copy_command:function(t){var e,o,n,r=this,a=this.proxyNodeList.find((function(t){return t.id==r.proxyCheckedNodeId}));void 0!==a?(e=a.host,o=a.port,n=a.account,a=a.password,n=encodeURIComponent(n),a=encodeURIComponent(a),t=t.replaceAll("{account}",n).replaceAll("{password}",a).replaceAll("{host}",e,-1).replaceAll("{port}",o),this.$copyText(t).then((function(){r.$Message.success({content:"命令已复制到粘贴板",background:!0})}),(function(){r.$Message.error({content:"复制失败，可能浏览器不支持该功能，请手动复制"+t,background:!0,duration:10})}))):this.$Message.error({content:"节点信息错误，请更新配置后重新选择代理节点",background:!0,duration:10})},reloaduser:function(){var t=this;return Object(a.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return o=t.$Message.loading({content:"更新代理列表中",duration:0}),e.next=3,t.GetProxyList();case 3:o(),t.$Message.success("更新成功");case 5:case"end":return e.stop()}}),e)})))()},init:function(){var t=this;return Object(a.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(Object(s.b)())return o=t.$Message.loading({content:"更新数据中",duration:0}),e.next=4,t.GetUserInfo();e.next=13;break;case 4:if(t.initconfig.proxy_version&&localStorage.getItem("ProxyVersion")!=t.initconfig.proxy_version)return e.next=10,t.GetProxyList();e.next=11;break;case 10:localStorage.setItem("ProxyVersion",t.initconfig.proxy_version);case 11:o(),t.$Message.success("更新成功");case 13:case"end":return e.stop()}}),e)})))()},logout:function(){}})};o("3cd5"),c=o("2877"),r={name:"app",components:{HomeUser:Object(c.a)(i,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.token?n("div",[n("span",{attrs:{id:"btnrightBox"},on:{click:function(e){t.menustatus=!0}}},[n("span",{attrs:{id:"btnMenu",title:"菜单"}},[n("Icon",{attrs:{type:"md-person"}})],1)]),n("span",{attrs:{id:"btnleftBox"},on:{click:t.reloaduser}},[n("span",{attrs:{id:"btnreload",title:"刷新"}},[n("Icon",{attrs:{type:"md-refresh"}})],1)]),n("Drawer",{attrs:{title:t.name,width:"190",closable:!1},model:{value:t.menustatus,callback:function(e){t.menustatus=e},expression:"menustatus"}},[n("div",{attrs:{slot:"header"},slot:"header"},[n("Row",{attrs:{type:"flex"}},[n("i-col",[n("Avatar",{attrs:{src:t.avatar,size:"large"}}),n("span",{staticStyle:{padding:"12px"}},[t._v(t._s(t.name))])],1)],1),n("Row",{attrs:{type:"flex"}},[n("i-col",[1==t.leave?n("Tag",{attrs:{color:"primary"}},[t._v("管理员")]):n("Tag",{attrs:{color:"primary"}},[t._v("普通用户")])],1)],1)],1),n("Row",{attrs:{type:"flex"}},[n("i-col",[n("Button",{on:{click:t.LogOut}},[t._v("退出登录")])],1)],1)],1),n("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"end"}},[n("i-col",{staticStyle:{"text-align":"center"},attrs:{span:"24"}},[n("div",{staticStyle:{position:"relative"}},[n("div",{staticStyle:{display:"block","text-align":"center"}},[n("a",{staticClass:"search-logo",attrs:{href:"/"}},[n("img",{staticStyle:{padding:"15px"},attrs:{src:o("f6d5")}})])]),n("Button",{attrs:{size:"large",type:t._f("proxySwitchtotype")(t.proxySwitch),shape:"circle",icon:"md-power"},on:{click:t.changeProxySwitch}})],1)])],1),n("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"end"}},[n("i-col",{staticStyle:{"text-align":"center",padding:"20px"},attrs:{span:"24"}},[n("Select",{on:{"on-change":t.changeProxyCheckedNodeId},model:{value:t.proxyCheckedNodeId,callback:function(e){t.proxyCheckedNodeId=e},expression:"proxyCheckedNodeId"}},t._l(t.proxyNodeList,(function(e){return n("Option",{key:e.id,attrs:{value:e.id}},[t._v(t._s(e.info))])})),1)],1)],1),t.proxyCheckedNodeId?n("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"end"}},[n("i-col",{staticStyle:{padding:"0 20px"},attrs:{span:"24"}},[n("Collapse",[n("Panel",{attrs:{name:"1"}},[t._v(" 快捷命令 "),n("div",{attrs:{slot:"content"},slot:"content"},t._l(t.CmdList,(function(e){return n("Button",{key:e.name,on:{click:function(o){return t.copy_command(e.value)}}},[t._v(t._s(e.name))])})),1)]),n("Panel",{attrs:{name:"2"}},[t._v(" 节点信息 "),n("div",{attrs:{slot:"content"},slot:"content"},[t.NodeInfo?n("Form",{attrs:{"label-width":50}},[n("FormItem",{attrs:{label:"主机"}},[n("i-input",{attrs:{readonly:""},model:{value:t.NodeInfo.host,callback:function(e){t.$set(t.NodeInfo,"host",e)},expression:"NodeInfo.host"}},[n("Button",{attrs:{slot:"append",icon:"ios-copy"},on:{click:function(e){return t.copy_value(t.NodeInfo.host)}},slot:"append"})],1)],1),n("FormItem",{attrs:{label:"端口"}},[n("i-input",{attrs:{readonly:""},model:{value:t.NodeInfo.port,callback:function(e){t.$set(t.NodeInfo,"port",e)},expression:"NodeInfo.port"}},[n("Button",{attrs:{slot:"append",icon:"ios-copy"},on:{click:function(e){return t.copy_value(t.NodeInfo.port)}},slot:"append"})],1)],1),n("FormItem",{attrs:{label:"账户"}},[n("i-input",{attrs:{readonly:""},model:{value:t.NodeInfo.account,callback:function(e){t.$set(t.NodeInfo,"account",e)},expression:"NodeInfo.account"}},[n("Button",{attrs:{slot:"append",icon:"ios-copy"},on:{click:function(e){return t.copy_value(t.NodeInfo.account)}},slot:"append"})],1)],1),n("FormItem",{attrs:{label:"密码"}},[n("i-input",{attrs:{readonly:""},model:{value:t.NodeInfo.password,callback:function(e){t.$set(t.NodeInfo,"password",e)},expression:"NodeInfo.password"}},[n("Button",{attrs:{slot:"append",icon:"ios-copy"},on:{click:function(e){return t.copy_value(t.NodeInfo.password)}},slot:"append"})],1)],1),n("p",[t._v(" 账户名称中@符号在某些使用场景下会造成验证失败，请使用'%40'替换'@' ")])],1):t._e()],1)])],1)],1)],1):t._e(),n("Uploadheadimg",{ref:"uploadheadimgmodal"})],1):n("div",[n("Row",{staticClass:"code-row-bg",attrs:{type:"flex",justify:"end"}},[n("i-col",{staticStyle:{"text-align":"center",padding:"20px"},attrs:{span:"24"}},[n("div",{staticStyle:{display:"block"}},[n("a",{staticClass:"search-logo",attrs:{href:"/"}},[n("img",{staticStyle:{padding:"15px"},attrs:{src:o("f6d5")}})])]),n("router-link",{attrs:{to:{path:"/user/login"}}},[t._v(" 登录")])],1)],1)],1)])}),[],!1,null,null,null).exports},data:function(){return{}},computed:Object(n.a)({},Object(r.c)({initconfig:"app/initconfig",token:"user/token"})),methods:{showedituser:function(){this.$refs.editmodal.show()},showreg:function(){this.$refs.regmodal.show()},showlogin:function(){this.$refs.loginmodal.show()}},mounted:function(){}},o("cccb"),r=Object(c.a)(r,(function(){var t=this,e=t.$createElement;e=t._self._c||e;return e("div",{attrs:{id:"home"}},[e("HomeUser"),e("div",{staticStyle:{padding:"0 20px","text-align":"center"}},[e("div",{staticStyle:{"margin-top":"25px"}},[e("div",{staticStyle:{"text-align":"left"},domProps:{innerHTML:t._s(t.initconfig.notic)}})])]),e("div",{staticStyle:{height:"60px"}})],1)}),[],!1,null,null,null);e.default=r.exports},cccb:function(t,e,o){"use strict";o("5ced")},f6d5:function(t,e){t.exports="data:image/png;base64,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"}}]);