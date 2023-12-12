const form = document.querySelector('.form');
let firstDelay = form.delay;
let stepDelay = form.step;
let amount = form.amount;
const submit = document.querySelector('.submit');

// deklaracja obietnicy

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolve, reject) => {
    firstDelay = form.delay.value;
    stepDelay = form.step.value;
    amount = form.amount.value;
    setTimeout(() => {
      if (shouldResolve) {
        resolve('resolved');
      } else {
        reject('rejectes');
      }
    }, firstDelay);
  });
}
// wywiałanie obietnicy

submit.addEventListener('click', event => {
  event.preventDefault();

  console.log(stepDelay);
  createPromise()
    .then(value => {
      console.log(value);
    })
    .catch(error => {
      console.log(error);
    });
});
