const n=JSON.parse(`{"key":"v-308a3e30","path":"/techniques/coding/python/SeniorFunction.html","title":"Senior Functions","lang":"en-US","frontmatter":{"title":"Senior Functions","date":"2023-11-11T00:00:00.000Z","author":"Haiyue","icon":"circle-dot","category":["python","pip"],"star":false,"sticky":false,"description":"Filter # returns True if the argument passed is even def check_even(number): if number % 2 == 0: return True return False numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] # if an element passed to check_even() returns True, select it even_numbers_iterator = filter(check_even, numbers) # converting to list even_numbers = list(even_numbers_iterator) print(even_numbers) # Output: [2, 4, 6, 8, 10]","head":[["meta",{"property":"og:url","content":"https://seamice.github.io/blog/techniques/coding/python/SeniorFunction.html"}],["meta",{"property":"og:site_name","content":"Haiyue's Blog"}],["meta",{"property":"og:title","content":"Senior Functions"}],["meta",{"property":"og:description","content":"Filter # returns True if the argument passed is even def check_even(number): if number % 2 == 0: return True return False numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] # if an element passed to check_even() returns True, select it even_numbers_iterator = filter(check_even, numbers) # converting to list even_numbers = list(even_numbers_iterator) print(even_numbers) # Output: [2, 4, 6, 8, 10]"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-01-07T09:30:40.000Z"}],["meta",{"property":"article:author","content":"Haiyue"}],["meta",{"property":"article:published_time","content":"2023-11-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-01-07T09:30:40.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Senior Functions\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-11-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-01-07T09:30:40.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Haiyue\\"}]}"]]},"headers":[{"level":2,"title":"Filter","slug":"filter","link":"#filter","children":[]},{"level":2,"title":"Reduce","slug":"reduce","link":"#reduce","children":[]},{"level":2,"title":"Map","slug":"map","link":"#map","children":[]}],"git":{"createdTime":1699686727000,"updatedTime":1704619840000,"contributors":[{"name":"Haiyue","email":"nutterair1989@gmail.com","commits":2}]},"readingTime":{"minutes":0.71,"words":212},"filePathRelative":"techniques/coding/python/SeniorFunction.md","localizedDate":"November 11, 2023","excerpt":"<h2> Filter</h2>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token comment\\"># returns True if the argument passed is even</span>\\n\\n<span class=\\"token keyword\\">def</span> <span class=\\"token function\\">check_even</span><span class=\\"token punctuation\\">(</span>number<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">if</span> number <span class=\\"token operator\\">%</span> <span class=\\"token number\\">2</span> <span class=\\"token operator\\">==</span> <span class=\\"token number\\">0</span><span class=\\"token punctuation\\">:</span>\\n          <span class=\\"token keyword\\">return</span> <span class=\\"token boolean\\">True</span>  \\n    <span class=\\"token keyword\\">return</span> <span class=\\"token boolean\\">False</span>\\nnumbers <span class=\\"token operator\\">=</span> <span class=\\"token punctuation\\">[</span><span class=\\"token number\\">1</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">2</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">3</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">4</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">5</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">6</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">7</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">8</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">9</span><span class=\\"token punctuation\\">,</span> <span class=\\"token number\\">10</span><span class=\\"token punctuation\\">]</span>\\n\\n<span class=\\"token comment\\"># if an element passed to check_even() returns True, select it</span>\\neven_numbers_iterator <span class=\\"token operator\\">=</span> <span class=\\"token builtin\\">filter</span><span class=\\"token punctuation\\">(</span>check_even<span class=\\"token punctuation\\">,</span> numbers<span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\"># converting to list</span>\\neven_numbers <span class=\\"token operator\\">=</span> <span class=\\"token builtin\\">list</span><span class=\\"token punctuation\\">(</span>even_numbers_iterator<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>even_numbers<span class=\\"token punctuation\\">)</span>\\n<span class=\\"token comment\\"># Output: [2, 4, 6, 8, 10]</span>\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};
