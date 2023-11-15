import{_ as p}from"./plugin-vue_export-helper-c27b6911.js";import{r as i,o as r,c as d,b as e,d as a,e as l,w as n,f as u}from"./app-dbe05420.js";const v={},m={href:"https://cli.vuejs.org/guide/creating-a-project.html",target:"_blank",rel:"noopener noreferrer"},b=u(`<h2 id="basic-infomation" tabindex="-1"><a class="header-anchor" href="#basic-infomation" aria-hidden="true">#</a> Basic Infomation</h2><div class="hint-container info"><p class="hint-container-title">Info</p><p>Vue 构建的时候分为两种类型</p><ol><li>runtime-only: 代码中不可以有任何的template</li><li>runtime-compile: 代码中允许存在template，因为存在compiler可编译tempalte</li></ol></div><p>若使用webpack碰到需要编译，但报错使用runtime-only版本，可在webpack配置文件中增加如下配置</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>  <span class="token literal-property property">resolve</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token comment">//配置可以省略的文件扩展名</span>
		<span class="token literal-property property">extentions</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token string">&#39;.js&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.css&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;.vue&#39;</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token comment">//解决runtime-only无法处理模板问题（方法：直接指定含有compiler的vue版本）</span>
		<span class="token literal-property property">alias</span><span class="token operator">:</span> <span class="token punctuation">{</span>
			<span class="token string-property property">&#39;vue$&#39;</span><span class="token operator">:</span> <span class="token string">&#39;vue/dist/vue.esm.js&#39;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>el和template的关系：若同时存在，vue会将template中所有内容替换至el中所指定的部分。</p><h2 id="what-s-vue-cli" tabindex="-1"><a class="header-anchor" href="#what-s-vue-cli" aria-hidden="true">#</a> What&#39;s Vue CLI</h2><p>什么是脚手架，即Vue CLI (Command-Line Interface)。CLI可以快速高效生成Vue开发环境及对应的webpack配置信息。</p><p>使用套件要求：</p><ol><li>nodejs</li><li>webpack<br> #由于其需要生成很多webpack相关配置，必须依赖webpack相关内容<br><code>npm install webpack -g</code></li><li>vue-cli<div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">#安装脚手架3</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span>  @vue/cli
<span class="token comment">#在3基础上使用模板即可使用脚手架2</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> @vue/cli-init

<span class="token comment">#安装脚手架2</span>
<span class="token function">npm</span> <span class="token function">install</span> <span class="token parameter variable">-g</span> vue
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></li></ol><h2 id="create-project" tabindex="-1"><a class="header-anchor" href="#create-project" aria-hidden="true">#</a> Create Project</h2>`,10),k=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,[e("span",{class:"token comment"},"# vue init now works exactly the same as vue-cli@2.x"),a(`
vue init webpack my-project
`)])]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"}),e("div",{class:"line-number"})])],-1),h=e("div",{class:"language-bash line-numbers-mode","data-ext":"sh"},[e("pre",{class:"language-bash"},[e("code",null,`vue create myproject
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1);function g(f,_){const c=i("ExternalLinkIcon"),o=i("CodeTabs");return r(),d("div",null,[e("p",null,[e("a",m,[a("Official Tutorial"),l(c)])]),b,l(o,{id:"60",data:[{id:"vue-cli 2"},{id:"vue-cli 3"}]},{title0:n(({value:s,isActive:t})=>[a("vue-cli 2")]),title1:n(({value:s,isActive:t})=>[a("vue-cli 3")]),tab0:n(({value:s,isActive:t})=>[k]),tab1:n(({value:s,isActive:t})=>[h]),_:1})])}const y=p(v,[["render",g],["__file","01.index.html.vue"]]);export{y as default};
