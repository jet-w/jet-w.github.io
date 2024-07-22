import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as i,c as t,b as n,d as c,e as o,f as p}from"./app-cc172c2e.js";const l={},r=p(`<h2 id="add-headers" tabindex="-1"><a class="header-anchor" href="#add-headers" aria-hidden="true">#</a> Add headers</h2><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">add_header</span> Access-Control-Allow-Credentials true</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">add_header</span> Access-Control-Allow-Origin      *</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">add_header</span> Access-Control-Allow-Methods     GET,POST</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">add_header</span> Access-Control-Allow-Headers     NT,X-Mx-ReqToken,Keep-Alive,User-Agent,X-Requested-With,If-Modified-Since,Cache-Control,Content-Type,Authorization</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="compress" tabindex="-1"><a class="header-anchor" href="#compress" aria-hidden="true">#</a> Compress</h2><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">gzip</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span>   
<span class="token directive"><span class="token keyword">gzip_vary</span> <span class="token boolean">on</span></span><span class="token punctuation">;</span> 
<span class="token directive"><span class="token keyword">gzip_min_length</span> <span class="token number">1024</span></span><span class="token punctuation">;</span> 
<span class="token directive"><span class="token keyword">gzip_proxied</span> expired no-cache no-store private auth</span><span class="token punctuation">;</span> 
<span class="token directive"><span class="token keyword">gzip_types</span> text/plain text/css text/xml text/javascript application/x-javascript application/javascript application/xml application/octet-stream</span><span class="token punctuation">;</span> 
<span class="token directive"><span class="token keyword">gzip_disable</span> <span class="token string">&quot;MSIE [1-6]\\.&quot;</span></span><span class="token punctuation">;</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="max-size" tabindex="-1"><a class="header-anchor" href="#max-size" aria-hidden="true">#</a> Max size</h2><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">client_max_body_size</span> <span class="token number">100M</span></span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="ssl" tabindex="-1"><a class="header-anchor" href="#ssl" aria-hidden="true">#</a> SSL</h2><div class="language-nginx line-numbers-mode" data-ext="nginx"><pre class="language-nginx"><code><span class="token directive"><span class="token keyword">server_name</span> _</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">ssl_certificate</span>     server.crt</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">ssl_certificate_key</span> server.key</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">ssl_protocols</span>       TLSv1 TLSv1.1 TLSv1.2</span><span class="token punctuation">;</span>
<span class="token directive"><span class="token keyword">ssl_ciphers</span>         HIGH:!aNULL:!MD5</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),d={href:"https://www.cnblogs.com/yanjieli/p/15229907.html",target:"_blank",rel:"noopener noreferrer"};function u(v,k){const s=a("ExternalLinkIcon");return i(),t("div",null,[r,n("p",null,[n("a",d,[c("https://www.cnblogs.com/yanjieli/p/15229907.html"),o(s)])])])}const x=e(l,[["render",u],["__file","proxy.html.vue"]]);export{x as default};