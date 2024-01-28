document.addEventListener('DOMContentLoaded', function () {
  const hourHand = document.querySelector('.hand.hour');
  const minuteHand = document.querySelector('.hand.minute');
  const secondHand = document.querySelector('.hand.second');

  function updateClock() {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const seconds = now.getSeconds();
      const hourDegrees = (hours % 12 + minutes / 60) * 30;
      const minuteDegrees = (minutes + seconds / 60) * 6;
      const secondDegrees = seconds * 6;

      hourHand.style.transform = `translateX(-50%) rotate(${hourDegrees}deg)`;
      minuteHand.style.transform = `translateX(-50%) rotate(${minuteDegrees}deg)`;
      secondHand.style.transform = `translateX(-50%) rotate(${secondDegrees}deg)`;
  }
  setInterval(updateClock, 1000);
  updateClock();
});
