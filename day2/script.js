const secondHand = document.querySelector('.hand--seconds');
const minsHand = document.querySelector('.hand--mins');
const hourHand = document.querySelector('.hand--hours');

function setTime(){
  const currentTime = new Date();

  var hours = currentTime.getHours();
  var hourDegree = ((hours / 12) * 360) + 90;
  hourHand.style.transform = `rotate(${hourDegree}deg)`;

  var mins = currentTime.getMinutes();
  var minsDegree = ((mins / 60) * 360) + 90;
  minsHand.style.transform = `rotate(${minsDegree}deg)`;

  var seconds = currentTime.getSeconds();
  var secDegree = ((seconds / 60) * 360) + 90;
  secondHand.style.transform = `rotate(${secDegree}deg)`;
  console.log(seconds);
}

setInterval(setTime, 1000);