!function(){var e=document.querySelector(".form"),o=e.delay,n=e.step;e.amount;document.querySelector(".submit").addEventListener("click",(function(t){var c;t.preventDefault(),console.log(n),(c=Math.random()>.3,new Promise((function(t,u){o=e.delay.value,n=e.step.value,e.amount.value,setTimeout((function(){c?t("resolved"):u("rejectes")}),o)}))).then((function(e){console.log(e)})).catch((function(e){console.log(e)}))}))}();
//# sourceMappingURL=03-promises.8d04a1a7.js.map
