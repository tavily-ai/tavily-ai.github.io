"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3990],{5680:(e,r,t)=>{t.d(r,{xA:()=>l,yg:()=>h});var n=t(6540);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=n.createContext({}),p=function(e){var r=n.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},l=function(e){var r=p(e.components);return n.createElement(s.Provider,{value:r},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},y=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=p(t),y=a,h=u["".concat(s,".").concat(y)]||u[y]||m[y]||o;return t?n.createElement(h,c(c({ref:r},l),{},{components:t})):n.createElement(h,c({ref:r},l))}));function h(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,c=new Array(o);c[0]=y;var i={};for(var s in r)hasOwnProperty.call(r,s)&&(i[s]=r[s]);i.originalType=e,i[u]="string"==typeof e?e:a,c[1]=i;for(var p=2;p<o;p++)c[p]=t[p];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}y.displayName="MDXCreateElement"},6279:(e,r,t)=>{t.r(r),t.d(r,{contentTitle:()=>c,default:()=>u,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=t(8168),a=(t(6540),t(5680));const o={},c="Agent Example",i={unversionedId:"gpt-researcher/example",id:"gpt-researcher/example",isDocsHomePage:!1,title:"Agent Example",description:"If you're interested in using GPT Researcher as a standalone agent, you can easily import it into any existing Python project. Below, is an example of calling the agent to generate a research report:",source:"@site/docs/gpt-researcher/example.md",sourceDirName:"gpt-researcher",slug:"/gpt-researcher/example",permalink:"/docs/gpt-researcher/example",editUrl:"https://github.com/tavily-ai/tavily-python/tree/master/docs/docs/gpt-researcher/example.md",tags:[],version:"current",frontMatter:{},sidebar:"docsSidebar",previous:{title:"Customization",permalink:"/docs/gpt-researcher/config"},next:{title:"Tailored Research",permalink:"/docs/gpt-researcher/tailored-research"}},s=[],p={toc:s},l="wrapper";function u(e){let{components:r,...t}=e;return(0,a.yg)(l,(0,n.A)({},p,t,{components:r,mdxType:"MDXLayout"}),(0,a.yg)("h1",{id:"agent-example"},"Agent Example"),(0,a.yg)("p",null,"If you're interested in using GPT Researcher as a standalone agent, you can easily import it into any existing Python project. Below, is an example of calling the agent to generate a research report:"),(0,a.yg)("pre",null,(0,a.yg)("code",{parentName:"pre",className:"language-python"},'from gpt_researcher import GPTResearcher\nimport asyncio\n\n# It is best to define global constants at the top of your script\nQUERY = "What happened in the latest burning man floods?"\nREPORT_TYPE = "research_report"\n\nasync def fetch_report(query, report_type):\n    """\n    Fetch a research report based on the provided query and report type.\n    """\n    researcher = GPTResearcher(query=query, report_type=report_type, config_path=None)\n    await researcher.conduct_research()\n    report = await researcher.write_report()\n    return report\n\nasync def generate_research_report():\n    """\n    This is a sample script that executes an async main function to run a research report.\n    """\n    report = await fetch_report(QUERY, REPORT_TYPE)\n    print(report)\n\nif __name__ == "__main__":\n    asyncio.run(generate_research_report())\n')),(0,a.yg)("p",null,"You can further enhance this example to use the returned report as context for generating valuable content such as news article, marketing content, email templates, newsletters, etc."),(0,a.yg)("p",null,"You can also use GPT Researcher to gather information about code documentation, business analysis, financial information and more. All of which can be used to complete much more complex tasks that require factual and high quality realtime information."))}u.isMDXComponent=!0}}]);