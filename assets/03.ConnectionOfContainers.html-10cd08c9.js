import{_ as a}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as t,c as r,b as e,d as o,e as i,f as c}from"./app-ec160c11.js";const d={},p=c(`<h2 id="port-mapping" tabindex="-1"><a class="header-anchor" href="#port-mapping" aria-hidden="true">#</a> Port Mapping</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-P</span> training/webapp python app.py
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">-p</span> <span class="token number">5000</span>:5000 training/webapp python app.py
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><div class="hint-container info"><p class="hint-container-title">Interpretation</p><ul><li>-P: map to a random local port</li><li>-p: map to a specific local port</li></ul></div><h2 id="view-port-mapping" tabindex="-1"><a class="header-anchor" href="#view-port-mapping" aria-hidden="true">#</a> View Port Mapping</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> port <span class="token operator">&lt;</span>container<span class="token operator">&gt;</span> <span class="token number">5000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="containers-connection" tabindex="-1"><a class="header-anchor" href="#containers-connection" aria-hidden="true">#</a> Containers Connection</h2><h3 id="create-network" tabindex="-1"><a class="header-anchor" href="#create-network" aria-hidden="true">#</a> Create network</h3><p><code>docker network create -d bridge test-net</code></p><div class="hint-container info"><p class="hint-container-title">Interpretation</p><ul><li>-d: specify the net type (bridge/overlay)</li></ul></div><h3 id="connect-container" tabindex="-1"><a class="header-anchor" href="#connect-container" aria-hidden="true">#</a> Connect Container</h3><p>Run a new container and connect to network test-net</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> run <span class="token parameter variable">-itd</span> <span class="token parameter variable">--name</span> test1 <span class="token parameter variable">--network</span> test-net ubuntu /bin/bash
<span class="token function">docker</span> run <span class="token parameter variable">-itd</span> <span class="token parameter variable">--name</span> test2 <span class="token parameter variable">--network</span> test-net ubuntu /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Now the test1 and test2 can connect each other.</p><h2 id="config-dns" tabindex="-1"><a class="header-anchor" href="#config-dns" aria-hidden="true">#</a> Config DNS</h2><p>Add configuration to <code>/etc/docker/daemon.json</code> .</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;dns&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;114.114.114.114&quot;</span><span class="token punctuation">,</span>
    <span class="token string">&quot;8.8.8.8&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Using the follow command to view the DNS info<br><code>docker run -it --rm ubuntu cat etc/resolv.conf</code></p><h3 id="specify-dns-for-container" tabindex="-1"><a class="header-anchor" href="#specify-dns-for-container" aria-hidden="true">#</a> Specify DNS for container</h3><p><code>docker run -it --rm -h host_ubuntu --dns=114.114.114.114 --dns-search=test.com ubuntu</code></p><div class="hint-container info"><p class="hint-container-title">Interpretation</p><ul><li>--rm: The file system will clean up when exit a container</li><li>-h Hostname: set the container system name, the name can be write to <code>/etc/hostname</code> and <code>/etc/hosts</code>.</li><li>--dns=IP_ADDRESS: add dns to <code>/etc/resolv.conf</code></li><li>--dns-search=DOMAIN: set the container search domain.</li></ul></div><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>`,21),l={href:"https://www.runoob.com/docker/docker-container-connection.html",target:"_blank",rel:"noopener noreferrer"};function u(h,m){const n=s("ExternalLinkIcon");return t(),r("div",null,[p,e("p",null,[e("a",l,[o("Tutoriaspoint"),i(n)])])])}const k=a(d,[["render",u],["__file","03.ConnectionOfContainers.html.vue"]]);export{k as default};
