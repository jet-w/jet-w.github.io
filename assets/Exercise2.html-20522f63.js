import{_ as t}from"./plugin-vue_export-helper-c27b6911.js";import{r as a,o as r,c as i,b as e,d as s,e as n,f as l}from"./app-0ee52fa0.js";const c="/data/unisa/customer_analytic/exercise2/TaskBreakdown.png",d={},u=l('<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>This is your second assessable exercise which is part of the continuous assessment. This exercise is worth <span style="color:orange;">10 points</span> of your final grade.</p><p>For this exercise, you will work with the same supermarket data you used in Assignment 1. You will use a <span style="color:orange;">full 3-year</span> history and all customers to have more information for the modelling.<br><span style="color:orange;">Selling any product is a risky proposition for a supermarket</span>. <span style="color:red;">If the supermarket has too much stock – unsold products will spoil and go to rubbish bin, so the supermarket will lose money</span>. If the supermarket has not <span style="color:orange;">enough stock</span>, then customers might not be able to buy, and the supermarket loses an opportunity to earn money. So, the supermarket needs to have “<span style="color:orange;">enough stock</span>” or the <span style="color:orange;">optimal amount of stock</span>. We will revisit and solve this problem later in the course.</p><p>For now, you should <span style="color:orange;">analyse the supermarket operations in terms of <em><strong>selling ice creams</strong></em></span>. It is very easy to identify these purchases in the data: value <span style="color:orange;font-weight:bold;">&quot;ICE CREAMS AND ICE CONFECTIONS&quot;</span> in the variable <span style="color:orange;font-weight:bold;">&quot;Commodity_Name&quot;</span>. Obviously, there are <span style="color:orange;font-weight:bold;">different package sizes</span> for ice cream – we <span style="color:orange;font-weight:bold;">ignore that complexity</span> and <span style="color:orange;font-weight:bold;">just do summation for &quot;Quantity_Sold&quot;</span>. So, one item of ice cream product equals to any other item of ice cream product <span style="color:orange;font-weight:bold;">regardless their weight</span>. <em><strong>Be aware: you do analysis on item sales, not dollar sales.</strong></em></p><p>There is nothing worse than not being able to buy an ice cream when you crave for it. <span style="color:orange;font-weight:bold;">You will consider a daily risk of an extremely high demand and running out of ice cream as a result</span>. You will <span style="color:orange;font-weight:bold;">run analysis of risks at 5% and 1% level</span>.</p><h2 id="tasks-for-completion" tabindex="-1"><a class="header-anchor" href="#tasks-for-completion" aria-hidden="true">#</a> Tasks for Completion</h2><p><strong>Prepare a brief report for the following questions:</strong></p><ol><li>What are <span style="color:orange;">average daily statistics for ice cream sales (in items)</span>, <span style="color:orange;">number of customers buying ice cream</span> and <span style="color:orange;">sales of ice cream per customer per visit</span>.</li><li><span style="color:orange;">What are risk scenarios</span> with 5% and 1% probability? Get an estimation from the empirical (observed) data. Then fit an appropriate distribution in to sales data and estimate 5% and 1% tales for the parametric distribution.</li><li>Sales are generated by customers; hence you should try to solve the same problem through modelling customers purchases, that is, the number of customers buying ice cream and amounts of ice cream bought by each customer. Then calculate ice cream sales per day.</li></ol><blockquote><p><span style="color:orange;font-weight:bold;">Hint:</span> As you don’t do analysis on the customer level, you don’t need customers ID and you don’t worry about “generic” cards. You group data by Receipt ID and date/time, to get a unique shopping trip.</p></blockquote><blockquote><p>You will use two approaches for this question:</p><ul><li>(a) <em><strong>bootstrapping</strong></em> and</li><li>(b) <em><strong>modelling</strong></em>.</li></ul></blockquote><ul><li><strong>(a) Bootstrapping</strong>:</li></ul><blockquote><ul><li><strong>Step 1:</strong> <span style="color:orange;font-weight:bold;">generate</span> the number of customers buying ice cream per day according to <span style="color:orange;font-weight:bold;">empirical distribution</span>, e.g., X customers.</li><li><strong>Step 2:</strong> Then <span style="color:orange;font-weight:bold;">sample at random individual sales</span> of ice cream for each of X customers from the <span style="color:orange;font-weight:bold;">empirical distribution</span> of observed ice cream sales. Summation will give you total “possible” ice cream sales for a day.</li><li><strong>Step 3:</strong> Repeat generating the number of customers buying ice cream and random sampling for ice cream sales for <span style="color:orange;font-weight:bold;">a significant period of time</span>, say for <span style="color:orange;font-weight:bold;">10 years</span>, and <span style="color:orange;font-weight:bold;">analyse resulted distribution of total ice cream sales and in particular 5% and 1% probability of the “best” or “worst” case scenario</span>.</li></ul></blockquote><ul><li><strong>(b) Simulation modelling</strong>: all the <span style="color:orange;font-weight:bold;">same steps</span> as in bootstrapping but you make a random draw from the <span style="color:orange;font-weight:bold;">fitted distributions</span> instead of empirical distributions.</li></ul><ol start="4"><li><span style="color:orange;font-weight:bold;">Compare and discuss results</span> from the methods above.</li><li>Provide <span style="color:orange;font-weight:bold;">brief discussion</span> on possible <span style="color:orange;font-weight:bold;">shortcomings</span> or <span style="color:orange;font-weight:bold;">limitations</span> of the above analysis.</li></ol><figure><img src="'+c+'" alt="Task Breakdown" tabindex="0" loading="lazy"><figcaption>Task Breakdown</figcaption></figure><h2 id="submission-requirements" tabindex="-1"><a class="header-anchor" href="#submission-requirements" aria-hidden="true">#</a> Submission Requirements</h2><p>Exercise 2 due date is <span style="color:orange;">Sunday, 12 May 2024, 11:59 PM</span>. Please start this exercise early and finish it early too. There is 10-point late submission penalty for each day or part of it beyond the deadline.</p><p>You must submit one file with your report in <span style="color:orange;">MS Word</span> or <span style="color:orange;">PDF</span> format. Report should be brief, as no one like reading long report. Also, this is a small exercise only – there should be a brief report. While the list of questions might look intimidating, these questions do not require a lot of writing. But they do <span style="color:orange;">require some graphs to show distributions and numerical summaries</span>.</p><p>You don’t need to submit programming code; however, you should retain copies of all assignment computer files used during development of the solution to the assignment. These files must remain unchanged after report submission, for the purpose of checking if required.</p><p>If you have any questions – feel free to ask on the forum. You can and probably should discuss this exercise with me and other students. However, you should remember this is an individual assessment and should reflect your own work. Remember about academic integrity.</p><h2 id="reference-documents" tabindex="-1"><a class="header-anchor" href="#reference-documents" aria-hidden="true">#</a> Reference documents</h2>',21),p={href:"https://medium.com/coinmonks/scenario-analysis-in-python-advanced-investment-risk-analysis-d7d550237295",target:"_blank",rel:"noopener noreferrer"},m={href:"https://levelup.gitconnected.com/monte-carlo-simulation-in-python-advanced-investment-risk-analysis-c28d4532b05b",target:"_blank",rel:"noopener noreferrer"},h={href:"https://medium.com/@pelinokutan/power-of-monte-carlo-simulation-in-risk-analysis-acaeb6d1f0b4",target:"_blank",rel:"noopener noreferrer"},g={href:"https://medium.com/@pelinokutan/python-for-risk-analysis-a-comprehensive-guide-ded0333f40d0",target:"_blank",rel:"noopener noreferrer"},f={href:"https://medium.com/@pelinokutan/risk-analysis-risk-analysts-guide-b0bf334ba5d6",target:"_blank",rel:"noopener noreferrer"},y={href:"https://medium.com/@pelinokutan/a-comprehensive-guide-to-risk-analysis-in-financial-domain-67f00414844a",target:"_blank",rel:"noopener noreferrer"};function b(k,w){const o=a("ExternalLinkIcon");return r(),i("div",null,[u,e("ol",null,[e("li",null,[e("a",p,[s("Scenario Analysis in Python: Advanced Investment Risk Analysis"),n(o)])]),e("li",null,[e("a",m,[s("Monte Carlo Simulation in Python: Advanced Investment Risk Analysis"),n(o)])]),e("li",null,[e("a",h,[s("Power of Monte Carlo Simulation in Risk Analysis"),n(o)])]),e("li",null,[e("a",g,[s("Python for Risk Analysis: A Comprehensive Guide"),n(o)])]),e("li",null,[e("a",f,[s("Risk Analysis: Risk Analyst’s Guide"),n(o)])]),e("li",null,[e("a",y,[s("A Comprehensive Guide to Risk Analysis in Financial Domain"),n(o)])])])])}const q=t(d,[["render",b],["__file","Exercise2.html.vue"]]);export{q as default};