const form = document.querySelector('.form');
let firstDelay;
let stepDelay;
let amount;
const submit = document.querySelector('.submit');
let timerId;

// losowanie i zwracanie wyniku

function getChances(id, delay = 5000) {
  firstDelay = form.delay.value;
  console.log(firstDelay);
  return new Promise(resolve => {
    setTimeout(() => {
      if (Math.random() > 0.3) {
        resolve(`yes`);
      } else {
        resolve(`no`);
      }
    }, delay);
  });
}

function handleClick(event) {
  event.preventDefault();
  amount = form.amount.value;
  firstDelay = form.delay.value;
  stepDelay = form.step.value;
  const promises = [];
  for (let i = 0; i < amount; i++) {
    let reallyGetChances = getChances(i, firstDelay);
    promises.push(reallyGetChances);
  }
  Promise.all(promises).then(results => {
    for (let i = 0; i < results.length; i++) {
      console.log('losowanie' + `${i + 1} = ${results[i]}`);
    }
  });
}

submit.addEventListener('click', handleClick);
