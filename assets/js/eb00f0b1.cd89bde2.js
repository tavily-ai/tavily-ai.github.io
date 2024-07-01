"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7263],{5680:(e,t,a)=>{a.d(t,{xA:()=>g,yg:()=>m});var r=a(6540);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var l=r.createContext({}),c=function(e){var t=r.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},g=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",h={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,g=s(e,["components","mdxType","originalType","parentName"]),p=c(a),u=n,m=p["".concat(l,".").concat(u)]||p[u]||h[u]||i;return a?r.createElement(m,o(o({ref:t},g),{},{components:a})):r.createElement(m,o({ref:t},g))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[p]="string"==typeof e?e:n,o[1]=s;for(var c=2;c<i;c++)o[c]=a[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},7330:(e,t,a)=>{a.r(t),a.d(t,{contentTitle:()=>o,default:()=>p,frontMatter:()=>i,metadata:()=>s,toc:()=>l});var r=a(8168),n=(a(6540),a(5680));const i={},o="Multi Agent Frameworks",s={unversionedId:"gpt-researcher/agent_frameworks",id:"gpt-researcher/agent_frameworks",isDocsHomePage:!1,title:"Multi Agent Frameworks",description:"We are strong advocates for the future of AI agents, envisioning a world where autonomous agents communicate and collaborate as a cohesive team to undertake and complete complex tasks.",source:"@site/docs/gpt-researcher/agent_frameworks.md",sourceDirName:"gpt-researcher",slug:"/gpt-researcher/agent_frameworks",permalink:"/docs/gpt-researcher/agent_frameworks",editUrl:"https://github.com/tavily-ai/tavily-python/tree/master/docs/docs/gpt-researcher/agent_frameworks.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Tailored Research",permalink:"/docs/gpt-researcher/tailored-research"},next:{title:"PIP Package",permalink:"/docs/gpt-researcher/pip-package"}},l=[{value:"The Multi Agent Team",id:"the-multi-agent-team",children:[],level:2},{value:"How it works",id:"how-it-works",children:[{value:"Architecture",id:"architecture",children:[],level:3},{value:"Steps",id:"steps",children:[],level:3}],level:2},{value:"How to run",id:"how-to-run",children:[],level:2},{value:"Usage",id:"usage",children:[],level:2}],c={toc:l},g="wrapper";function p(e){let{components:t,...a}=e;return(0,n.yg)(g,(0,r.A)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,n.yg)("h1",{id:"multi-agent-frameworks"},"Multi Agent Frameworks"),(0,n.yg)("p",null,"We are strong advocates for the future of AI agents, envisioning a world where autonomous agents communicate and collaborate as a cohesive team to undertake and complete complex tasks."),(0,n.yg)("p",null,"We hold the belief that research is a pivotal element in successfully tackling these complex tasks, ensuring superior outcomes."),(0,n.yg)("p",null,"Consider the scenario of developing a coding agent responsible for coding tasks using the latest API documentation and best practices. It would be wise to integrate an agent specializing in research to curate the most recent and relevant documentation, before crafting a technical design that would subsequently be handed off to the coding assistant tasked with generating the code. This approach is applicable across various sectors, including finance, business analysis, healthcare, marketing, and legal, among others."),(0,n.yg)("p",null,"One multi-agent framework that we're excited about is ",(0,n.yg)("a",{parentName:"p",href:"https://python.langchain.com/docs/langgraph/"},"LangGraph"),", built by the team at ",(0,n.yg)("a",{parentName:"p",href:"https://www.langchain.com/"},"Langchain"),".\nLangGraph is a Python library for building stateful, multi-actor applications with LLMs. It extends the ",(0,n.yg)("a",{parentName:"p",href:"https://python.langchain.com/docs/expression_language/"},"LangChain Expression Language")," with the ability to coordinate multiple chains (or actors) across multiple steps of computation."),(0,n.yg)("p",null,"What's great about LangGraph is that it follows a DAG architecture, enabling each specialized agent to communicate with one another, and subsequently trigger actions among other agents within the graph. "),(0,n.yg)("p",null,"We've added an example for leveraging ",(0,n.yg)("a",{parentName:"p",href:"https://github.com/assafelovic/gpt-researcher/tree/master/multi_agents"},"GPT Researcher with LangGraph")," which can be found in ",(0,n.yg)("inlineCode",{parentName:"p"},"/multi_agents"),"."),(0,n.yg)("p",null,"The example demonstrates a generic use case for an editorial agent team that works together to complete a research report on a given task."),(0,n.yg)("h2",{id:"the-multi-agent-team"},"The Multi Agent Team"),(0,n.yg)("p",null,"The research team is made up of 7 AI agents:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Chief Editor"),' - Oversees the research process and manages the team. This is the "master" agent that coordinates the other agents using Langgraph.'),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Researcher")," (gpt-researcher) - A specialized autonomous agent that conducts in depth research on a given topic."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Editor")," - Responsible for planning the research outline and structure."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Reviewer")," - Validates the correctness of the research results given a set of criteria."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Revisor")," - Revises the research results based on the feedback from the reviewer."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Writer")," - Responsible for compiling and writing the final report."),(0,n.yg)("li",{parentName:"ul"},(0,n.yg)("strong",{parentName:"li"},"Publisher")," - Responsible for publishing the final report in various formats.")),(0,n.yg)("h2",{id:"how-it-works"},"How it works"),(0,n.yg)("p",null,"Generally, the process is based on the following stages: "),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Planning stage"),(0,n.yg)("li",{parentName:"ol"},"Data collection and analysis"),(0,n.yg)("li",{parentName:"ol"},"Writing and submission"),(0,n.yg)("li",{parentName:"ol"},"Review and revision"),(0,n.yg)("li",{parentName:"ol"},"Publication")),(0,n.yg)("h3",{id:"architecture"},"Architecture"),(0,n.yg)("div",{align:"center"},(0,n.yg)("img",{align:"center",height:"600",src:"https://cowriter-images.s3.amazonaws.com/gptr-langgraph-architecture.png"})),(0,n.yg)("br",{clear:"all"}),(0,n.yg)("h3",{id:"steps"},"Steps"),(0,n.yg)("p",null,"More specifically (as seen in the architecture diagram) the process is as follows:"),(0,n.yg)("ul",null,(0,n.yg)("li",{parentName:"ul"},"Browser (gpt-researcher) - Browses the internet for initial research based on the given research task."),(0,n.yg)("li",{parentName:"ul"},"Editor - Plans the report outline and structure based on the initial research."),(0,n.yg)("li",{parentName:"ul"},"For each outline topic (in parallel):",(0,n.yg)("ul",{parentName:"li"},(0,n.yg)("li",{parentName:"ul"},"Researcher (gpt-researcher) - Runs an in depth research on the subtopics and writes a draft."),(0,n.yg)("li",{parentName:"ul"},"Reviewer - Validates the correctness of the draft given a set of criteria and provides feedback."),(0,n.yg)("li",{parentName:"ul"},"Revisor - Revises the draft until it is satisfactory based on the reviewer feedback."))),(0,n.yg)("li",{parentName:"ul"},"Writer - Compiles and writes the final report including an introduction, conclusion and references section from the given research findings."),(0,n.yg)("li",{parentName:"ul"},"Publisher - Publishes the final report to multi formats such as PDF, Docx, Markdown, etc.")),(0,n.yg)("h2",{id:"how-to-run"},"How to run"),(0,n.yg)("ol",null,(0,n.yg)("li",{parentName:"ol"},"Install required packages:",(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"pip install -r requirements.txt\n"))),(0,n.yg)("li",{parentName:"ol"},"Run the application:",(0,n.yg)("pre",{parentName:"li"},(0,n.yg)("code",{parentName:"pre",className:"language-bash"},"python main.py\n")))),(0,n.yg)("h2",{id:"usage"},"Usage"),(0,n.yg)("p",null,"To change the research query and customize the report, edit the ",(0,n.yg)("inlineCode",{parentName:"p"},"task.json")," file in the main directory."))}p.isMDXComponent=!0}}]);