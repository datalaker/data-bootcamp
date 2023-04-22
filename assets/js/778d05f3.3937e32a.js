"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[30061],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),d=a,m=u["".concat(l,".").concat(d)]||u[d]||f[d]||o;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=u;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},53084:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>s});var n=r(87462),a=(r(67294),r(3905));const o={},i="Lab: Real-time fraud detection by applying filter in Kafka topic",c={unversionedId:"processing/lab-kafka-fraud-detection/README",id:"processing/lab-kafka-fraud-detection/README",title:"Lab: Real-time fraud detection by applying filter in Kafka topic",description:"In this lab, we will generate some transactions out of which some would be fraudulent and then at the consumer end, we will check if the transaction is legit or fraud.",source:"@site/docs/03-processing/lab-kafka-fraud-detection/README.md",sourceDirName:"03-processing/lab-kafka-fraud-detection",slug:"/processing/lab-kafka-fraud-detection/",permalink:"/docs/processing/lab-kafka-fraud-detection/",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681794058,formattedLastUpdatedAt:"Apr 18, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Lab: Kafka and CDC",permalink:"/docs/processing/lab-confluent-kafka-faker/"},next:{title:"Kafka Streams for NYC Taxi data",permalink:"/docs/processing/lab-kafka-nyctaxi/"}},l={},s=[{value:"Files",id:"files",level:2}],p={toc:s};function f(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"lab-real-time-fraud-detection-by-applying-filter-in-kafka-topic"},"Lab: Real-time fraud detection by applying filter in Kafka topic"),(0,a.kt)("p",null,"In this lab, we will generate some transactions out of which some would be fraudulent and then at the consumer end, we will check if the transaction is legit or fraud."),(0,a.kt)("h2",{id:"files"},"Files"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://github.com/sparsh-ai/recohut/tree/main/docs/03-processing/lab-kafka-fraud-detection"},(0,a.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white",alt:"Github"}))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 [ 247]  README.md\n\u2514\u2500\u2500 [2.9K]  src\n    \u251c\u2500\u2500 [ 737]  fraud_detector.py\n    \u251c\u2500\u2500 [ 483]  fraud_processor.py\n    \u251c\u2500\u2500 [ 556]  legit_processor.py\n    \u2514\u2500\u2500 [1012]  payment_producer.py\n\n 3.3K used in 1 directory, 5 files\n")))}f.isMDXComponent=!0}}]);