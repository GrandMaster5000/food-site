!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t,n){},function(e,t,n){"use strict";n.r(t);var r=function(e,t){function n(e){return e>=0&&e<10?"0"+e:e}!function(e,t){document.querySelector(e);const r=document.querySelector("#days"),o=document.querySelector("#hours"),c=document.querySelector("#minutes"),a=document.querySelector("#seconds"),i=setInterval(l,1e3);function l(){const e=function(e){const t=Date.parse(e)-Date.parse(new Date);return{total:t,days:Math.floor(t/864e5),hours:Math.floor(t/36e5%24),minutes:Math.floor(t/1e3/60%60),seconds:Math.floor(t/1e3%60)}}(t);r.innerHTML=n(e.days),o.innerHTML=n(e.hours),c.innerHTML=n(e.minutes),a.innerHTML=n(e.seconds),e.total<=0&&clearInterval(i)}l()}(e,t)};var o=function(e,t,n,r){const o=document.querySelectorAll(e),c=document.querySelectorAll(t);function a(){c.forEach(e=>{e.style.display="none"}),o.forEach(e=>{e.classList.remove(r)})}function i(e=0){c[e].style.display="block",o[e].classList.add(r)}document.querySelector(n).addEventListener("click",t=>{const n=t.target;n&&n.classList.contains(e.slice(1))&&o.forEach((e,t)=>{n==e&&(a(),i(t))})}),a(),i()};var c=function(){const e=document.querySelector(".calculating__result span");let t,n,r,o,c;function a(e,t){document.querySelectorAll(e).forEach(e=>{e.classList.remove(t),e.getAttribute("id")===localStorage.getItem("sex")&&e.classList.add(t),e.getAttribute("data-ratio")===localStorage.getItem("ratio")&&e.classList.add(t)})}function i(){t&&n&&r&&o&&c?(e.textContent="woman"===t?Math.round((447.6+9.2*r+3.1*n-4.3*o)*c):Math.round((88.36+13.4*r+4.8*n-5.7*o)*c),(e.textContent>2e4||e.textContent<0)&&(e.textContent="----")):e.textContent="----"}function l(e,n){const r=document.querySelectorAll(e);r.forEach(e=>{e.addEventListener("click",e=>{e.target.getAttribute("data-ratio")?(c=+e.target.getAttribute("data-ratio"),localStorage.setItem("ratio",+e.target.getAttribute("data-ratio"))):(t=e.target.getAttribute("id"),localStorage.setItem("sex",e.target.getAttribute("id"))),r.forEach(e=>{e.classList.remove(n)}),e.target.classList.add(n),i()})})}function s(e){const t=document.querySelector(e);t.addEventListener("input",()=>{switch(t.value.match(/\D/g)?t.style.border="1px solid red":t.style.border="none",t.getAttribute("id")){case"height":n=+t.value;break;case"weight":r=+t.value;break;case"age":o=+t.value}i()})}localStorage.getItem("sex")?t=localStorage.getItem("sex"):(t="women",localStorage.setItem("sex","women")),localStorage.getItem("ratio")?c=localStorage.getItem("ratio"):(c=1.375,localStorage.setItem("ratio",1.375)),i(),a("#gender div","calculating__choose-item_active"),a(".calculating__choose_big div","calculating__choose-item_active"),s("#height"),s("#weight"),s("#age"),l("#gender div","calculating__choose-item_active"),l(".calculating__choose_big div","calculating__choose-item_active")};n(0);var a=function(){class e{constructor(e,t,n,r,o,c,...a){this.parent=document.querySelector(e),this.src=t,this.alt=n,this.title=r,this.descr=o,this.price=c,this.transfer=27,this.classes=a,this.changeToUAH()}changeToUAH(){this.price=+this.price*this.transfer}render(){const e=document.createElement("div");0===this.classes.length?(this.class="menu__item",e.classList.add(this.class)):this.classes.forEach(t=>e.classList.add(t)),e.innerHTML=`\n                <img src=${this.src} alt=${this.src}>\n                <h3 class="menu__item-subtitle">${this.title}</h3>\n                <div class="menu__item-descr">${this.descr}</div>\n                <div class="menu__item-divider"></div>\n                <div class="menu__item-price">\n                    <div class="menu__item-cost">Цена:</div>\n                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n                </div>\n            `,this.parent.append(e)}}new e(".menu .container","img/tabs/vegy.jpg","vegy","Меню 'Фитнес'","Меню 'Фитнес' - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!",9).render(),new e(".menu .container","img/tabs/post.jpg","post","Меню 'Постное'","Меню 'Постное' - это тщательный подбор ингредиентов: полное отсутствие продуктов животного происхождения, молоко из миндаля, овса, кокоса или гречки, правильное количество белков за счет тофу и импортных вегетарианских стейков.",14).render(),new e(".menu .container","img/tabs/elite.jpg","elite","Меню 'Премиум'","В меню 'Премиум' мы используем не только красивый дизайн упаковки, но и качественное исполнение блюд. Красная рыба, морепродукты, фрукты - ресторанное меню без похода в ресторан!",21).render()};function i(e){document.querySelector(e).style.display="none",document.body.style.overflow=""}function l(e,t){document.querySelector(e).style.display="block",document.body.style.overflow="hidden",console.log(t),t&&clearInterval(t)}function s(e){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(l(".modal",e),window.removeEventListener("scroll",s))}var d=function(e,t,n){const r=document.querySelectorAll(e),o=document.querySelector(t);r.forEach(e=>{e.addEventListener("click",()=>l(t,n))}),o.addEventListener("click",e=>{e.target!==o&&""!=e.target.getAttribute("data-close")||i(t)}),document.addEventListener("keydown",e=>{"Escape"===e.code&&"block"==o.style.display&&i(t)}),window.addEventListener("scroll",()=>s(n))};var u=function(e,t){document.querySelectorAll(e)};var m=function({container:e,slide:t,nextArrow:n,prevArrow:r,totalCounter:o,currentCounter:c,wrapper:a,field:i}){const l=document.querySelector(r),s=document.querySelector(e),d=document.querySelector(n),u=document.querySelector(c),m=document.querySelectorAll(t),f=document.querySelector(o),g=document.querySelector(a),h=document.querySelector(i),y=window.getComputedStyle(g).width;let p=1,v=0;m.length<10?f.innerHTML="0"+m.length:f.innerHTML=""+m.length,h.style.width=100*m.length+"%",h.style.display="flex",h.style.transition="0.5s all",g.style.overflow="hidden",m.forEach(e=>{e.style.width=y}),s.style.position="relative";const _=document.createElement("ol"),b=[];_.classList.add("carousel-indicators"),s.append(_);for(let e=0;e<m.length;e++){const t=document.createElement("li");t.setAttribute("data-slide-to",e+1),t.classList.add("dot"),0==e&&(t.style.opacity=1),_.append(t),b.push(t)}function S(e){return+e.replace(/\D/g,"")}function L(e){e>m.length&&(p=1),e<1&&(p=m.length),m.length<10?u.innerHTML="0"+p:u.innerHTML=""+p,b.forEach(e=>{e.style.opacity=".5"}),b[p-1].style.opacity="1"}L(p),d.addEventListener("click",()=>{v==S(y)*(m.length-1)?v=0:v+=S(y),p++,L(p),h.style.transform=`translateX(-${v}px)`}),l.addEventListener("click",()=>{0==v?v=S(y)*(m.length-1):v-=S(y),p--,L(p),h.style.transform=`translateX(-${v}px)`}),b.forEach(e=>{e.addEventListener("click",e=>{const t=e.target.getAttribute("data-slide-to");p=t,v=S(y)*(t-1),h.style.transform=`translateX(-${v}px)`,L(p)})})};document.addEventListener("DOMContentLoaded",()=>{const e=setTimeout(()=>l(".modal",e),8e3);o(".tabheader__item",".tabcontent",".tabheader__items","tabheader__item_active"),c(),a(),u("form",e),d("[data-modal]",".modal",e),r(".timer","2021-08-31"),m({container:".offer__slider",slide:".offer__slide",nextArrow:".offer__slider-next",prevArrow:".offer__slider-prev",totalCounter:"#total",currentCounter:"#current",wrapper:".offer__slider-wrapper",field:".offer__slider-inner"})})}]);
//# sourceMappingURL=bundle.js.map