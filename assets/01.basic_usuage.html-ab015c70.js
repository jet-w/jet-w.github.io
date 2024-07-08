import{_ as r}from"./plugin-vue_export-helper-c27b6911.js";import{r as n,o as t,c as i,b as e,d as o,e as d,f as c}from"./app-15e8fff6.js";const h={},s=c('<h2 id="load-image-remotely" tabindex="-1"><a class="header-anchor" href="#load-image-remotely" aria-hidden="true">#</a> Load image remotely</h2><p><code>docker pull ubuntu</code></p><h2 id="check-all-the-containers" tabindex="-1"><a class="header-anchor" href="#check-all-the-containers" aria-hidden="true">#</a> Check all the containers</h2><p><code>docker ps -a</code></p><h2 id="container-operating" tabindex="-1"><a class="header-anchor" href="#container-operating" aria-hidden="true">#</a> Container Operating</h2><h3 id="start-container" tabindex="-1"><a class="header-anchor" href="#start-container" aria-hidden="true">#</a> Start Container</h3><p><code>docker run -it ubuntu /bin/bash</code></p><div class="hint-container info"><p class="hint-container-title">parameters</p><ul><li>-i: interactive mode</li><li>-t: using the terminal</li><li>ubuntu: using ubuntu image</li><li>/bin/bash: command for the image, here we use bash for the terminal shell</li></ul></div><h3 id="exit-from-the-terminal" tabindex="-1"><a class="header-anchor" href="#exit-from-the-terminal" aria-hidden="true">#</a> Exit from the terminal</h3><p><code>exit</code></p><h3 id="rename-a-container" tabindex="-1"><a class="header-anchor" href="#rename-a-container" aria-hidden="true">#</a> Rename a container</h3><p><code>docker rename &lt;old_name_or_id&gt; &lt;new_name&gt;</code></p><h3 id="start-a-stopped-container" tabindex="-1"><a class="header-anchor" href="#start-a-stopped-container" aria-hidden="true">#</a> Start a stopped container</h3><p><code>docker start &lt;container_id/name&gt;</code></p><h3 id="run-container-in-background" tabindex="-1"><a class="header-anchor" href="#run-container-in-background" aria-hidden="true">#</a> Run container in background</h3><p><code>docker run -itd --name ubuntu-test ubuntu /bin/bash</code></p><h3 id="stop-a-container" tabindex="-1"><a class="header-anchor" href="#stop-a-container" aria-hidden="true">#</a> Stop a container</h3><p><code>docker stop &lt;container_id/name&gt;</code></p><h3 id="restart-a-container" tabindex="-1"><a class="header-anchor" href="#restart-a-container" aria-hidden="true">#</a> Restart a container</h3><p><code>docker restart &lt;container_id/name&gt;</code></p><h3 id="enter-a-running-container" tabindex="-1"><a class="header-anchor" href="#enter-a-running-container" aria-hidden="true">#</a> Enter a running container</h3><p><code>docker attach &lt;container_id/name&gt;</code>: This approach will lead to stopping after exit the container.</p><p><code>docker exec -it &lt;container_id/name&gt; /bin/bash</code>: This approach will not cause stopping of the container</p><h3 id="export-container" tabindex="-1"><a class="header-anchor" href="#export-container" aria-hidden="true">#</a> Export container</h3><p><code>docker export 1e560fca3906 &gt; ubuntu.tar</code></p><h3 id="import-container-snapshot" tabindex="-1"><a class="header-anchor" href="#import-container-snapshot" aria-hidden="true">#</a> Import container snapshot</h3><p><code>cat ubuntu.tart</code> | docker import - test/ubuntu:v1</p><h3 id="delete-container" tabindex="-1"><a class="header-anchor" href="#delete-container" aria-hidden="true">#</a> Delete container</h3><p><code>docker rm -f &lt;container_id/name&gt;</code></p><h2 id="port-mapping" tabindex="-1"><a class="header-anchor" href="#port-mapping" aria-hidden="true">#</a> Port Mapping</h2><h3 id="same-mapping" tabindex="-1"><a class="header-anchor" href="#same-mapping" aria-hidden="true">#</a> Same mapping</h3><p><code>docker run -d -P training/webapp python app.py</code></p><div class="hint-container info"><p class="hint-container-title">Parameters</p><ul><li>-d: run the container in background</li><li>-P: map the port of container to the host</li></ul></div><h3 id="specified-mapping-port" tabindex="-1"><a class="header-anchor" href="#specified-mapping-port" aria-hidden="true">#</a> Specified Mapping Port</h3><p><code>docker run -d -p 5000:5000 training/webapp python app.py</code></p><h3 id="view-all-the-mapping-port" tabindex="-1"><a class="header-anchor" href="#view-all-the-mapping-port" aria-hidden="true">#</a> View all the mapping port</h3><p><code>docker port &lt;container_id/container_name&gt;</code></p><h2 id="container-monitoring" tabindex="-1"><a class="header-anchor" href="#container-monitoring" aria-hidden="true">#</a> Container Monitoring</h2><h3 id="standard-i-o" tabindex="-1"><a class="header-anchor" href="#standard-i-o" aria-hidden="true">#</a> Standard I/O</h3><p><code>docker logs -f &lt;container_id/container_name&gt;</code></p><h3 id="check-processes" tabindex="-1"><a class="header-anchor" href="#check-processes" aria-hidden="true">#</a> Check Processes</h3><p><code>docker top &lt;container_id/container_name&gt;</code></p><h3 id="load-local-path" tabindex="-1"><a class="header-anchor" href="#load-local-path" aria-hidden="true">#</a> Load Local Path</h3><p><code>docker run -p 9999:9999 -it -v D:\\workspace\\12.docker:/data ubuntu</code></p><h2 id="share-folder-with-host" tabindex="-1"><a class="header-anchor" href="#share-folder-with-host" aria-hidden="true">#</a> Share Folder With Host</h2><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference" aria-hidden="true">#</a> Reference</h2>',46),p={href:"https://www.runoob.com/docker/docker-container-usage.html",target:"_blank",rel:"noopener noreferrer"};function l(u,m){const a=n("ExternalLinkIcon");return t(),i("div",null,[s,e("p",null,[e("a",p,[o("Tutoriaspoint"),d(a)])])])}const g=r(h,[["render",l],["__file","01.basic_usuage.html.vue"]]);export{g as default};
