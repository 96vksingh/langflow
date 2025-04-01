"use strict";(self.webpackChunklangflow_docs=self.webpackChunklangflow_docs||[]).push([[730],{26382:(e,o,n)=>{n.r(o),n.d(o,{CH:()=>d,assets:()=>a,chCodeConfig:()=>p,contentTitle:()=>i,default:()=>u,frontMatter:()=>l,metadata:()=>t,toc:()=>h});const t=JSON.parse('{"id":"Develop/develop-application","title":"Develop an application in Langflow","description":"Follow this guide to learn how to build an application using Langflow.","source":"@site/docs/Develop/develop-application.md","sourceDirName":"Develop","slug":"/develop-application","permalink":"/develop-application","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"Develop an application in Langflow","slug":"/develop-application"},"sidebar":"docs","previous":{"title":"About developing and configuring Langflow applications","permalink":"/develop-overview"},"next":{"title":"Install custom dependencies","permalink":"/install-custom-dependencies"}}');var s=n(74848),r=n(28453),c=n(24754);const l={title:"Develop an application in Langflow",slug:"/develop-application"},i=void 0,a={},d={annotations:c.hk,Code:c.Cy},p={staticMediaQuery:"not screen, (max-width: 768px)",lineNumbers:!0,showCopyButton:!0,themeName:"github-dark"},h=[{value:"Create a project directory",id:"create-a-project-directory",level:2},{value:"Package management",id:"package-management",level:3},{value:"Environment variables",id:"environment-variables",level:2},{value:"Add flows and components",id:"add-flows-and-components",level:2},{value:"Package your Langflow project in a Docker image",id:"package-your-langflow-project-in-a-docker-image",level:2},{value:"Deploy to Docker Hub and Kubernetes",id:"deploy-to-docker-hub-and-kubernetes",level:2}];function f(e){const o={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",...(0,r.R)(),...e.components};return d||g("CH",!1),d.Code||g("CH.Code",!0),(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("style",{dangerouslySetInnerHTML:{__html:'[data-ch-theme="github-dark"] {  --ch-t-colorScheme: dark;--ch-t-foreground: #c9d1d9;--ch-t-background: #0d1117;--ch-t-lighter-inlineBackground: #0d1117e6;--ch-t-editor-background: #0d1117;--ch-t-editor-foreground: #c9d1d9;--ch-t-editor-lineHighlightBackground: #6e76811a;--ch-t-editor-rangeHighlightBackground: #ffffff0b;--ch-t-editor-infoForeground: #3794FF;--ch-t-editor-selectionBackground: #264F78;--ch-t-focusBorder: #1f6feb;--ch-t-tab-activeBackground: #0d1117;--ch-t-tab-activeForeground: #c9d1d9;--ch-t-tab-inactiveBackground: #010409;--ch-t-tab-inactiveForeground: #8b949e;--ch-t-tab-border: #30363d;--ch-t-tab-activeBorder: #0d1117;--ch-t-editorGroup-border: #30363d;--ch-t-editorGroupHeader-tabsBackground: #010409;--ch-t-editorLineNumber-foreground: #6e7681;--ch-t-input-background: #0d1117;--ch-t-input-foreground: #c9d1d9;--ch-t-input-border: #30363d;--ch-t-icon-foreground: #8b949e;--ch-t-sideBar-background: #010409;--ch-t-sideBar-foreground: #c9d1d9;--ch-t-sideBar-border: #30363d;--ch-t-list-activeSelectionBackground: #6e768166;--ch-t-list-activeSelectionForeground: #c9d1d9;--ch-t-list-hoverBackground: #6e76811a;--ch-t-list-hoverForeground: #c9d1d9; }'}}),"\n",(0,s.jsx)(o.p,{children:"Follow this guide to learn how to build an application using Langflow.\nYou'll learn how to set up a project directory, manage dependencies, configure environment variables, and package your Langflow application in a Docker image."}),"\n",(0,s.jsxs)(o.p,{children:["To deploy your application to Docker or Kubernetes, see ",(0,s.jsx)(o.a,{href:"/deployment-docker",children:"Deployment"}),"."]}),"\n",(0,s.jsx)(o.h2,{id:"create-a-project-directory",children:"Create a project directory"}),"\n",(0,s.jsx)(o.p,{children:"Create a project directory similar to this one."}),"\n",(0,s.jsx)(d.Code,{codeConfig:p,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"LANGFLOW-APPLICATION/",props:{}}]},{tokens:[{content:"\u251c\u2500\u2500 flows/",props:{}}]},{tokens:[{content:"\u2502   \u251c\u2500\u2500 flow1.json",props:{}}]},{tokens:[{content:"\u2502   \u2514\u2500\u2500 flow2.json",props:{}}]},{tokens:[{content:"\u251c\u2500\u2500 langflow-config-dir/",props:{}}]},{tokens:[{content:"\u251c\u2500\u2500 docker.env",props:{}}]},{tokens:[{content:"\u251c\u2500\u2500 Dockerfile",props:{}}]},{tokens:[{content:"\u251c\u2500\u2500 README.md",props:{}}]}],lang:"text"},annotations:[]}]}),"\n",(0,s.jsxs)(o.p,{children:["The ",(0,s.jsx)(o.code,{children:"/flows"})," folder holds the flows you want to host."]}),"\n",(0,s.jsxs)(o.p,{children:["The ",(0,s.jsx)(o.code,{children:"langflow-config-dir"})," is referenced in the Dockerfile as the location for Langflow's configuration files, database, and logs. For more information, see ",(0,s.jsx)(o.a,{href:"/environment-variables",children:"Environment variables"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["The ",(0,s.jsx)(o.code,{children:"docker.env"})," file is copied to the Docker image as a ",(0,s.jsx)(o.code,{children:".env"})," file in the container root. This file controls Langflow's behavior, holds secrets, and configures runtime settings like authentication, database storage, API keys, and server configurations."]}),"\n",(0,s.jsxs)(o.p,{children:["The ",(0,s.jsx)(o.code,{children:"Dockerfile"})," controls how your image is built. This file copies your flows and ",(0,s.jsx)(o.code,{children:"docker.env"})," files to your image."]}),"\n",(0,s.jsx)(o.h3,{id:"package-management",children:"Package management"}),"\n",(0,s.jsxs)(o.p,{children:["The base Docker image includes the Langflow core dependencies by using ",(0,s.jsx)(o.code,{children:"langflowai/langflow:latest"})," as the parent image."]}),"\n",(0,s.jsxs)(o.p,{children:["If your application requires additional dependencies, create a ",(0,s.jsx)(o.code,{children:"pyproject.toml"})," file and add the dependencies to the file. For more information, see ",(0,s.jsx)(o.a,{href:"/install-custom-dependencies",children:"Install custom dependencies"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["To deploy the application with the additional dependencies to Docker, copy the ",(0,s.jsx)(o.code,{children:"pyproject.toml"})," and ",(0,s.jsx)(o.code,{children:"uv.lock"})," files to the Docker image by adding the following to the Dockerfile."]}),"\n",(0,s.jsx)(d.Code,{codeConfig:p,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"COPY pyproject.toml uv.lock /app/",props:{}}]}],lang:"text"},annotations:[]}]}),"\n",(0,s.jsx)(o.h2,{id:"environment-variables",children:"Environment variables"}),"\n",(0,s.jsxs)(o.p,{children:["The ",(0,s.jsx)(o.code,{children:"docker.env"})," file is a ",(0,s.jsx)(o.code,{children:".env"})," file loaded into your Docker image."]}),"\n",(0,s.jsxs)(o.p,{children:["The following example ",(0,s.jsx)(o.code,{children:"docker.env"})," file defines auto-login behavior and which port to expose. Your environment may vary. For more information, see ",(0,s.jsx)(o.a,{href:"/environment-variables",children:"Environment variables"}),"."]}),"\n",(0,s.jsx)(d.Code,{codeConfig:p,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"LANGFLOW_AUTO_LOGIN=true",props:{}}]},{tokens:[{content:"LANGFLOW_SAVE_DB_IN_CONFIG_DIR=true",props:{}}]},{tokens:[{content:"LANGFLOW_BASE_URL=http://0.0.0.0:7860",props:{}}]},{tokens:[{content:"OPENAI_API_KEY=sk-...",props:{}}]}],lang:"text"},annotations:[]}]}),"\n",(0,s.jsxs)(o.p,{children:["This example uses Langflow's default ",(0,s.jsx)(o.a,{href:"https://www.sqlite.org/",children:"SQLite"})," database for storage, and configures no authentication."]}),"\n",(0,s.jsxs)(o.p,{children:["To modify Langflow's default memory behavior, see ",(0,s.jsx)(o.a,{href:"/memory",children:"Memory"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["To add authentication to your server, see ",(0,s.jsx)(o.a,{href:"/configuration-authentication",children:"Authentication"}),"."]}),"\n",(0,s.jsx)(o.h2,{id:"add-flows-and-components",children:"Add flows and components"}),"\n",(0,s.jsxs)(o.p,{children:["Add your flow's ",(0,s.jsx)(o.code,{children:".JSON"})," files to the ",(0,s.jsx)(o.code,{children:"/flows"})," folder."]}),"\n",(0,s.jsxs)(o.p,{children:["To export your flows from Langflow, see ",(0,s.jsx)(o.a,{href:"/concepts-flows",children:"Flows"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["Optionally, add any custom components to a ",(0,s.jsx)(o.code,{children:"/components"})," folder, and specify the path in your ",(0,s.jsx)(o.code,{children:"docker.env"}),"."]}),"\n",(0,s.jsx)(o.h2,{id:"package-your-langflow-project-in-a-docker-image",children:"Package your Langflow project in a Docker image"}),"\n",(0,s.jsxs)(o.ol,{children:["\n",(0,s.jsx)(o.li,{children:"Add the following commands to your Dockerfile."}),"\n"]}),"\n",(0,s.jsx)(d.Code,{codeConfig:p,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"# Use the latest version of langflow",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"FROM",props:{style:{color:"#FF7B72"}}},{content:" langflowai/langflow:latest",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"# Create accessible folders and set the working directory in the container",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"RUN",props:{style:{color:"#FF7B72"}}},{content:" mkdir /app/flows",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"RUN",props:{style:{color:"#FF7B72"}}},{content:" mkdir /app/langflow-config-dir",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"WORKDIR",props:{style:{color:"#FF7B72"}}},{content:" /app",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"# Copy the flows, optional components, and langflow-config-dir folders to the container",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"COPY",props:{style:{color:"#FF7B72"}}},{content:" flows /app/flows",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"COPY",props:{style:{color:"#FF7B72"}}},{content:" components /app/components",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"COPY",props:{style:{color:"#FF7B72"}}},{content:" langflow-config-dir /app/langflow-config-dir",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"# copy docker.env file",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"COPY",props:{style:{color:"#FF7B72"}}},{content:" docker.env /app/.env",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"# Set environment variables",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"ENV",props:{style:{color:"#FF7B72"}}},{content:" PYTHONPATH=/app",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"ENV",props:{style:{color:"#FF7B72"}}},{content:" LANGFLOW_LOAD_FLOWS_PATH=/app/flows",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"ENV",props:{style:{color:"#FF7B72"}}},{content:" LANGFLOW_CONFIG_DIR=/app/langflow-config-dir",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"ENV",props:{style:{color:"#FF7B72"}}},{content:" LANGFLOW_COMPONENTS_PATH=/app/components",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"ENV",props:{style:{color:"#FF7B72"}}},{content:" LANGFLOW_LOG_ENV=container",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"# Command to run the server",props:{style:{color:"#8B949E"}}}]},{tokens:[{content:"EXPOSE",props:{style:{color:"#FF7B72"}}},{content:" 7860",props:{style:{color:"#C9D1D9"}}}]},{tokens:[{content:"CMD",props:{style:{color:"#FF7B72"}}},{content:" [",props:{style:{color:"#C9D1D9"}}},{content:'"langflow"',props:{style:{color:"#A5D6FF"}}},{content:", ",props:{style:{color:"#C9D1D9"}}},{content:'"run"',props:{style:{color:"#A5D6FF"}}},{content:", ",props:{style:{color:"#C9D1D9"}}},{content:'"--backend-only"',props:{style:{color:"#A5D6FF"}}},{content:", ",props:{style:{color:"#C9D1D9"}}},{content:'"--env-file"',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}},{content:'"/app/.env"',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}},{content:'"--host"',props:{style:{color:"#A5D6FF"}}},{content:", ",props:{style:{color:"#C9D1D9"}}},{content:'"0.0.0.0"',props:{style:{color:"#A5D6FF"}}},{content:", ",props:{style:{color:"#C9D1D9"}}},{content:'"--port"',props:{style:{color:"#A5D6FF"}}},{content:", ",props:{style:{color:"#C9D1D9"}}},{content:'"7860"',props:{style:{color:"#A5D6FF"}}},{content:"]",props:{style:{color:"#C9D1D9"}}}]}],lang:"dockerfile"},annotations:[]}]}),"\n",(0,s.jsxs)(o.p,{children:["The environment variables set in the Dockerfile specify resource paths and allow Langflow to access them. Values from ",(0,s.jsx)(o.code,{children:"docker.env"})," override the values set in the Dockerfile. Additionally, logging behavior is set here with ",(0,s.jsx)(o.code,{children:"ENV LANGFLOW_LOG_ENV=container"})," for serialized JSON to ",(0,s.jsx)(o.code,{children:"stdout"}),", for tracking your application's behavior in a containerized environment. For more information on configuring logs, see ",(0,s.jsx)(o.a,{href:"/logging",children:"Logging"}),"."]}),"\n",(0,s.jsx)(o.admonition,{type:"note",children:(0,s.jsxs)(o.p,{children:["Optionally, remove the ",(0,s.jsx)(o.code,{children:"--backend-only"})," flag from the startup command to start Langflow with the frontend enabled.\nFor more on ",(0,s.jsx)(o.code,{children:"--backend-only"})," mode and the Langflow Docker image, see ",(0,s.jsx)(o.a,{href:"/deployment-docker",children:"Docker"}),"."]})}),"\n",(0,s.jsxs)(o.ol,{start:"2",children:["\n",(0,s.jsx)(o.li,{children:"Save your Dockerfile."}),"\n",(0,s.jsx)(o.li,{children:"Build the Docker image:"}),"\n"]}),"\n",(0,s.jsx)(d.Code,{codeConfig:p,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"docker ",props:{style:{color:"#FFA657"}}},{content:"build ",props:{style:{color:"#A5D6FF"}}},{content:"-t ",props:{style:{color:"#79C0FF"}}},{content:"langflow-pokedex:",props:{style:{color:"#A5D6FF"}}},{content:"1.2.0 ",props:{style:{color:"#79C0FF"}}},{content:".",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,s.jsxs)(o.ol,{start:"4",children:["\n",(0,s.jsx)(o.li,{children:"Run the Docker container:"}),"\n"]}),"\n",(0,s.jsx)(d.Code,{codeConfig:p,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"docker ",props:{style:{color:"#FFA657"}}},{content:"run ",props:{style:{color:"#A5D6FF"}}},{content:"-p ",props:{style:{color:"#79C0FF"}}},{content:"7860:",props:{style:{color:"#A5D6FF"}}},{content:"7860 ",props:{style:{color:"#79C0FF"}}},{content:"langflow-pokedex:",props:{style:{color:"#A5D6FF"}}},{content:"1.2.0",props:{style:{color:"#79C0FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,s.jsx)(o.admonition,{type:"note",children:(0,s.jsxs)(o.p,{children:["For instructions on building and pushing your image to Docker Hub, see ",(0,s.jsx)(o.a,{href:"/deployment-docker",children:"Docker"}),"."]})}),"\n",(0,s.jsxs)(o.ol,{start:"5",children:["\n",(0,s.jsxs)(o.li,{children:["Confirm the server is serving your flows.\nOpen a ",(0,s.jsx)(o.code,{children:".JSON"})," file in your ",(0,s.jsx)(o.code,{children:"/flows"})," folder and find the file's ",(0,s.jsx)(o.code,{children:"id"})," value. It's the first value in the flow document."]}),"\n"]}),"\n",(0,s.jsx)(d.Code,{codeConfig:p,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:'"id"',props:{style:{color:"#A5D6FF"}}},{content:": ",props:{style:{color:"#C9D1D9"}}},{content:'"e4167236-938f-4aca-845b-21de3f399858"',props:{style:{color:"#A5D6FF"}}},{content:",",props:{style:{color:"#C9D1D9"}}}]}],lang:"json"},annotations:[]}]}),"\n",(0,s.jsxs)(o.ol,{start:"6",children:["\n",(0,s.jsxs)(o.li,{children:["Add the file's ",(0,s.jsx)(o.code,{children:"id"})," value as the ",(0,s.jsx)(o.code,{children:"flow-id"})," to a POST request to the ",(0,s.jsx)(o.code,{children:"/run"})," endpoint."]}),"\n"]}),"\n",(0,s.jsxs)(o.p,{children:["This command also uses a custom ",(0,s.jsx)(o.code,{children:"session_id"})," value of ",(0,s.jsx)(o.code,{children:"charizard_test_request"}),".\nBy default, session IDs use the ",(0,s.jsx)(o.code,{children:"flow-id"})," value.\nA custom session ID maintains a unique conversation thread, which keeps LLM contexts clean and can make debugging easier.\nFor more information, see ",(0,s.jsx)(o.a,{href:"/session-id",children:"Session ID"}),"."]}),"\n",(0,s.jsx)(d.Code,{codeConfig:p,northPanel:{tabs:[""],active:"",heightRatio:1},files:[{name:"",focus:"",code:{lines:[{tokens:[{content:"curl ",props:{style:{color:"#FFA657"}}},{content:"--request ",props:{style:{color:"#79C0FF"}}},{content:"POST ",props:{style:{color:"#A5D6FF"}}},{content:"\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"  --url ",props:{style:{color:"#79C0FF"}}},{content:"'http://127.0.0.1:7860/api/v1/run/e4167236-938f-4aca-845b-21de3f399858?stream=false' ",props:{style:{color:"#A5D6FF"}}},{content:"\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"  --header ",props:{style:{color:"#79C0FF"}}},{content:"'Content-Type: application/json' ",props:{style:{color:"#A5D6FF"}}},{content:"\\",props:{style:{color:"#79C0FF"}}}]},{tokens:[{content:"  --data ",props:{style:{color:"#79C0FF"}}},{content:"'{",props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:'    "input_value": "Tell me about Charizard please",',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:'    "output_type": "chat",',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:'    "input_type": "chat",',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:'    "session_id": "charizard_test_request"',props:{style:{color:"#A5D6FF"}}}]},{tokens:[{content:"}'",props:{style:{color:"#A5D6FF"}}}]}],lang:"bash"},annotations:[]}]}),"\n",(0,s.jsx)(o.p,{children:"If the flow streams the result back to you, your flow is being served, and can be consumed from a front-end application by submitting POST requests to this endpoint."}),"\n",(0,s.jsx)(o.admonition,{type:"note",children:(0,s.jsxs)(o.p,{children:["The test application returns a large amount of text, so the example command used ",(0,s.jsx)(o.code,{children:"?stream=true"}),". If you prefer, set ",(0,s.jsx)(o.code,{children:"?stream=false"})," to use batching. For more information, see the ",(0,s.jsx)(o.a,{href:"/api-reference-api-examples#run-flow",children:"API examples"}),"."]})}),"\n",(0,s.jsx)(o.h2,{id:"deploy-to-docker-hub-and-kubernetes",children:"Deploy to Docker Hub and Kubernetes"}),"\n",(0,s.jsxs)(o.p,{children:["For instructions on building and pushing your image to Docker Hub, see ",(0,s.jsx)(o.a,{href:"/deployment-docker",children:"Docker"}),"."]}),"\n",(0,s.jsxs)(o.p,{children:["To deploy your application to Kubernetes, see ",(0,s.jsx)(o.a,{href:"/deployment-kubernetes",children:"Kubernetes"}),"."]})]})}function u(e={}){const{wrapper:o}={...(0,r.R)(),...e.components};return o?(0,s.jsx)(o,{...e,children:(0,s.jsx)(f,{...e})}):f(e)}function g(e,o){throw new Error("Expected "+(o?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}}}]);