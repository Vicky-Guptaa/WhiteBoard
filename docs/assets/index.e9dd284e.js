var ne=Object.defineProperty;var B=Object.getOwnPropertySymbols;var oe=Object.prototype.hasOwnProperty,se=Object.prototype.propertyIsEnumerable;var J=(t,e,n)=>e in t?ne(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Y=(t,e)=>{for(var n in e||(e={}))oe.call(e,n)&&J(t,n,e[n]);if(B)for(var n of B(e))se.call(e,n)&&J(t,n,e[n]);return t};const le=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))c(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&c(a)}).observe(document,{childList:!0,subtree:!0});function n(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerpolicy&&(i.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?i.credentials="include":s.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function c(s){if(s.ep)return;s.ep=!0;const i=n(s);fetch(s.href,i)}};le();const ie=document.querySelector(".for-canvas"),Q=document.querySelector(".pen"),N=document.querySelector(".pen-color"),P=document.querySelector(".pen-slider"),F=document.querySelector(".bucket-color"),U=document.querySelector(".eraser"),ce=document.querySelector(".clear"),z=document.querySelector(".save-image"),$=document.querySelectorAll(".header-icons-styles"),v=document.querySelector(".selected-tools"),ae=document.querySelector(".save-storage"),re=document.querySelector(".load-storage"),de=document.querySelector(".delete-storage"),ue=document.querySelector(".undo"),he=document.querySelector(".redo");document.querySelector("header");const V=document.querySelector(".diff-shapes"),I=document.querySelector(".diff-shapes-container"),fe=document.querySelectorAll(".shape"),u=document.createElement("canvas");u.id="canvas";const o=u.getContext("2d");let h=10,O="#fff",f="#000000",m=!1,H=!1,l=[],g=-1,r=[],j=!1,d="pen",x=[];V.addEventListener("click",()=>{I.classList.toggle("invisible"),I.classList.toggle("scale-0"),I.classList.toggle("-translate-x-[70%]")});fe.forEach(t=>{t.addEventListener("click",()=>{$.forEach(e=>{e.classList.contains("selected-icon-style")&&e.classList.remove("selected-icon-style")}),V.classList.add("selected-icon-style"),m=!1,h=10,f=N.firstElementChild.value,d=t.getAttribute("data-value"),v.textContent=t.getAttribute("data-value")})});F.addEventListener("input",()=>{O=F.firstElementChild.value,S(),E()});N.addEventListener("input",()=>{m=!1,f=N.firstElementChild.value});U.addEventListener("click",()=>{v.textContent="Eraser",m=!0,d="pen",$.forEach(t=>{t.classList.contains("selected-icon-style")&&t.classList.remove("selected-icon-style")}),U.classList.add("selected-icon-style"),f=O,h=50,P.firstElementChild.value=h});P.addEventListener("change",()=>{h=P.firstElementChild.value});Q.addEventListener("click",p);ue.addEventListener("click",me);he.addEventListener("click",ge);function me(){g<0||(g--,S(),E(),v.textContent="Undo",setTimeout(p,1e3))}function ge(){l.length-1!==g&&(g++,S(),E(),v.textContent="Redo",setTimeout(p,1e3))}function p(){d="pen",m=!1,v.textContent="Pen",f=N.firstElementChild.value,h=10,$.forEach(t=>{t.classList.contains("selected-icon-style")&&t.classList.remove("selected-icon-style")}),Q.classList.add("selected-icon-style"),P.firstElementChild.value=h}function S(){u.width=window.innerWidth,u.height=window.innerHeight,o.fillStyle=O,o.fillRect(0,0,u.width,u.height),ie.appendChild(u)}function ve(){if(l.length===0)return;let t=u.offsetWidth,e=u.offsetHeight,n=l[0][0].h,c=l[0][0].w,s=t/c,i=e/n;for(let a=0;a<l.length;a++)for(let L=0;L<l[a].length;L++)l[a][L].w=t,l[a][L].h=e,l[a][L].x*=s,l[a][L].y*=i}window.addEventListener("resize",()=>{S(),console.log("Hello"),ve(),E()});S();function E(){for(let t=0;t<=g;t++)if(!!l[t])for(let e=1;e<l[t].length;e++)l[t][e].shape==="pen"?(o.beginPath(),o.moveTo(l[t][e-1].x,l[t][e-1].y),o.lineWidth=l[t][e-1].size,o.lineCap="round",l[t][e-1].erase?o.strokeStyle=O:o.strokeStyle=l[t][e-1].color,o.lineTo(l[t][e].x,l[t][e].y),o.stroke()):(o.moveTo(l[t][e-1].x,l[t][e-1].y),o.beginPath(),X(l[t]))}ce.addEventListener("click",()=>{S(),l=[],v.textContent="Canvas Cleared",setTimeout(p,1500)});function y(t,e,n,c,s,i,a,L,ee){const te={x:t,y:e,size:n,color:c,erase:s,h:i,w:a,shape:L};l.length!==g&&(l=l.splice(0,g+1)),ee.push(te)}function M(t){const e=u.getBoundingClientRect();return{x:t.clientX-e.left,y:t.clientY-e.top,h:e.height,w:e.width}}u.addEventListener("mousedown",t=>{H=!0;const e=M(t);o.moveTo(e.x,e.y),o.beginPath(),o.lineWidth=h,o.lineCap="round",o.strokeStyle=f,r=[],d!=="pen"&&(x=[],y(e.x,e.y,h,f,m,e.h,e.w,d,r),y(e.x,e.y,h,f,m,e.h,e.w,d,x))});u.addEventListener("mousemove",t=>{if(!!H)if(d==="pen"){const e=M(t);o.lineTo(e.x,e.y),o.stroke(),y(e.x,e.y,h,f,m,e.h,e.w,d,r);return}else{const e=M(t);y(e.x,e.y,h,f,m,e.h,e.w,d,x),S(),E(),o.beginPath(),o.moveTo(e.x,e.y),X(x)}});function b(t,e,n,c,s,i){switch(t){case"rectangle-stroke":{o.strokeStyle=i,o.strokeRect(e,n,c,s);break}case"rectangle-fill":{o.fillStyle=i,o.fillRect(e,n,c,s);break}case"circle-stroke":{o.lineCap="round",o.arc(e,n,Math.max(s,c),0,2*Math.PI,!0),o.strokeStyle=i,o.stroke();break}case"circle-fill":{o.lineCap="round",o.fillStyle=i,o.arc(e,n,Math.max(s,c),0,2*Math.PI,!0),o.fill();break}case"line":{o.lineCap="round",o.strokeStyle=i,o.lineTo(e,n),o.stroke();break}default:console.log("Something Went Wrong! The Chosen Shape Is Not In Option")}o.closePath()}function X(t){if(t.length<2)return;let e={x:t[0].x,y:t[0].y},n={x:t[t.length-1].x,y:t[t.length-1].y},c=t[0].color,s=t[0].shape,i=n.x-e.x,a=n.y-e.y;if(o.lineWidth=t[0].size,s==="line"){o.moveTo(e.x,e.y),b(s,n.x,n.y,i,a,c);return}if(s.includes("circle")){i=Math.abs(i),a=Math.abs(a),o.moveTo(n.x+Math.max(a,i),n.y),b(s,n.x,n.y,i,a,c);return}a>0&&i>0?b(s,e.x,e.y,i,a,c):a>0?b(s,n.x,e.y,Math.abs(i),a,c):i>0?b(s,e.x,n.y,i,Math.abs(a),c):b(s,n.x,n.y,Math.abs(i),Math.abs(a),c)}u.addEventListener("mouseup",t=>{if(d!=="pen"){let e=M(t);y(e.x,e.y,h,f,m,e.h,e.w,d,r),l.push(r),g=l.length-1,S(),E()}else if(r.length!==0){if(r.length===1){const e=Y({},r[0]);e.x+=1e-4,r.push(e),console.log(r)}l.push(r),g=l.length-1}H=!1});function A(t){const e=u.getBoundingClientRect();return{x:t.changedTouches[0].clientX-e.left,y:t.changedTouches[0].clientY-e.top,h:e.height,w:e.width}}u.addEventListener("touchstart",t=>{j=!0;const e=A(t);o.moveTo(e.x,e.y),o.beginPath(),o.lineWidth=h,o.lineCap="round",o.strokeStyle=f,r=[],d!=="pen"&&(x=[],y(e.x,e.y,h,f,m,e.h,e.w,d,r),y(e.x,e.y,h,f,m,e.h,e.w,d,x))});u.addEventListener("touchmove",t=>{if(!!j)if(d==="pen"){const e=A(t);o.lineTo(e.x,e.y),o.stroke(),y(e.x,e.y,h,f,m,e.h,e.w,d,r);return}else{const e=A(t);y(e.x,e.y,h,f,m,e.h,e.w,d,x),S(),E(),o.beginPath(),o.moveTo(e.x,e.y),X(x)}});u.addEventListener("touchend",t=>{if(d!=="pen"){let e=A(t);y(e.x,e.y,h,f,m,e.h,e.w,d,r),l.push(r),X(r),g=l.length-1}else if(r.length!==0){if(r.length===1){const e=Y({},r[0]);e.x+=1e-4,r.push(e),console.log(r)}l.push(r),g=l.length-1}j=!1});ae.addEventListener("click",()=>{localStorage.setItem("saveCanvas",JSON.stringify(l)),v.textContent="Canvas Saved",setTimeout(p,1500)});re.addEventListener("click",()=>{localStorage.getItem("saveCanvas")?(l=JSON.parse(localStorage.saveCanvas),g=l.length-1,v.textContent="Canvas Loaded",E(),setTimeout(p,1500)):(v.textContent="Canvas Not Found",setTimeout(p,1500))});de.addEventListener("click",()=>{localStorage.removeItem("saveCanvas"),v.textContent="Cleared Local Storage",setTimeout(p,1500)});z.addEventListener("click",()=>{z.firstElementChild.href=u.toDataURL("image/jpeg",1),z.firstElementChild.download="paint-example.jpeg",v.textContent="Image File Saved",setTimeout(p,1500)});const Z=document.querySelector(".bucket-set"),q=document.querySelector(".bucket-color-wrapper"),ye=document.querySelector(".pen-tool"),D=document.querySelector(".pen-tools-wrapper"),K=document.querySelector(".drop-menu"),R=document.querySelector(".drop-menu-items-container");console.log(q,Z);Z.addEventListener("click",()=>{q.classList.toggle("invisible"),q.classList.toggle("scale-0"),q.classList.toggle("-translate-x-[100%]")});ye.addEventListener("click",()=>{D.classList.toggle("invisible"),D.classList.toggle("scale-0"),D.classList.toggle("-translate-x-[70%]")});K.addEventListener("click",()=>{K.firstElementChild.classList.toggle("-rotate-90"),R.classList.toggle("translate-x-[45%]"),R.classList.toggle("-translate-y-[70%]"),R.classList.toggle("scale-0")});const _=document.querySelector("canvas"),pe=document.querySelector(".sticky-container"),Se=document.querySelector(".add-notes"),Le=document.querySelector(".save-storage"),xe=document.querySelector(".load-storage"),Ee=document.querySelector(".delete-storage");let C=0,k=0,w=[],T=[],G=0;function be(t){t.addEventListener("mousedown",e=>{C=e.clientX-t.offsetLeft,k=e.clientY-t.offsetTop;let n=t.getAttribute("data-no");w[n]=!0}),t.addEventListener("mousemove",e=>{let n=t.getAttribute("data-no");if(!w[n])return;let c=e.clientY-k,s=e.clientX-C;t.style.top=c+"px",t.style.left=s+"px"}),_.addEventListener("mousemove",e=>{let n=t.getAttribute("data-no");if(!w[n])return;let c=e.clientY-k,s=e.clientX-C;t.style.top=c+"px",t.style.left=s+"px"}),t.addEventListener("mouseup",()=>{let e=t.getAttribute("data-no");w[e]=!1}),t.addEventListener("drag",()=>!1)}function Ce(t){t.addEventListener("touchstart",e=>{C=e.changedTouches[0].clientX-t.offsetLeft,k=e.changedTouches[0].clientY-t.offsetTop;let n=t.getAttribute("data-no");T[n]=!0}),t.addEventListener("touchmove",e=>{let n=t.getAttribute("data-no");if(!T[n])return;let c=e.changedTouches[0].clientY-k,s=e.changedTouches[0].clientX-C;t.style.top=c+"px",t.style.left=s+"px"}),_.addEventListener("touchmove",e=>{let n=t.getAttribute("data-no");if(!T[n])return;let c=e.changedTouches[0].clientY-k,s=e.changedTouches[0].clientX-C;t.style.top=c+"px",t.style.left=s+"px"}),t.addEventListener("touchend",()=>{let e=t.getAttribute("data-no");T[e]=!1}),t.addEventListener("drag",()=>!1)}function ke(t){t.addEventListener("click",()=>{t.parentElement.parentElement.parentElement.parentElement.remove()})}function we(t){t.addEventListener("click",()=>{let e=t.parentElement.parentElement.parentElement.lastElementChild;console.log(e.style.height),e.style.height=="8rem"?(e.style.height="0rem",e.style.padding="0rem"):(e.style.height="8rem",e.style.padding="0.25rem 0rem")})}Se.addEventListener("click",W);function W(t){G++,w.push(!1),T.push(!1);let e=document.createElement("div");e.classList.add("sticky-wrapper"),e.setAttribute("data-no",`${G-1}`),t.heading!==void 0?(console.log(t.heading===void 0),e.style.top=t.top+"px",e.style.left=t.left+"px",e.innerHTML=`
    <div class="sticky">
        <div class="sticky-top ">
            <input type="text" value="${t.heading}" class="sticky-heading" placeholder="Note...">
            <div class="sticky-btns">
                <button class="minimize-btn " title="minimize">
                    <i class="fa-solid fa-minus "></i>
                </button>
                <button class="remove-btn " title="remove">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
        </div>
        <hr>
        <div class="sticky-content" style="height: 8rem; padding:0.25rem 0rem;">
            <textarea name="content" class="" value="${t.content}" placeholder="type here..."></textarea>
        </div>
    </div>`):e.innerHTML=`
    <div class="sticky">
        <div class="sticky-top ">
            <input type="text" value="" class="sticky-heading" placeholder="Note...">
            <div class="sticky-btns">
                <button class="minimize-btn " title="minimize">
                    <i class="fa-solid fa-minus "></i>
                </button>
                <button class="remove-btn " title="remove">
                    <i class="fa-solid fa-xmark"></i>
                </button>
            </div>
        </div>
        <hr>
        <div class="sticky-content" style="height: 8rem; padding:0.25rem 0rem;">
            <textarea name="content" class="" placeholder="type here..."></textarea>
        </div>
    </div>`,pe.appendChild(e),be(e),Ce(e),ke(e.querySelector(".remove-btn")),we(e.querySelector(".minimize-btn"))}function Te(){let t=document.querySelectorAll(".sticky-wrapper"),e=[];t.forEach(n=>{let c={heading:n.querySelector(".sticky-heading").value,content:n.querySelector("textarea").value,top:n.offsetTop,left:n.offsetLeft};e.push(c)}),localStorage.setItem("saveStickyNotes",JSON.stringify(e))}function qe(){console.log("in"),localStorage.getItem("saveStickyNotes")&&JSON.parse(localStorage.saveStickyNotes).forEach(e=>{W(e)})}Le.addEventListener("click",Te);xe.addEventListener("click",qe);Ee.addEventListener("click",()=>{localStorage.removeItem("saveStickyNotes")});
