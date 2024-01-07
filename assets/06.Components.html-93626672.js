const t=JSON.parse(`{"key":"v-b8d3f164","path":"/techniques/coding/front-end/vue/06.Components.html","title":"06. Components","lang":"en-US","frontmatter":{"title":"06. Components","date":"2023-11-11T00:00:00.000Z","icon":"circle-dot","author":"Haiyue","category":["VUE"],"tag":["skills"],"star":false,"sticky":false,"description":"Basic Usuage Basic Example &lt;!DOCTYPE html&gt; &lt;html&gt; \\t&lt;head&gt; \\t\\t&lt;meta charset=\\"utf-8\\"&gt; \\t\\t&lt;title&gt;&lt;/title&gt; \\t\\t&lt;script src=\\"../js/vue.js\\"&gt;&lt;/script&gt; \\t&lt;/head&gt; \\t&lt;body&gt; \\t\\t&lt;div id=\\"app\\"&gt; &lt;!-- 使用组件 --&gt; \\t\\t\\t&lt;my-cpn&gt;&lt;/my-cpn&gt; \\t\\t\\t&lt;my-cpn&gt;&lt;/my-cpn&gt; \\t\\t&lt;/div&gt; \\t\\t&lt;script&gt; \\t\\t\\t \\t\\t\\t// 1. 创建组件构造器对象 \\t\\t\\tconst cpnC = Vue.extend({ \\t\\t\\t\\ttemplate: \` \\t\\t\\t\\t &lt;div&gt; \\t\\t\\t\\t\\t &lt;h2&gt; 我是标题&lt;/h2&gt; \\t\\t\\t\\t\\t\\t &lt;p&gt; 我是内容，哈哈哈哈哈&lt;/p&gt; \\t\\t\\t\\t\\t\\t &lt;p&gt; 我是内容，呵呵呵呵&lt;/p&gt; \\t\\t\\t\\t\\t\\t &lt;p&gt; 我是内容，嘿嘿嘿嘿嘿&lt;/p&gt; \\t\\t\\t\\t\\t &lt;/div&gt; \\t\\t\\t\\t\` \\t\\t\\t}) \\t\\t\\t// 2. 注册组件（全局注册） \\t\\t\\tVue.component('my-cpn', cpnC) \\t\\t\\t \\t\\t\\t// 3. 创建vue实例 \\t\\t\\tconst app = new Vue({ \\t\\t\\t\\tel:\\"#app\\", \\t\\t\\t\\tdata:{ \\t\\t\\t\\t\\tmessage: 'Hello world' \\t\\t\\t\\t}, \\t\\t\\t}) \\t\\t&lt;/script&gt; \\t&lt;/body&gt; &lt;/html&gt;","head":[["meta",{"property":"og:url","content":"https://seamice.github.io/blog/techniques/coding/front-end/vue/06.Components.html"}],["meta",{"property":"og:site_name","content":"Haiyue's Blog"}],["meta",{"property":"og:title","content":"06. Components"}],["meta",{"property":"og:description","content":"Basic Usuage Basic Example &lt;!DOCTYPE html&gt; &lt;html&gt; \\t&lt;head&gt; \\t\\t&lt;meta charset=\\"utf-8\\"&gt; \\t\\t&lt;title&gt;&lt;/title&gt; \\t\\t&lt;script src=\\"../js/vue.js\\"&gt;&lt;/script&gt; \\t&lt;/head&gt; \\t&lt;body&gt; \\t\\t&lt;div id=\\"app\\"&gt; &lt;!-- 使用组件 --&gt; \\t\\t\\t&lt;my-cpn&gt;&lt;/my-cpn&gt; \\t\\t\\t&lt;my-cpn&gt;&lt;/my-cpn&gt; \\t\\t&lt;/div&gt; \\t\\t&lt;script&gt; \\t\\t\\t \\t\\t\\t// 1. 创建组件构造器对象 \\t\\t\\tconst cpnC = Vue.extend({ \\t\\t\\t\\ttemplate: \` \\t\\t\\t\\t &lt;div&gt; \\t\\t\\t\\t\\t &lt;h2&gt; 我是标题&lt;/h2&gt; \\t\\t\\t\\t\\t\\t &lt;p&gt; 我是内容，哈哈哈哈哈&lt;/p&gt; \\t\\t\\t\\t\\t\\t &lt;p&gt; 我是内容，呵呵呵呵&lt;/p&gt; \\t\\t\\t\\t\\t\\t &lt;p&gt; 我是内容，嘿嘿嘿嘿嘿&lt;/p&gt; \\t\\t\\t\\t\\t &lt;/div&gt; \\t\\t\\t\\t\` \\t\\t\\t}) \\t\\t\\t// 2. 注册组件（全局注册） \\t\\t\\tVue.component('my-cpn', cpnC) \\t\\t\\t \\t\\t\\t// 3. 创建vue实例 \\t\\t\\tconst app = new Vue({ \\t\\t\\t\\tel:\\"#app\\", \\t\\t\\t\\tdata:{ \\t\\t\\t\\t\\tmessage: 'Hello world' \\t\\t\\t\\t}, \\t\\t\\t}) \\t\\t&lt;/script&gt; \\t&lt;/body&gt; &lt;/html&gt;"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-07T09:30:40.000Z"}],["meta",{"property":"article:author","content":"Haiyue"}],["meta",{"property":"article:tag","content":"skills"}],["meta",{"property":"article:published_time","content":"2023-11-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-07T09:30:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"06. Components\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-07T09:30:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Haiyue\\"}]}"]]},"headers":[{"level":2,"title":"Basic Usuage","slug":"basic-usuage","link":"#basic-usuage","children":[{"level":3,"title":"Basic Example","slug":"basic-example","link":"#basic-example","children":[]},{"level":3,"title":"Global and Local Register","slug":"global-and-local-register","link":"#global-and-local-register","children":[]},{"level":3,"title":"Parent and Children","slug":"parent-and-children","link":"#parent-and-children","children":[]},{"level":3,"title":"Syntactic sugar","slug":"syntactic-sugar","link":"#syntactic-sugar","children":[]}]},{"level":2,"title":"Template Detach","slug":"template-detach","link":"#template-detach","children":[]},{"level":2,"title":"Data & Methods","slug":"data-methods","link":"#data-methods","children":[]},{"level":2,"title":"Communication","slug":"communication","link":"#communication","children":[]},{"level":2,"title":"Component Access","slug":"component-access","link":"#component-access","children":[]},{"level":2,"title":"Slot","slug":"slot","link":"#slot","children":[]},{"level":2,"title":"Single File Component","slug":"single-file-component","link":"#single-file-component","children":[]}],"git":{"createdTime":1700008188000,"updatedTime":1704619840000,"contributors":[{"name":"Haiyue","email":"nutterair1989@gmail.com","commits":2}]},"readingTime":{"minutes":7.68,"words":2303},"filePathRelative":"techniques/coding/front-end/vue/06.Components.md","localizedDate":"November 11, 2023","excerpt":"<h2> Basic Usuage</h2>\\n<h3> Basic Example</h3>\\n<div class=\\"language-html line-numbers-mode\\" data-ext=\\"html\\"><pre class=\\"language-html\\"><code><span class=\\"token doctype\\"><span class=\\"token punctuation\\">&lt;!</span><span class=\\"token doctype-tag\\">DOCTYPE</span> <span class=\\"token name\\">html</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>html</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>head</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>meta</span> <span class=\\"token attr-name\\">charset</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>utf-8<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>title</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>title</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span> <span class=\\"token attr-name\\">src</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>../js/vue.js<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>head</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>body</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>div</span> <span class=\\"token attr-name\\">id</span><span class=\\"token attr-value\\"><span class=\\"token punctuation attr-equals\\">=</span><span class=\\"token punctuation\\">\\"</span>app<span class=\\"token punctuation\\">\\"</span></span><span class=\\"token punctuation\\">&gt;</span></span>\\n      <span class=\\"token comment\\">&lt;!-- 使用组件 --&gt;</span>\\n\\t\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>my-cpn</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>my-cpn</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>my-cpn</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>my-cpn</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>div</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;</span>script</span><span class=\\"token punctuation\\">&gt;</span></span><span class=\\"token script\\"><span class=\\"token language-javascript\\">\\n\\t\\t\\t\\n\\t\\t\\t<span class=\\"token comment\\">// 1. 创建组件构造器对象</span>\\n\\t\\t\\t<span class=\\"token keyword\\">const</span> cpnC <span class=\\"token operator\\">=</span> Vue<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">extend</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n\\t\\t\\t\\t<span class=\\"token literal-property property\\">template</span><span class=\\"token operator\\">:</span> <span class=\\"token template-string\\"><span class=\\"token template-punctuation string\\">\`</span><span class=\\"token string\\">\\n\\t\\t\\t\\t   &lt;div&gt;\\n\\t\\t\\t\\t\\t   &lt;h2&gt; 我是标题&lt;/h2&gt;\\n\\t\\t\\t\\t\\t\\t &lt;p&gt; 我是内容，哈哈哈哈哈&lt;/p&gt;\\n\\t\\t\\t\\t\\t\\t &lt;p&gt; 我是内容，呵呵呵呵&lt;/p&gt;\\n\\t\\t\\t\\t\\t\\t &lt;p&gt; 我是内容，嘿嘿嘿嘿嘿&lt;/p&gt;\\n\\t\\t\\t\\t\\t &lt;/div&gt;\\n\\t\\t\\t\\t</span><span class=\\"token template-punctuation string\\">\`</span></span>\\n\\t\\t\\t<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n\\t\\t\\t<span class=\\"token comment\\">// 2. 注册组件（全局注册）</span>\\n\\t\\t\\tVue<span class=\\"token punctuation\\">.</span><span class=\\"token function\\">component</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'my-cpn'</span><span class=\\"token punctuation\\">,</span> cpnC<span class=\\"token punctuation\\">)</span>\\n\\t\\t\\t\\n\\t\\t\\t<span class=\\"token comment\\">// 3. 创建vue实例</span>\\n\\t\\t\\t<span class=\\"token keyword\\">const</span> app <span class=\\"token operator\\">=</span> <span class=\\"token keyword\\">new</span> <span class=\\"token class-name\\">Vue</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">{</span>\\n\\t\\t\\t\\t<span class=\\"token literal-property property\\">el</span><span class=\\"token operator\\">:</span><span class=\\"token string\\">\\"#app\\"</span><span class=\\"token punctuation\\">,</span>\\n\\t\\t\\t\\t<span class=\\"token literal-property property\\">data</span><span class=\\"token operator\\">:</span><span class=\\"token punctuation\\">{</span>\\n\\t\\t\\t\\t\\t<span class=\\"token literal-property property\\">message</span><span class=\\"token operator\\">:</span> <span class=\\"token string\\">'Hello world'</span>\\n\\t\\t\\t\\t<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">,</span>\\n\\t\\t\\t<span class=\\"token punctuation\\">}</span><span class=\\"token punctuation\\">)</span>\\n\\t\\t</span></span><span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>script</span><span class=\\"token punctuation\\">&gt;</span></span>\\n\\t<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>body</span><span class=\\"token punctuation\\">&gt;</span></span>\\n<span class=\\"token tag\\"><span class=\\"token tag\\"><span class=\\"token punctuation\\">&lt;/</span>html</span><span class=\\"token punctuation\\">&gt;</span></span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{t as data};