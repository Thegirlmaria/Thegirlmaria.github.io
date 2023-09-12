// Set Week day
let weekDays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const today = new Date();
const currentDay = today.getDay();
document.querySelector('[data-testid="currentDayOfTheWeek"]').textContent =
    "Day: " + weekDays[currentDay];
  
//Set current time
const currentTime = document.querySelector('[data-testid="currentUTCTime"]');
setInterval(() => {
  const time = new Date();
  currentTime.innerHTML = time.toLocaleTimeString();
}, 1000);
