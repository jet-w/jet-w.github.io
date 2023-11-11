const n=JSON.parse(`{"key":"v-af8e2ab4","path":"/techniques/coding/css/07.float.html","title":"07. Float","lang":"en-US","frontmatter":{"title":"07. Float","date":"2023-11-11T00:00:00.000Z","icon":"/assets/icon/common/css3.svg","author":"Haiyue","category":["CSS"],"tag":["skills"],"star":false,"sticky":false,"description":"Float &lt;!doctype html&gt; &lt;html&gt; &lt;head&gt; &lt;style&gt; .box1 { width: 200px; height: 200px; background-color: #bfa; float: right; /* 通过浮动可以使得一个元素向其父元素的左侧或右侧移动使用 使用float属性来设置元素的浮动 可选值： none: 默认值，元素不浮动 left: 元素向左浮动 right: 元素向右浮动 注意：元素设置浮动后，水平布局等式不需要强制成立 元素设置浮动后，会完全从文档流中脱离，因此元素下面的在文档流中的元素会自动向左上移动 浮动特点： 1. 浮动元素会完全脱离文档流，不在占据文档流中的位置 2. 设置浮动后，元素回想父元素的左侧或右侧移动 3. 浮动元素默认不会从父元素中移出 4. 浮动元素不会覆盖其他元素 5. 若上面为没有浮动的块元素，则浮动元素无法上移 6. 浮动元素不会超过他上面的浮动的兄弟元素，最多何其一样高 */ } .box2 { width: 200px; height: 200px; background-color: orangered; float: left; } &lt;/style&gt; &lt;/head&gt; &lt;body&gt; &lt;div class=\\"box1\\"&gt;&lt;/div&gt; &lt;div class=\\"box2\\"&gt;&lt;/div&gt; &lt;/body&gt; &lt;/html&gt;","head":[["meta",{"property":"og:url","content":"https://seamice.github.io/blog/techniques/coding/css/07.float.html"}],["meta",{"property":"og:site_name","content":"Haiyue's Blog"}],["meta",{"property":"og:title","content":"07. Float"}],["meta",{"property":"og:description","content":"Float &lt;!doctype html&gt; &lt;html&gt; &lt;head&gt; &lt;style&gt; .box1 { width: 200px; height: 200px; background-color: #bfa; float: right; /* 通过浮动可以使得一个元素向其父元素的左侧或右侧移动使用 使用float属性来设置元素的浮动 可选值： none: 默认值，元素不浮动 left: 元素向左浮动 right: 元素向右浮动 注意：元素设置浮动后，水平布局等式不需要强制成立 元素设置浮动后，会完全从文档流中脱离，因此元素下面的在文档流中的元素会自动向左上移动 浮动特点： 1. 浮动元素会完全脱离文档流，不在占据文档流中的位置 2. 设置浮动后，元素回想父元素的左侧或右侧移动 3. 浮动元素默认不会从父元素中移出 4. 浮动元素不会覆盖其他元素 5. 若上面为没有浮动的块元素，则浮动元素无法上移 6. 浮动元素不会超过他上面的浮动的兄弟元素，最多何其一样高 */ } .box2 { width: 200px; height: 200px; background-color: orangered; float: left; } &lt;/style&gt; &lt;/head&gt; &lt;body&gt; &lt;div class=\\"box1\\"&gt;&lt;/div&gt; &lt;div class=\\"box2\\"&gt;&lt;/div&gt; &lt;/body&gt; &lt;/html&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-11-11T07:03:02.000Z"}],["meta",{"property":"article:author","content":"Haiyue"}],["meta",{"property":"article:tag","content":"skills"}],["meta",{"property":"article:published_time","content":"2023-11-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-11T07:03:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"07. Float\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-11T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-11T07:03:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Haiyue\\"}]}"]]},"headers":[{"level":2,"title":"Float","slug":"float","link":"#float","children":[]},{"level":2,"title":"NaviBar","slug":"navibar","link":"#navibar","children":[]},{"level":2,"title":"Height collapse problem","slug":"height-collapse-problem","link":"#height-collapse-problem","children":[]}],"git":{"createdTime":1699686182000,"updatedTime":1699686182000,"contributors":[{"name":"Haiyue","email":"nutterair1989@gmail.com","commits":1}]},"readingTime":{"minutes":4.1,"words":1231},"filePathRelative":"techniques/coding/css/07.float.md","localizedDate":"November 11, 2023","excerpt":"<h2> Float</h2>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token doctype\\"><span class=\\"token punctuation\\">&lt;!</span><span class=\\"token doctype-tag\\">doctype</span> <span class=\\"token name\\">html</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>html</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>head</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>style</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token style\\"><span class=\\"token language-css\\">\\n      <span class=\\"token selector\\">.box1</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token property\\">width</span><span class=\\"token punctuation\\">:</span> 200px<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token property\\">height</span><span class=\\"token punctuation\\">:</span> 200px<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token property\\">background-color</span><span class=\\"token punctuation\\">:</span> #bfa<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token property\\">float</span><span class=\\"token punctuation\\">:</span> right<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token comment\\">/*\\n          通过浮动可以使得一个元素向其父元素的左侧或右侧移动使用\\n            使用float属性来设置元素的浮动\\n              可选值：\\n                none: 默认值，元素不浮动\\n                left: 元素向左浮动\\n                right: 元素向右浮动\\n            注意：元素设置浮动后，水平布局等式不需要强制成立\\n              元素设置浮动后，会完全从文档流中脱离，因此元素下面的在文档流中的元素会自动向左上移动\\n            \\n            浮动特点：\\n              1. 浮动元素会完全脱离文档流，不在占据文档流中的位置\\n              2. 设置浮动后，元素回想父元素的左侧或右侧移动\\n              3. 浮动元素默认不会从父元素中移出\\n              4. 浮动元素不会覆盖其他元素\\n              5. 若上面为没有浮动的块元素，则浮动元素无法上移\\n              6. 浮动元素不会超过他上面的浮动的兄弟元素，最多何其一样高\\n        */</span>\\n      <span class=\\"token punctuation\\">}</span>\\n      \\n      <span class=\\"token selector\\">.box2</span> <span class=\\"token punctuation\\">{</span>\\n        <span class=\\"token property\\">width</span><span class=\\"token punctuation\\">:</span> 200px<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token property\\">height</span><span class=\\"token punctuation\\">:</span> 200px<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token property\\">background-color</span><span class=\\"token punctuation\\">:</span> orangered<span class=\\"token punctuation\\">;</span>\\n        <span class=\\"token property\\">float</span><span class=\\"token punctuation\\">:</span> left<span class=\\"token punctuation\\">;</span>\\n      <span class=\\"token punctuation\\">}</span>\\n    </span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>style</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>head</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>body</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>box1<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n    <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">class</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>box2<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n  <span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>body</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>html</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
