import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o,c as t,f as r}from"./app-7a55bdfb.js";const a={},c=r('<h2 id="install-jupyter" tabindex="-1"><a class="header-anchor" href="#install-jupyter" aria-hidden="true">#</a> Install Jupyter</h2><p><code>pip install jupyter</code></p><h2 id="start-notebook" tabindex="-1"><a class="header-anchor" href="#start-notebook" aria-hidden="true">#</a> Start notebook</h2><p><code>jupyter notebook</code></p><h3 id="specify-the-startup-folder" tabindex="-1"><a class="header-anchor" href="#specify-the-startup-folder" aria-hidden="true">#</a> Specify the startup folder</h3><ol><li>Generate config<br> run <code>jupyter notebook --generate-config</code> in cmd, generate config file <code>~\\.jupyter\\jupyter_notebook_config.py</code></li><li>Search <code>#c.NotebookApp.notebook_dir = &#39;&#39;</code> in this file</li><li>Replace with <code>c.NotebookApp.notebook_dir = &#39;{Folder path}&#39;</code></li></ol>',6),i=[c];function n(d,l){return o(),t("div",null,i)}const h=e(a,[["render",n],["__file","jupyter.html.vue"]]);export{h as default};