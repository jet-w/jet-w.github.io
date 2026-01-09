const u=document.querySelector(".back-to-top");u&&(window.addEventListener("scroll",()=>{window.scrollY>300?u.classList.add("show"):u.classList.remove("show")}),u.addEventListener("click",()=>{window.scrollTo({top:0,behavior:"smooth"})}));document.querySelectorAll('a[href^="#"]').forEach(d=>{d.addEventListener("click",function(c){c.preventDefault();const e=this.getAttribute("href");if(e){const o=document.querySelector(e);o&&o.scrollIntoView({behavior:"smooth"})}})});function b(){const d=document.querySelectorAll("pre:not([data-enhanced])"),c=15;d.forEach(e=>{e.setAttribute("data-enhanced","true");const o=e.querySelector("code");let a="code";if(o?.classList.contains("language-mermaid")||e.classList.contains("mermaid")||e.closest(".mermaid-container"))return;if(o){const n=o.className.split(" ");for(const t of n)if(t.startsWith("language-")){a=t.replace("language-","");break}}const v=e;v.dataset.language&&(a=v.dataset.language);const k=((o?o.textContent:e.textContent)||"").split(`
`).length,h=k>c,l=document.createElement("div");l.className="code-block-wrapper"+(h?" collapsed":"");const r=document.createElement("div");r.className="code-block-header",r.innerHTML=`
            <span class="code-block-lang">${a}</span>
            <div class="code-block-actions">
              ${h?`
                <button class="code-block-btn collapse-btn" title="展开/收缩">
                  <svg class="collapse-icon transition-transform duration-200" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                  <span class="collapse-text">展开</span>
                </button>
              `:""}
              <button class="code-block-btn copy-btn" title="复制代码">
                <svg class="copy-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                <span class="copy-text">复制</span>
              </button>
            </div>
          `;const p=document.createElement("div");if(p.className="code-block-content",!e.parentNode)return;if(e.parentNode.insertBefore(l,e),l.appendChild(r),l.appendChild(p),p.appendChild(e),h){const n=document.createElement("div");n.className="code-block-expand",n.innerHTML=`
              <button class="expand-btn">
                <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                </svg>
                <span>展开代码 (${k} 行)</span>
              </button>
            `,p.appendChild(n);const t=n.querySelector(".expand-btn");t&&t.addEventListener("click",()=>{l.classList.remove("collapsed");const s=r.querySelector(".collapse-text");s&&(s.textContent="收缩")})}const i=r.querySelector(".copy-btn");i&&i.addEventListener("click",async()=>{const n=o?o.textContent:e.textContent;try{await navigator.clipboard.writeText(n||""),i.classList.add("copied");const t=i.querySelector(".copy-text"),s=i.querySelector(".copy-icon");t&&(t.textContent="已复制"),s&&(s.innerHTML=`
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                `),setTimeout(()=>{i.classList.remove("copied"),t&&(t.textContent="复制"),s&&(s.innerHTML=`
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                  `)},2e3)}catch(t){console.error("复制失败:",t)}});const f=r.querySelector(".collapse-btn");f&&f.addEventListener("click",()=>{const n=l.classList.toggle("collapsed"),t=f.querySelector(".collapse-text");t&&(t.textContent=n?"展开":"收缩")})})}b();const m=new MutationObserver(d=>{let c=!1;d.forEach(e=>{e.addedNodes.length&&e.addedNodes.forEach(o=>{if(o.nodeType===1){const a=o;(a.tagName==="PRE"||a.querySelector?.("pre:not([data-enhanced])"))&&(c=!0)}})}),c&&b()});m.observe(document.body,{childList:!0,subtree:!0});
