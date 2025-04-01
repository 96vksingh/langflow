"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[9455],{14028:(e,o,n)=>{n.r(o),n.d(o,{assets:()=>c,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>a});const l=JSON.parse('{"id":"Deployment/deployment-gcp","title":"Deploy Langflow on Google Cloud Platform","description":"This guide demonstrates deploying Langflow on Google Cloud Platform.","source":"@site/docs/Deployment/deployment-gcp.md","sourceDirName":"Deployment","slug":"/deployment-gcp","permalink":"/deployment-gcp","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Deploy Langflow on Google Cloud Platform","slug":"/deployment-gcp"},"sidebar":"docs","previous":{"title":"Kubernetes","permalink":"/deployment-kubernetes"},"next":{"title":"Hugging Face Spaces","permalink":"/deployment-hugging-face-spaces"}}');var t=n(74848),s=n(28453);const i={title:"Deploy Langflow on Google Cloud Platform",slug:"/deployment-gcp"},r=void 0,c={},a=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Deploy Langflow in GCP",id:"deploy-langflow-in-gcp",level:2},{value:"Pricing",id:"pricing",level:2}];function d(e){const o={a:"a",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(o.p,{children:"This guide demonstrates deploying Langflow on Google Cloud Platform."}),"\n",(0,t.jsx)(o.p,{children:"To deploy Langflow on Google Cloud Platform using Cloud Shell, use the below script."}),"\n",(0,t.jsx)(o.p,{children:"The script guides you through setting up a Debian-based VM with the Langflow package, Nginx, and the necessary configurations to run the Langflow dev environment in GCP."}),"\n",(0,t.jsx)(o.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,t.jsxs)(o.ul,{children:["\n",(0,t.jsxs)(o.li,{children:["A ",(0,t.jsx)(o.a,{href:"https://console.cloud.google.com/",children:"Google Cloud"})," project with the necessary permissions to create resources"]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"deploy-langflow-in-gcp",children:"Deploy Langflow in GCP"}),"\n",(0,t.jsxs)(o.ol,{children:["\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsx)(o.p,{children:"Click the following button to launch Cloud Shell:"}),"\n",(0,t.jsx)(o.p,{children:(0,t.jsx)(o.a,{href:"https://console.cloud.google.com/cloudshell/open?git_repo=https://github.com/langflow-ai/langflow&working_dir=scripts/gcp&shellonly=true&tutorial=walkthroughtutorial.md",children:(0,t.jsx)(o.img,{src:"https://gstatic.com/cloudssh/images/open-btn.svg",alt:"Deploy to Google Cloud"})})}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:["Click ",(0,t.jsx)(o.strong,{children:"Trust repo"}),". Some gcloud commands may not run in an ephemeral Cloud Shell environment."]}),"\n"]}),"\n",(0,t.jsxs)(o.li,{children:["\n",(0,t.jsxs)(o.p,{children:["Click ",(0,t.jsx)(o.strong,{children:"Start"})," and follow the tutorial to deploy Langflow."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(o.h2,{id:"pricing",children:"Pricing"}),"\n",(0,t.jsxs)(o.p,{children:["This deployment uses a ",(0,t.jsx)(o.a,{href:"https://cloud.google.com/compute/docs/instances/preemptible",children:"spot (preemptible) instance"}),", which is a cost-effective option for running Langflow. However, ",(0,t.jsx)(o.strong,{children:"due to the nature of spot instances, the VM may be terminated at any time if Google Cloud needs to reclaim the resources"}),"."]}),"\n",(0,t.jsxs)(o.p,{children:["For more information, see the ",(0,t.jsx)(o.a,{href:"https://cloud.google.com/products/calculator?hl=en",children:"GCP pricing calculator"}),"."]})]})}function p(e={}){const{wrapper:o}={...(0,s.R)(),...e.components};return o?(0,t.jsx)(o,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},28453:(e,o,n)=>{n.d(o,{R:()=>i,x:()=>r});var l=n(96540);const t={},s=l.createContext(t);function i(e){const o=l.useContext(s);return l.useMemo((function(){return"function"==typeof e?e(o):{...o,...e}}),[o,e])}function r(e){let o;return o=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:i(e.components),l.createElement(s.Provider,{value:o},e.children)}}}]);