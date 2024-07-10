const n=JSON.parse(`{"key":"v-6f2703ac","path":"/techniques/coding/python/common/SingleClass.html","title":"SingleClass","lang":"en-US","frontmatter":{"title":"SingleClass","date":"2023-12-18T00:00:00.000Z","author":"Haiyue","icon":"circle-dot","category":["python","csv"],"star":false,"sticky":false,"description":"Using __new__ import threading class class_ins: _instance_lock = thr0eading.Lock() def __init__(self): print('__init__') if hasattr(self, 'tile_dbs'): return print('__init__ later') self.tile_dbs = dict() #Single Class def __new__(cls, *args, **kwargs): print(cls, args, kwargs) print(type(cls)) print(cls.__name__) if not hasattr(eval(cls.__name__), \\"_instance\\"): with eval(cls.__name__)._instance_lock: if not hasattr(eval(cls.__name__), \\"_instance\\"): eval(cls.__name__)._instance = object.__new__(cls) return eval(cls.__name__)._instance def __del__(self): pass a = class_ins()","head":[["meta",{"property":"og:url","content":"https://seamice.github.io/blog/techniques/coding/python/common/SingleClass.html"}],["meta",{"property":"og:site_name","content":"Haiyue's Blog"}],["meta",{"property":"og:title","content":"SingleClass"}],["meta",{"property":"og:description","content":"Using __new__ import threading class class_ins: _instance_lock = thr0eading.Lock() def __init__(self): print('__init__') if hasattr(self, 'tile_dbs'): return print('__init__ later') self.tile_dbs = dict() #Single Class def __new__(cls, *args, **kwargs): print(cls, args, kwargs) print(type(cls)) print(cls.__name__) if not hasattr(eval(cls.__name__), \\"_instance\\"): with eval(cls.__name__)._instance_lock: if not hasattr(eval(cls.__name__), \\"_instance\\"): eval(cls.__name__)._instance = object.__new__(cls) return eval(cls.__name__)._instance def __del__(self): pass a = class_ins()"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-07-10T12:00:28.000Z"}],["meta",{"property":"article:author","content":"Haiyue"}],["meta",{"property":"article:published_time","content":"2023-12-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-10T12:00:28.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"SingleClass\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-12-18T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-10T12:00:28.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Haiyue\\"}]}"]]},"headers":[{"level":2,"title":"Using __new__","slug":"using-new","link":"#using-new","children":[]},{"level":2,"title":"Using __metaclass__","slug":"using-metaclass","link":"#using-metaclass","children":[]}],"git":{"createdTime":1720612828000,"updatedTime":1720612828000,"contributors":[{"name":"Jet","email":"nutterair1989@gmail.com","commits":1}]},"readingTime":{"minutes":0.31,"words":94},"filePathRelative":"techniques/coding/python/common/SingleClass.md","localizedDate":"December 18, 2023","excerpt":"<h2> Using <code>__new__</code></h2>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> threading\\n\\n<span class=\\"token keyword\\">class</span> <span class=\\"token class-name\\">class_ins</span><span class=\\"token punctuation\\">:</span>\\n    _instance_lock <span class=\\"token operator\\">=</span> thr0eading<span class=\\"token punctuation\\">.</span>Lock<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">__init__</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'__init__'</span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token builtin\\">hasattr</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'tile_dbs'</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n            <span class=\\"token keyword\\">return</span>\\n        <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'__init__ later'</span><span class=\\"token punctuation\\">)</span>\\n        self<span class=\\"token punctuation\\">.</span>tile_dbs <span class=\\"token operator\\">=</span> <span class=\\"token builtin\\">dict</span><span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n    <span class=\\"token comment\\">#Single Class</span>\\n    <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">__new__</span><span class=\\"token punctuation\\">(</span>cls<span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">*</span>args<span class=\\"token punctuation\\">,</span> <span class=\\"token operator\\">**</span>kwargs<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>cls<span class=\\"token punctuation\\">,</span> args<span class=\\"token punctuation\\">,</span> kwargs<span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span><span class=\\"token builtin\\">type</span><span class=\\"token punctuation\\">(</span>cls<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>cls<span class=\\"token punctuation\\">.</span>__name__<span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token keyword\\">if</span> <span class=\\"token keyword\\">not</span> <span class=\\"token builtin\\">hasattr</span><span class=\\"token punctuation\\">(</span><span class=\\"token builtin\\">eval</span><span class=\\"token punctuation\\">(</span>cls<span class=\\"token punctuation\\">.</span>__name__<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"_instance\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n            <span class=\\"token keyword\\">with</span> <span class=\\"token builtin\\">eval</span><span class=\\"token punctuation\\">(</span>cls<span class=\\"token punctuation\\">.</span>__name__<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>_instance_lock<span class=\\"token punctuation\\">:</span>\\n                <span class=\\"token keyword\\">if</span> <span class=\\"token keyword\\">not</span> <span class=\\"token builtin\\">hasattr</span><span class=\\"token punctuation\\">(</span><span class=\\"token builtin\\">eval</span><span class=\\"token punctuation\\">(</span>cls<span class=\\"token punctuation\\">.</span>__name__<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">\\"_instance\\"</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n                    <span class=\\"token builtin\\">eval</span><span class=\\"token punctuation\\">(</span>cls<span class=\\"token punctuation\\">.</span>__name__<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>_instance <span class=\\"token operator\\">=</span> <span class=\\"token builtin\\">object</span><span class=\\"token punctuation\\">.</span>__new__<span class=\\"token punctuation\\">(</span>cls<span class=\\"token punctuation\\">)</span>\\n        <span class=\\"token keyword\\">return</span> <span class=\\"token builtin\\">eval</span><span class=\\"token punctuation\\">(</span>cls<span class=\\"token punctuation\\">.</span>__name__<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">.</span>_instance\\n    <span class=\\"token keyword\\">def</span> <span class=\\"token function\\">__del__</span><span class=\\"token punctuation\\">(</span>self<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n        <span class=\\"token keyword\\">pass</span>\\n\\na <span class=\\"token operator\\">=</span> class_ins<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
