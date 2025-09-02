 function hamburger(){
       document.querySelector('.hamburger-hide').classList.toggle('hamburger-show');
    }
     var time = {days: 5, hours: 24, minutes: 60, seconds: 0};

    var timerStop = setInterval(counter, 1000);

//counter starts here
   let time = {
    days: 2,
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  function counter() {
    if (time.days > 0 || time.hours > 0 || time.minutes > 0 || time.seconds > 0) {

      time.seconds--;

      if (time.seconds < 0) {
        time.seconds = 59;
        time.minutes--;
      }
      if (time.minutes < 0) {
        time.minutes = 59;
        time.hours--;
      }
      if (time.hours < 0) {
        time.hours = 23;
        time.days--;
      }
      document.getElementById("days").innerText = time.days;
      document.getElementById("hours").innerText = time.hours;
      document.getElementById("minutes").innerText = time.minutes;
      document.getElementById("seconds").innerText = time.seconds;

    } else {
      clearInterval(timerStop);
      alert("⏰ Offer has ended!");
    }
  }
  // run every second
  let timerStop = setInterval(counter, 1000);