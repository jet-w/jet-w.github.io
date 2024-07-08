const e=JSON.parse(`{"key":"v-67b3b95b","path":"/techniques/Tools/docker/01.basic_usuage.html","title":"Basic Usuage - Container","lang":"en-US","frontmatter":{"title":"Basic Usuage - Container","date":"2024-07-08T00:00:00.000Z","icon":"circle-dot","author":"Haiyue","category":["docker"],"tag":["docker"],"star":true,"sticky":true,"description":"Load image remotely docker pull ubuntu Check all the containers docker ps -a Container Operating Start Container docker run -it ubuntu /bin/bash parameters -i: interactive mode -t: using the terminal ubuntu: using ubuntu image /bin/bash: command for the image, here we use bash for the terminal shell","head":[["meta",{"property":"og:url","content":"https://seamice.github.io/blog/techniques/Tools/docker/01.basic_usuage.html"}],["meta",{"property":"og:site_name","content":"Haiyue's Blog"}],["meta",{"property":"og:title","content":"Basic Usuage - Container"}],["meta",{"property":"og:description","content":"Load image remotely docker pull ubuntu Check all the containers docker ps -a Container Operating Start Container docker run -it ubuntu /bin/bash parameters -i: interactive mode -t: using the terminal ubuntu: using ubuntu image /bin/bash: command for the image, here we use bash for the terminal shell"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-07-08T22:51:48.000Z"}],["meta",{"property":"article:author","content":"Haiyue"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:published_time","content":"2024-07-08T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-08T22:51:48.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Basic Usuage - Container\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-07-08T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-08T22:51:48.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Haiyue\\"}]}"]]},"headers":[{"level":2,"title":"Load image remotely","slug":"load-image-remotely","link":"#load-image-remotely","children":[]},{"level":2,"title":"Check all the containers","slug":"check-all-the-containers","link":"#check-all-the-containers","children":[]},{"level":2,"title":"Container Operating","slug":"container-operating","link":"#container-operating","children":[{"level":3,"title":"Start Container","slug":"start-container","link":"#start-container","children":[]},{"level":3,"title":"Exit from the terminal","slug":"exit-from-the-terminal","link":"#exit-from-the-terminal","children":[]},{"level":3,"title":"Rename a container","slug":"rename-a-container","link":"#rename-a-container","children":[]},{"level":3,"title":"Start a stopped container","slug":"start-a-stopped-container","link":"#start-a-stopped-container","children":[]},{"level":3,"title":"Run container in background","slug":"run-container-in-background","link":"#run-container-in-background","children":[]},{"level":3,"title":"Stop a container","slug":"stop-a-container","link":"#stop-a-container","children":[]},{"level":3,"title":"Restart a container","slug":"restart-a-container","link":"#restart-a-container","children":[]},{"level":3,"title":"Enter a running container","slug":"enter-a-running-container","link":"#enter-a-running-container","children":[]},{"level":3,"title":"Export container","slug":"export-container","link":"#export-container","children":[]},{"level":3,"title":"Import container snapshot","slug":"import-container-snapshot","link":"#import-container-snapshot","children":[]},{"level":3,"title":"Delete container","slug":"delete-container","link":"#delete-container","children":[]}]},{"level":2,"title":"Port Mapping","slug":"port-mapping","link":"#port-mapping","children":[{"level":3,"title":"Same mapping","slug":"same-mapping","link":"#same-mapping","children":[]},{"level":3,"title":"Specified Mapping Port","slug":"specified-mapping-port","link":"#specified-mapping-port","children":[]},{"level":3,"title":"View all the mapping port","slug":"view-all-the-mapping-port","link":"#view-all-the-mapping-port","children":[]}]},{"level":2,"title":"Container Monitoring","slug":"container-monitoring","link":"#container-monitoring","children":[{"level":3,"title":"Standard I/O","slug":"standard-i-o","link":"#standard-i-o","children":[]},{"level":3,"title":"Check Processes","slug":"check-processes","link":"#check-processes","children":[]},{"level":3,"title":"Load Local Path","slug":"load-local-path","link":"#load-local-path","children":[]}]},{"level":2,"title":"Share Folder With Host","slug":"share-folder-with-host","link":"#share-folder-with-host","children":[]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"git":{"createdTime":1719928231000,"updatedTime":1720479108000,"contributors":[{"name":"Haiyue","email":"nutterair1989@gmail.com","commits":2}]},"readingTime":{"minutes":0.84,"words":252},"filePathRelative":"techniques/Tools/docker/01.basic_usuage.md","localizedDate":"July 8, 2024","excerpt":"<h2> Load image remotely</h2>\\n<p><code>docker pull ubuntu</code></p>\\n<h2> Check all the containers</h2>\\n<p><code>docker ps -a</code></p>\\n<h2> Container Operating</h2>\\n<h3> Start Container</h3>\\n<p><code>docker run -it ubuntu /bin/bash</code></p>\\n<div class=\\"hint-container info\\">\\n<p class=\\"hint-container-title\\">parameters</p>\\n<ul>\\n<li>-i: interactive mode</li>\\n<li>-t: using the terminal</li>\\n<li>ubuntu: using ubuntu image</li>\\n<li>/bin/bash: command for the image, here we use bash for the terminal shell</li>\\n</ul>\\n</div>","autoDesc":true}`);export{e as data};
