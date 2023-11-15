import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as p,o as l,c as i,e as u,w as a,f as r,d as s,b as n}from"./app-dbe05420.js";const k={},d=r(`<p>前面使用的axios实例是全局的axios实例，在实际生产环境中可能会有不同类型的网络请求需求，因此需多个axios实例进行处理。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token comment">//创建实例</span>
<span class="token keyword">const</span> instance1 <span class="token operator">=</span> axios<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">baseURL</span><span class="token operator">:</span> <span class="token string">&#39;http://httpbin.org&#39;</span><span class="token punctuation">,</span>
  <span class="token literal-property property">timeout</span><span class="token operator">:</span> <span class="token number">5000</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span>

<span class="token comment">//使用实例</span>
<span class="token function">instance1</span><span class="token punctuation">(</span><span class="token punctuation">{</span>
  <span class="token literal-property property">url</span><span class="token operator">:</span> <span class="token string">&#39;get&#39;</span>
<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">then</span><span class="token punctuation">(</span><span class="token parameter">data</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>

<span class="token punctuation">}</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="encapsulation" tabindex="-1"><a class="header-anchor" href="#encapsulation" aria-hidden="true">#</a> Encapsulation</h2>`,3),m=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"//网络封装模块"),s(`
`),n("span",{class:"token keyword"},"import"),s(" axios "),n("span",{class:"token keyword"},"from"),s(),n("span",{class:"token string"},"'axios'"),s(`

`),n("span",{class:"token comment"},"//第一种封装方式"),s(`
`),n("span",{class:"token comment"},"// @param config 请求参数"),s(`
`),n("span",{class:"token comment"},"// @param success 成功请求回调函数"),s(`
`),n("span",{class:"token comment"},"// @param failure 失败回调函数"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"request"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("config"),n("span",{class:"token punctuation"},","),s(" success"),n("span",{class:"token punctuation"},","),s(" failure")]),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" instance "),n("span",{class:"token operator"},"="),s(" axios"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"create"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"baseURL"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"timeout"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5000"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token function"},"instance"),n("span",{class:"token punctuation"},"("),s("config"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"res"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"err"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token function"},"failure"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),v=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"//第二种封装方式"),s(`
`),n("span",{class:"token comment"},"// @param config 请求参数"),s(`
`),n("span",{class:"token comment"},"// @param success 成功请求回调函数"),s(`
`),n("span",{class:"token comment"},"// @param failure 失败回调函数"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"request"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"config"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" instance "),n("span",{class:"token operator"},"="),s(" axios"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"create"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"baseURL"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"timeout"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5000"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token function"},"instance"),n("span",{class:"token punctuation"},"("),s("config"),n("span",{class:"token punctuation"},"."),s("baseConfig"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"res"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      config`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"success"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"err"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      config`),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"failure"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),b=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"//第三种封装方式"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"request"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"config"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token keyword"},"new"),s(),n("span",{class:"token class-name"},"Promise"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},[s("resolve"),n("span",{class:"token punctuation"},","),s(" reject")]),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token keyword"},"const"),s(" instance "),n("span",{class:"token operator"},"="),s(" axios"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"create"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token literal-property property"},"baseURL"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
      `),n("span",{class:"token literal-property property"},"timeout"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5000"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token function"},"instance"),n("span",{class:"token punctuation"},"("),s("config"),n("span",{class:"token punctuation"},"."),s("baseConfig"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"then"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"res"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token function"},"resolve"),n("span",{class:"token punctuation"},"("),s("res"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"catch"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"err"),s(),n("span",{class:"token operator"},"=>"),s(),n("span",{class:"token punctuation"},"{"),s(`
      `),n("span",{class:"token function"},"reject"),n("span",{class:"token punctuation"},"("),s("err"),n("span",{class:"token punctuation"},")"),s(`
    `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token punctuation"},"}"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),f=n("div",{class:"language-javascript line-numbers-mode","data-ext":"js"},[n("pre",{class:"language-javascript"},[n("code",null,[n("span",{class:"token comment"},"//第四种封装方式"),s(`
`),n("span",{class:"token keyword"},"export"),s(),n("span",{class:"token keyword"},"function"),s(),n("span",{class:"token function"},"request"),n("span",{class:"token punctuation"},"("),n("span",{class:"token parameter"},"config"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"{"),s(`
  `),n("span",{class:"token keyword"},"const"),s(" instance "),n("span",{class:"token operator"},"="),s(" axios"),n("span",{class:"token punctuation"},"."),n("span",{class:"token function"},"create"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},"{"),s(`
    `),n("span",{class:"token literal-property property"},"baseURL"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token string"},"''"),n("span",{class:"token punctuation"},","),s(`
    `),n("span",{class:"token literal-property property"},"timeout"),n("span",{class:"token operator"},":"),s(),n("span",{class:"token number"},"5000"),s(`
  `),n("span",{class:"token punctuation"},"}"),n("span",{class:"token punctuation"},")"),s(`
  `),n("span",{class:"token keyword"},"return"),s(),n("span",{class:"token function"},"instance"),n("span",{class:"token punctuation"},"("),s("config"),n("span",{class:"token punctuation"},"."),s("baseConfig"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token punctuation"},"}"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function g(y,h){const c=p("CodeTabs");return l(),i("div",null,[d,u(c,{id:"7",data:[{id:"method 1"},{id:"method 2"},{id:"method 3"},{id:"method 4"}]},{title0:a(({value:t,isActive:e})=>[s("method 1")]),title1:a(({value:t,isActive:e})=>[s("method 2")]),title2:a(({value:t,isActive:e})=>[s("method 3")]),title3:a(({value:t,isActive:e})=>[s("method 4")]),tab0:a(({value:t,isActive:e})=>[m]),tab1:a(({value:t,isActive:e})=>[v]),tab2:a(({value:t,isActive:e})=>[b]),tab3:a(({value:t,isActive:e})=>[f]),_:1})])}const w=o(k,[["render",g],["__file","03.Examples.html.vue"]]);export{w as default};
