import"./assets/styles-bd32add3.js";import{f as y,i as p}from"./assets/vendor-77e16229.js";const s=document.querySelector("[data-start]"),S=document.querySelector("[data-days]"),g=document.querySelector("[data-hours]"),C=document.querySelector("[data-minutes]"),T=document.querySelector("[data-seconds]"),i=document.querySelector("#datetime-picker");s.addEventListener("click",()=>{s.disabled=!0,i.disabled=!0,k()});let n,a;const b={enableTime:!0,time_24hr:!0,minuteIncrement:1,onClose(e){const t=new Date(e[0]).getTime(),o=Date.now();t>=o?(s.disabled=!1,n=t-o,d(u(n))):p.error({fontSize:"large",close:!1,position:"topRight",messageColor:"white",timeout:2e3,backgroundColor:"red",message:"Please choose a date in the future"})}};y("#datetime-picker",b);function d({days:e,hours:t,minutes:o,seconds:c}){S.textContent=`${e}`,g.textContent=`${t}`,C.textContent=`${o}`,T.textContent=`${c}`}function k(){clearInterval(a),a=setInterval(q,1e3)}function q(){n>0?(n-=1e3,d(u(n))):(clearInterval(a),i.disabled=!1)}function r(e){return String(e).padStart(2,"0")}function u(e){const l=r(Math.floor(e/864e5)),m=r(Math.floor(e%864e5/36e5)),f=r(Math.floor(e%864e5%36e5/6e4)),h=r(Math.floor(e%864e5%36e5%6e4/1e3));return{days:l,hours:m,minutes:f,seconds:h}}
//# sourceMappingURL=commonHelpers.js.map
