const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');});



const form = document.getElementById('form');
const confirmation = document.getElementById('confirmation');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    alert("Please fill in all fields!");
    return;
  }

  if (!email.includes("@") || !email.includes(".")) {
    alert("Please enter a valid email!");
    return;
  }

  let feedbackList = JSON.parse(localStorage.getItem("feedbackList")) || [];
  feedbackList.push({ name, email, message, date: new Date().toISOString() });
  localStorage.setItem("feedbackList", JSON.stringify(feedbackList));

  confirmation.style.display = "block";
  form.reset();
});



