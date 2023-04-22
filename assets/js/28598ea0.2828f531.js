"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[74041],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>h});var n=a(67294);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=n.createContext({}),g=function(e){var t=n.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=g(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var a=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),l=g(a),h=o,u=l["".concat(c,".").concat(h)]||l[h]||d[h]||r;return a?n.createElement(u,i(i({ref:t},p),{},{components:a})):n.createElement(u,i({ref:t},p))}));function h(e,t){var a=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=a.length,i=new Array(r);i[0]=l;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var g=2;g<r;g++)i[g]=a[g];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}l.displayName="MDXCreateElement"},11984:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>g});var n=a(87462),o=(a(67294),a(3905));const r={title:"Web Scraping with Gazpacho",authors:"sparsh",tags:["scraping"]},i=void 0,s={permalink:"/blog/2021/10/01/web-scraping-with-gazpacho",source:"@site/blog/2021-10-01-web-scraping-with-gazpacho.mdx",title:"Web Scraping with Gazpacho",description:'Using gazpacho to Download and Parse the Contents of a Website. Scrape the names of the three "Gorgons".',date:"2021-10-01T00:00:00.000Z",formattedDate:"October 1, 2021",tags:[{label:"scraping",permalink:"/blog/tags/scraping"}],readingTime:.52,hasTruncateMarker:!1,authors:[{name:"Sparsh Agarwal",title:"Data Scientist & Engineer",url:"https://github.com/sparsh-ai",email:"sprsag@gmail.com",imageURL:"https://github.com/sparsh-ai.png",key:"sparsh"}],frontMatter:{title:"Web Scraping with Gazpacho",authors:"sparsh",tags:["scraping"]},prevItem:{title:"Web Scraping using Scrapy, BS4, and Selenium",permalink:"/blog/2021/10/01/web-scraping-using-scrapy-bs4-and-selenium"},nextItem:{title:"Wellness tracker chatbot",permalink:"/blog/2021/10/01/wellness-tracker-chatbot"}},c={authorsImageUrls:[void 0]},g=[{value:"Using gazpacho to Download and Parse the Contents of a Website. Scrape the names of the three &quot;Gorgons&quot;.",id:"using-gazpacho-to-download-and-parse-the-contents-of-a-website-scrape-the-names-of-the-three-gorgons",level:3},{value:"Using gazpacho and pandas to Retrieve the Contents of an HTML Table. Scrape the creature and habitat columns.",id:"using-gazpacho-and-pandas-to-retrieve-the-contents-of-an-html-table-scrape-the-creature-and-habitat-columns",level:3},{value:"Using gazpacho and Selenium to Retrieve the Contents of a Password-Protected Web Page. Scrape the quote text behind the login form.",id:"using-gazpacho-and-selenium-to-retrieve-the-contents-of-a-password-protected-web-page-scrape-the-quote-text-behind-the-login-form",level:3},{value:"Using gazpacho and pytesseract to Parse the Contents of \u201cNon-Text\u201d Text Data. Extract the embedded text.",id:"using-gazpacho-and-pytesseract-to-parse-the-contents-of-non-text-text-data-extract-the-embedded-text",level:3},{value:"Using gazpacho and urllib to Retrieve and Download Images, Videos, and Audio Clippings. To download the Image, Audio and Video data.",id:"using-gazpacho-and-urllib-to-retrieve-and-download-images-videos-and-audio-clippings-to-download-the-image-audio-and-video-data",level:3}],p={toc:g};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"using-gazpacho-to-download-and-parse-the-contents-of-a-website-scrape-the-names-of-the-three-gorgons"},'Using gazpacho to Download and Parse the Contents of a Website. Scrape the names of the three "Gorgons".'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"/img/content-blog-raw-blog-web-scraping-with-gazpacho-untitled.png",src:a(26985).Z,width:"1327",height:"592"})),(0,o.kt)("h3",{id:"using-gazpacho-and-pandas-to-retrieve-the-contents-of-an-html-table-scrape-the-creature-and-habitat-columns"},"Using gazpacho and pandas to Retrieve the Contents of an HTML Table. Scrape the creature and habitat columns."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"/img/content-blog-raw-blog-web-scraping-with-gazpacho-untitled-1.png",src:a(5723).Z,width:"1129",height:"596"})),(0,o.kt)("h3",{id:"using-gazpacho-and-selenium-to-retrieve-the-contents-of-a-password-protected-web-page-scrape-the-quote-text-behind-the-login-form"},"Using gazpacho and Selenium to Retrieve the Contents of a Password-Protected Web Page. Scrape the quote text behind the login form."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"/img/content-blog-raw-blog-web-scraping-with-gazpacho-untitled-2.png",src:a(35202).Z,width:"1366",height:"441"})),(0,o.kt)("h3",{id:"using-gazpacho-and-pytesseract-to-parse-the-contents-of-non-text-text-data-extract-the-embedded-text"},"Using gazpacho and pytesseract to Parse the Contents of \u201cNon-Text\u201d Text Data. Extract the embedded text."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"/img/content-blog-raw-blog-web-scraping-with-gazpacho-untitled-3.png",src:a(6761).Z,width:"1139",height:"544"})),(0,o.kt)("h3",{id:"using-gazpacho-and-urllib-to-retrieve-and-download-images-videos-and-audio-clippings-to-download-the-image-audio-and-video-data"},"Using gazpacho and urllib to Retrieve and Download Images, Videos, and Audio Clippings. To download the Image, Audio and Video data."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"/img/content-blog-raw-blog-web-scraping-with-gazpacho-untitled-4.png",src:a(70833).Z,width:"1099",height:"645"})))}d.isMDXComponent=!0},5723:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/content-blog-raw-blog-web-scraping-with-gazpacho-untitled-1-88f97f6a328b4ebfdc2293a4968addb2.png"},35202:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/content-blog-raw-blog-web-scraping-with-gazpacho-untitled-2-39c54180d4c52c26641620884ee250a5.png"},6761:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/content-blog-raw-blog-web-scraping-with-gazpacho-untitled-3-631f35df71ff9a9e4c76518b93ddf34f.png"},70833:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/content-blog-raw-blog-web-scraping-with-gazpacho-untitled-4-b30d6f385bd4d027bed7b0193590dbf5.png"},26985:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/content-blog-raw-blog-web-scraping-with-gazpacho-untitled-e36508540e790cf35df84ff1c44c687f.png"}}]);