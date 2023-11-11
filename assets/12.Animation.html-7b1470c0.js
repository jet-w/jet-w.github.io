const n=JSON.parse(`{"key":"v-6b4f42c4","path":"/techniques/coding/css/12.Animation.html","title":"12. Amimation","lang":"en-US","frontmatter":{"title":"12. Amimation","date":"2023-11-11T00:00:00.000Z","icon":"/assets/icon/common/css3.svg","author":"Haiyue","category":["CSS"],"tag":["skills"],"star":false,"sticky":false,"description":"Double Color Switch &lt;style&gt; @keyframe change-color{ from {background-color: red;} to {background-color: blue;} } .box{ width: 200px; height: 200px; background-color: grey; } .box-animation{ animation-name: change-color; animation-duration: 10s; animation-iteration-count: 1; animation-delay: 5s; } &lt;/style&gt; &lt;div class=\\"box box-animation\\"&gt;&lt;/div&gt;","head":[["meta",{"property":"og:url","content":"https://seamice.github.io/blog/techniques/coding/css/12.Animation.html"}],["meta",{"property":"og:site_name","content":"Haiyue's Blog"}],["meta",{"property":"og:title","content":"12. Amimation"}],["meta",{"property":"og:description","content":"Double Color Switch &lt;style&gt; @keyframe change-color{ from {background-color: red;} to {background-color: blue;} } .box{ width: 200px; height: 200px; background-color: grey; } .box-animation{ animation-name: change-color; animation-duration: 10s; animation-iteration-count: 1; animation-delay: 5s; } &lt;/style&gt; &lt;div class=\\"box box-animation\\"&gt;&lt;/div&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-11-11T07:03:02.000Z"}],["meta",{"property":"article:author","content":"Haiyue"}],["meta",{"property":"article:tag","content":"skills"}],["meta",{"property":"article:published_time","content":"2023-11-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-11T07:03:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"12. Amimation\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-11T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-11T07:03:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Haiyue\\"}]}"]]},"headers":[{"level":2,"title":"Double Color Switch","slug":"double-color-switch","link":"#double-color-switch","children":[]},{"level":2,"title":"Multiple Colors Switch","slug":"multiple-colors-switch","link":"#multiple-colors-switch","children":[]},{"level":2,"title":"Position Move","slug":"position-move","link":"#position-move","children":[]}],"git":{"createdTime":1699686182000,"updatedTime":1699686182000,"contributors":[{"name":"Haiyue","email":"nutterair1989@gmail.com","commits":1}]},"readingTime":{"minutes":0.72,"words":215},"filePathRelative":"techniques/coding/css/12.Animation.md","localizedDate":"November 11, 2023","excerpt":"<h2> Double Color Switch</h2>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>style</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token style\\"><span class=\\"token language-css\\">\\n  <span class=\\"token atrule\\"><span class=\\"token rule\\">@keyframe</span> change-color</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token selector\\">from</span> <span class=\\"token punctuation\\">{</span><span class=\\"token property\\">background-color</span><span class=\\"token punctuation\\">:</span> red<span class=\\"token punctuation\\">;</span><span class=\\"token punctuation\\">}</span>\\n    <span class=\\"token selector\\">to</span> <span class=\\"token punctuation\\">{</span><span class=\\"token property\\">background-color</span><span class=\\"token punctuation\\">:</span> blue<span class=\\"token punctuation\\">;</span><span class=\\"token punctuation\\">}</span>\\n  <span class=\\"token punctuation\\">}</span>\\n\\n  <span class=\\"token selector\\">.box</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token property\\">width</span><span class=\\"token punctuation\\">:</span> 200px<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token property\\">height</span><span class=\\"token punctuation\\">:</span> 200px<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token property\\">background-color</span><span class=\\"token punctuation\\">:</span> grey<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n\\n  <span class=\\"token selector\\">.box-animation</span><span class=\\"token punctuation\\">{</span>\\n    <span class=\\"token property\\">animation-name</span><span class=\\"token punctuation\\">:</span> change-color<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token property\\">animation-duration</span><span class=\\"token punctuation\\">:</span> 10s<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token property\\">animation-iteration-count</span><span class=\\"token punctuation\\">:</span> 1<span class=\\"token punctuation\\">;</span>\\n    <span class=\\"token property\\">animation-delay</span><span class=\\"token punctuation\\">:</span> 5s<span class=\\"token punctuation\\">;</span>\\n  <span class=\\"token punctuation\\">}</span>\\n</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>style</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>box box-animation<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
