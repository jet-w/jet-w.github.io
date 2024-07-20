import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as u,c as r,e as l,w as a,b as n,d as s}from"./app-2d387a81.js";const d={},k=n("h2",{id:"searching",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#searching","aria-hidden":"true"},"#"),s(" Searching")],-1),b=n("p",null,[s("The "),n("code",null,"find()"),s(" method of BeautifulSoup object searches for "),n("span",{style:{color:"orange"}},"first element"),s(" that satisfies the given criteria as an argument.")],-1),h=n("h3",{id:"by-id",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#by-id","aria-hidden":"true"},"#"),s(" By ID")],-1),m=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"from"),s(" bs4 "),n("span",{class:"token keyword"},"import"),s(` BeautifulSoup
fp `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token builtin"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"index.html"'),n("span",{class:"token punctuation"},")"),s(`
soup `),n("span",{class:"token operator"},"="),s(" BeautifulSoup"),n("span",{class:"token punctuation"},"("),s("fp"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'html.parser'"),n("span",{class:"token punctuation"},")"),s(`

obj `),n("span",{class:"token operator"},"="),s(" soup"),n("span",{class:"token punctuation"},"."),s("find"),n("span",{class:"token punctuation"},"("),n("span",{class:"token builtin"},"id"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'nm'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),s(),n("span",{class:"token punctuation"},"("),s("obj"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("h3",{id:"by-class",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#by-class","aria-hidden":"true"},"#"),s(" By Class")],-1),f=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"from"),s(" bs4 "),n("span",{class:"token keyword"},"import"),s(` BeautifulSoup

fp `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token builtin"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"index.html"'),n("span",{class:"token punctuation"},")"),s(`
soup `),n("span",{class:"token operator"},"="),s(" BeautifulSoup"),n("span",{class:"token punctuation"},"("),s("fp"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'html.parser'"),n("span",{class:"token punctuation"},")"),s(`

obj `),n("span",{class:"token operator"},"="),s(" soup"),n("span",{class:"token punctuation"},"."),s("find_all"),n("span",{class:"token punctuation"},"("),s("attrs"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"class"'),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"mainmenu"'),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),s(),n("span",{class:"token punctuation"},"("),s("obj"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),y=n("h3",{id:"by-attributes",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#by-attributes","aria-hidden":"true"},"#"),s(" By Attributes")],-1),g=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"from"),s(" bs4 "),n("span",{class:"token keyword"},"import"),s(` BeautifulSoup

fp `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token builtin"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"index.html"'),n("span",{class:"token punctuation"},")"),s(`
soup `),n("span",{class:"token operator"},"="),s(" BeautifulSoup"),n("span",{class:"token punctuation"},"("),s("fp"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'html.parser'"),n("span",{class:"token punctuation"},")"),s(`

obj `),n("span",{class:"token operator"},"="),s(" soup"),n("span",{class:"token punctuation"},"."),s("find"),n("span",{class:"token punctuation"},"("),s("attrs"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"type"'),n("span",{class:"token punctuation"},":"),n("span",{class:"token string"},"'text'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),s(),n("span",{class:"token punctuation"},"("),s("obj"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),_=n("p",null,[s("The "),n("code",null,"find_all()"),s(" method also accepts a filter argument. It returns "),n("span",{style:{color:"orange"}},"a list of all the elements"),s(" with the given id. In a certain HTML document, usually a single element with a particular id. Hence, using "),n("code",null,"find()"),s(" instead of "),n("code",null,"find_all()"),s(" is preferrable to search for a given id.")],-1),w=n("h3",{id:"by-id-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#by-id-1","aria-hidden":"true"},"#"),s(" By ID")],-1),x=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"from"),s(" bs4 "),n("span",{class:"token keyword"},"import"),s(` BeautifulSoup

fp `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token builtin"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"index.html"'),n("span",{class:"token punctuation"},")"),s(`
soup `),n("span",{class:"token operator"},"="),s(" BeautifulSoup"),n("span",{class:"token punctuation"},"("),s("fp"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'html.parser'"),n("span",{class:"token punctuation"},")"),s(`

obj `),n("span",{class:"token operator"},"="),s(" soup"),n("span",{class:"token punctuation"},"."),s("find_all"),n("span",{class:"token punctuation"},"("),n("span",{class:"token builtin"},"id"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token string"},"'nm'"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),s(),n("span",{class:"token punctuation"},"("),s("obj"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),B=n("h3",{id:"by-class-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#by-class-1","aria-hidden":"true"},"#"),s(" By Class")],-1),S=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"from"),s(" bs4 "),n("span",{class:"token keyword"},"import"),s(` BeautifulSoup

fp `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token builtin"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"index.html"'),n("span",{class:"token punctuation"},")"),s(`
soup `),n("span",{class:"token operator"},"="),s(" BeautifulSoup"),n("span",{class:"token punctuation"},"("),s("fp"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'html.parser'"),n("span",{class:"token punctuation"},")"),s(`

obj `),n("span",{class:"token operator"},"="),s(" soup"),n("span",{class:"token punctuation"},"."),s("find_all"),n("span",{class:"token punctuation"},"("),s("attrs"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"class"'),n("span",{class:"token punctuation"},":"),s(),n("span",{class:"token string"},'"mainmenu"'),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),s(),n("span",{class:"token punctuation"},"("),s("obj"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),j=n("h3",{id:"by-attributes-1",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#by-attributes-1","aria-hidden":"true"},"#"),s(" By Attributes")],-1),I=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"from"),s(" bs4 "),n("span",{class:"token keyword"},"import"),s(` BeautifulSoup

fp `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token builtin"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"index.html"'),n("span",{class:"token punctuation"},")"),s(`
soup `),n("span",{class:"token operator"},"="),s(" BeautifulSoup"),n("span",{class:"token punctuation"},"("),s("fp"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'html.parser'"),n("span",{class:"token punctuation"},")"),s(`

obj `),n("span",{class:"token operator"},"="),s(" soup"),n("span",{class:"token punctuation"},"."),s("find_all"),n("span",{class:"token punctuation"},"("),s("attrs"),n("span",{class:"token operator"},"="),n("span",{class:"token punctuation"},"{"),n("span",{class:"token string"},'"type"'),n("span",{class:"token punctuation"},":"),n("span",{class:"token string"},"'text'"),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),s(),n("span",{class:"token punctuation"},"("),s("obj"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),T=n("p",null,[s("The "),n("code",null,"select()"),s(" method in BeautifulSoup class accepts "),n("span",{style:{color:"orange"}},"CSS selector"),s(" as an argument. The "),n("code",null,"#"),s(" symbol is the CSS selector for id. It followed by the value of required id is passed to "),n("code",null,"select()"),s(" method. It works as the "),n("code",null,"find_all()"),s(" method.")],-1),A=n("h3",{id:"by-id-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#by-id-2","aria-hidden":"true"},"#"),s(" By ID")],-1),C=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"from"),s(" bs4 "),n("span",{class:"token keyword"},"import"),s(` BeautifulSoup

fp `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token builtin"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"index.html"'),n("span",{class:"token punctuation"},")"),s(`
soup `),n("span",{class:"token operator"},"="),s(" BeautifulSoup"),n("span",{class:"token punctuation"},"("),s("fp"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'html.parser'"),n("span",{class:"token punctuation"},")"),s(`

obj `),n("span",{class:"token operator"},"="),s(" soup"),n("span",{class:"token punctuation"},"."),s("select"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"#nm"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),s(),n("span",{class:"token punctuation"},"("),s("obj"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),D=n("h3",{id:"by-class-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#by-class-2","aria-hidden":"true"},"#"),s(" By Class")],-1),L=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"from"),s(" bs4 "),n("span",{class:"token keyword"},"import"),s(` BeautifulSoup

fp `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token builtin"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"index.html"'),n("span",{class:"token punctuation"},")"),s(`
soup `),n("span",{class:"token operator"},"="),s(" BeautifulSoup"),n("span",{class:"token punctuation"},"("),s("fp"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'html.parser'"),n("span",{class:"token punctuation"},")"),s(`

obj `),n("span",{class:"token operator"},"="),s(" soup"),n("span",{class:"token punctuation"},"."),s("select"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'".heading"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),s(),n("span",{class:"token punctuation"},"("),s("obj"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),E=n("h3",{id:"by-attributes-2",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#by-attributes-2","aria-hidden":"true"},"#"),s(" By Attributes")],-1),N=n("p",null,[s("The "),n("code",null,"select()"),s(" method can be called by passing the attributes to be compared against. The attributes must be put in a list object. It returns a list of all tags that have the given attribute."),n("br"),s(" In the following code, the "),n("code",null,"select()"),s(" method returns all the tags with type attribute.")],-1),V=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"from"),s(" bs4 "),n("span",{class:"token keyword"},"import"),s(` BeautifulSoup

fp `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token builtin"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"index.html"'),n("span",{class:"token punctuation"},")"),s(`
soup `),n("span",{class:"token operator"},"="),s(" BeautifulSoup"),n("span",{class:"token punctuation"},"("),s("fp"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'html.parser'"),n("span",{class:"token punctuation"},")"),s(`

obj `),n("span",{class:"token operator"},"="),s(" soup"),n("span",{class:"token punctuation"},"."),s("select"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"[type]"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),s(),n("span",{class:"token punctuation"},"("),s("obj"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),H=n("p",null,[s("Like the "),n("code",null,"find_all()"),s(" method, the "),n("code",null,"select()"),s(" method also returns a list. There is also a "),n("code",null,"select_one()"),s(" method to return "),n("span",{style:{color:"orange"}},"the first tag"),s(" of the given argument.")],-1),q=n("h3",{id:"by-id-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#by-id-3","aria-hidden":"true"},"#"),s(" By ID")],-1),M=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"from"),s(" bs4 "),n("span",{class:"token keyword"},"import"),s(` BeautifulSoup

fp `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token builtin"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"index.html"'),n("span",{class:"token punctuation"},")"),s(`
soup `),n("span",{class:"token operator"},"="),s(" BeautifulSoup"),n("span",{class:"token punctuation"},"("),s("fp"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'html.parser'"),n("span",{class:"token punctuation"},")"),s(`

obj `),n("span",{class:"token operator"},"="),s(" soup"),n("span",{class:"token punctuation"},"."),s("select_one"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"#nm"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),s(),n("span",{class:"token punctuation"},"("),s("obj"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),R=n("h3",{id:"by-class-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#by-class-3","aria-hidden":"true"},"#"),s(" By Class")],-1),z=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"from"),s(" bs4 "),n("span",{class:"token keyword"},"import"),s(` BeautifulSoup

fp `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token builtin"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"index.html"'),n("span",{class:"token punctuation"},")"),s(`
soup `),n("span",{class:"token operator"},"="),s(" BeautifulSoup"),n("span",{class:"token punctuation"},"("),s("fp"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'html.parser'"),n("span",{class:"token punctuation"},")"),s(`

obj `),n("span",{class:"token operator"},"="),s(" soup"),n("span",{class:"token punctuation"},"."),s("select_one"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'".heading"'),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),s(),n("span",{class:"token punctuation"},"("),s("obj"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),F=n("h3",{id:"by-attributes-3",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#by-attributes-3","aria-hidden":"true"},"#"),s(" By Attributes")],-1),G=n("p",null,[s("The "),n("code",null,"select()"),s(" method can be called by passing the attributes to be compared against. The attributes must be put in a list object. It returns a list of all tags that have the given attribute."),n("br"),s(" In the following code, the "),n("code",null,"select()"),s(" method returns all the tags with type attribute.")],-1),J=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[n("span",{class:"token keyword"},"from"),s(" bs4 "),n("span",{class:"token keyword"},"import"),s(` BeautifulSoup

fp `),n("span",{class:"token operator"},"="),s(),n("span",{class:"token builtin"},"open"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},'"index.html"'),n("span",{class:"token punctuation"},")"),s(`
soup `),n("span",{class:"token operator"},"="),s(" BeautifulSoup"),n("span",{class:"token punctuation"},"("),s("fp"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'html.parser'"),n("span",{class:"token punctuation"},")"),s(`

obj `),n("span",{class:"token operator"},"="),s(" soup"),n("span",{class:"token punctuation"},"."),s("select_one"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},`"[name='marks']"`),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),s(),n("span",{class:"token punctuation"},"("),s("obj"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),K=n("p",null,null,-1),O=n("h2",{id:"references",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#references","aria-hidden":"true"},"#"),s(" References")],-1),P={href:"https://www.tutorialspoint.com/beautiful_soup/index.htm",target:"_blank",rel:"noopener noreferrer"};function Q(U,W){const i=o("Tabs"),c=o("ExternalLinkIcon");return u(),r("div",null,[k,l(i,{id:"3",data:[{id:"find()"},{id:"find_all()"},{id:"select()"},{id:"select_one()"}]},{title0:a(({value:e,isActive:t})=>[s("find()")]),title1:a(({value:e,isActive:t})=>[s("find_all()")]),title2:a(({value:e,isActive:t})=>[s("select()")]),title3:a(({value:e,isActive:t})=>[s("select_one()")]),tab0:a(({value:e,isActive:t})=>[b,h,m,v,f,y,g]),tab1:a(({value:e,isActive:t})=>[_,w,x,B,S,j,I]),tab2:a(({value:e,isActive:t})=>[T,A,C,D,L,E,N,V]),tab3:a(({value:e,isActive:t})=>[H,q,M,R,z,F,G,J,K]),_:1},8,["data"]),O,n("p",null,[n("a",P,[s("Beautiful Soup Tutorial"),l(c)])])])}const Z=p(d,[["render",Q],["__file","bs4.html.vue"]]);export{Z as default};