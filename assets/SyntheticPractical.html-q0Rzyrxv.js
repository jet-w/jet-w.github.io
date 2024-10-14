import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,a as n,o as i}from"./app-e2ib0Mc8.js";const s="/data/unisa/AdvancedAnalytic1/LowerUpperbounds/RandomNumGeneration.png",o="/data/unisa/AdvancedAnalytic1/LowerUpperbounds/RandomNumGenerationParams.png",r="/data/unisa/AdvancedAnalytic1/LowerUpperbounds/Evaluation.png",l="/data/unisa/AdvancedAnalytic1/LowerUpperbounds/LowerAndUpperBounds.png",d="/data/unisa/AdvancedAnalytic1/LowerUpperbounds/RandomUniform.png",p="/data/unisa/AdvancedAnalytic1/LowerUpperbounds/Result.png",c="/data/unisa/AdvancedAnalytic1/LowerUpperbounds/Visualization.png",h={};function m(u,e){return i(),t("div",null,e[0]||(e[0]=[n('<h2 id="part-1-how-to-generate-random-data-with-excel" tabindex="-1"><a class="header-anchor" href="#part-1-how-to-generate-random-data-with-excel"><span>Part 1: How to generate Random data with Excel</span></a></h2><h3 id="generate-normal-distribution-ramdom-values" tabindex="-1"><a class="header-anchor" href="#generate-normal-distribution-ramdom-values"><span>Generate Normal Distribution Ramdom Values</span></a></h3><p>The following pictures show how to generate 1000 normal distribution data.<br><strong>Step 1</strong></p><p><img src="'+s+'" alt="Random Num Generation" loading="lazy"><br><strong>Step 2</strong><br><img src="'+o+'" alt="Random Num Generation Params" loading="lazy"><br><strong>Step 3</strong><br> Please to evaluation the distribution of the data<br><img src="'+r+`" alt="Evaluation" width="700" loading="lazy"></p><h3 id="generate-realisation" tabindex="-1"><a class="header-anchor" href="#generate-realisation"><span>Generate Realisation</span></a></h3><div class="language-vba line-numbers-mode" data-highlighter="shiki" data-ext="vba" data-title="vba" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>B6 = A6</span></span>
<span class="line"><span>B7 = $D$1*B6+A7</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>Fill other cells follow the fomula of <code>B7</code></p><h2 id="part-2-lower-and-upper-bounds" tabindex="-1"><a class="header-anchor" href="#part-2-lower-and-upper-bounds"><span>Part 2: Lower and Upper Bounds</span></a></h2><p>The whole solar dataset need to seperate into two parts for forecasting. The first part is the <code>FS Model</code> that has been given in column <code>B</code>, then using <code>AR(1)</code> model to forecast the residuals that store in column <code>C</code>. The parameter of <em><strong>AR(1)</strong></em> is given in <code>L1</code>.<br><img src="`+l+`" alt="Lower And Upper Bounds" loading="lazy"></p><p>The sum of the two models form the final model. The next step is to construct the lower and upper bounds to estimate the final model. The lower bound equals final model substract a <code>specified value</code>, and the upper bound equals final model add <code>the same value</code>. Then to using the bounds to estimate whether the real value been <code>covered</code> by the final model.</p><p>According to the the content above, the formulas in excel should be like below:</p><div class="language-vba line-numbers-mode" data-highlighter="shiki" data-ext="vba" data-title="vba" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>C2 = A2- B2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>D3 = C2*$J$1</span></span>
<span class="line"><span></span></span>
<span class="line"><span>E2 = B2 + D2</span></span>
<span class="line"><span></span></span>
<span class="line"><span>F2 = E2-$L$5*$L$6</span></span>
<span class="line"><span>G2 = E2+$L$5*$L$6</span></span>
<span class="line"><span></span></span>
<span class="line"><span>H2 = AND(A2&gt;F2,A2&lt;G2)</span></span>
<span class="line"><span>I2 = IF(H2=TRUE,1,0)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><em><strong>A:</strong></em> is the solar original dataset.<br><em><strong>B:</strong></em> is the forcasting from FS Model component<br><em><strong>C:</strong></em> is the residuals.<br><em><strong>D:</strong></em> is the result from <em><strong>AR(1)</strong></em> model.<br><em><strong>E:</strong></em> is the combination of tow models.<br><em><strong>F:</strong></em> is the lower bound based on the final result.<br><em><strong>G:</strong></em> is the upper bound based on the final bounds.<br><em><strong>H:</strong></em> whether the original data locates the range of the bounds.<br><em><strong>I:</strong></em> 1 IF <code>H</code> equals TRUE, else 0.</p><p><em><strong>L1:</strong></em> the coefficient of AR(1) model.<br><em><strong>L5:</strong></em> is the score of confidence.<br><em><strong>L6:</strong></em> is the standard deviation from training test.</p><h2 id="uniform-to-resample" tabindex="-1"><a class="header-anchor" href="#uniform-to-resample"><span>Uniform to resample</span></a></h2><p><strong>Step 1:</strong> Using Random generation to generate a series Uniform distributed data as the probability to resample data from noises.<br><img src="`+d+`" alt="Alt text" width="300" loading="lazy"></p><p><strong>Step 2:</strong> Resample the noises using the probabilities</p><div class="language-vba line-numbers-mode" data-highlighter="shiki" data-ext="vba" data-title="vba" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>E2=PERCENTILE.INC(C$2:C$366,D2)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Step 3:</strong> Using AR(1) to model the new Noises</p><div class="language-vba line-numbers-mode" data-highlighter="shiki" data-ext="vba" data-title="vba" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>F2 = E2</span></span>
<span class="line"><span>F3 = =$J1*F2+E3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Step 4:</strong> To form the final model</p><div class="language-vba line-numbers-mode" data-highlighter="shiki" data-ext="vba" data-title="vba" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>G2 = B2+F2</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p><strong>Step 5:</strong> Visualize the final result<br><img src="`+p+'" alt="Alt text" loading="lazy"></p><figure><img src="'+c+'" alt="Alt text" tabindex="0" loading="lazy"><figcaption>Alt text</figcaption></figure><p><strong>Step 6:</strong> To compare the result from different uniform data</p><ol><li>generate multi uniform data as the probabilities</li><li>Store the final models.</li><li>Comapre the statistical information of the final models.</li></ol><h2 id="download-data" tabindex="-1"><a class="header-anchor" href="#download-data"><span><a href="/data/unisa/AdvancedAnalytic1/SyntheticPractical/Daily%20DataAnslec.xlsx">Download Data</a></span></a></h2><h2 id="references" tabindex="-1"><a class="header-anchor" href="#references"><span>References</span></a></h2><p><a href="https://desktop.arcgis.com/en/arcmap/latest/tools/spatial-statistics-toolbox/what-is-a-z-score-what-is-a-p-value.htm" target="_blank" rel="noopener noreferrer">01 What is a z-score? What is a p-value?</a></p>',29)]))}const v=a(h,[["render",m],["__file","SyntheticPractical.html.vue"]]),f=JSON.parse(`{"path":"/study/unisa/2023SP5/AdvancedAnalyticTechniques1/SyntheticPractical.html","title":"Prac: Synthetic Generation","lang":"en-US","frontmatter":{"title":"Prac: Synthetic Generation","index":true,"icon":"/assets/icon/common/practices.svg","author":"Haiyue","date":"2023-09-28T00:00:00.000Z","category":["math"],"tag":["Rain","excel"],"description":"Part 1: How to generate Random data with Excel Generate Normal Distribution Ramdom Values The following pictures show how to generate 1000 normal distribution data. Step 1 Rando...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://jet-w.github.io/study/unisa/2023SP5/AdvancedAnalyticTechniques1/SyntheticPractical.html"}],["meta",{"property":"og:site_name","content":"Haiyue's Blog"}],["meta",{"property":"og:title","content":"Prac: Synthetic Generation"}],["meta",{"property":"og:description","content":"Part 1: How to generate Random data with Excel Generate Normal Distribution Ramdom Values The following pictures show how to generate 1000 normal distribution data. Step 1 Rando..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://jet-w.github.io/data/unisa/AdvancedAnalytic1/LowerUpperbounds/RandomNumGeneration.png"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"Haiyue"}],["meta",{"property":"article:tag","content":"Rain"}],["meta",{"property":"article:tag","content":"excel"}],["meta",{"property":"article:published_time","content":"2023-09-28T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Prac: Synthetic Generation\\",\\"image\\":[\\"https://jet-w.github.io/data/unisa/AdvancedAnalytic1/LowerUpperbounds/RandomNumGeneration.png\\",\\"https://jet-w.github.io/data/unisa/AdvancedAnalytic1/LowerUpperbounds/RandomNumGenerationParams.png\\",\\"https://jet-w.github.io/data/unisa/AdvancedAnalytic1/LowerUpperbounds/Evaluation.png =700x\\",\\"https://jet-w.github.io/data/unisa/AdvancedAnalytic1/LowerUpperbounds/LowerAndUpperBounds.png\\",\\"https://jet-w.github.io/data/unisa/AdvancedAnalytic1/LowerUpperbounds/RandomUniform.png =300x\\",\\"https://jet-w.github.io/data/unisa/AdvancedAnalytic1/LowerUpperbounds/Result.png\\",\\"https://jet-w.github.io/data/unisa/AdvancedAnalytic1/LowerUpperbounds/Visualization.png\\"],\\"datePublished\\":\\"2023-09-28T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Haiyue\\"}]}"]]},"headers":[{"level":2,"title":"Part 1: How to generate Random data with Excel","slug":"part-1-how-to-generate-random-data-with-excel","link":"#part-1-how-to-generate-random-data-with-excel","children":[{"level":3,"title":"Generate Normal Distribution Ramdom Values","slug":"generate-normal-distribution-ramdom-values","link":"#generate-normal-distribution-ramdom-values","children":[]},{"level":3,"title":"Generate Realisation","slug":"generate-realisation","link":"#generate-realisation","children":[]}]},{"level":2,"title":"Part 2: Lower and Upper Bounds","slug":"part-2-lower-and-upper-bounds","link":"#part-2-lower-and-upper-bounds","children":[]},{"level":2,"title":"Uniform to resample","slug":"uniform-to-resample","link":"#uniform-to-resample","children":[]},{"level":2,"title":"Download Data","slug":"download-data","link":"#download-data","children":[]},{"level":2,"title":"References","slug":"references","link":"#references","children":[]}],"readingTime":{"minutes":1.67,"words":501},"filePathRelative":"study/unisa/2023SP5/AdvancedAnalyticTechniques1/SyntheticPractical.md","localizedDate":"September 28, 2023","excerpt":"<h2>Part 1: How to generate Random data with Excel</h2>\\n<h3>Generate Normal Distribution Ramdom Values</h3>\\n<p>The following pictures show how to generate 1000 normal distribution data.<br>\\n<strong>Step 1</strong></p>\\n<p><img src=\\"/data/unisa/AdvancedAnalytic1/LowerUpperbounds/RandomNumGeneration.png\\" alt=\\"Random Num Generation\\" loading=\\"lazy\\"><br>\\n<strong>Step 2</strong><br>\\n<img src=\\"/data/unisa/AdvancedAnalytic1/LowerUpperbounds/RandomNumGenerationParams.png\\" alt=\\"Random Num Generation Params\\" loading=\\"lazy\\"><br>\\n<strong>Step 3</strong><br>\\nPlease to evaluation the distribution of the data<br>\\n<img src=\\"/data/unisa/AdvancedAnalytic1/LowerUpperbounds/Evaluation.png\\" alt=\\"Evaluation\\" width=\\"700\\" loading=\\"lazy\\"></p>","autoDesc":true}`);export{v as comp,f as data};