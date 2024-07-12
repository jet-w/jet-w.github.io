const e=JSON.parse(`{"key":"v-1ab8ca4b","path":"/models/RAG/LLM_Constellation_Architecture_for_Healthcare.html","title":"LLM Constellation Architecture for Healthcare","lang":"en-US","frontmatter":{"title":"LLM Constellation Architecture for Healthcare","index":true,"icon":"circle-dot","author":"Haiyue","date":"2024-07-11T00:00:00.000Z","category":["model"],"description":"Information came from George in Discord channel meeting summaries at 1:33pm 4 July 2024. This is the notes for paper \\"Polaris: A Safety-focused LLM Constellation Architecture for Healthcare\\". The online version is here.","head":[["meta",{"property":"og:url","content":"https://seamice.github.io/blog/models/RAG/LLM_Constellation_Architecture_for_Healthcare.html"}],["meta",{"property":"og:site_name","content":"Haiyue's Blog"}],["meta",{"property":"og:title","content":"LLM Constellation Architecture for Healthcare"}],["meta",{"property":"og:description","content":"Information came from George in Discord channel meeting summaries at 1:33pm 4 July 2024. This is the notes for paper \\"Polaris: A Safety-focused LLM Constellation Architecture for Healthcare\\". The online version is here."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2024-07-12T05:58:45.000Z"}],["meta",{"property":"article:author","content":"Haiyue"}],["meta",{"property":"article:published_time","content":"2024-07-11T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-07-12T05:58:45.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"LLM Constellation Architecture for Healthcare\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2024-07-11T00:00:00.000Z\\",\\"dateModified\\":\\"2024-07-12T05:58:45.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"Haiyue\\"}]}"]]},"headers":[{"level":2,"title":"Abstract","slug":"abstract","link":"#abstract","children":[]},{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"2. System Overview","slug":"_2-system-overview","link":"#_2-system-overview","children":[{"level":3,"title":"2.1 Objectives and Use Cases","slug":"_2-1-objectives-and-use-cases","link":"#_2-1-objectives-and-use-cases","children":[]},{"level":3,"title":"2.2 Constellation Architecture","slug":"_2-2-constellation-architecture","link":"#_2-2-constellation-architecture","children":[]},{"level":3,"title":"2.3 Orchestration","slug":"_2-3-orchestration","link":"#_2-3-orchestration","children":[]},{"level":3,"title":"2.4 LLM Details","slug":"_2-4-llm-details","link":"#_2-4-llm-details","children":[]}]},{"level":2,"title":"3 Conversational Alignment","slug":"_3-conversational-alignment","link":"#_3-conversational-alignment","children":[{"level":3,"title":"3.1 Data","slug":"_3-1-data","link":"#_3-1-data","children":[{"level":4,"title":"3.1.1 Foundation Model Training Data","slug":"_3-1-1-foundation-model-training-data","link":"#_3-1-1-foundation-model-training-data","children":[]},{"level":4,"title":"3.1.2 Simulated Conversations","slug":"_3-1-2-simulated-conversations","link":"#_3-1-2-simulated-conversations","children":[]},{"level":4,"title":"3.1.3 Conversational Dataset Construction","slug":"_3-1-3-conversational-dataset-construction","link":"#_3-1-3-conversational-dataset-construction","children":[]}]},{"level":3,"title":"3.2 General Instruction Tuning","slug":"_3-2-general-instruction-tuning","link":"#_3-2-general-instruction-tuning","children":[]},{"level":3,"title":"3.3 Conversation and Agent Tuning","slug":"_3-3-conversation-and-agent-tuning","link":"#_3-3-conversation-and-agent-tuning","children":[]},{"level":3,"title":"3.4 RLHF","slug":"_3-4-rlhf","link":"#_3-4-rlhf","children":[]}]},{"level":2,"title":"4 Specialist Support Agents","slug":"_4-specialist-support-agents","link":"#_4-specialist-support-agents","children":[{"level":3,"title":"4.1 Privacy & Compliance Specialist","slug":"_4-1-privacy-compliance-specialist","link":"#_4-1-privacy-compliance-specialist","children":[]},{"level":3,"title":"4.2 Checklist Specialist","slug":"_4-2-checklist-specialist","link":"#_4-2-checklist-specialist","children":[]},{"level":3,"title":"4.3 Medication Specialist","slug":"_4-3-medication-specialist","link":"#_4-3-medication-specialist","children":[{"level":4,"title":"4.3.1 Prescription Adherence","slug":"_4-3-1-prescription-adherence","link":"#_4-3-1-prescription-adherence","children":[]},{"level":4,"title":"4.3.2 Condition Specific Disallowed OTCs","slug":"_4-3-2-condition-specific-disallowed-otcs","link":"#_4-3-2-condition-specific-disallowed-otcs","children":[]},{"level":4,"title":"4.3.3 Over-The-Counter (OTC) Toxicity","slug":"_4-3-3-over-the-counter-otc-toxicity","link":"#_4-3-3-over-the-counter-otc-toxicity","children":[]},{"level":4,"title":"4.3.4 Unrecognized Medications Reconciliation","slug":"_4-3-4-unrecognized-medications-reconciliation","link":"#_4-3-4-unrecognized-medications-reconciliation","children":[]},{"level":4,"title":"4.3.5 Models","slug":"_4-3-5-models","link":"#_4-3-5-models","children":[]},{"level":4,"title":"4.3.6 Training Data Generation","slug":"_4-3-6-training-data-generation","link":"#_4-3-6-training-data-generation","children":[]}]},{"level":3,"title":"4.4 Labs & Vitals Specialist","slug":"_4-4-labs-vitals-specialist","link":"#_4-4-labs-vitals-specialist","children":[{"level":4,"title":"4.4.1 Determination of Labs & Vitals and Value Extraction","slug":"_4-4-1-determination-of-labs-vitals-and-value-extraction","link":"#_4-4-1-determination-of-labs-vitals-and-value-extraction","children":[]},{"level":4,"title":"4.4.2 Normal Range Assessment & Plausibility Check","slug":"_4-4-2-normal-range-assessment-plausibility-check","link":"#_4-4-2-normal-range-assessment-plausibility-check","children":[]},{"level":4,"title":"4.4.3 Historical Lab Trends","slug":"_4-4-3-historical-lab-trends","link":"#_4-4-3-historical-lab-trends","children":[]},{"level":4,"title":"4.4.4 Conditional Factors","slug":"_4-4-4-conditional-factors","link":"#_4-4-4-conditional-factors","children":[]},{"level":4,"title":"4.4.5 Summary of Labs & Vitals Specialist Capabilities","slug":"_4-4-5-summary-of-labs-vitals-specialist-capabilities","link":"#_4-4-5-summary-of-labs-vitals-specialist-capabilities","children":[]},{"level":4,"title":"4.4.6 Models","slug":"_4-4-6-models","link":"#_4-4-6-models","children":[]},{"level":4,"title":"4.4.7 Labs & Vitals Specialist Training Datasets","slug":"_4-4-7-labs-vitals-specialist-training-datasets","link":"#_4-4-7-labs-vitals-specialist-training-datasets","children":[]}]},{"level":3,"title":"4.5 Nutrition Specialist","slug":"_4-5-nutrition-specialist","link":"#_4-5-nutrition-specialist","children":[{"level":4,"title":"4.5.1 Workflow","slug":"_4-5-1-workflow","link":"#_4-5-1-workflow","children":[]},{"level":4,"title":"4.5.2 Chain Restaurant Nutrient Dataset Curation","slug":"_4-5-2-chain-restaurant-nutrient-dataset-curation","link":"#_4-5-2-chain-restaurant-nutrient-dataset-curation","children":[]},{"level":4,"title":"4.5.3 Models","slug":"_4-5-3-models","link":"#_4-5-3-models","children":[]},{"level":4,"title":"4.5.4 Training Data Generation","slug":"_4-5-4-training-data-generation","link":"#_4-5-4-training-data-generation","children":[]}]},{"level":3,"title":"4.6 Hospital & Payor Policy Specialist","slug":"_4-6-hospital-payor-policy-specialist","link":"#_4-6-hospital-payor-policy-specialist","children":[{"level":4,"title":"4.6.1 Hospital Policy Q&A within the Hospital System","slug":"_4-6-1-hospital-policy-q-a-within-the-hospital-system","link":"#_4-6-1-hospital-policy-q-a-within-the-hospital-system","children":[]},{"level":4,"title":"4.6.2 Models","slug":"_4-6-2-models","link":"#_4-6-2-models","children":[]},{"level":4,"title":"4.6.3 Training Data Generation","slug":"_4-6-3-training-data-generation","link":"#_4-6-3-training-data-generation","children":[]}]},{"level":3,"title":"4.7 EHR Summary Specialist","slug":"_4-7-ehr-summary-specialist","link":"#_4-7-ehr-summary-specialist","children":[]},{"level":3,"title":"4.8 Human Intervention Specialist","slug":"_4-8-human-intervention-specialist","link":"#_4-8-human-intervention-specialist","children":[]},{"level":3,"title":"4.8.1 Models","slug":"_4-8-1-models","link":"#_4-8-1-models","children":[]},{"level":3,"title":"4.8.2 Training Datasets","slug":"_4-8-2-training-datasets","link":"#_4-8-2-training-datasets","children":[]}]},{"level":2,"title":"5 Evaluation","slug":"_5-evaluation","link":"#_5-evaluation","children":[{"level":3,"title":"5.1 Overall Subjective Evaluation","slug":"_5-1-overall-subjective-evaluation","link":"#_5-1-overall-subjective-evaluation","children":[]},{"level":3,"title":"5.2 Clinical Capability Evaluation","slug":"_5-2-clinical-capability-evaluation","link":"#_5-2-clinical-capability-evaluation","children":[{"level":4,"title":"5.2.1 Medications and Supplements","slug":"_5-2-1-medications-and-supplements","link":"#_5-2-1-medications-and-supplements","children":[]},{"level":4,"title":"5.2.2 Lab and Vital Specialist","slug":"_5-2-2-lab-and-vital-specialist","link":"#_5-2-2-lab-and-vital-specialist","children":[]},{"level":4,"title":"5.2.3 Dietary Recommendations","slug":"_5-2-3-dietary-recommendations","link":"#_5-2-3-dietary-recommendations","children":[]},{"level":4,"title":"5.2.4 Answering Hospital Policy Questions","slug":"_5-2-4-answering-hospital-policy-questions","link":"#_5-2-4-answering-hospital-policy-questions","children":[]},{"level":4,"title":"5.2.5 Privacy","slug":"_5-2-5-privacy","link":"#_5-2-5-privacy","children":[]}]},{"level":3,"title":"5.3 Error Analysis","slug":"_5-3-error-analysis","link":"#_5-3-error-analysis","children":[{"level":4,"title":"5.3.1 Medication Specialist","slug":"_5-3-1-medication-specialist","link":"#_5-3-1-medication-specialist","children":[]},{"level":4,"title":"5.3.2 Lab Values and Vital Signs","slug":"_5-3-2-lab-values-and-vital-signs","link":"#_5-3-2-lab-values-and-vital-signs","children":[]},{"level":4,"title":"5.3.3 Nutrition Specialist","slug":"_5-3-3-nutrition-specialist","link":"#_5-3-3-nutrition-specialist","children":[]},{"level":4,"title":"5.3.4 Hospital & Payor Policy Specialist","slug":"_5-3-4-hospital-payor-policy-specialist","link":"#_5-3-4-hospital-payor-policy-specialist","children":[]}]}]},{"level":2,"title":"6 Related Work","slug":"_6-related-work","link":"#_6-related-work","children":[{"level":3,"title":"6.1 Current Healthcare Challenges","slug":"_6-1-current-healthcare-challenges","link":"#_6-1-current-healthcare-challenges","children":[]},{"level":3,"title":"6.2 LLMs in Healthcare","slug":"_6-2-llms-in-healthcare","link":"#_6-2-llms-in-healthcare","children":[]},{"level":3,"title":"6.3 Labor Market Impact of Healthcare","slug":"_6-3-labor-market-impact-of-healthcare","link":"#_6-3-labor-market-impact-of-healthcare","children":[]}]},{"level":2,"title":"7 Future Work","slug":"_7-future-work","link":"#_7-future-work","children":[]},{"level":2,"title":"8 Conclusions","slug":"_8-conclusions","link":"#_8-conclusions","children":[]}],"git":{"createdTime":1720693701000,"updatedTime":1720763925000,"contributors":[{"name":"Jet","email":"nutterair1989@gmail.com","commits":2}]},"readingTime":{"minutes":16.35,"words":4904},"filePathRelative":"models/RAG/LLM_Constellation_Architecture_for_Healthcare.md","localizedDate":"July 11, 2024","excerpt":"<p>Information came from <a href=\\"https://people.unisa.edu.au/srecko.joksimovic\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">George</a> in Discord channel <code>meeting summaries</code> at 1:33pm 4 July 2024.</p>\\n<p>This is the notes for paper \\"<a href=\\"https://arxiv.org/pdf/2403.13313\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">Polaris: A Safety-focused LLM Constellation Architecture for Healthcare</a>\\". The online version is <a href=\\"https://arxiv.org/html/2403.13313v1#S1\\" target=\\"_blank\\" rel=\\"noopener noreferrer\\">here</a>.</p>","autoDesc":true}`);export{e as data};
