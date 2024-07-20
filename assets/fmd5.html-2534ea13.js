import{_ as n}from"./plugin-vue_export-helper-c27b6911.js";import{o as s,c as a,f as t}from"./app-2d387a81.js";const p={},e=t(`<div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> hashlib
<span class="token keyword">import</span> os

<span class="token keyword">def</span> <span class="token function">getmd5</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># Open,close, read file and calculate MD5 on its contents </span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">&#39;rb&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> file_to_check<span class="token punctuation">:</span>
        <span class="token comment"># read contents of the file</span>
        data <span class="token operator">=</span> file_to_check<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>    
        <span class="token comment"># pipe contents of the file through</span>
        <span class="token keyword">return</span> hashlib<span class="token punctuation">.</span>md5<span class="token punctuation">(</span>data<span class="token punctuation">)</span><span class="token punctuation">.</span>hexdigest<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">fsmd5</span><span class="token punctuation">(</span>fpath<span class="token punctuation">)</span><span class="token punctuation">:</span>
    ret <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> p<span class="token punctuation">,</span> folders<span class="token punctuation">,</span> fs <span class="token keyword">in</span> os<span class="token punctuation">.</span>walk<span class="token punctuation">(</span>fpath<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> i <span class="token keyword">in</span> fs<span class="token punctuation">:</span>
            fullpath <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>p<span class="token punctuation">,</span>i<span class="token punctuation">)</span>
            relative_f <span class="token operator">=</span> fullpath<span class="token punctuation">[</span><span class="token builtin">len</span><span class="token punctuation">(</span>fpath<span class="token punctuation">)</span><span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
            ret<span class="token punctuation">[</span>relative_f<span class="token punctuation">]</span> <span class="token operator">=</span> getmd5<span class="token punctuation">(</span>fullpath<span class="token punctuation">)</span>
    <span class="token keyword">return</span> ret
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),o=[e];function c(l,i){return s(),a("div",null,o)}const d=n(p,[["render",c],["__file","fmd5.html.vue"]]);export{d as default};