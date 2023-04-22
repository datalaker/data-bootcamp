"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[52642],{3905:(t,e,a)=>{a.d(e,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function o(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function s(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function i(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},o=Object.keys(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var l=n.createContext({}),d=function(t){var e=n.useContext(l),a=e;return t&&(a="function"==typeof t?t(e):s(s({},e),t)),a},p=function(t){var e=d(t.components);return n.createElement(l.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},c=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,o=t.originalType,l=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),c=d(a),m=r,g=c["".concat(l,".").concat(m)]||c[m]||u[m]||o;return a?n.createElement(g,s(s({ref:e},p),{},{components:a})):n.createElement(g,s({ref:e},p))}));function m(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=a.length,s=new Array(o);s[0]=c;var i={};for(var l in e)hasOwnProperty.call(e,l)&&(i[l]=e[l]);i.originalType=t,i.mdxType="string"==typeof t?t:r,s[1]=i;for(var d=2;d<o;d++)s[d]=a[d];return n.createElement.apply(null,s)}return n.createElement.apply(null,a)}c.displayName="MDXCreateElement"},40992:(t,e,a)=>{a.r(e),a.d(e,{assets:()=>l,contentTitle:()=>s,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>d});var n=a(87462),r=(a(67294),a(3905));const o={},s="Data Storages",i={unversionedId:"foundations/basics/data-storages",id:"foundations/basics/data-storages",title:"Data Storages",description:"| Architecture          | Total cost of solution                                                                                                                                                  | Flexibility of scenarios                                                                                                                                                                      | Complexity of development                                                                                                                                                     | Maturity of ecosystem                                                                                                                                                                         | Organizational maturity required                                                                                                                                                            |",source:"@site/docs/01-foundations/basics/data-storages.md",sourceDirName:"01-foundations/basics",slug:"/foundations/basics/data-storages",permalink:"/docs/foundations/basics/data-storages",draft:!1,tags:[],version:"current",lastUpdatedBy:"sparsh",lastUpdatedAt:1681212836,formattedLastUpdatedAt:"Apr 11, 2023",frontMatter:{},sidebar:"docs",previous:{title:"OLTP vs OLAP",permalink:"/docs/foundations/basics/oltp-vs-olap"},next:{title:"SQL vs NoSQL",permalink:"/docs/foundations/basics/sql-vs-nosql"}},l={},d=[],p={toc:d};function u(t){let{components:e,...a}=t;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"data-storages"},"Data Storages"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Architecture")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Total cost of solution")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Flexibility of scenarios")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Complexity of development")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Maturity of ecosystem")),(0,r.kt)("th",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"th"},"Organizational maturity required")))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Cloud data warehouse")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"High"),"\xa0- given cloud data warehouses rely on proprietary data formats and offer an end to end solution together, the cost is high"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Low"),"\xa0- Cloud data warehouses are optimized for BI/SQL based scenarios, there is some support for data science/exploratory scenarios which is restrictive due to format constraints"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Low"),"\xa0- there is less moving parts and you can get started almost immediately with an end to end solution"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"High"),"\xa0- for SQL/BI scenarios, Low - for other scenarios"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Low"),"\xa0- the tools and ecosystem are largely well understood and ready to be consumed by organizations of any shape/size.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Modern data warehouse")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Medium"),"\xa0- the data preparation and historical data can be moved to the data lake at lower cost, still need a cloud warehouse which is expensive"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Medium"),"\xa0- diverse ecosystem of tools nad more exploratory scenarios supported in the data lake, correlating data in the warehouse and data lake needs data copies"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Medium"),"\xa0- the data engineering team needs to ensure that the data lake design is efficient and scalable, plenty of guidance and considerations available, including this book"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Medium"),"\xa0- the data preparation and data engineering ecosystem, such as Spark/Hadoop has a higher maturity, tuning for performance and scale needed, High - for consumption via data warehouse"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Medium"),"\xa0- the data platform team needs to be skilled up to understand the needs of the organization and make the right design choices at the least to support the needs of the organization")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Data lakehouse")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Low"),"\xa0- the data lake storage acts as the unified repository with no data movement required, compute engines are largely stateless and can be spun up and down on demand"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"High"),"\xa0- flexibility of running more scenarios with a diverse ecosystem enabling more exploratory analysis such as data science, and ease of sharing of data between BI and data science teams"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Medium to High"),"\xa0- careful choice of right datasets and the open data format needed to support the lakehouse architecture"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Medium to High"),"\xa0- while technologies such as Delta Lake, Apache Iceberg, and Apache Hudi are gaining maturity and adoption, today, this architecture requires thoughtful design"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Medium to High"),"\xa0- the data platform team needs to be skilled up to understand the needs of the organization and the technology choices that are still new")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Data mesh")),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Medium"),"\xa0- while the distributed design ensures cost is lower, lot of investment required in automation/blueprint/data governance solutions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"High"),"\xa0- flexibility in supporting different architectures and solutions in the same organization, and no bottlenecks on a central lean organization"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"High"),"\xa0- this relies on an end to end automated solution and an architecture that scales to 10x growth and sharing across architectures/cloud solutions"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"Low"),"\xa0- relatively nascent in guidance and available toolsets"),(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("strong",{parentName:"td"},"High"),"\xa0- data platform team and product/domain teams need to be skilled up in data lakes.")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Cost versus complexity of cloud data lake architectures")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://user-images.githubusercontent.com/62965911/213930648-3e63ea81-b214-411a-9e4a-39a403ed35df.png",alt:null})))}u.isMDXComponent=!0}}]);