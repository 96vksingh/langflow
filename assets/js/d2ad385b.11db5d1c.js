"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[4930],{5656:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>a,contentTitle:()=>r,default:()=>h,frontMatter:()=>s,metadata:()=>t,toc:()=>c});const t=JSON.parse('{"id":"Integrations/Google/integrations-setup-google-oauth-langflow","title":"Integrate Google OAuth with Langflow","description":"A comprehensive guide on creating a Google OAuth app, obtaining tokens, and integrating them with Langflow\'s Google components.","source":"@site/docs/Integrations/Google/integrations-setup-google-oauth-langflow.md","sourceDirName":"Integrations/Google","slug":"/integrations-setup-google-oauth-langflow","permalink":"/integrations-setup-google-oauth-langflow","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Integrate Google OAuth with Langflow","slug":"/integrations-setup-google-oauth-langflow","description":"A comprehensive guide on creating a Google OAuth app, obtaining tokens, and integrating them with Langflow\'s Google components."},"sidebar":"docs","previous":{"title":"Integrate Composio with Langflow","permalink":"/integrations-composio"},"next":{"title":"Integrate Google Cloud Vertex AI with Langflow","permalink":"/integrations-setup-google-cloud-vertex-ai-langflow"}}');var i=o(74848),l=o(28453);o(96540),o(71021);const s={title:"Integrate Google OAuth with Langflow",slug:"/integrations-setup-google-oauth-langflow",description:"A comprehensive guide on creating a Google OAuth app, obtaining tokens, and integrating them with Langflow's Google components."},r=void 0,a={},c=[{value:"Create an OAuth Application in Google Cloud",id:"5b8981b15d86192d17b0e5725c1f95e7",level:2},{value:"Retrieve Access and Refresh Tokens",id:"retrieve-access-and-refresh-tokens",level:2},{value:"Create a flow with Google Drive loader",id:"create-a-flow-with-google-drive-loader",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",...(0,l.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["Langflow integrates with ",(0,i.jsx)(n.a,{href:"https://developers.google.com/identity/protocols/oauth2",children:"Google OAuth"})," for authenticating the ",(0,i.jsx)(n.a,{href:"/components-data#gmail-loader",children:"Gmail loader"}),", ",(0,i.jsx)(n.a,{href:"components-data#google-drive-loader",children:"Google Drive loader"}),", and ",(0,i.jsx)(n.a,{href:"/components-data#google-drive-search",children:"Google Drive Search"})," components."]}),"\n",(0,i.jsx)(n.p,{children:"Learn how to create an OAuth app in Google Cloud, obtain the necessary credentials and access tokens, and add them to Langflow\u2019s Google components."}),"\n",(0,i.jsx)(n.h2,{id:"5b8981b15d86192d17b0e5725c1f95e7",children:"Create an OAuth Application in Google Cloud"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Navigate to the ",(0,i.jsx)(n.a,{href:"https://console.cloud.google.com/",children:"Google Cloud Console"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Click ",(0,i.jsx)(n.strong,{children:"Select a project"}),", and then click ",(0,i.jsx)(n.strong,{children:"New Project"})," to create a new project."]}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"OAuth Client ID and Secret",src:o(8544).A+"",width:"800",height:"450"})}),"\n",(0,i.jsxs)(n.ol,{start:"3",children:["\n",(0,i.jsxs)(n.li,{children:["To enable APIs for the project, select ",(0,i.jsx)(n.strong,{children:"APIs & Services"}),", and then click ",(0,i.jsx)(n.strong,{children:"Library"}),". Enable the APIs you need for your project. For example, if your flow uses the Google Drive component, enable the Google Drive API."]}),"\n",(0,i.jsxs)(n.li,{children:["To navigate to the OAuth consent screen, click ",(0,i.jsx)(n.strong,{children:"APIs & Services"}),", and then click ",(0,i.jsx)(n.strong,{children:"OAuth consent screen"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Populate your OAuth consent screen with the application name, audience, and user support email.\nFor audience, select ",(0,i.jsx)(n.strong,{children:"External"}),".\nThis creates a testing application environment that you can add users to."]}),"\n",(0,i.jsxs)(n.li,{children:["To add users to your OAuth audience, click ",(0,i.jsx)(n.strong,{children:"Audience"}),".\nUnder ",(0,i.jsx)(n.strong,{children:"Test users"}),", click ",(0,i.jsx)(n.strong,{children:"Add users"}),".\nEnter any email addresses you intend to use to authenticate Langflow with OAuth.\nThese email addresses have access to the application while it's in a ",(0,i.jsx)(n.strong,{children:"Testing"})," publishing state.\nFor more information, see the ",(0,i.jsx)(n.a,{href:"https://support.google.com/cloud/answer/13461325?hl=en",children:"Google documentation"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["To create an ",(0,i.jsx)(n.strong,{children:"OAuth Client ID"}),", navigate to ",(0,i.jsx)(n.strong,{children:"Clients"}),", and then click ",(0,i.jsx)(n.strong,{children:"Create Client"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["Choose ",(0,i.jsx)(n.strong,{children:"Desktop app"})," as the application type, and then name your client ID."]}),"\n",(0,i.jsxs)(n.li,{children:["Click ",(0,i.jsx)(n.strong,{children:"Create"}),".\nA Client ID and Client Secret are created.\nDownload the credentials as a JSON file to your local machine and save it securely."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"OAuth Client ID and Secret",src:o(25474).A+"",width:"3450",height:"1756"})}),"\n",(0,i.jsx)(n.h2,{id:"retrieve-access-and-refresh-tokens",children:"Retrieve Access and Refresh Tokens"}),"\n",(0,i.jsx)(n.p,{children:"With your OAuth application configured and your credentials JSON file created, follow these steps to authenticate the Langflow application."}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Create a new project in Langflow."}),"\n",(0,i.jsxs)(n.li,{children:["Add a ",(0,i.jsx)(n.strong,{children:"Google OAuth Token"})," component to your flow."]}),"\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.strong,{children:"Credentials File"})," field of the Google OAuth Token component, enter the path to your ",(0,i.jsx)(n.strong,{children:"Credentials File"}),", the JSON file containing the Client ID credentials you downloaded from Google in the previous steps."]}),"\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.strong,{children:"Scopes"})," field of the Google Oauth Token component, enter the scope required to access your resources.\nFor example, to allow your Langflow application to access a user's Google Drive, the scope is ",(0,i.jsx)(n.code,{children:"https://www.googleapis.com/auth/drive"}),".\nFor more information, see the ",(0,i.jsx)(n.a,{href:"https://developers.google.com/identity/protocols/oauth2/scopes",children:"Google documentation"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["To authenticate your application, in the ",(0,i.jsx)(n.strong,{children:"Google OAuth Token"})," component, click ",(0,i.jsx)(n.strong,{children:"Play"}),".\nA new tab opens in the browser to authenticate your application using your Google Cloud account. You must authenticate the application with the same Google account that created the OAuth credentials."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["If a new tab does not open automatically, check the Langflow ",(0,i.jsx)(n.strong,{children:"Logs"})," for the Google authentication URL. Open this URL in your browser to complete the authentication."]})}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsx)(n.li,{children:"After successful authentication, your Langflow application can request and refresh tokens.\nThese tokens enable Langflow to interact with Google services on your behalf and execute your specified requests."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"create-a-flow-with-google-drive-loader",children:"Create a flow with Google Drive loader"}),"\n",(0,i.jsxs)(n.p,{children:["For a pre-built JSON file of a flow that uses the Google Drive loader component, download the ",(0,i.jsx)("a",{href:"./files/Google_Drive_Docs_Translations_Example.json",download:!0,children:"Google Drive Document Translation Example Flow JSON"})," to your local machine."]}),"\n",(0,i.jsxs)(n.p,{children:["In this example, the ",(0,i.jsx)(n.strong,{children:"Google Drive loader"})," component loads a text file hosted on Google Drive, translates the text to Spanish, and returns it to a chat output."]}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Download the ",(0,i.jsx)("a",{href:"./files/Google_Drive_Docs_Translations_Example.json",download:!0,children:"Google Drive Document Translation Example Flow JSON"})," to your local machine."]}),"\n",(0,i.jsxs)(n.li,{children:["To import the downloaded JSON to Langflow, click ",(0,i.jsx)(n.strong,{children:"Options"}),", and then select ",(0,i.jsx)(n.strong,{children:"Import"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.strong,{children:"Credentials File"})," field of the Google OAuth Token component, enter the path to your ",(0,i.jsx)(n.strong,{children:"Credentials File"}),", the JSON file containing the Client ID credentials you downloaded from Google in the previous steps."]}),"\n",(0,i.jsxs)(n.li,{children:["In the ",(0,i.jsx)(n.strong,{children:"Scopes"})," field of the Google Oauth Token component, enter the scope required to access your resources.\nFor example, to allow your Langflow application to access a user's Google Drive, the scope is ",(0,i.jsx)(n.code,{children:"https://www.googleapis.com/auth/drive"}),".\nFor more information, see the ",(0,i.jsx)(n.a,{href:"https://developers.google.com/identity/protocols/oauth2/scopes",children:"Google documentation"}),".\nThe example flow includes a ",(0,i.jsx)(n.strong,{children:"Parse data"})," component to convert the ",(0,i.jsx)(n.code,{children:"data"})," output of the Google OAuth Token component to the ",(0,i.jsx)(n.code,{children:"text"})," input of the JSON Cleaner component."]}),"\n",(0,i.jsxs)(n.li,{children:["To allow the Langflow component to access the document in Google Drive, copy the Google Drive ",(0,i.jsx)(n.code,{children:"documentID"})," from the document's URL."]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"documentID"})," is located between ",(0,i.jsx)(n.code,{children:"/d/"})," and ",(0,i.jsx)(n.code,{children:"/edit"})," in a Google Drive document's URL.\nFor example, in the URL ",(0,i.jsx)(n.code,{children:"https://drive.google.com/file/d/1a2b3c4D5E6F7gHI8J9klmnopQ/edit"}),", the ",(0,i.jsx)(n.code,{children:"documentID"})," is ",(0,i.jsx)(n.code,{children:"1a2b3c4D5E6F7gHI8J9klmnopQ"}),"."]})}),"\n",(0,i.jsxs)(n.ol,{start:"6",children:["\n",(0,i.jsxs)(n.li,{children:["In the Google Drive loader component, in the ",(0,i.jsx)(n.strong,{children:"Document ID"})," field, paste the document URL."]}),"\n",(0,i.jsxs)(n.li,{children:["To view the translated document, open the ",(0,i.jsx)(n.strong,{children:"Playground"}),"."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,l.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8544:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/create-a-google-cloud-project-cb1730f824bb28b1caa950c492726f87.gif"},25474:(e,n,o)=>{o.d(n,{A:()=>t});const t=o.p+"assets/images/create-oauth-client-id-57b94aad2bf2859ae9011f6f2a0d52d3.gif"},28453:(e,n,o)=>{o.d(n,{R:()=>s,x:()=>r});var t=o(96540);const i={},l=t.createContext(i);function s(e){const n=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),t.createElement(l.Provider,{value:n},e.children)}},71021:(e,n,o)=>{o.d(n,{A:()=>m});var t=o(96540),i=o(53115);function l(e){const n=e.map((e=>({...e,parentIndex:-1,children:[]}))),o=Array(7).fill(-1);n.forEach(((e,n)=>{const t=o.slice(2,e.level);e.parentIndex=Math.max(...t),o[e.level]=n}));const t=[];return n.forEach((e=>{const{parentIndex:o,...i}=e;o>=0?n[o].children.push(i):t.push(i)})),t}function s(e){let{toc:n,minHeadingLevel:o,maxHeadingLevel:t}=e;return n.flatMap((e=>{const n=s({toc:e.children,minHeadingLevel:o,maxHeadingLevel:t});return function(e){return e.level>=o&&e.level<=t}(e)?[{...e,children:n}]:n}))}function r(e){const n=e.getBoundingClientRect();return n.top===n.bottom?r(e.parentNode):n}function a(e,n){let{anchorTopOffset:o}=n;const t=e.find((e=>r(e).top>=o));if(t){return function(e){return e.top>0&&e.bottom<window.innerHeight/2}(r(t))?t:e[e.indexOf(t)-1]??null}return e[e.length-1]??null}function c(){const e=(0,t.useRef)(0),{navbar:{hideOnScroll:n}}=(0,i.p)();return(0,t.useEffect)((()=>{e.current=n?0:document.querySelector(".navbar").clientHeight}),[n]),e}function d(e){const n=(0,t.useRef)(void 0),o=c();(0,t.useEffect)((()=>{if(!e)return()=>{};const{linkClassName:t,linkActiveClassName:i,minHeadingLevel:l,maxHeadingLevel:s}=e;function r(){const e=function(e){return Array.from(document.getElementsByClassName(e))}(t),r=function(e){let{minHeadingLevel:n,maxHeadingLevel:o}=e;const t=[];for(let i=n;i<=o;i+=1)t.push(`h${i}.anchor`);return Array.from(document.querySelectorAll(t.join()))}({minHeadingLevel:l,maxHeadingLevel:s}),c=a(r,{anchorTopOffset:o.current}),d=e.find((e=>c&&c.id===function(e){return decodeURIComponent(e.href.substring(e.href.indexOf("#")+1))}(e)));e.forEach((e=>{!function(e,o){o?(n.current&&n.current!==e&&n.current.classList.remove(i),e.classList.add(i),n.current=e):e.classList.remove(i)}(e,e===d)}))}return document.addEventListener("scroll",r),document.addEventListener("resize",r),r(),()=>{document.removeEventListener("scroll",r),document.removeEventListener("resize",r)}}),[e,o])}var h=o(56289),u=o(74848);function g(e){let{toc:n,className:o,linkClassName:t,isChild:i}=e;return n.length?(0,u.jsx)("ul",{className:i?void 0:o,children:n.map((e=>(0,u.jsxs)("li",{children:[(0,u.jsx)(h.A,{to:`#${e.id}`,className:t??void 0,dangerouslySetInnerHTML:{__html:e.value}}),(0,u.jsx)(g,{isChild:!0,toc:e.children,className:o,linkClassName:t})]},e.id)))}):null}const p=t.memo(g);function m(e){let{toc:n,className:o="table-of-contents table-of-contents__left-border",linkClassName:r="table-of-contents__link",linkActiveClassName:a,minHeadingLevel:c,maxHeadingLevel:h,...g}=e;const m=(0,i.p)(),f=c??m.tableOfContents.minHeadingLevel,x=h??m.tableOfContents.maxHeadingLevel,j=function(e){let{toc:n,minHeadingLevel:o,maxHeadingLevel:i}=e;return(0,t.useMemo)((()=>s({toc:l(n),minHeadingLevel:o,maxHeadingLevel:i})),[n,o,i])}({toc:n,minHeadingLevel:f,maxHeadingLevel:x});return d((0,t.useMemo)((()=>{if(r&&a)return{linkClassName:r,linkActiveClassName:a,minHeadingLevel:f,maxHeadingLevel:x}}),[r,a,f,x])),(0,u.jsx)(p,{toc:j,className:o,linkClassName:r,...g})}}}]);