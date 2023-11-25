import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as o,o as r,c as p,b as a,d as n,e as s,f as l}from"./app-94fe83fe.js";const i={},d=l(`<table><thead><tr><th>URI</th><th>Type</th><th>ReqParam</th><th>Resp</th><th>Desc</th></tr></thead><tbody><tr><td>/api/models</td><td>GET</td><td>None</td><td><code>[{label: &quot;&quot;, value: &quot;&quot;},{label: &quot;&quot;, value: &quot;&quot;}]</code></td><td>Get avaliable models list</td></tr><tr><td>/api/manual_levels</td><td>GET</td><td>None</td><td><code>{&quot;level_name&quot;: &quot;&quot;}</code></td><td>Get the definition of Manual levels</td></tr><tr><td>/api/parse</td><td>POST</td><td><a href="#request-parameters-of-parse-api">Click Here for Details</a></td><td><a href="#response-of-parse-api">Click Here for Details</a></td><td>Make summarization and make levels based on contents</td></tr></tbody></table><h2 id="request-parameters-of-parse-api" tabindex="-1"><a class="header-anchor" href="#request-parameters-of-parse-api" aria-hidden="true">#</a> Request Parameters of Parse API</h2><h3 id="for-manual-levels" tabindex="-1"><a class="header-anchor" href="#for-manual-levels" aria-hidden="true">#</a> For Manual Levels</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Manual&quot;</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;model&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;LevelDefinition&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;level_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;definition&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The content&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="for-auto-levels" tabindex="-1"><a class="header-anchor" href="#for-auto-levels" aria-hidden="true">#</a> For Auto Levels</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Auto&quot;</span><span class="token punctuation">,</span> 
    <span class="token property">&quot;model&quot;</span><span class="token operator">:</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;text&quot;</span><span class="token operator">:</span> <span class="token string">&quot;The content&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="response-of-parse-api" tabindex="-1"><a class="header-anchor" href="#response-of-parse-api" aria-hidden="true">#</a> Response of Parse API</h2><h3 id="response-data-for-manual-levels" tabindex="-1"><a class="header-anchor" href="#response-data-for-manual-levels" aria-hidden="true">#</a> Response Data For Manual Levels</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;Level&quot;</span><span class="token operator">:</span> <span class="token string">&quot;normal&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;Summarization&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Joseph caught running red light, adjudicated by TCI.&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="response-data-for-auto-levels" tabindex="-1"><a class="header-anchor" href="#response-data-for-auto-levels" aria-hidden="true">#</a> Response Data For Auto Levels</h3><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
    <span class="token property">&quot;level&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
    <span class="token property">&quot;reason&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Minor traffic violation captured by camera.&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;domain&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Traffic Law&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;narrative&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Joseph Citizen caught running red light.&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,11),u={href:"https://haystack.deepset.ai/",target:"_blank",rel:"noopener noreferrer"},c=a("br",null,null,-1),v={href:"https://www.philschmid.de/inferentia2-llama-7b",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.volcengine.com/theme/4759773-R-7-1",target:"_blank",rel:"noopener noreferrer"};function m(k,q){const e=o("ExternalLinkIcon");return r(),p("div",null,[d,a("p",null,[a("a",u,[n("https://haystack.deepset.ai/"),s(e)]),c,a("a",v,[n("https://www.philschmid.de/inferentia2-llama-7b"),s(e)])]),a("p",null,[a("a",h,[n("如何让子元素的大小与父元素大小相同？"),s(e)])])])}const g=t(i,[["render",m],["__file","UI_Service.html.vue"]]);export{g as default};
