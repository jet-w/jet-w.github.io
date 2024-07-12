import{_ as i}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as n,c as r,b as a,d as e,e as o,f as d}from"./app-be06b9ef.js";const c={},l={href:"https://people.unisa.edu.au/srecko.joksimovic",target:"_blank",rel:"noopener noreferrer"},h=a("code",null,"HS.data-daily-update",-1),u=d('<p>This is the notes for paper &quot;<a href="/data/work/hs/Others/Wang%20and%20Mousavi%20(2022)%20-%20Which%20log%20variables%20significantly%20predict%20academic%20achievement%20%20A%20systematic%20review.pdf">Which log variables significantly predict academic achievement? A systematic review and meta-analysis</a>&quot;.</p><h2 id="abstract" tabindex="-1"><a class="header-anchor" href="#abstract" aria-hidden="true">#</a> Abstract</h2><p>Technologies and teaching practices can provide a rich log data, which enables learning analytics (LA) to bring new insights into the learning process for ultimately enhancing student success. This type of data has been used to discover student online learning patterns, relationships between online learning behaviors and assessment performance. Previous studies have provided empirical evidence that not all log variables were significantly associated with student academic achievement and the relationships varied across courses. Therefore, <span style="color:orange;">this study employs a systematic review with meta-analysis method to provide a comprehensive review of the log variables that have an impact on student academic achievement</span>. We searched six databases and reviewed 88 relevant empirical studies published from 2010 to 2021 for an in-depth analysis. The results show different types of log variables and the learning contexts investigated in the reviewed studies. We also included four moderating factors to do moderator analyses. A further significance test was performed to test the difference of effect size among different types of log variables. Limitations and future research expectations are provided subsequently.</p><div class="hint-container note"><p class="hint-container-title">Note</p><p><strong>What&#39;s the task of this paper:</strong><br> This study employs a systematic review with meta-analysis method to provide a comprehensive review of the log variables that have an impact on student academic achievement.</p><p><strong>What did the authors do</strong></p><ul><li>Searching six databases and <span style="color:orange;">reviewed 88 relevant empirical studies</span> published from 2010 to 2021 for an in-depth analysis.</li><li>We also included <span style="color:orange;">four moderating factors to do moderator analyses</span>.</li><li>A further significance test was performed to <span style="color:orange;">test the difference of effect size among different types of log variables</span>.</li></ul></div><div class="hint-container warning"><p class="hint-container-title">Practitioner notes</p><p><strong>What is already known about this topic</strong></p><ul><li>Significant relationship between active engagement in online courses and academic<br> achievement was identified in a number of previous studies.</li><li>Researchers have reviewed the literature to examine different aspects of applying<br> LA to gain insights for monitoring student learning in digital environments (eg, data<br> sources, data analysis techniques).</li></ul><p><strong>What this paper adds</strong></p><ul><li>Presents a new perspective of the log variables, which provides a reliable quantitative<br> conclusion of log variables in predicting student academic achievement.</li><li>Conducted subgroup analysis, examined four potential moderating variables and<br> identified their moderating effect on several log variables such as regularity of study<br> interval, number of online sessions, time-on-task, starting late and late submission.</li><li>Compared the effect of generic and course-specific, basic and elaborated log<br> variables, and found significant difference between the basic and elaborated.</li></ul><p><strong>Implications for practice and/or policy</strong></p><ul><li>A depth of understanding of these log variables may enable researchers to build<br> robust prediction models.</li><li>It can guide the instructors to timely adjust teaching strategies according to their<br> online learning behaviors.</li></ul></div><h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction" aria-hidden="true">#</a> Introduction</h2><p>In recent years, learning analytics (LA) has emerged as a field aiming to provide solutions for questions related to teaching and learning with technology, such as the ways to explore online learning and get an accurate description of learning process <em>(Larusson &amp; White, 2014)</em>. For the purpose of understanding and optimizing digital learning and the environments in which it occurs, LA ideally attempts to collect and analyze data that exists in educational repositories such as LMS to assess the behavior of educational communities <em>(Romero &amp; Ventura, 2010)</em>. Researchers have synthesized the literature regarding the data analyzed in LA studies and found that log records of learners&#39; interaction with and participation in LMSs was the main data source of LA. For example, Saqr et al. <em>(2018)</em> conducted a systematic review of six empirical studies on LA published before 2017 in the field of medical education. Results showed that most reviewed studies collected data from LMSs or online learning resources. Algayres and Triantafyllou <em>(2020)</em> conducted a scoping review of 49 articles on LA in flipped learning environments. They found that LMS data was the main data source. Log variables such as total login time, time spent on online activities, regularity and engagement were usually extracted from LMS log traces. The analysis of log data, also known as data logging, is a process of making sense of computer-generated records (logs). Log analysis has had extensive adoption in the field of LA for some time, and empirical implications have witnessed its potential for providing valuable feedback for improving the effectiveness of online education. More specifically, it helps instructors understand students&#39; online learning behaviors <em>(Breslow et al., 2013; Cooper &amp; Sahami, 2013; Daradoumis et al., 2013)</em>, provide feasible feedback and to adjust instructional strategies <em>(Dietz-Uhler &amp; Hurn, 2013)</em>.</p><div class="hint-container note"><p class="hint-container-title">Note</p></div><p>The application of artificial intelligence (AI) in assessment has enabled a more continuous view of individual&#39;s ongoing engagement with an online learning environment, rather than discrete snapshots of performance provided by traditional assessments <em>(Swiecki et al., 2022)</em>. AI techniques have been applied to different assessment tasks and evidence, such as electronic assessment platforms, stealth assessment, latent knowledge estimation and learning processes. By analyzing data generated from these approaches, previous research has investigated the following: test-taken behaviors (eg, time-on-task, answering and revising behavior during exams) <em>(Lee et al., 2019)</em>, formative assessment using stealth methods <em>(Yang et al., 2021)</em>, knowledge tracing <em>(Molenaar et al., 2021)</em> and analyzing multichannel data (eg, clickstreams, eye-tracking, mouse movements) in multimodal LA with different AI techniques such as process mining and network analysis <em>(de Marcos et al., 2016; Saqr et al., 2020)</em>. A wealth of such research has made student academic performance analysis and prediction become two widely explored research topics in LA.</p><p>Log variables investigated in the previous studies can be divided into basic and elaborated types. Basic log variables are those extracted from raw log data and are not specific measurements of previously outlined concepts, such as simple frequency and time counts. This type of log variables (eg, the number of clicks, total time spent online) is the most typical measure used to predict student learning performance. For instance, total login time was found to be positively related to final course grade <em>(eg, Conijn et al., 2017; Wei et al., 2015)</em>. However, researchers suggested to extract and aggregate meaningful and elaborated indicators from log data, rather than basic frequency measures of online events <em>(Hadwin et al., 2007; Huang &amp; Fang, 2013; You, 2016)</em>. Huang and Fang <em>(2013)</em> claimed that merely adding more basic variables does not improve the predictability of mathematical models. <span style="color:orange;font-weight:bold;">Therefore, researchers need to develop significant indicators that effectively capture online engagement</span>. For example, the variable of regular study (ie, the degree to which a student consistently accesses the learning materials) was generated in some studies based on the notion that self-regulated learners show a typical characteristic of studying on a regular basis <em>(eg, Conijn et al., 2017; Jo et al., 2015; You, 2016)</em>. Results in these studies showed learners who regularly logged into the LMS throughout the course showed better performance. Such elaborated time-based indicators can serve as leading factors of student access time and study patterns simultaneously <em>(You, 2016)</em>. These indicators explain learners&#39; sustained endeavors and awareness of their learning status better than either login time or login frequency. A similar log variable of distributed learning was examined in Theobald et al. <em>(2018)</em>, which was a measure of the number of weeks in which each student had accessed the LMS irrespective of the actual amount of time students spent online. Higher values suggested a more distributed and continual engagement with the course content. It was found that distributed learning was associated with better exam grades.</p><p>Log variables can also be classified as generic variables (eg, total login time, total number of clicks) and course-specific variables generated from interactions with specific online activities required in course syllabus (eg, number of weeks of high engagement with summative exercises, weekly use of course videos for the pre-class activities). For better investigating the relationship between online participation and academic performance, some studies have used both kinds of variables into analysis <em>(eg, Jovanović et al., 2019, 2021; Wei et al., 2015)</em>. For course-specific log variables, different learning designs used in the courses can potentially lead to different activities in LMSs thus resulting in different LMS usage. As a result, these course-specific predictors cannot be compared across courses. In the present review study, meta regression analysis was conducted only on generic log variables.</p><p>Many previous studies analyzed LMS data of one or only a few courses and learning tasks, which makes it difficult to compare study results and draw generalizable conclusions in the ways of using LMS data for predictive modeling <em>(Conijn et al., 2017)</em>. Some studies performed prediction modelling on several courses and found that the effect of student LMS behaviors on students&#39; learning performance differs across courses <em>(eg, Conijn et al., 2017; Gašević et al., 2016)</em>. In Conijn et al. <em>(2017)&#39;s</em> study, <span style="color:orange;">several log variables, such as the total number of views and clicks, had a <em><strong>positive relationship</strong></em> with students&#39; grade in some courses while showed a <em><strong>negative relationship</strong></em> in others</span>. These contradicting results may be explained by the fact that the courses differed in characteristics such as type, theme and learning design. For example, students taking fully online courses show more online interactions with LMSs compared with blended courses, which might have a great possibility of contributing to the effect of log variables on student academic performance. Furthermore, the dependent variable used in prediction models were not all the same. Some studies performed regression analysis to investigate the relationships between log variables and total course score <em>(eg, Bravo-Agapito et al., 2021; Jovanović et al., 2021)</em>, while others used final exam score or post-test score <em>(eg, Schumacher &amp; Ifenthaler, 2021; Ulfa &amp; Fatawi, 2021)</em>. Final exam score and post-test score are the one-time exams and tests which assess learners&#39; knowledge acquired through the courses or learning modules. Total course score is the sum of all assessment parts of the course, which typically covers both final exam score (if there is) and the grade weights of the course design such as assignments, discussion forums, and quizzes. Therefore, the current study examines whether the predictive power of log variables on final exam score and total course score differs.</p><p>In the current empirical studies on LA, researchers investigated the predictive power of log variables in different learning contexts, mainly including learning type (fully online or blended), learning theme (eg, STEM, culture and arts), and the type of the dependent variable in prediction models (total course score or final exam score). Furthermore, the study characteristic variable of sample size that has been examined in many published meta-analysis articles was also considered in the current study. Therefore, a total of four potential moderators (ie, sample size, learning type, learning theme, the type of the dependent variable) would be examined in this meta-analysis. We aim to provide a review with meta-analysis of log variables that have been found to be significant predictors for student academic performance, compare the effect size of basic and elaborated, generic and course-specific log variables and investigate whether the effect size of generic log variables will change according to the four moderating factors.</p><h2 id="research-significance-and-objectives" tabindex="-1"><a class="header-anchor" href="#research-significance-and-objectives" aria-hidden="true">#</a> RESEARCH SIGNIFICANCE AND OBJECTIVES</h2><p>Improving academic performance is considered one of the crucial issues for education. In the existing literature, numerous studies have adopted LA approach to explore the relationships between log variables and student academic performance in the hope of providing guidance for instructors to make decisions. For example, instructors can encourage students in engaging online learning activities if they are less active during a longer period.</p><p>Recently, researchers have reviewed the literature to examine different aspects of applying LA to gain insights for monitoring student learning in digital environments, such as data sources, data analysis techniques, purposes and LA applications on some topics (eg, evaluation and assessment of student academic performance). Among them, several studies reviewed certain log variables used in predicting academic performance. For example, Namoun and Alshanqiti (2021) conducted a systematic literature review of 62 studies between 2010 and 2020 to investigate the applications of data mining and LA techniques in predicting student performance. Results showed that most studies employed regression and supervised ML models to predict student performance. Online engagement in learning activities, term assessment grades, and student academic emotions were the most evident predictors of learning performance. Ifenthaler and Yau (2020) reviewed 46 empirical studies published from 2013 to 2018 to investigate the effective role of LA in facilitating study success in the context of higher education. Results showed that one set of predictors for student success was variables extracted from online log traces which represented student online interactions and engagement, such as login frequency and submission of assignments.</p><p>Although some review studies found log data to be the main data sources of LA and summarized several log variables for predicting student academic performance, few studies further systematically provided a fine-grained summary of the influential log variables. Furthermore, despite the increase of LA research, there is no consensus to date on how LA might be implemented, eg, which data is useful, what different considerations have to be made regarding course characteristics, etc. (Agudo-Peregrina et al., 2014). It indicates that there is a need for further studies to investigate the issue of the generalizability of prediction models. Especially regarding the predictors, there is still a lack of comprehensive review of the log variables used in the context of predicting student academic achievement, especially, whether the effect of log variables on student academic achievement varies according to different learning contexts.</p><p>Thus, this study sets out to fill the gaps by providing a systematic review with a meta-analysis of log variables and their performance in predicting student academic achievement. In this regard, this paper investigates the studies from the body of research published in the most recent decade. The study aims to:</p><ol><li>Perform a systematic review of influential log variables and moderating factors (ie, sample size, the course type and theme, the type of dependent variable used in prediction models).</li><li>Conduct meta-regression analyses on most frequently generic log variables and investigate whether the effect size of generic log variables will change according to the above mentioned four moderators.</li><li>Compare the effect size of basic and elaborated, generic and course-specific log variables.</li></ol><h2 id="method" tabindex="-1"><a class="header-anchor" href="#method" aria-hidden="true">#</a> METHOD</h2><h3 id="search-strategy" tabindex="-1"><a class="header-anchor" href="#search-strategy" aria-hidden="true">#</a> Search strategy</h3><h3 id="inclusion-and-exclusion-criteria" tabindex="-1"><a class="header-anchor" href="#inclusion-and-exclusion-criteria" aria-hidden="true">#</a> Inclusion and exclusion criteria</h3><h3 id="selection-process" tabindex="-1"><a class="header-anchor" href="#selection-process" aria-hidden="true">#</a> Selection process</h3><h3 id="data-extraction-and-analysis" tabindex="-1"><a class="header-anchor" href="#data-extraction-and-analysis" aria-hidden="true">#</a> Data extraction and analysis</h3><h3 id="coding-procedures" tabindex="-1"><a class="header-anchor" href="#coding-procedures" aria-hidden="true">#</a> Coding procedures</h3><h3 id="statistical-analyses" tabindex="-1"><a class="header-anchor" href="#statistical-analyses" aria-hidden="true">#</a> Statistical analyses</h3><h2 id="results" tabindex="-1"><a class="header-anchor" href="#results" aria-hidden="true">#</a> RESULTS</h2>',27);function m(g,f){const t=s("ExternalLinkIcon");return n(),r("div",null,[a("p",null,[e("Information came from "),a("a",l,[e("Srecko"),o(t)]),e(" in Discord channel "),h,e(" at 2:04pm 27 June 2024.")]),u])}const b=i(c,[["render",m],["__file","variables.html.vue"]]);export{b as default};