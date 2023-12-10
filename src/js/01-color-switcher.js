function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const startBtn = document.querySelector('.start-button');
const stopBtn = document.querySelector('.stop-button');
const body = document.querySelector('body');

let timerId = null;

const changeColor = function () {
  startBtn.setAttribute('disabled', '');
  stopBtn.removeAttribute('disabled', '');
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
};

startBtn.addEventListener('click', changeColor);

stopBtn.addEventListener('click', () => {
  startBtn.removeAttribute('disabled', '');
  stopBtn.setAttribute('disabled', '');
  clearInterval(timerId);
});
