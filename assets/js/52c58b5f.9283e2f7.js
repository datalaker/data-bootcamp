"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19722],{3905:(e,t,a)=>{a.d(t,{Zo:()=>d,kt:()=>u});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},c=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,r=e.originalType,p=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),c=s(a),u=i,b=c["".concat(p,".").concat(u)]||c[u]||m[u]||r;return a?n.createElement(b,o(o({ref:t},d),{},{components:a})):n.createElement(b,o({ref:t},d))}));function u(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=a.length,o=new Array(r);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,o[1]=l;for(var s=2;s<r;s++)o[s]=a[s];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},72995:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>m,frontMatter:()=>r,metadata:()=>l,toc:()=>s});var n=a(87462),i=(a(67294),a(3905));const r={},o="Lab: Apache Beam Getting Started",l={unversionedId:"processing/lab-getting-started-with-beam/README",id:"processing/lab-getting-started-with-beam/README",title:"Lab: Apache Beam Getting Started",description:"Pipeline 1 - Simple Ingest Data Pipeline",source:"@site/docs/03-processing/lab-getting-started-with-beam/README.md",sourceDirName:"03-processing/lab-getting-started-with-beam",slug:"/processing/lab-getting-started-with-beam/",permalink:"/docs/processing/lab-getting-started-with-beam/",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681732641,formattedLastUpdatedAt:"Apr 17, 2023",frontMatter:{},sidebar:"docs",previous:{title:"Apache Beam",permalink:"/docs/processing/apache-beam"},next:{title:"Lab: MapReduce in Beam using Python",permalink:"/docs/processing/lab-gcp-beam-mapreduce/"}},p={},s=[{value:"Pipeline 1 - Simple Ingest Data Pipeline",id:"pipeline-1---simple-ingest-data-pipeline",level:2},{value:"Pipeline 2 - Wordcount",id:"pipeline-2---wordcount",level:2},{value:"Apache Beam Basic Operations",id:"apache-beam-basic-operations",level:2},{value:"Windowing",id:"windowing",level:2},{value:"Dataframes",id:"dataframes",level:2},{value:"Files",id:"files",level:2},{value:"Notebooks",id:"notebooks",level:2}],d={toc:s};function m(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},d,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"lab-apache-beam-getting-started"},"Lab: Apache Beam Getting Started"),(0,i.kt)("h2",{id:"pipeline-1---simple-ingest-data-pipeline"},"Pipeline 1 - Simple Ingest Data Pipeline"),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/214569069-8223b7f5-270d-447c-b0be-c43748d3135f.png",alt:"pipeline1"})),(0,i.kt)("p",null,"Notebook: ",(0,i.kt)("inlineCode",{parentName:"p"},"01-sa-ingest-data-pipeline.ipynb")),(0,i.kt)("h2",{id:"pipeline-2---wordcount"},"Pipeline 2 - Wordcount"),(0,i.kt)("p",null,"It demonstrates a simple pipeline that uses the Direct Runner to read from a text file, apply transforms to tokenize and count the words, and write the data to an output text file."),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/214569078-1a8cde98-75f6-4e9c-8663-71d8d41e6f94.svg",alt:"pipeline2"})),(0,i.kt)("p",null,"Key Concepts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Creating the Pipeline"),(0,i.kt)("li",{parentName:"ul"},"Applying transforms to the Pipeline"),(0,i.kt)("li",{parentName:"ul"},"Reading input"),(0,i.kt)("li",{parentName:"ul"},"Applying ParDo transforms"),(0,i.kt)("li",{parentName:"ul"},"Applying SDK-provided transforms (in this example: Count)"),(0,i.kt)("li",{parentName:"ul"},"Writing output"),(0,i.kt)("li",{parentName:"ul"},"Running the Pipeline")),(0,i.kt)("p",null,"Notebook: ",(0,i.kt)("inlineCode",{parentName:"p"},"02-sa-wordcount-pipeline.ipynb")),(0,i.kt)("h2",{id:"apache-beam-basic-operations"},"Apache Beam Basic Operations"),(0,i.kt)("p",null,"In this tutorial, we will learn about:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Create and print input data"),(0,i.kt)("li",{parentName:"ol"},"Read data from files"),(0,i.kt)("li",{parentName:"ol"},"Write data into files"),(0,i.kt)("li",{parentName:"ol"},"Read data from SQLite database"),(0,i.kt)("li",{parentName:"ol"},"Map, FlatMap, Reduce, and Combine functions")),(0,i.kt)("p",null,"Notebook: ",(0,i.kt)("inlineCode",{parentName:"p"},"03-sa-basic-operations.ipynb")),(0,i.kt)("h2",{id:"windowing"},"Windowing"),(0,i.kt)("p",null,"In this tutorial, we will learn about:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Global windows"),(0,i.kt)("li",{parentName:"ol"},"Fixed-time windows"),(0,i.kt)("li",{parentName:"ol"},"Sliding-time windows"),(0,i.kt)("li",{parentName:"ol"},"Session windows")),(0,i.kt)("p",null,"Notebook: ",(0,i.kt)("inlineCode",{parentName:"p"},"04-sa-windowing.ipynb")),(0,i.kt)("h2",{id:"dataframes"},"Dataframes"),(0,i.kt)("p",null,"In this tutorial, we will learn about:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Pandas dataframe to Beam Dataframe"),(0,i.kt)("li",{parentName:"ol"},"Pandas dataframe to PCollections"),(0,i.kt)("li",{parentName:"ol"},"Beam Dataframe to Pandas dataframe"),(0,i.kt)("li",{parentName:"ol"},"PCollections to Pandas dataframe"),(0,i.kt)("li",{parentName:"ol"},"Beam Dataframe to PCollections"),(0,i.kt)("li",{parentName:"ol"},"PCollections to Beam Dataframe")),(0,i.kt)("p",null,"Notebook: ",(0,i.kt)("inlineCode",{parentName:"p"},"05-sa-dataframes.ipynb")),(0,i.kt)("h2",{id:"files"},"Files"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/sparsh-ai/recohut/tree/main/docs/03-processing/lab-getting-started-with-beam/"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white",alt:"Github"}))),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"\u251c\u2500\u2500 [ 22K]  01-sa-ingest-data-pipeline.ipynb\n\u251c\u2500\u2500 [ 21K]  02-sa-wordcount-pipeline.ipynb\n\u251c\u2500\u2500 [ 26K]  03-sa-basic-operations.ipynb\n\u251c\u2500\u2500 [ 29K]  04-sa-windowing.ipynb\n\u251c\u2500\u2500 [ 18K]  05-sa-dataframes.ipynb\n\u251c\u2500\u2500 [ 113]  Makefile\n\u251c\u2500\u2500 [2.0K]  README.md\n\u251c\u2500\u2500 [158K]  data\n\u2502   \u251c\u2500\u2500 [ 62K]  kinglear.txt.zip\n\u2502   \u251c\u2500\u2500 [8.0K]  moon-phases.db\n\u2502   \u251c\u2500\u2500 [ 529]  penguins.csv\n\u2502   \u251c\u2500\u2500 [ 121]  sample1.txt\n\u2502   \u251c\u2500\u2500 [  72]  sample2.txt\n\u2502   \u251c\u2500\u2500 [ 160]  solar_events.csv\n\u2502   \u2514\u2500\u2500 [ 87K]  sp500.csv.zip\n\u251c\u2500\u2500 [115K]  output\n\u2502   \u251c\u2500\u2500 [ 66K]  pipe2-00000-of-00001\n\u2502   \u251c\u2500\u2500 [  76]  result.txt-00000-of-00001\n\u2502   \u251c\u2500\u2500 [ 153]  sample-00000-of-00001.txt\n\u2502   \u2514\u2500\u2500 [ 48K]  wordcount-00000-of-00001\n\u2514\u2500\u2500 [5.4K]  src\n    \u251c\u2500\u2500 [3.5K]  pipeline1.py\n    \u2514\u2500\u2500 [1.9K]  pipeline2.py\n\n 397K used in 3 directories, 20 files\n")),(0,i.kt)("h2",{id:"notebooks"},"Notebooks"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://nbviewer.org/github/sparsh-ai/recohut/blob/main/docs/03-processing/lab-getting-started-with-beam/"},(0,i.kt)("img",{parentName:"a",src:"https://img.shields.io/badge/jupyter-notebook-informational?logo=jupyter",alt:"nbviewer"}))))}m.isMDXComponent=!0}}]);