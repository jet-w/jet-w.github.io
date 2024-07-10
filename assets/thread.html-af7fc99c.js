const n=JSON.parse(`{"key":"v-2a80a46c","path":"/techniques/coding/python/common/thread.html","title":"Thread","lang":"en-US","frontmatter":{"title":"Thread","icon":"circle-dot","date":"2023-07-10T00:00:00.000Z","category":["python"],"tag":["threads"],"star":false,"sticky":false,"description":"In this article, I implement a very simple thread pool using threading package. Details see the code below. Thread implementation import threading class thread_util: def __init__(self, thread_max = 20): self.__thread_pool__ = list() self.__thread_max__ = 1 if thread_max: self.__thread_max__ = thread_max def process(self, target, args, name): ''' @param target The function to excute using thread @param args The arguments for target @param name The name of the thread ''' th = threading.Thread(target=target, args=args, name= name) self.__thread_pool__.append(th) th.start() self.__update_thread__() def wait(self): ''' Waiting the thread pool ''' self.__update_thread__(1) def __update_thread__(self, count = None): c = self.__thread_max__ if count: c = count while len(self.__thread_pool__) &gt;= c: dead_pool = [] for th in self.__thread_pool__: if not th.is_alive(): dead_pool.append(th) for item in dead_pool: self.__thread_pool__.remove(item) #time.sleep(0.1)","head":[["meta",{"property":"og:url","content":"https://seamice.github.io/blog/techniques/coding/python/common/thread.html"}],["meta",{"property":"og:site_name","content":"Haiyue's Blog"}],["meta",{"property":"og:title","content":"Thread"}],["meta",{"property":"og:description","content":"In this article, I implement a very simple thread pool using threading package. Details see the code below. Thread implementation import threading class thread_util: def __init__(self, thread_max = 20): self.__thread_pool__ = list() self.__thread_max__ = 1 if thread_max: self.__thread_max__ = thread_max def process(self, target, args, name): ''' @param target The function to excute using thread @param args The arguments for target @param name The name of the thread ''' th = threading.Thread(target=target, args=args, name= name) self.__thread_pool__.append(th) th.start() self.__update_thread__() def wait(self): ''' Waiting the thread pool ''' self.__update_thread__(1) def __update_thread__(self, count = None): c = self.__thread_max__ if count: c = count while len(self.__thread_pool__) &gt;= c: dead_pool = [] for th in self.__thread_pool__: if not th.is_alive(): dead_pool.append(th) for item in dead_pool: self.__thread_pool__.remove(item) #time.sleep(0.1)"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-07-10T12:00:28.000Z"}],["meta",{"property":"article:author","content":"Haiyue"}],["meta",{"property":"article:tag","content":"threads"}],["meta",{"property":"article:published_time","content":"2023-07-10T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-10T12:00:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Thread\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-07-10T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-10T12:00:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Haiyue\\",\\"url\\":\\"https://jet-w.github.io/blog/\\"}]}"]]},"headers":[{"level":2,"title":"Thread implementation","slug":"thread-implementation","link":"#thread-implementation","children":[]}],"git":{"createdTime":1720612828000,"updatedTime":1720612828000,"contributors":[{"name":"Jet","email":"nutterair1989@gmail.com","commits":1}]},"readingTime":{"minutes":0.46,"words":138},"filePathRelative":"techniques/coding/python/common/thread.md","localizedDate":"July 10, 2023","excerpt":"<p>In this article, I implement a very simple thread pool using threading package. Details see the code below.</p>\\n<h2> Thread implementation</h2>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> threading\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">thread_util</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">__init__</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">,</span> thread_max <span class=\\"token operator\\">=</span> <span class=\\"token number\\">20</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        self<span class=\\"token punctuation\\">.</span>__thread_pool__ <span class=\\"token operator\\">=</span> <span class=\\"token builtin\\">list</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n        self<span class=\\"token punctuation\\">.</span>__thread_max__ <span class=\\"token operator\\">=</span> <span class=\\"token number\\">1</span>\\n        <span class=\\"token keyword\\">if</span> thread_max<span class=\\"token punctuation\\">:</span>\\n            self<span class=\\"token punctuation\\">.</span>__thread_max__ <span class=\\"token operator\\">=</span> thread_max\\n    \\n    <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">process</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">,</span> target<span class=\\"token punctuation\\">,</span> args<span class=\\"token punctuation\\">,</span> name<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token triple-quoted-string string\\">'''\\n        @param target The function to excute using thread\\n        @param args The arguments for target\\n        @param name The name of the thread\\n        '''</span>\\n        th <span class=\\"token operator\\">=</span> threading<span class=\\"token punctuation\\">.</span>Thread<span class=\\"token punctuation\\">(</span>target<span class=\\"token operator\\">=</span>target<span class=\\"token punctuation\\">,</span> args<span class=\\"token operator\\">=</span>args<span class=\\"token punctuation\\">,</span> name<span class=\\"token operator\\">=</span> name<span class=\\"token punctuation\\">)</span>\\n        self<span class=\\"token punctuation\\">.</span>__thread_pool__<span class=\\"token punctuation\\">.</span>append<span class=\\"token punctuation\\">(</span>th<span class=\\"token punctuation\\">)</span>\\n        th<span class=\\"token punctuation\\">.</span>start<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n        self<span class=\\"token punctuation\\">.</span>__update_thread__<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n    \\n    <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">wait</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token triple-quoted-string string\\">'''\\n        Waiting the thread pool\\n        '''</span>\\n        self<span class=\\"token punctuation\\">.</span>__update_thread__<span class=\\"token punctuation\\">(</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">)</span>\\n    \\n    <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">__update_thread__</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">,</span> count <span class=\\"token operator\\">=</span> <span class=\\"token boolean\\">None</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        c <span class=\\"token operator\\">=</span> self<span class=\\"token punctuation\\">.</span>__thread_max__\\n        <span class=\\"token keyword\\">if</span> count<span class=\\"token punctuation\\">:</span>\\n            c <span class=\\"token operator\\">=</span> count\\n        <span class=\\"token keyword\\">while</span> <span class=\\"token builtin\\">len</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">.</span>__thread_pool__<span class=\\"token punctuation\\">)</span> <span class=\\"token operator\\">&gt;=</span> c<span class=\\"token punctuation\\">:</span>\\n            dead_pool <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token punctuation\\">]</span>\\n            <span class=\\"token keyword\\">for</span> th <span class=\\"token keyword\\">in</span> self<span class=\\"token punctuation\\">.</span>__thread_pool__<span class=\\"token punctuation\\">:</span>\\n                <span class=\\"token keyword\\">if</span> <span class=\\"token keyword\\">not</span> th<span class=\\"token punctuation\\">.</span>is_alive<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n                    dead_pool<span class=\\"token punctuation\\">.</span>append<span class=\\"token punctuation\\">(</span>th<span class=\\"token punctuation\\">)</span>\\n            <span class=\\"token keyword\\">for</span> item <span class=\\"token keyword\\">in</span> dead_pool<span class=\\"token punctuation\\">:</span>\\n                self<span class=\\"token punctuation\\">.</span>__thread_pool__<span class=\\"token punctuation\\">.</span>remove<span class=\\"token punctuation\\">(</span>item<span class=\\"token punctuation\\">)</span>\\n            <span class=\\"token comment\\">#time.sleep(0.1)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
