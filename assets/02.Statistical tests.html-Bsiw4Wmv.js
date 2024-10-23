import{_ as s}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,a,o as e}from"./app-38jWVApj.js";const n={};function l(h,i){return e(),t("div",null,i[0]||(i[0]=[a(`<h2 id="z-test" tabindex="-1"><a class="header-anchor" href="#z-test"><span>z-test</span></a></h2><div class="language-r line-numbers-mode" data-highlighter="shiki" data-ext="r" data-title="r" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># This is a sample from a population with known standard deviation</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">x </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&lt;-</span><span style="--shiki-light:#0184BC;--shiki-dark:#56B6C2;"> rnorm</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">12</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">mean</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">sd</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">BSDA</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">::</span><span style="--shiki-light:#E45649;--shiki-dark:#61AFEF;">z.test</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(x, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">mu</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">sigma.x</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">conf.level</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 0.95</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">##</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">## One-sample z-Test</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">##</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">## data: x</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">## z = -1.6353, p-value = 0.102</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">## alternative hypothesis: true mean is not equal to 1</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">## 95 percent confidence interval:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">## -1.075717 1.187454</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">## sample estimates:</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">## mean of x</span></span>
<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">## 0.0558687</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Null hypothesis for the test was that mean equal 1. You know this is not true, as x was generated from the normal distribution with mean equal 0. Unfortunately, the sample size is so small that there are not enough evidences to reject the null hypothesis.</p><p>The P-value is greater than the significance level of 5%. Hence, we fail to reject a null hypothesis - based on the data we have, the population mean is equal 1 or it can be equal 1.</p><p>95% confidence interval for the mean includes the hypothesised mean 1. Again, it is impossible to reject a null hypothesis.</p><p>Try to run the same code but for a larger sample and a story will be very different.</p><h2 id="proportions-test" tabindex="-1"><a class="header-anchor" href="#proportions-test"><span>Proportions test</span></a></h2><h2 id="t-test" tabindex="-1"><a class="header-anchor" href="#t-test"><span>t-test</span></a></h2><h2 id="normality-test" tabindex="-1"><a class="header-anchor" href="#normality-test"><span>Normality test</span></a></h2><h2 id="shapiro-wilk-test" tabindex="-1"><a class="header-anchor" href="#shapiro-wilk-test"><span>Shapiro-Wilk test</span></a></h2><h2 id="anderson-darling-test" tabindex="-1"><a class="header-anchor" href="#anderson-darling-test"><span>Anderson-Darling test</span></a></h2><h2 id="anova-test" tabindex="-1"><a class="header-anchor" href="#anova-test"><span>ANOVA test</span></a></h2><h2 id="correlation" tabindex="-1"><a class="header-anchor" href="#correlation"><span>Correlation</span></a></h2><h2 id="linear-regression" tabindex="-1"><a class="header-anchor" href="#linear-regression"><span>Linear regression</span></a></h2><h2 id="non-parametric-tests" tabindex="-1"><a class="header-anchor" href="#non-parametric-tests"><span>Non-parametric tests</span></a></h2><h2 id="wilcoxon-test-or-mann-whitney-test" tabindex="-1"><a class="header-anchor" href="#wilcoxon-test-or-mann-whitney-test"><span>Wilcoxon test or Mann-Whitney test</span></a></h2><h2 id="kruskal-wallis-rank-sum-test" tabindex="-1"><a class="header-anchor" href="#kruskal-wallis-rank-sum-test"><span>Kruskal-Wallis rank sum test</span></a></h2>`,17)]))}const p=s(n,[["render",l],["__file","02.Statistical tests.html.vue"]]),d=JSON.parse(`{"path":"/techniques/coding/R/02.Statistical%20tests.html","title":"02. Statistical tests","lang":"en-US","frontmatter":{"title":"02. Statistical tests","date":"2023-07-20T00:00:00.000Z","icon":"registered","author":"Haiyue","category":["R"],"tag":["tests"],"star":false,"sticky":false,"description":"z-test Null hypothesis for the test was that mean equal 1. You know this is not true, as x was generated from the normal distribution with mean equal 0. Unfortunately, the sampl...","gitInclude":[],"head":[["meta",{"property":"og:url","content":"https://jet-w.github.io/techniques/coding/R/02.Statistical%20tests.html"}],["meta",{"property":"og:site_name","content":"Haiyue's Blog"}],["meta",{"property":"og:title","content":"02. Statistical tests"}],["meta",{"property":"og:description","content":"z-test Null hypothesis for the test was that mean equal 1. You know this is not true, as x was generated from the normal distribution with mean equal 0. Unfortunately, the sampl..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"article:author","content":"Haiyue"}],["meta",{"property":"article:tag","content":"tests"}],["meta",{"property":"article:published_time","content":"2023-07-20T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"02. Statistical tests\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-07-20T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Haiyue\\"}]}"]]},"headers":[{"level":2,"title":"z-test","slug":"z-test","link":"#z-test","children":[]},{"level":2,"title":"Proportions test","slug":"proportions-test","link":"#proportions-test","children":[]},{"level":2,"title":"t-test","slug":"t-test","link":"#t-test","children":[]},{"level":2,"title":"Normality test","slug":"normality-test","link":"#normality-test","children":[]},{"level":2,"title":"Shapiro-Wilk test","slug":"shapiro-wilk-test","link":"#shapiro-wilk-test","children":[]},{"level":2,"title":"Anderson-Darling test","slug":"anderson-darling-test","link":"#anderson-darling-test","children":[]},{"level":2,"title":"ANOVA test","slug":"anova-test","link":"#anova-test","children":[]},{"level":2,"title":"Correlation","slug":"correlation","link":"#correlation","children":[]},{"level":2,"title":"Linear regression","slug":"linear-regression","link":"#linear-regression","children":[]},{"level":2,"title":"Non-parametric tests","slug":"non-parametric-tests","link":"#non-parametric-tests","children":[]},{"level":2,"title":"Wilcoxon test or Mann-Whitney test","slug":"wilcoxon-test-or-mann-whitney-test","link":"#wilcoxon-test-or-mann-whitney-test","children":[]},{"level":2,"title":"Kruskal-Wallis rank sum test","slug":"kruskal-wallis-rank-sum-test","link":"#kruskal-wallis-rank-sum-test","children":[]}],"readingTime":{"minutes":0.78,"words":235},"filePathRelative":"techniques/coding/R/02.Statistical tests.md","localizedDate":"July 20, 2023","excerpt":"<h2>z-test</h2>\\n<div class=\\"language-r line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"r\\" data-title=\\"r\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\"># This is a sample from a population with known standard deviation</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">x </span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">&lt;-</span><span style=\\"--shiki-light:#0184BC;--shiki-dark:#56B6C2\\"> rnorm</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">12</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\">mean</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">0</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\">sd</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\">=</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">2</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">BSDA</span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">::</span><span style=\\"--shiki-light:#E45649;--shiki-dark:#61AFEF\\">z.test</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">(x, </span><span style=\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\">mu</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 1</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\">sigma.x</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 2</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">, </span><span style=\\"--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic\\">conf.level</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#56B6C2\\"> =</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> 0.95</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">)</span></span>\\n<span class=\\"line\\"></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">##</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">## One-sample z-Test</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">##</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">## data: x</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">## z = -1.6353, p-value = 0.102</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">## alternative hypothesis: true mean is not equal to 1</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">## 95 percent confidence interval:</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">## -1.075717 1.187454</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">## sample estimates:</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">## mean of x</span></span>\\n<span class=\\"line\\"><span style=\\"--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic\\">## 0.0558687</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div><div class=\\"line-number\\"></div></div></div>","autoDesc":true}`);export{p as comp,d as data};