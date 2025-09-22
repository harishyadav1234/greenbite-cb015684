const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');});


document.addEventListener('DOMContentLoaded', () => {
  const circle = document.querySelector('.circle');
  const text = document.getElementById('text');
  
 
  let breatheIn = true;
  setInterval(() => {
    text.textContent = breatheIn ? "Breathe In" : "Breathe Out";
    breatheIn = !breatheIn;
  }, 1580); 
});




const time = document.getElementById('time');
const startBtn = document.getElementById('start');
const pauseBtn = document.getElementById('pause');
const resetBtn = document.getElementById('reset');

let timeLeft = 1500; // 25 minutes * 60 seconds = 1500
let interval;

const updateTimer = () => {
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  time.innerHTML = 
    `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
};

const startTimer = () => {
  if (interval) {
    clearInterval(interval); 
  }

  interval = setInterval(() => {
    timeLeft--;
    updateTimer();

    if (timeLeft === 0) {
      clearInterval(interval);
      alert("Time's up!");
      timeLeft = 1500; 
      updateTimer();
    }
  }, 1000);
};

const stopTimer = () => {
  clearInterval(interval);
};

const resetTimer = () => {
  clearInterval(interval);
  timeLeft = 1500; 
  updateTimer();
};

startBtn.addEventListener("click", startTimer);
pauseBtn.addEventListener("click", stopTimer);
resetBtn.addEventListener("click", resetTimer);

updateTimer();


//sound
const playButtons = document.querySelectorAll(".play");
const stopButtons = document.querySelectorAll(".stop");

playButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const soundId = btn.getAttribute("data-sound");
    const audio = document.getElementById(soundId);

    audio.play();
  });
});

stopButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    const soundId = btn.getAttribute("data-sound");
    const audio = document.getElementById(soundId);

    audio.pause();
    audio.currentTime = 0; 
  });
});



 
