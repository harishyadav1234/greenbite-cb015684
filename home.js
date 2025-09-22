const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');
hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});


document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});


document.addEventListener('click', (e) => {
  if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
    navLinks.classList.remove('active');
  }
});



document.addEventListener("DOMContentLoaded", () => {
/* to make slogans in hero section */    
    const slogans = [
        "Healthy habits = happy life.",
        "Eat well, live well.",
        "Fuel your body, feed your mind.",
        "Wellness starts with you.",
        "Balance your meals, balance your life."
    ];

    let index = 0;
    const sloganElement = document.getElementById("slogan");

    sloganElement.textContent = slogans[index];

    setInterval(() => {
        sloganElement.style.opacity = 0;

        setTimeout(() => {
            index = (index + 1) % slogans.length;
            sloganElement.textContent = slogans[index];
            sloganElement.style.opacity = 1;
        }, 800); 
    }, 2700); 
});

/*health tip of the day*/
window.onload = function(){
const tips = [
  "Drink at least 8 glasses of water every day.",
  "Stay physically active",
  "Focus on a balanced diet rich in fruits, vegetables",
  "Prioritize sufficient, quality sleep to feel recharged.",
  "Manage Stress."
];

const today = new Date();
const tipIndex = today.getDate() % tips.length;
const tipElement = document.getElementById("dailytip");
tipElement.textContent = tips[tipIndex];

};

