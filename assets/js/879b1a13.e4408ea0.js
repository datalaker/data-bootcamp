"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[61457],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),s=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return a.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),b=n,k=d["".concat(o,".").concat(b)]||d[b]||u[b]||i;return r?a.createElement(k,l(l({ref:t},p),{},{components:r})):a.createElement(k,l({ref:t},p))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=d;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,l[1]=c;for(var s=2;s<i;s++)l[s]=r[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},92724:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var a=r(87462),n=(r(67294),r(3905));const i={},l="Lab: Databricks Clickstream Analysis",c={unversionedId:"processing/databricks/lab-databricks-clickstream/README",id:"processing/databricks/lab-databricks-clickstream/README",title:"Lab: Databricks Clickstream Analysis",description:"Objective",source:"@site/docs/03-processing/databricks/lab-databricks-clickstream/README.md",sourceDirName:"03-processing/databricks/lab-databricks-clickstream",slug:"/processing/databricks/lab-databricks-clickstream/",permalink:"/docs/processing/databricks/lab-databricks-clickstream/",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681583434,formattedLastUpdatedAt:"Apr 15, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Lab: Cybersecurity Databricks",permalink:"/docs/processing/databricks/lab-cybersecurity-databricks/"},next:{title:"Lab: Databricks Deltalake",permalink:"/docs/processing/databricks/lab-databricks-deltalake/"}},o={},s=[{value:"Objective",id:"objective",level:2},{value:"Introduction",id:"introduction",level:2},{value:"Architecture",id:"architecture",level:2}],p={toc:s};function u(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"lab-databricks-clickstream-analysis"},"Lab: Databricks Clickstream Analysis"),(0,n.kt)("h2",{id:"objective"},"Objective"),(0,n.kt)("p",null,"Databricks AWS Integration and Clickstream Analysis"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"Components and steps we will follow in this lab:"),(0,n.kt)("ol",null,(0,n.kt)("li",{parentName:"ol"},"AWS Glue as our Central Metastore"),(0,n.kt)("li",{parentName:"ol"},"We will launch 1 Kinesis Stream ie. ",(0,n.kt)("strong",{parentName:"li"},"User click stream")),(0,n.kt)("li",{parentName:"ol"},"Join an already existing user Profile Delta table registered in our Glue metastore "),(0,n.kt)("li",{parentName:"ol"},"We will execute a crawler job to pull in an S3 datasets into our AWS Glue metastore"),(0,n.kt)("li",{parentName:"ol"},"The pipeline consists of a Data Lake medallion appproach"),(0,n.kt)("li",{parentName:"ol"},"We will demonstrate the Full DML support of Delta Lake while curating the Data Lake"),(0,n.kt)("li",{parentName:"ol"},"The curated GOLD dataset will be available to Athena and pushed to Redshift for later consumption"),(0,n.kt)("li",{parentName:"ol"},"Finally, a QuickSight dashboard")),(0,n.kt)("h2",{id:"architecture"},"Architecture"),(0,n.kt)("p",null,(0,n.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/214504502-a2cdf9ca-6c87-4fbf-a049-f60aa58e7c6d.png",alt:null})))}u.isMDXComponent=!0}}]);