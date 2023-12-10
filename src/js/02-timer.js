import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
const timerBox = document.querySelector('.timer');
const pickDateInput = document.querySelector('.pick-date');
timerBox.style.display = 'flex';
console.log(timerBox);
const actuallDate = new Date();
const startBtn = document.querySelector('.start');
startBtn.setAttribute('disabled', '');

const days = document.querySelector('span[data-days]');
const hours = document.querySelector('span[data-hours]');
const minutes = document.querySelector('span[data-minutes]');
const seconds = document.querySelector('span[data-seconds]');

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: actuallDate,
  minuteIncrement: 1,
  onClose(selectedDates) {
    console.log(selectedDates[0]);
    if (selectedDates[0].getTime() > actuallDate.getTime()) {
      console.log('true');
      startBtn.removeAttribute('disabled', '');
      let ms = selectedDates[0].getTime() - actuallDate.getTime();
      convertMs(ms);
      function convertMs(ms) {
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
        console.log(days);
        return { days, hours, minutes, seconds };
      }
      timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
      }, 1000);
      days.textContent = convertMs(ms).days;
      hours.textContent = convertMs(ms).hours;
      minutes.textContent = convertMs(ms).minutes;
      seconds.textContent = convertMs(ms).seconds;

      function stopCounting() {
        if (selectedDates[0].getTime() === actuallDate.getTime()) {
          seconds.textContent = 0;
          return;
        }
      }
      stopCounting();
    } else {
      window.alert('Please choose a date in the future');
    }
  },
};

flatpickr(pickDateInput, options);
