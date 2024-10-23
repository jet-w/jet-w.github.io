import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,a,o as l}from"./app-38jWVApj.js";const n={};function t(r,i){return l(),e("div",null,i[0]||(i[0]=[a(`<h2 id="make-dockerfile" tabindex="-1"><a class="header-anchor" href="#make-dockerfile"><span>Make Dockerfile</span></a></h2><div class="language-dockerfile line-numbers-mode" data-highlighter="shiki" data-ext="dockerfile" data-title="dockerfile" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">From</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> centos</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">MAINTAINER</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> why&lt;nutterair1989@gmail.com&gt;</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ENV</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> MYPATH /usr/local</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">WORKDIR</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> $MYPATH</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">RUN</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> yum -y install vim</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">RUN</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> yum -y install net-tools</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">RUN</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> yum -y install glibc.i686</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">RUN</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> mkdir /usr/local/java</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ADD</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> jdk-8u171-linux-x64.tar.gz /usr/local/java</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ENV</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> JAVA_HOME /usr/local/java/jdk1.8.0_171</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ENV</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> JRE_HOME $JAVA_HOME/jre</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ENV</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> CLASSPATH $JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib:$CLASSPATH</span></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">ENV</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> PATH $JAVA_HOME/bin:$PATH</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">EXPOSE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 80</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="build-dockerfile" tabindex="-1"><a class="header-anchor" href="#build-dockerfile"><span>Build Dockerfile</span></a></h2><p><code>docker build -t centosjava8:1.5 .</code></p><h2 id="dangling-image" tabindex="-1"><a class="header-anchor" href="#dangling-image"><span>Dangling Image</span></a></h2><p>Both repo and tag are <code>&lt;none&gt;</code> is dangling image, which will happened during deleting or building a dockerfile.</p><h3 id="list-all-dangling-images" tabindex="-1"><a class="header-anchor" href="#list-all-dangling-images"><span>List all dangling images</span></a></h3><p><code>docker image ls -f dangling=true</code></p><h3 id="delete-all-dangling-images" tabindex="-1"><a class="header-anchor" href="#delete-all-dangling-images"><span>Delete all dangling images</span></a></h3><p><code>docker image prune</code></p><h2 id="reference" tabindex="-1"><a class="header-anchor" href="#reference"><span>Reference</span></a></h2><ol><li><a href="https://www.youtube.com/watch?v=vGvWZorkUnM&amp;list=PLmOn9nNkQxJFtOGw9fsoLHgtCxcki7TtK&amp;index=60" target="_blank" rel="noopener noreferrer">Tutoriaspoint</a></li><li><a href="https://www.runoob.com/docker/docker-dockerfile.html" target="_blank" rel="noopener noreferrer">Docker Dockerfile on runoob</a></li><li><a href="https://docs.docker.com/engine/reference/builder/" target="_blank" rel="noopener noreferrer">Dockerfile reference (official)</a></li></ol>`,12)]))}const p=s(n,[["render",t],["__file","05.DockerFile-Example.html.vue"]]),k=JSON.parse(`{"path":"/techniques/Tools/docker/05.DockerFile-Example.html","title":"05. Dockerfile Example","lang":"en-US","frontmatter":{"title":"05. Dockerfile Example","date":"2024-10-23T00:00:00.000Z","icon":"circle-dot","author":"Haiyue","category":["docker"],"tag":["docker"],"star":true,"sticky":true,"description":"Make Dockerfile Build Dockerfile docker build -t centosjava8:1.5 . Dangling Image Both repo and tag are <none> is dangling image, which will happened during deleting or building...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://jet-w.github.io/techniques/Tools/docker/05.DockerFile-Example.html"}],["meta",{"property":"og:site_name","content":"Haiyue's Blog"}],["meta",{"property":"og:title","content":"05. Dockerfile Example"}],["meta",{"property":"og:description","content":"Make Dockerfile Build Dockerfile docker build -t centosjava8:1.5 . Dangling Image Both repo and tag are <none> is dangling image, which will happened during deleting or building..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"Haiyue"}],["meta",{"property":"article:tag","content":"docker"}],["meta",{"property":"article:published_time","content":"2024-10-23T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"05. Dockerfile Example\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-10-23T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Haiyue\\"}]}"]]},"headers":[{"level":2,"title":"Make Dockerfile","slug":"make-dockerfile","link":"#make-dockerfile","children":[]},{"level":2,"title":"Build Dockerfile","slug":"build-dockerfile","link":"#build-dockerfile","children":[]},{"level":2,"title":"Dangling Image","slug":"dangling-image","link":"#dangling-image","children":[{"level":3,"title":"List all dangling images","slug":"list-all-dangling-images","link":"#list-all-dangling-images","children":[]},{"level":3,"title":"Delete all dangling images","slug":"delete-all-dangling-images","link":"#delete-all-dangling-images","children":[]}]},{"level":2,"title":"Reference","slug":"reference","link":"#reference","children":[]}],"readingTime":{"minutes":0.5,"words":149},"filePathRelative":"techniques/Tools/docker/05.DockerFile-Example.md","localizedDate":"October 23, 2024","excerpt":"<h2>Make Dockerfile</h2>\\n<div class=\\"language-dockerfile line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"dockerfile\\" data-title=\\"dockerfile\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">From</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> centos</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">MAINTAINER</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> why&lt;nutterair1989@gmail.com&gt;</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">ENV</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> MYPATH /usr/local</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">WORKDIR</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> $MYPATH</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">RUN</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> yum -y install vim</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">RUN</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> yum -y install net-tools</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">RUN</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> yum -y install glibc.i686</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">RUN</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> mkdir /usr/local/java</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">ADD</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> jdk-8u171-linux-x64.tar.gz /usr/local/java</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">ENV</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> JAVA_HOME /usr/local/java/jdk1.8.0_171</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">ENV</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> JRE_HOME $JAVA_HOME/jre</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">ENV</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> CLASSPATH $JAVA_HOME/lib/dt.jar:$JAVA_HOME/lib/tools.jar:$JRE_HOME/lib:$CLASSPATH</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">ENV</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> PATH $JAVA_HOME/bin:$PATH</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#4078F2;--shiki-dark:#61AFEF\\">EXPOSE</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> 80</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{p as comp,k as data};
