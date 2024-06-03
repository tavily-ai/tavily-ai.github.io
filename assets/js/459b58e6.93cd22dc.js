"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5393],{3905:(e,n,t)=>{t.d(n,{Zo:()=>h,kt:()=>g});var a=t(7294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function s(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=a.createContext({}),d=function(e){var n=a.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},h=function(e){var n=d(e.components);return a.createElement(l.Provider,{value:n},e.children)},u={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},c=a.forwardRef((function(e,n){var t=e.components,i=e.mdxType,r=e.originalType,l=e.parentName,h=s(e,["components","mdxType","originalType","parentName"]),c=d(t),g=i,f=c["".concat(l,".").concat(g)]||c[g]||u[g]||r;return t?a.createElement(f,o(o({ref:n},h),{},{components:t})):a.createElement(f,o({ref:n},h))}));function g(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var r=t.length,o=new Array(r);o[0]=c;var s={};for(var l in n)hasOwnProperty.call(n,l)&&(s[l]=n[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var d=2;d<r;d++)o[d]=t[d];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}c.displayName="MDXCreateElement"},5447:(e,n,t)=>{t.r(n),t.d(n,{contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=t(7462),i=(t(7294),t(3905));const r={},o="Langchain",s={unversionedId:"tavily-api/langchain",id:"tavily-api/langchain",isDocsHomePage:!1,title:"Langchain",description:"We're excited to partner with Langchain as their recommended search tool! \ud83d\ude80",source:"@site/docs/tavily-api/langchain.md",sourceDirName:"tavily-api",slug:"/tavily-api/langchain",permalink:"/docs/tavily-api/langchain",editUrl:"https://github.com/tavily-ai/tavily-python/tree/master/docs/docs/tavily-api/langchain.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Rest API",permalink:"/docs/tavily-api/rest_api"},next:{title:"LlamaIndex",permalink:"/docs/tavily-api/llamaindex"}},l=[{value:"How to use Tavily API with Langchain",id:"how-to-use-tavily-api-with-langchain",children:[{value:"Result:",id:"result",children:[],level:4}],level:3}],d={toc:l};function h(e){let{components:n,...t}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"langchain"},"Langchain"),(0,i.kt)("p",null,"We're excited to partner with Langchain as their recommended search tool! \ud83d\ude80\nSee the ",(0,i.kt)("a",{parentName:"p",href:"https://blog.langchain.dev/weblangchain/"},"Langchain blog")," for more details."),(0,i.kt)("p",null,"Tavily API can now empower your Langchain application with real time online information optimized for RAG."),(0,i.kt)("h3",{id:"how-to-use-tavily-api-with-langchain"},"How to use Tavily API with Langchain"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-python"},'import os\nfrom langchain.utilities.tavily_search import TavilySearchAPIWrapper\nfrom langchain.agents import initialize_agent, AgentType\nfrom langchain_community.chat_models import ChatOpenAI\nfrom langchain.tools.tavily_search import TavilySearchResults\n\n# set up API key\nos.environ["TAVILY_API_KEY"] = "..."\n\n# set up the agent\nllm = ChatOpenAI(model_name="gpt-4", temperature=0.7)\nsearch = TavilySearchAPIWrapper()\ntavily_tool = TavilySearchResults(api_wrapper=search)\n\n# initialize the agent\nagent_chain = initialize_agent(\n    [tavily_tool],\n    llm,\n    agent=AgentType.STRUCTURED_CHAT_ZERO_SHOT_REACT_DESCRIPTION,\n    verbose=True,\n)\n\n# run the agent\nagent_chain.run(\n    "What happened in the latest burning man floods?",\n)\n')),(0,i.kt)("h4",{id:"result"},"Result:"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-commandline"},"    \n    \n    > Entering new AgentExecutor chain...\n    Thought: I'm not aware of the current situation regarding the Burning Man event. I'll need to search for recent news about any flooding that might have affected it.\n    Action:\n    ```\n    {\n      \"action\": \"tavily_search_results_json\",\n      \"action_input\": {\"query\": \"Burning Man floods latest news\"}\n    }\n    ```\n    Observation: [{'url': 'https://www.theguardian.com/culture/2023/sep/03/burning-man-nevada-festival-floods', 'content': 'More on this story\\nMore on this story\\nBurning Man revelers begin exodus from festival after road reopens\\nBurning Man festival-goers trapped in desert as rain turns site to mud\\n\\nOfficials investigate death at Burning Man as thousands stranded by floods\\n\\nBurning Man festivalgoers surrounded by mud in Nevada desert \u2013 video\\nBurning Man attendees roadblocked by climate activists: \u2018They have a privileged mindset\u2019\\n\\nin our favor. We will let you know. It could be sooner, and it could be later,\u201d said an update on the Burning Man website on Saturday evening.'}, {'url': 'https://www.npr.org/2023/09/03/1197497458/the-latest-on-the-burning-man-flooding', 'content': \"National\\nThe latest on the Burning Man flooding\\nClaudia Peschiutta\\n\\nClaudia Peschiutta\\nAuthorities are investigating a death at the Burning Man festival in the Nevada desert after tens of thousands of people are stuck in camps because of rain.\\nSCOTT DETROW, HOST:\\n\\nDETROW: Well, that's NPR's Claudia Peschiutta covered and caked in a lot of mud at Burning Man. Thanks for talking to us.\\nPESCHIUTTA: Confirmed.\\nDETROW: Stay dry as much as you can.\\n\\nwith NPR's Claudia Peschiutta, who's at her first burn, and she told me it's muddy where she is, but that she and her camp family have been making the best of things.\"}, {'url': 'https://www.npr.org/2023/09/03/1197497458/the-latest-on-the-burning-man-flooding', 'content': \"National\\nThe latest on the Burning Man flooding\\nClaudia Peschiutta\\n\\nClaudia Peschiutta\\nAuthorities are investigating a death at the Burning Man festival in the Nevada desert after tens of thousands of people are stuck in camps because of rain.\\nSCOTT DETROW, HOST:\\n\\nDETROW: Well, that's NPR's Claudia Peschiutta covered and caked in a lot of mud at Burning Man. Thanks for talking to us.\\nPESCHIUTTA: Confirmed.\\nDETROW: Stay dry as much as you can.\\n\\nwith NPR's Claudia Peschiutta, who's at her first burn, and she told me it's muddy where she is, but that she and her camp family have been making the best of things.\"}, {'url': 'https://abcnews.go.com/US/burning-man-flooding-happened-stranded-festivalgoers/story?id=102908331', 'content': 'Tens of thousands of Burning Man attendees are now able to leave the festival after a downpour and massive flooding left them stranded over the weekend.\\n\\nIn 2013, according to a blog post in the \"Burning Man Journal,\" a rainstorm similarly rolled in, unexpectedly \"trapping 160 people on the playa overnight.\"\\n\\nABC News\\nVideo\\nLive\\nShows\\nElection 2024\\n538\\nStream on\\nBurning Man flooding: What happened to stranded festivalgoers?\\nSome 64,000 people were still on site Monday as the exodus began.\\n\\nBurning Man has been hosted for over 30 years, according to a statement from the organizers.'}, {'url': 'https://www.today.com/news/what-is-burning-man-flood-death-rcna103231', 'content': 'Tens of thousands of Burning Man festivalgoers are slowly making their way home from the Nevada desert after muddy conditions from heavy rains made it nearly impossible to leave over the weekend.\\n\\naccording to burningman.org.\\n\\nPresident Biden was notified of the situation and, according to a spokesperson, administration officials monitored and received updates on the latest details.\\nWhy are people stranded at Burning Man?\\n\\n\"Thank goodness this community knows how to take care of each other,\" the Instagram page for Burning Man Information Radio wrote on a post predicting more rain.'}]\n    Thought:The latest Burning Man event was severely affected by heavy rainfall that led to flooding. This resulted in tens of thousands of festival attendees getting stuck in their camps due to the muddy conditions. As a result, the exodus from the festival was delayed. An unfortunate incident also occurred, with a death being investigated at the festival. The situation was severe enough that President Biden was informed about it and administration officials were monitoring it. However, it seems that the festival goers were able to handle the situation well, as the Burning Man community is known for looking out for each other. This is not the first time a rainstorm has disrupted the Burning Man event; a similar incident occurred in 2013 where a sudden storm trapped people overnight. \n    Action:\n    ```\n    {\n      \"action\": \"Final Answer\",\n      \"action_input\": \"The latest Burning Man event was severely affected by heavy rainfall that led to flooding. This resulted in tens of thousands of festival attendees getting stuck in their camps due to the muddy conditions, delaying their exit from the festival. An unfortunate incident also occurred, with a death being investigated at the festival. The situation was severe enough that President Biden was informed about it and administration officials were monitoring it. However, the festival goers were able to handle the situation well, as the Burning Man community is known for looking out for each other. This is not the first time a rainstorm has disrupted the Burning Man event; a similar incident occurred in 2013 when a sudden storm trapped people overnight.\"\n    }\n    ```\n    \n    > Finished chain.\n\n\n\n\n\n    'The latest Burning Man event was severely affected by heavy rainfall that led to flooding. This resulted in tens of thousands of festival attendees getting stuck in their camps due to the muddy conditions, delaying their exit from the festival. An unfortunate incident also occurred, with a death being investigated at the festival. The situation was severe enough that President Biden was informed about it and administration officials were monitoring it. However, the festival goers were able to handle the situation well, as the Burning Man community is known for looking out for each other. This is not the first time a rainstorm has disrupted the Burning Man event; a similar incident occurred in 2013 when a sudden storm trapped people overnight.'\n")))}h.isMDXComponent=!0}}]);