const e=JSON.parse(`{"key":"v-4095ce8a","path":"/techniques/coding/python/psql_conn_pool.html","title":"Psql DB conn Pool","lang":"en-US","frontmatter":{"title":"Psql DB conn Pool","date":"2023-07-19T00:00:00.000Z","author":"Haiyue","icon":"/assets/icon/common/pool.svg","category":["python"],"tag":["postgresql","connection"],"star":false,"sticky":false,"description":"The class diagram for connection pool Explaination SimpleConnectionPool: This class is suitable only for single-threaded applications. i.e., If we create a connection pool using this class, then we can’t share this across different threads. So use this class to manage the connection pool only when you have a single-threaded application. ThreadedConnectionPool: As the name suggests, this class used in a multithreaded environment. i.e., the connection pool created using this class can be shared between multiple threads. PersistentConnectionPool: This class is used in the multithread application, where a pool assigns persistent connections to different threads. As the name suggests, each thread gets a single connection from the pool, i.e., the thread can’t use more than one connection from the pool.","head":[["meta",{"property":"og:url","content":"https://seamice.github.io/blog/techniques/coding/python/psql_conn_pool.html"}],["meta",{"property":"og:site_name","content":"Haiyue's Blog"}],["meta",{"property":"og:title","content":"Psql DB conn Pool"}],["meta",{"property":"og:description","content":"The class diagram for connection pool Explaination SimpleConnectionPool: This class is suitable only for single-threaded applications. i.e., If we create a connection pool using this class, then we can’t share this across different threads. So use this class to manage the connection pool only when you have a single-threaded application. ThreadedConnectionPool: As the name suggests, this class used in a multithreaded environment. i.e., the connection pool created using this class can be shared between multiple threads. PersistentConnectionPool: This class is used in the multithread application, where a pool assigns persistent connections to different threads. As the name suggests, each thread gets a single connection from the pool, i.e., the thread can’t use more than one connection from the pool."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2023-11-11T07:03:02.000Z"}],["meta",{"property":"article:author","content":"Haiyue"}],["meta",{"property":"article:tag","content":"postgresql"}],["meta",{"property":"article:tag","content":"connection"}],["meta",{"property":"article:published_time","content":"2023-07-19T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2023-11-11T07:03:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Psql DB conn Pool\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-07-19T00:00:00.000Z\\",\\"dateModified\\":\\"2023-11-11T07:03:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Haiyue\\"}]}"]]},"headers":[{"level":2,"title":"The class diagram for connection pool","slug":"the-class-diagram-for-connection-pool","link":"#the-class-diagram-for-connection-pool","children":[]},{"level":2,"title":"Explaination","slug":"explaination","link":"#explaination","children":[]},{"level":2,"title":"Examples","slug":"examples","link":"#examples","children":[]},{"level":2,"title":"References","slug":"references","link":"#references","children":[]}],"git":{"createdTime":1699686182000,"updatedTime":1699686182000,"contributors":[{"name":"Haiyue","email":"nutterair1989@gmail.com","commits":1}]},"readingTime":{"minutes":1.55,"words":464},"filePathRelative":"techniques/coding/python/psql_conn_pool.md","localizedDate":"July 19, 2023","excerpt":"<h2> The class diagram for connection pool</h2>\\n<h2> Explaination</h2>\\n<ul>\\n<li><strong>SimpleConnectionPool</strong>: This class is suitable only for single-threaded applications. i.e., If we create a connection pool using this class, then we can’t share this across different threads. So use this class to manage the connection pool only when you have a single-threaded application.</li>\\n<li><strong>ThreadedConnectionPool</strong>: As the name suggests, this class used in a multithreaded environment. i.e., the connection pool created using this class can be shared between multiple threads.</li>\\n<li><strong>PersistentConnectionPool</strong>: This class is used in the multithread application, where a pool assigns persistent connections to different threads. As the name suggests, each thread gets a single connection from the pool, i.e., the thread can’t use more than one connection from the pool.</li>\\n</ul>","autoDesc":true}`);export{e as data};