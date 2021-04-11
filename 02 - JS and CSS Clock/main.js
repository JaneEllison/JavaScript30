const body = document.querySelector('.wrapper');
const hourHand = document.querySelector('.hour-hand');
const minuteHand = document.querySelector('.minute-hand');
const secondHand = document.querySelector('.second-hand');

function setDate () {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds/60) * 360) + 90;
  secondHand.style.transform=`rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes/60) * 360 + (1/60) * secondsDegrees) + 90;
  minuteHand.style.transform=`rotate(${minutesDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = ((hours/120) * 360 + (1/60) * minutesDegrees) + 90;
  hourHand.style.transform=`rotate(${hoursDegrees}deg)`;

  if(hours >= 6 && hours < 12) {
    body.style.backgroundImage = 'url(./background.jpg)';
  }
  else if(hours >= 12 && hours < 18) {
    body.style.backgroundImage = 'url(./background-day.jpg)';
  }
  else if(hours >= 18 && hours < 0) {
    body.style.backgroundImage = 'url(./background-evening.jpg)';
  }
  else if (hours >= 0 && hours < 6) {
    body.style.backgroundImage = 'url(./background-night.jpg)';
  }
};

setInterval(setDate, 1000);