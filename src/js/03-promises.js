const form = document.querySelector('.form');
let delay;
let stepDelay;
let amount;
const submit = document.querySelector('.submit');

// losowanie i zwracanie wyniku

function getChances(id, delay) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve({ id, delay });
      } else {
        reject({ id, delay });
      }
    }, delay);
  });
}
// pętla wywoływania funkcji
function handleClick(event) {
  event.preventDefault();
  amount = Number(form.amount.value);
  stepDelay = Number(form.step.value);
  delay = Number(form.delay.value);
  for (let i = 1; i <= amount; i++) {
    getChances(i, delay + stepDelay * (i - 1))
      .then(({ id, delay }) => {
        console.log(`Fulfilled promise ${id} in ${delay}ms`);
      })

      .catch(({ id, delay }) => {
        console.log(`Rejected promise ${id} in ${delay}ms`);
      });
  }
}

submit.addEventListener('click', handleClick);
