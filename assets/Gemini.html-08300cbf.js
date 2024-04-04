const n=JSON.parse(`{"key":"v-41e102d0","path":"/techniques/AI/Gemini.html","title":"API usuage","lang":"en-US","frontmatter":{"title":"API usuage","date":"2024-03-29T00:00:00.000Z","icon":"circle-dot","author":"Haiyue","category":["AI"],"star":false,"sticky":false,"description":"Extract attributes Text import pathlib import textwrap import google.generativeai as genai from IPython.display import display from IPython.display import Markdown # Used to securely store your API key from google.colab import userdata def to_markdown(text): text = text.replace('•', ' *') return Markdown(textwrap.indent(text, '&gt; ', predicate=lambda _: True)) # Or use \`os.getenv('GOOGLE_API_KEY')\` to fetch an environment variable. GOOGLE_API_KEY=userdata.get('PaLM_Key') genai.configure(api_key=GOOGLE_API_KEY) for m in genai.list_models(): if 'generateContent' in m.supported_generation_methods: print(m.name) model = genai.GenerativeModel('gemini-pro') response = model.generate_content(\\"What is the meaning of life?\\")","head":[["meta",{"property":"og:url","content":"https://seamice.github.io/blog/techniques/AI/Gemini.html"}],["meta",{"property":"og:site_name","content":"Haiyue's Blog"}],["meta",{"property":"og:title","content":"API usuage"}],["meta",{"property":"og:description","content":"Extract attributes Text import pathlib import textwrap import google.generativeai as genai from IPython.display import display from IPython.display import Markdown # Used to securely store your API key from google.colab import userdata def to_markdown(text): text = text.replace('•', ' *') return Markdown(textwrap.indent(text, '&gt; ', predicate=lambda _: True)) # Or use \`os.getenv('GOOGLE_API_KEY')\` to fetch an environment variable. GOOGLE_API_KEY=userdata.get('PaLM_Key') genai.configure(api_key=GOOGLE_API_KEY) for m in genai.list_models(): if 'generateContent' in m.supported_generation_methods: print(m.name) model = genai.GenerativeModel('gemini-pro') response = model.generate_content(\\"What is the meaning of life?\\")"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-04-02T13:08:51.000Z"}],["meta",{"property":"article:author","content":"Haiyue"}],["meta",{"property":"article:published_time","content":"2024-03-29T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-04-02T13:08:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"API usuage\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-03-29T00:00:00.000Z\\",\\"dateModified\\":\\"2024-04-02T13:08:51.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Haiyue\\"}]}"]]},"headers":[{"level":2,"title":"Text","slug":"text","link":"#text","children":[]},{"level":2,"title":"Image","slug":"image","link":"#image","children":[]},{"level":2,"title":"Chat conversation","slug":"chat-conversation","link":"#chat-conversation","children":[]}],"git":{"createdTime":1712063331000,"updatedTime":1712063331000,"contributors":[{"name":"Haiyue","email":"nutterair1989@gmail.com","commits":1}]},"readingTime":{"minutes":0.8,"words":240},"filePathRelative":"techniques/AI/Gemini.md","localizedDate":"March 29, 2024","excerpt":"<p><a href=\\"https://colab.research.google.com/drive/1cqvQ_0mXF8gQbxzChhzXjqCPfpjhmkZC?usp=sharing\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Extract attributes</a></p>\\n<h2> Text</h2>\\n<div class=\\"language-python line-numbers-mode\\" data-ext=\\"py\\"><pre class=\\"language-python\\"><code><span class=\\"token keyword\\">import</span> pathlib\\n<span class=\\"token keyword\\">import</span> textwrap\\n<span class=\\"token keyword\\">import</span> google<span class=\\"token punctuation\\">.</span>generativeai <span class=\\"token keyword\\">as</span> genai\\n\\n<span class=\\"token keyword\\">from</span> IPython<span class=\\"token punctuation\\">.</span>display <span class=\\"token keyword\\">import</span> display\\n<span class=\\"token keyword\\">from</span> IPython<span class=\\"token punctuation\\">.</span>display <span class=\\"token keyword\\">import</span> Markdown\\n\\n<span class=\\"token comment\\"># Used to securely store your API key</span>\\n<span class=\\"token keyword\\">from</span> google<span class=\\"token punctuation\\">.</span>colab <span class=\\"token keyword\\">import</span> userdata\\n\\n\\n\\n<span class=\\"token keyword\\">def</span> <span class=\\"token function\\">to_markdown</span><span class=\\"token punctuation\\">(</span>text<span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n  text <span class=\\"token operator\\">=</span> text<span class=\\"token punctuation\\">.</span>replace<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'•'</span><span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'  *'</span><span class=\\"token punctuation\\">)</span>\\n  <span class=\\"token keyword\\">return</span> Markdown<span class=\\"token punctuation\\">(</span>textwrap<span class=\\"token punctuation\\">.</span>indent<span class=\\"token punctuation\\">(</span>text<span class=\\"token punctuation\\">,</span> <span class=\\"token string\\">'&gt; '</span><span class=\\"token punctuation\\">,</span> predicate<span class=\\"token operator\\">=</span><span class=\\"token keyword\\">lambda</span> <span class=\\"token keyword\\">_</span><span class=\\"token punctuation\\">:</span> <span class=\\"token boolean\\">True</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">)</span>\\n\\n<span class=\\"token comment\\"># Or use \`os.getenv('GOOGLE_API_KEY')\` to fetch an environment variable.</span>\\nGOOGLE_API_KEY<span class=\\"token operator\\">=</span>userdata<span class=\\"token punctuation\\">.</span>get<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'PaLM_Key'</span><span class=\\"token punctuation\\">)</span>\\ngenai<span class=\\"token punctuation\\">.</span>configure<span class=\\"token punctuation\\">(</span>api_key<span class=\\"token operator\\">=</span>GOOGLE_API_KEY<span class=\\"token punctuation\\">)</span>\\n\\n\\n<span class=\\"token keyword\\">for</span> m <span class=\\"token keyword\\">in</span> genai<span class=\\"token punctuation\\">.</span>list_models<span class=\\"token punctuation\\">(</span><span class=\\"token punctuation\\">)</span><span class=\\"token punctuation\\">:</span>\\n  <span class=\\"token keyword\\">if</span> <span class=\\"token string\\">'generateContent'</span> <span class=\\"token keyword\\">in</span> m<span class=\\"token punctuation\\">.</span>supported_generation_methods<span class=\\"token punctuation\\">:</span>\\n    <span class=\\"token keyword\\">print</span><span class=\\"token punctuation\\">(</span>m<span class=\\"token punctuation\\">.</span>name<span class=\\"token punctuation\\">)</span>\\n\\n\\nmodel <span class=\\"token operator\\">=</span> genai<span class=\\"token punctuation\\">.</span>GenerativeModel<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">'gemini-pro'</span><span class=\\"token punctuation\\">)</span>\\nresponse <span class=\\"token operator\\">=</span> model<span class=\\"token punctuation\\">.</span>generate_content<span class=\\"token punctuation\\">(</span><span class=\\"token string\\">\\"What is the meaning of life?\\"</span><span class=\\"token punctuation\\">)</span>\\n\\n</code></pre><div class=\\"line-numbers\\" aria-hidden=\\"true\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{n as data};