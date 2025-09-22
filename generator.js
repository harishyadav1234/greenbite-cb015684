 const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');});
 
 
 const exercises = [
    {name: 'Single-Leg Glute Bridge', type: 'Legs', equipment: 'None', time: 5},
    {name: 'Push-ups', type: 'Arms', equipment: 'None', time: 5},
    {name: 'Burpees', type: 'Full Body', equipment: 'None', time: 5},
    {name: 'Superman', type: 'Back', equipment: 'None', time: 5},
    {name: 'Wide Push-ups', type: 'Chest', equipment: 'None', time: 5},
    {name: 'Dumbbell Lunges', type: 'Legs', equipment: 'Dumbbells', time: 5},
    {name: 'Hammer Curls', type: 'Arms', equipment: 'Dumbbells', time: 5},
    {name: 'Dumbbell Thrusters', type: 'Full Body', equipment: 'Dumbbells', time: 5},
    {name: 'Bent Over Rows', type: 'Back', equipment: 'Dumbbells', time: 5},
    {name: 'Dumbbell Fly', type: 'Chest', equipment: 'Dumbbells', time: 5}
  ];

  document.getElementById('generate').addEventListener('click', () => {
  const body = document.getElementById('bodypart').value;
  const equip = document.getElementById('equipment').value;
  
  if (body == "") {
    alert("Please select Body Part ");
    return; 
  }

  if (equip == "") {
    alert("Please select an equipment ");
    return; 
  }

  const filtered = exercises.filter(ex => ex.type == body && ex.equipment == equip);

  const list = document.getElementById('workout');
  list.innerHTML = '';
  let totalTime = 0;

  filtered.forEach(exercise => {
    const li = document.createElement('li'); // 
    li.textContent = exercise.name + " - " + exercise.time + " min"; // 
    list.appendChild(li); 
    totalTime += exercise.time;
  });

  document.getElementById('workoutresults').style.display = 'block';


//timer//
  const timer = document.getElementById('timer');
  let timeLeft = totalTime * 60;
  clearInterval(window.myTimer);

  window.myTimer = setInterval(() => {
    if (timeLeft < 0) {
      clearInterval(window.myTimer);
      timer.textContent = 'Workout complete!';
      return;
    }
    const mins = Math.floor(timeLeft / 60);
    const secs = timeLeft % 60;
    timer.textContent = `Time Left: ${mins}:${secs < 10 ? '0' : ''}${secs}`;
    timeLeft--;
  }, 1000);
});
