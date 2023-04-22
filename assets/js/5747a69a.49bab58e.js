"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[13319],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>d});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(n),d=r,g=u["".concat(s,".").concat(d)]||u[d]||m[d]||o;return n?a.createElement(g,l(l({ref:t},p),{},{components:n})):a.createElement(g,l({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=u;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},73003:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var a=n(87462),r=(n(67294),n(3905));const o={},l="Flask",i={unversionedId:"visualization/flask/README",id:"visualization/flask/README",title:"Flask",description:"Shazam API Song Analytics",source:"@site/docs/08-visualization/flask/README.md",sourceDirName:"08-visualization/flask",slug:"/visualization/flask/",permalink:"/docs/visualization/flask/",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681047270,formattedLastUpdatedAt:"Apr 9, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Lab: Step Function Ecommerce SQL",permalink:"/docs/orchestration/stepfunctions/lab-stepfunction-ecomm-sqs/"},next:{title:"Lab: Streaming Analytics and Dashboards",permalink:"/docs/visualization/looker-studio/lab-gcp-streaming-analytics"}},s={},c=[{value:"<strong>Shazam API Song Analytics</strong>",id:"shazam-api-song-analytics",level:3},{value:"<strong>CareerVillage Questions Recommender</strong>",id:"careervillage-questions-recommender",level:3}],p={toc:c};function m(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"flask"},"Flask"),(0,r.kt)("h3",{id:"shazam-api-song-analytics"},(0,r.kt)("strong",{parentName:"h3"},"Shazam API Song Analytics")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"#@markdown **Shazam API Song Analytics**\n!git clone https://github.com/jonaxmc/title-song-recommender.git\n%cd title-song-recommender\n!pip install -r requirements.txt\n!pip install -q colab-everything\nfrom colab_everything import ColabFlask\nColabFlask('app.py') # Flask app path\n")),(0,r.kt)("h3",{id:"careervillage-questions-recommender"},(0,r.kt)("strong",{parentName:"h3"},"CareerVillage Questions Recommender")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-python"},"#@markdown **Career Village Questions Recommender**\n!git clone https://github.com/dataroot/Kaggle-CV.git\n%cd Kaggle-CV\n!pip install -r requirements.txt\nimport nltk\nnltk.download('stopwords')\n!pip install -q -U kaggle\n!pip install --upgrade --force-reinstall --no-deps kaggle\n!mkdir ~/.kaggle\n!cp /content/drive/MyDrive/kaggle.json ~/.kaggle/\n!chmod 600 ~/.kaggle/kaggle.json\n!kaggle competitions download -c data-science-for-good-careervillage\n!mkdir data && unzip /content/data-science-for-good-careervillage.zip -d ./data\n%tensorflow_version 1.x\n!pip install 'h5py==2.10.0' --force-reinstall\n!pip install -q colab-everything\nfrom colab_everything import ColabFlask\nColabFlask('app.py') # Flask app path\n")))}m.isMDXComponent=!0}}]);