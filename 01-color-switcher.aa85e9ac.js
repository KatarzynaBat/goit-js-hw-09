const t=document.querySelector(".start-button"),e=document.querySelector(".stop-button"),r=document.querySelector("body");let o=null;t.addEventListener("click",(function(){t.setAttribute("disabled",""),e.removeAttribute("disabled",""),o=setInterval((()=>{r.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(()=>{t.removeAttribute("disabled",""),e.setAttribute("disabled",""),clearInterval(o)}));
//# sourceMappingURL=01-color-switcher.aa85e9ac.js.map