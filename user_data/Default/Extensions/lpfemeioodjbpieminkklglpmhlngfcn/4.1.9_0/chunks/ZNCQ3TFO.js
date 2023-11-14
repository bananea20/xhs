import{b as x}from"./FVT6UZZV.js";import{f as P,n as m,s as q,t as C}from"./MM2G4TVT.js";import{n as v,na as _,za as S}from"./I77YJK47.js";import{c as w}from"./A3QRDAMY.js";import{b}from"./AZMC6STA.js";import{a as A}from"./MM6H3LLZ.js";import{a as U}from"./42TZCCKB.js";import{f as c}from"./UTGLRY7A.js";var h=c(U());var p=`You are a knowledgeable and helpful person that can answer any questions. Your task is to answer questions.

It's possible that the question, or just a portion of it, requires relevant information from the internet to give a satisfactory answer. The relevant search results provided below, delimited by <search_results></search_results>, are the necessary information already obtained from the internet. The search results set the context for addressing the question, so you don't need to access the internet to answer the question.

Write a comprehensive answer to the question in the best way you can. If necessary, use the provided search results.

Search results:
<search_results>
{web_results}
</search_results>

Each search result item provides the following information in this format:
Number: [Index number of the search result]
URL: [URL of the search result]
Title: [Page title of the search result]
Content: [Page content of the search result]

If you can't find enough information in the search results and you're not sure about the answer, try your best to give a helpful response by using all the information you have from the search results.

For your reference, today's date is {current_date}.

---

You should always respond using the following Markdown format delimited by <response></response>:

<response>
# {query}

## \u{1F5D2}\uFE0F Answer
<answer to the question>

## \u{1F310} Sources
<numbered list of all the provided search results>
</response>

---

Here are more requirements for the response Markdown format described above:

For <answer to the question> part in the above Markdown format:
If you use any of the search results in <answer to the question>, always cite the sources at the end of the corresponding line, similar to how Wikipedia.org cites information. Use the citation format [[NUMBER](URL)], where both the NUMBER and URL correspond to the provided search results in <numbered list of all the provided search results>.

Present the answer in a clear format.
Use a numbered list if it clarifies things
Make the answer as short as possible, ideally no more than 200 words.

For <numbered list of all the provided search results> part in the above Markdown format:
Always list all the search results provided above, delimited by <search_results></search_results>.
Do not miss any search result items, regardless if there are duplicated ones in the provided search results.
Use the following format for each search result item:
[the domain of the URL - TITLE](URL)
Ensure the bullet point's number matches the 'NUMBER' of the corresponding search result item.`,R=`You are a knowledgeable and helpful person that can answer any questions. Your task is to answer questions.

It's possible that the question, or just a portion of it, requires relevant information from the internet to give a satisfactory answer. The relevant search results provided below, delimited by <search_results></search_results>, are the necessary information already obtained from the internet. The search results set the context for addressing the question, so you don't need to access the internet to answer the question.

Write a comprehensive answer to the question in the best way you can. If necessary, use the provided search results.

Search results:
<search_results>
{web_results}
</search_results>

Each search result item provides the following information in this format:
Number: [Index number of the search result]
URL: [URL of the search result]
Title: [Page title of the search result]
Content: [Page content of the search result]

If you can't find enough information in the search results and you're not sure about the answer, try your best to give a helpful response by using all the information you have from the search results.

For your reference, today's date is {current_date}.

---

You should always respond using the following Markdown format:

# {query}

## \u{1F5D2}\uFE0F Answer
<answer to the question>

## \u{1F310} Sources
<numbered list of all the provided search results>

---

Here are more requirements for the response Markdown format described above:

For <answer to the question> part in the above Markdown format:
If you use any of the search results in <answer to the question>, always cite the sources at the end of the corresponding line, similar to how Wikipedia.org cites information. Use the citation format [[NUMBER](URL)], where both the NUMBER and URL correspond to the provided search results in <numbered list of all the provided search results>.

Present the answer in a clear format.
Use a numbered list if it clarifies things
Make the answer as short as possible, ideally no more than 200 words.

For <numbered list of all the provided search results> part in the above Markdown format:
Always list all the search results provided above, delimited by <search_results></search_results>.
Do not miss any search result items, regardless if there are duplicated ones in the provided search results.
Use the following format for each search result item:
[the domain of the URL - TITLE](URL)
Ensure the bullet point's number matches the 'NUMBER' of the corresponding search result item.`;var E=c(A()),k=`You are a research expert who is good at coming up with the perfect search query to help find answers to any question. Your task is to think of the most effective search query for the following question delimited by <question></question>:

<question>
{{current_question}}
</question>

The question is the final one in a series of previous questions and answers. Here are the earlier questions listed in the order they were asked, from the very first to the one before the final question, delimited by <previous_questions></previous_questions>:
<previous_questions>
{{previous_questions}}
</previous_questions>

For your reference, today's date is {{CURRENT_DATE}}.

Output 3 search queries as JSON Array format without additional number, context, explanation, or extra wording, site information, just 3 text search queries as JSON Array format.`,I=`You are a research expert who is good at coming up with the perfect search query to help find answers to any question. Your task is to think of the most effective search query for the following question delimited by <question></question>:

<question>
{{current_question}}
</question>

The question is the final one in a series of previous questions and answers. Here are the earlier questions listed in the order they were asked, from the very first to the one before the final question, delimited by <previous_questions></previous_questions>:
<previous_questions>
{{previous_questions}}
</previous_questions>

For your reference, today's date is {{CURRENT_DATE}}.

Output 1 search query as JSON Array format without additional number, context, explanation, or extra wording, site information, just 1 text search query as JSON Array format.`,B=",",Y=(e,t="single")=>{let r=t==="single"?I:k;r=r.replaceAll("{{CURRENT_DATE}}",(0,E.default)().format("YYYY-MM-DD HH:mm:ss"));let o=e[e.length-1],s=e.slice(0,-1);r=r.replaceAll("{{current_question}}",o);let a="";return s.forEach((n,i)=>{a+=`${i+1}) ${n}${i<s.length-1?`
`:""}`}),r=r.replaceAll("{{previous_questions}}",a),r};var W=[{value:"sogou",label:"Sogou Search"},{value:"brave",label:"Brave Search"},{value:"yandex",label:"Yandex Search"},{value:"naver",label:"Naver Search"},{value:"bing",label:"Bing Search"},{value:"yahoo",label:"Yahoo Search"},{value:"baidu",label:"Baidu Search"},{value:"google",label:"Google Search"}],T=Array.from({length:10},(e,t)=>t+1).map(e=>({value:e,label:`${e} result${e===1?"":"s"}`}));T.push({value:15,label:"Max results"});var H=T,$=[{value:"MAP_REDUCE",label:"Copilot"},{value:"NO_SUMMARIZE",label:"Quick search"}],G=[{value:"m",label:"Past month"},{value:"w",label:"Past week"},{value:"d",label:"Past day"},{value:"any",label:"Any time"}];var u="saved_prompts",y="saved_prompts_moved_to_local";var z=async()=>(await N()).text.includes("{web_results}");var M=()=>{try{return b().includes("gpt-4")?{uuid:"default",name:"Default prompt",text:R}:{uuid:"default",name:"Default prompt",text:p}}catch{return{uuid:"default",name:"Default prompt",text:p}}},N=async()=>{let t=(await w()).promptUUID;return(await g()).find(o=>o.uuid===t)||M()},g=async(e=!0)=>{let{[u]:t,[y]:r}=await h.default.storage.local.get({[u]:[],[y]:!1}),o=t;if(!r){let a=(await h.default.storage.sync.get({[u]:[]}))?.[u]??[];o=t.reduce((n,i)=>(n.some(({uuid:d})=>d===i.uuid)||n.push(i),n),a),await h.default.storage.local.set({[u]:o,[y]:!0}),await h.default.storage.sync.set({[u]:[]})}return e?O(o):o};function O(e){return t(e,M()),e;function t(r,o){let s=r.findIndex(a=>a.uuid===o.uuid);s>=0?r[s]=o:r.unshift(o)}}var X=async e=>{let t=await g(!1),r=t.findIndex(o=>o.uuid===e.uuid);r>=0?t[r]=e:t.push(e),await h.default.storage.local.set({[u]:t})},ee=async e=>{let t=await g();t=t.filter(r=>r.uuid!==e.uuid),await h.default.storage.local.set({[u]:t})};var l=c(v()),D=({open:e,confirmText:t,confirmButtonText:r,cancelButtonText:o,onClose:s,onConfirm:a,children:n})=>{let{t:i}=x(["settings","common"]),d=()=>{a&&a()};return(0,l.jsx)(q,{open:e,onClose:s,children:(0,l.jsxs)(P,{sx:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",width:360,bgcolor:"background.paper",boxShadow:" 0px 4px 16px rgba(0, 0, 0, 0.08);",p:2},children:[n||(0,l.jsx)(_,{children:t}),(0,l.jsxs)(S,{direction:"row-reverse",gap:1,mt:2,children:[(0,l.jsx)(m,{variant:"contained",onClick:s,children:o??i("common:cancel")}),(0,l.jsx)(m,{variant:"contained",sx:{bgcolor:f=>f.palette.mode==="dark"?"#4f4f4f":"#f5f5f5",color:f=>f.palette.mode==="dark"?"#f5f5f5":"#626262",":hover":{bgcolor:"#666",color:"#fff"}},onClick:d,children:r??i("common:confirm")})]})]})})},ue=D;export{B as a,Y as b,W as c,H as d,$ as e,G as f,z as g,N as h,g as i,X as j,ee as k,ue as l};
