import"./assets/styles-bd32add3.js";import{i as o}from"./assets/vendor-77e16229.js";document.addEventListener("DOMContentLoaded",function(){const e=document.querySelector(".form");e.addEventListener("submit",i=>{const s=Number(e.delay.value);i.preventDefault(),new Promise((t,r)=>{e.state.value==="fulfilled"?setTimeout(()=>{t(s)},s):e.state.value==="rejected"&&setTimeout(()=>{r(s)},s)}).then(t=>{o.success({title:"Success",message:`✅ Fulfilled promise in ${t}ms`,position:"topCenter"})}).catch(t=>{o.error({title:"Error",message:`❌ Rejected promise in ${t}ms`,position:"topCenter"})}),e.reset()})});
//# sourceMappingURL=commonHelpers2.js.map
