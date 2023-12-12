import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

const timerBox = document.querySelector('.timer');
const spans = document.querySelectorAll('span');

const pickDateInput = document.querySelector('.pick-date');

const startBtn = document.querySelector('.start');

const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

startBtn.setAttribute('disabled', '');
timerBox.style.display = 'flex';
timerBox.style.margin = '15px 0 0 -35px';
for (const span of spans) {
  span.style.textAlign = 'center';
  span.style.display = 'block';
  span.style.minWidth = '100px';
  span.style.fontWeight = '700';
}
const actuallDate = new Date();
let ms;
let timerID;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: actuallDate,
  minuteIncrement: 1,
  onClose(selectedDates) {
    let selected = selectedDates;
    if (selectedDates[0].getTime() > actuallDate.getTime()) {
      startBtn.removeAttribute('disabled', '');
      function countingMS() {
        ms = selectedDates[0].getTime() - new Date().getTime();
      }
      setInterval(countingMS, 1000);
    } else {
      window.alert('Please choose a date in the future');
    }
  },
};

flatpickr(pickDateInput, options);

function convertMs(ms) {
  if (ms <= 1) {
    clearInterval(timerID);
  } else {
    function addLeadingZero(value) {
      value = value.toString().padStart(2, '0');
      return value;
    }

    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    // Remaining days
    const days = addLeadingZero(Math.floor(ms / day));
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);

    return { days, hours, minutes, seconds };
  }
}
function counting() {
  if (ms <= 1) {
    clearInterval(timerID);
    return;
  } else {
    days.textContent = convertMs(ms).days;
    hours.textContent = convertMs(ms).hours;
    minutes.textContent = convertMs(ms).minutes;
    seconds.textContent = convertMs(ms).seconds;
  }
}

startBtn.addEventListener('click', () => {
  timerID = setInterval(counting, 1000);
});
