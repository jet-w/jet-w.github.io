import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as s,f as n}from"./app-8df58881.js";const t={},i=n(`<h2 id="split-mp3-into-multiparts" tabindex="-1"><a class="header-anchor" href="#split-mp3-into-multiparts" aria-hidden="true">#</a> Split mp3 into multiparts</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># segment_time </span>
ffmpeg <span class="token parameter variable">-i</span> somefile.mp3 <span class="token parameter variable">-f</span> segment <span class="token parameter variable">-segment_time</span> <span class="token number">3</span> <span class="token parameter variable">-c</span> copy out%03d.mp3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div>`,2),r=[i];function l(p,c){return a(),s("div",null,r)}const d=e(t,[["render",l],["__file","q_a.html.vue"]]);export{d as default};