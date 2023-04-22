"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[11944],{3905:(e,t,o)=>{o.d(t,{Zo:()=>c,kt:()=>m});var n=o(67294);function r(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function a(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function i(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?a(Object(o),!0).forEach((function(t){r(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):a(Object(o)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function s(e,t){if(null==e)return{};var o,n,r=function(e,t){if(null==e)return{};var o,n,r={},a=Object.keys(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||(r[o]=e[o]);return r}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)o=a[n],t.indexOf(o)>=0||Object.prototype.propertyIsEnumerable.call(e,o)&&(r[o]=e[o])}return r}var p=n.createContext({}),l=function(e){var t=n.useContext(p),o=t;return e&&(o="function"==typeof e?e(t):i(i({},t),e)),o},c=function(e){var t=l(e.components);return n.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var o=e.components,r=e.mdxType,a=e.originalType,p=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(o),m=r,f=u["".concat(p,".").concat(m)]||u[m]||d[m]||a;return o?n.createElement(f,i(i({ref:t},c),{},{components:o})):n.createElement(f,i({ref:t},c))}));function m(e,t){var o=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=o.length,i=new Array(a);i[0]=u;var s={};for(var p in t)hasOwnProperty.call(t,p)&&(s[p]=t[p]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var l=2;l<a;l++)i[l]=o[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,o)}u.displayName="MDXCreateElement"},75504:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>p,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=o(87462),r=(o(67294),o(3905));const a={},i="Model Deployment",s={unversionedId:"foundations/basics/deployment",id:"foundations/basics/deployment",title:"Model Deployment",description:"Prototype vs. Production",source:"@site/docs/01-foundations/basics/deployment.md",sourceDirName:"01-foundations/basics",slug:"/foundations/basics/deployment",permalink:"/docs/foundations/basics/deployment",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681212836,formattedLastUpdatedAt:"Apr 11, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Use Cases",permalink:"/docs/foundations/basics/use-cases"},next:{title:"Data Splits",permalink:"/docs/datascience/data-splits"}},p={},l=[{value:"Prototype vs. Production",id:"prototype-vs-production",level:3},{value:"Step 1: Model",id:"step-1-model",level:3},{value:"Step 2: App",id:"step-2-app",level:3},{value:"Step 3: Container",id:"step-3-container",level:3},{value:"Step 4: Hosting (on cloud)",id:"step-4-hosting-on-cloud",level:3},{value:"Step 5: Hosting (on edge)",id:"step-5-hosting-on-edge",level:3}],c={toc:l};function d(e){let{components:t,...o}=e;return(0,r.kt)("wrapper",(0,n.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"model-deployment"},"Model Deployment"),(0,r.kt)("h3",{id:"prototype-vs-production"},"Prototype vs. Production"),(0,r.kt)("p",null,"If you are working on any proof-of-concept or performing ",(0,r.kt)("a",{parentName:"p",href:"https://www.functionize.com/blog/user-acceptance-testing/"},"user acceptance testing (UAT)"),", you can use the prototype pipeline (1st column)."),(0,r.kt)("h3",{id:"step-1-model"},"Step 1: Model"),(0,r.kt)("p",null,"Scikit, Tensorflow, and Pytorch are good frameworks for model building. ",(0,r.kt)("a",{parentName:"p",href:"https://teachablemachine.withgoogle.com/"},"Teachable Machine")," is good for quick and easy prototyping (applicable for limited use cases like pose estimation)"),(0,r.kt)("h3",{id:"step-2-app"},"Step 2: App"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Prototype:")," I use ",(0,r.kt)("a",{parentName:"p",href:"https://www.gradio.app/"},"Gradio")," a lot for serving my model. Gradio wraps my model as an API in less than 5 mins with minimal coding. ",(0,r.kt)("a",{parentName:"p",href:"https://www.streamlit.io/"},"Streamlit")," is my favorite. It takes 20-30 mins for wrapping and gives lots of functionality and flexibility. ",(0,r.kt)("a",{parentName:"p",href:"https://h2oai.github.io/wave/"},"H2O Wave")," is making some waves in recent months."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Production:")," FastAPI is actually fast for serving models as an API. FlaskAPI comes next. For the dashboard, my favorite is Plotly Dash. It is very powerful and flexible. Tableau is the industry favorite. PowerBI and Google Data Studio are very user friendly and powerful."),(0,r.kt)("h3",{id:"step-3-container"},"Step 3: Container"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Prototype:")," For some use cases (privacy reasons), I use the local machine. Otherwise, I prefer to use Colab as my container."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Production:")," Docker is my favorite container for shipping out ML models."),(0,r.kt)("h3",{id:"step-4-hosting-on-cloud"},"Step 4: Hosting (on cloud)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Prototype:")," Again colab for privacy-free use cases. It can host for half a day. Heroku is my favorite if multi-day hosting is required for prototype testing."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Production:")," EBS is nice. I use it hosting my APIs. Kubernetes is good for the orchestration of these APIs."),(0,r.kt)("h3",{id:"step-5-hosting-on-edge"},"Step 5: Hosting (on edge)"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Prototype:")," ml5.js allows me to directly serve ML models on the browser."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Production:")," TF.js and TFLite are my favorites for serving on the browser and on mobile respectively."))}d.isMDXComponent=!0}}]);