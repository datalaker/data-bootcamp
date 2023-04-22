"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[91181],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>u});var r=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,o=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var s=r.createContext({}),d=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},c=function(e){var t=d(e.components);return r.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,o=e.mdxType,n=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),m=d(a),u=o,b=m["".concat(s,".").concat(u)]||m[u]||p[u]||n;return a?r.createElement(b,l(l({ref:t},c),{},{components:a})):r.createElement(b,l({ref:t},c))}));function u(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var n=a.length,l=new Array(n);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,l[1]=i;for(var d=2;d<n;d++)l[d]=a[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},42125:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>n,metadata:()=>i,toc:()=>d});var r=a(87462),o=(a(67294),a(3905));const n={},l="Lab: Retail Store Data Model in MySQL",i={unversionedId:"data-modeling/lab-mysql-retail-store-datamodel/README",id:"data-modeling/lab-mysql-retail-store-datamodel/README",title:"Lab: Retail Store Data Model in MySQL",description:"Process Flow",source:"@site/docs/04-data-modeling/lab-mysql-retail-store-datamodel/README.md",sourceDirName:"04-data-modeling/lab-mysql-retail-store-datamodel",slug:"/data-modeling/lab-mysql-retail-store-datamodel/",permalink:"/docs/data-modeling/lab-mysql-retail-store-datamodel/",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1682023347,formattedLastUpdatedAt:"Apr 20, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Lab: Northwind Data Model in MySQL",permalink:"/docs/data-modeling/lab-mysql-northwind-datamodel/"},next:{title:"Lab: Creating a Bus Rapid Transit (BRT) Database in Postgres",permalink:"/docs/data-modeling/lab-postgres-busrapid-transit/"}},s={},d=[{value:"Process Flow",id:"process-flow",level:2},{value:"Relational Data Model",id:"relational-data-model",level:2},{value:"Files",id:"files",level:2},{value:"Notebooks",id:"notebooks",level:2}],c={toc:d};function p(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"lab-retail-store-data-model-in-mysql"},"Lab: Retail Store Data Model in MySQL"),(0,o.kt)("h2",{id:"process-flow"},"Process Flow"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/216779522-6d234287-7d38-4d47-b33a-1ee53091f31a.svg",alt:"img"})),(0,o.kt)("h2",{id:"relational-data-model"},"Relational Data Model"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/216779523-3b3e5bc8-f12a-49c0-9bca-2b5b6bc2f163.png",alt:"store_schema"})),(0,o.kt)("h2",{id:"files"},"Files"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/sparsh-ai/recohut/tree/main/docs/04-data-modeling/lab-mysql-retail-store-datamodel"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white",alt:"Github"}))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 [ 32K]  01-sa-store-model.ipynb\n\u251c\u2500\u2500 [ 756]  README.md\n\u2514\u2500\u2500 [ 517]  data\n    \u2514\u2500\u2500 [ 421]  download.sh\n\n  34K used in 1 directory, 3 files\n")),(0,o.kt)("h2",{id:"notebooks"},"Notebooks"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://nbviewer.org/github/sparsh-ai/recohut/blob/main/docs/04-data-modeling/lab-mysql-retail-store-datamodel"},(0,o.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/jupyter-notebook-informational?logo=jupyter",alt:"nbviewer"}))))}p.isMDXComponent=!0}}]);