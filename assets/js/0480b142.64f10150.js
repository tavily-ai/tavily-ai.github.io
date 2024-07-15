"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[8070],{5680:(e,r,t)=>{t.d(r,{xA:()=>u,yg:()=>g});var a=t(6540);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function n(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?n(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):n(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,a,o=function(e,r){if(null==e)return{};var t,a,o={},n=Object.keys(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(a=0;a<n.length;a++)t=n[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=a.createContext({}),l=function(e){var r=a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=l(e.components);return a.createElement(c.Provider,{value:r},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},d=a.forwardRef((function(e,r){var t=e.components,o=e.mdxType,n=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=l(t),d=o,g=p["".concat(c,".").concat(d)]||p[d]||h[d]||n;return t?a.createElement(g,i(i({ref:r},u),{},{components:t})):a.createElement(g,i({ref:r},u))}));function g(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var n=t.length,i=new Array(n);i[0]=d;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<n;l++)i[l]=t[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},842:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>i,default:()=>p,frontMatter:()=>n,metadata:()=>s,toc:()=>c});var a=t(8168),o=(t(6540),t(5680));const n={},i="Frequently Asked Questions",s={unversionedId:"faq",id:"faq",isDocsHomePage:!1,title:"Frequently Asked Questions",description:"How do I get started?",source:"@site/docs/faq.md",sourceDirName:".",slug:"/faq",permalink:"/docs/faq",editUrl:"https://github.com/tavily-ai/tavily-python/tree/master/docs/docs/faq.md",tags:[],version:"current",frontMatter:{}},c=[{value:"How do I get started?",id:"how-do-i-get-started",children:[],level:3},{value:"How do you ensure the report is factual and accurate?",id:"how-do-you-ensure-the-report-is-factual-and-accurate",children:[],level:3},{value:"What is Tavily API?",id:"what-is-tavily-api",children:[],level:3},{value:"How is Tavily different from other search APIs?",id:"how-is-tavily-different-from-other-search-apis",children:[],level:3},{value:"What is Tavily API pricing?",id:"what-is-tavily-api-pricing",children:[],level:3},{value:"What are your plans for the future?",id:"what-are-your-plans-for-the-future",children:[],level:3},{value:"What is GPT Researcher?",id:"what-is-gpt-researcher",children:[],level:3},{value:"How much does each research run cost?",id:"how-much-does-each-research-run-cost",children:[],level:3}],l={toc:c},u="wrapper";function p(e){let{components:r,...t}=e;return(0,o.yg)(u,(0,a.A)({},l,t,{components:r,mdxType:"MDXLayout"}),(0,o.yg)("h1",{id:"frequently-asked-questions"},"Frequently Asked Questions"),(0,o.yg)("h3",{id:"how-do-i-get-started"},"How do I get started?"),(0,o.yg)("p",null,"It really depends on what you're aiming for. "),(0,o.yg)("p",null,"If you're looking to connect your AI application to the internet with our tailored API, check out the ",(0,o.yg)("a",{parentName:"p",href:"/docs/tavily-api/introduction"},"Tavily API")," documentation.\nIf you're looking to build and deploy our open source autonomous research agent GPT Researcher, please see ",(0,o.yg)("a",{parentName:"p",href:"/docs/gpt-researcher/introduction"},"GPT Researcher")," documentation.\nYou can also check out demos and examples for inspiration ",(0,o.yg)("a",{parentName:"p",href:"/docs/examples/examples"},"here"),"."),(0,o.yg)("h3",{id:"how-do-you-ensure-the-report-is-factual-and-accurate"},"How do you ensure the report is factual and accurate?"),(0,o.yg)("p",null,"we do our best to ensure that the information we provide is factual and accurate. We do this by using multiple sources, and by using proprietary AI to score and rank the most relevant and accurate information. We also use proprietary AI to filter out irrelevant information and sources."),(0,o.yg)("p",null,"Lastly, by using RAG and other techniques, we ensure that the information is relevant to the context of the research task, leading to more accurate generative AI content and reduced hallucinations."),(0,o.yg)("h3",{id:"what-is-tavily-api"},"What is Tavily API?"),(0,o.yg)("p",null,"Tavily search API is a search engine optimized for LLMs, aimed at efficient, quick and persistent search results. Unlike other search APIs such as Serp or Google, Tavily focuses on optimizing search for AI developers and autonomous AI agents. We take care of all the burden in searching, scraping, filtering and extracting the most relevant information from online sources. All in a single API call!"),(0,o.yg)("p",null,"The search API can also be used return answers to questions (for use cases such as multi-agent frameworks like autogen) and can complete comprehensive research tasks in seconds. Moreover, Tavily leverages proprietary financial, code, news, and other internal data sources to complement online information."),(0,o.yg)("p",null,"To learn more about Tavily search API, check out the ",(0,o.yg)("a",{parentName:"p",href:"/docs/tavily-api/introduction"},"documentation page"),"."),(0,o.yg)("p",null,"To try the API in action, you can now use our hosted version ",(0,o.yg)("a",{parentName:"p",href:"https://app.tavily.com/chat"},"here")," or on our ",(0,o.yg)("a",{parentName:"p",href:"https://app.tavily.com/playground"},"API Playground"),"."),(0,o.yg)("h3",{id:"how-is-tavily-different-from-other-search-apis"},"How is Tavily different from other search APIs?"),(0,o.yg)("p",null,"Current search APIs such as Google, Serp and Bing retrieve search results based on user query. However, the results are sometimes irrelevant to the goal of the search, and return simple site URLs and snippets of content which are not always relevant. Because of this, any developer would need to then scrape the sites for relevant content, filter irrelevant information, optimize the content to fit LLM context limits, and more. This tasks is a burden and requires skills to get right."),(0,o.yg)("p",null,"Tavily Search API aggregates over 20+ sites per a single API call, and uses  AI to score, filter and rank the top most relevant sources and content to your task, query or goal. In addition, Tavily allows developers to add custom fields such as context and limit response tokens to enable the optimal search experience for LLMs.\nproprietary\nLastly, Tavily indexes and ranks search results based on factors such as trusted sources, content quality, and more. This allows for a more accurate and relevant search experience for AI agents."),(0,o.yg)("p",null,"Remember: With LLM hallucinations, it's crucial to optimize for RAG with the right context and information."),(0,o.yg)("h3",{id:"what-is-tavily-api-pricing"},"What is Tavily API pricing?"),(0,o.yg)("p",null,"Tavily is free to use for up to 1,000 API calls. Check out our ",(0,o.yg)("a",{parentName:"p",href:"https://tavily.com/#pricing"},"pricing page")," for more information."),(0,o.yg)("p",null,"At the moment we don't have a pricing model, since we're still in beta and focused on building the best product for our users. We're always open to feedback and suggestions, so please reach out if you have any ideas!"),(0,o.yg)("h3",{id:"what-are-your-plans-for-the-future"},"What are your plans for the future?"),(0,o.yg)("p",null,"We're constantly working on improving our products and services. We're currently working on improving our search API together with design partners, and adding more data sources to our search engine. We're also working on improving our research agent GPT Researcher, and adding more features to it while growing our amazing open source community."),(0,o.yg)("p",null,"If you're interested in our roadmap or looking to collaborate, check out our ",(0,o.yg)("a",{parentName:"p",href:"https://trello.com/b/3O7KBePw/gpt-researcher-roadmap"},"roadmap page"),". "),(0,o.yg)("p",null,"Feel free to ",(0,o.yg)("a",{parentName:"p",href:"mailto:support@tavily.com"},"contact us")," if you have any further questions or suggestions!"),(0,o.yg)("h3",{id:"what-is-gpt-researcher"},"What is GPT Researcher?"),(0,o.yg)("p",null,"GPT Researcher is a popular open source autonomous research agent that takes care of the tedious task of research for you, by scraping, filtering and aggregating over 20+ web sources per a single research task."),(0,o.yg)("p",null,"GPT Researcher is built with best practices for leveraging LLMs (prompt engineering, RAG, chains, embeddings, etc), and is optimized for quick and efficient research. It is also fully customizable and can be tailored to your specific needs."),(0,o.yg)("p",null,"To learn more about GPT Researcher, check out the ",(0,o.yg)("a",{parentName:"p",href:"/docs/gpt-researcher/introduction"},"documentation page"),"."),(0,o.yg)("h3",{id:"how-much-does-each-research-run-cost"},"How much does each research run cost?"),(0,o.yg)("p",null,"A research task using GPT Researcher costs around $0.01 per a single run (for GPT-4 usage). We're constantly optimizing LLM calls to reduce costs and improve performance."))}p.isMDXComponent=!0}}]);