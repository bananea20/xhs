function n(r){if(r.messageType==="InternalSearchQuery")return r.text;if(r.messageType==="InternalLoaderMessage")return`_${r.text}_`;try{for(let e of r.adaptiveCards)for(let t of e.body)if(t.type==="TextBlock")return t.text}catch{}return""}var o=String.fromCharCode(30),a={packMessage(r){return`${JSON.stringify(r)}${o}`},unpackMessage(r){return r.toString().split(o).filter(Boolean).map(e=>JSON.parse(e))}};export{n as a,a as b};
