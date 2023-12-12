const form = document.querySelector('.form');
let firstDelay;
let stepDelay;
let amount;
const submit = document.querySelector('.submit');
let timerId;

// losowanie i zwracanie wyniku

function getChances(id, shouldResolve = Math.random()) {
  if (shouldResolve > 0.3) {
    return Promise.resolve(` yes`);
  } else {
    return Promise.resolve(`no`);
  }
}

function handleClick(event) {
  event.preventDefault();
  amount = form.amount.value;
  firstDelay = form.delay.value;
  stepDelay = form.step.value;
  const promises = [];
  for (let i = 0; i < amount; i++) {
    promises.push(getChances());
  }
  Promise.all(promises).then(results => {
    for (let i = 0; i < results.length; i++) {
      console.log('losowanie' + `${i + 1} = ${results[i]}`);
    }
  });
}

submit.addEventListener('click', handleClick);
