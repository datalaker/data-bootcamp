"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[41324],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>g});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var l=a.createContext({}),c=function(e){var t=a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=c(e.components);return a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),g=n,f=d["".concat(l,".").concat(g)]||d[g]||p[g]||o;return r?a.createElement(f,s(s({ref:t},u),{},{components:r})):a.createElement(f,s({ref:t},u))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,s=new Array(o);s[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:n,s[1]=i;for(var c=2;c<o;c++)s[c]=r[c];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},49202:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=r(87462),n=(r(67294),r(3905));const o={},s="Google Cloud Storage (GCS)",i={unversionedId:"storage/gcs",id:"storage/gcs",title:"Google Cloud Storage (GCS)",description:"Google Cloud Storage\xa0(GCS) is\xa0object storage. It's a\xa0service that is fully managed by GCP, which means we don't need to think about any underlying infrastructure for GCS.\xa0For example, we don't need to think about pre-sizing the storage, the network bandwidth, number of nodes, or any other infrastructure-related stuff.",source:"@site/docs/02-storage/gcs.md",sourceDirName:"02-storage",slug:"/storage/gcs",permalink:"/docs/storage/gcs",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681047270,formattedLastUpdatedAt:"Apr 9, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Azure Data Lakes",permalink:"/docs/storage/azure-datalake"},next:{title:"Lab: Data Lake on S3",permalink:"/docs/storage/lab-datalake-healthcare-s3-glue-athena/"}},l={},c=[],u={toc:c};function p(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"google-cloud-storage-gcs"},"Google Cloud Storage (GCS)"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Google Cloud Storage"),"\xa0(",(0,n.kt)("strong",{parentName:"p"},"GCS"),") is\xa0object storage. It's a\xa0service that is fully managed by GCP, which means we don't need to think about any underlying infrastructure for GCS.\xa0For example, we don't need to think about pre-sizing the storage, the network bandwidth, number of nodes, or any other infrastructure-related stuff."),(0,n.kt)("p",null,"What is object storage?\xa0",(0,n.kt)("strong",{parentName:"p"},"Object storage"),"\xa0is a highly scalable data storage architecture that can\xa0store very large amounts of data in any format.\xa0"),(0,n.kt)("p",null,"Because the technology can store data in almost any size and format, GCS is often used by developers to store any large files, for example, images, videos, and large CSV data. But, from the data engineering perspective, we will often use GCS for storing files, for example, as dump storage from databases, for exporting historical data from\xa0",(0,n.kt)("strong",{parentName:"p"},"BigQuery"),", for storing machine learning model files, and for any other purpose related to storing files."))}p.isMDXComponent=!0}}]);