import{_ as e}from"./plugin-vue_export-helper-c27b6911.js";import{o as a,c as t,f as n}from"./app-298de330.js";const i={},s=n(`<h2 id="z-test" tabindex="-1"><a class="header-anchor" href="#z-test" aria-hidden="true">#</a> z-test</h2><div class="language-R line-numbers-mode" data-ext="R"><pre class="language-R"><code># This is a sample from a population with known standard deviation
x &lt;- rnorm(12, mean=0, sd=2)
BSDA::z.test(x, mu = 1, sigma.x = 2, conf.level = 0.95)

##
## One-sample z-Test
##
## data: x
## z = -1.6353, p-value = 0.102
## alternative hypothesis: true mean is not equal to 1
## 95 percent confidence interval:
## -1.075717 1.187454
## sample estimates:
## mean of x
## 0.0558687
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Null hypothesis for the test was that mean equal 1. You know this is not true, as x was generated from the normal distribution with mean equal 0. Unfortunately, the sample size is so small that there are not enough evidences to reject the null hypothesis.</p><p>The P-value is greater than the significance level of 5%. Hence, we fail to reject a null hypothesis - based on the data we have, the population mean is equal 1 or it can be equal 1.</p><p>95% confidence interval for the mean includes the hypothesised mean 1. Again, it is impossible to reject a null hypothesis.</p><p>Try to run the same code but for a larger sample and a story will be very different.</p><h2 id="proportions-test" tabindex="-1"><a class="header-anchor" href="#proportions-test" aria-hidden="true">#</a> Proportions test</h2><h2 id="t-test" tabindex="-1"><a class="header-anchor" href="#t-test" aria-hidden="true">#</a> t-test</h2><h2 id="normality-test" tabindex="-1"><a class="header-anchor" href="#normality-test" aria-hidden="true">#</a> Normality test</h2><h2 id="shapiro-wilk-test" tabindex="-1"><a class="header-anchor" href="#shapiro-wilk-test" aria-hidden="true">#</a> Shapiro-Wilk test</h2><h2 id="anderson-darling-test" tabindex="-1"><a class="header-anchor" href="#anderson-darling-test" aria-hidden="true">#</a> Anderson-Darling test</h2><h2 id="anova-test" tabindex="-1"><a class="header-anchor" href="#anova-test" aria-hidden="true">#</a> ANOVA test</h2><h2 id="correlation" tabindex="-1"><a class="header-anchor" href="#correlation" aria-hidden="true">#</a> Correlation</h2><h2 id="linear-regression" tabindex="-1"><a class="header-anchor" href="#linear-regression" aria-hidden="true">#</a> Linear regression</h2><h2 id="non-parametric-tests" tabindex="-1"><a class="header-anchor" href="#non-parametric-tests" aria-hidden="true">#</a> Non-parametric tests</h2><h2 id="wilcoxon-test-or-mann-whitney-test" tabindex="-1"><a class="header-anchor" href="#wilcoxon-test-or-mann-whitney-test" aria-hidden="true">#</a> Wilcoxon test or Mann-Whitney test</h2><h2 id="kruskal-wallis-rank-sum-test" tabindex="-1"><a class="header-anchor" href="#kruskal-wallis-rank-sum-test" aria-hidden="true">#</a> Kruskal-Wallis rank sum test</h2>`,17),r=[s];function d(l,h){return a(),t("div",null,r)}const u=e(i,[["render",d],["__file","02.Statistical tests.html.vue"]]);export{u as default};