const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');});



const button = document.querySelector("button");

button.addEventListener("click", () => {
  const dobValue = document.getElementById("dob").value;
  const gender = document.querySelector('input[name="gender"]:checked')?.value;
  const height = parseFloat(document.getElementById("height").value);
  const weight = parseFloat(document.getElementById("weight").value);
  const activityText = document.getElementById("activity").value;

  const activityFactor = activityText.includes("Little")? 1.2:
                        activityText.includes("Lightly") ? 1.375 :
                       activityText.includes("Moderately") ? 1.55 :
                       activityText.includes("Very active") ? 1.725 :
                       activityText.includes("Super") ? 1.9 : 1.2



  /*error handling so user must fill all */
  if (!dobValue) return alert("Please enter your date of birth");
  if (!gender) return alert("Please select your gender");
  if (!height) return alert("Please enter your height");
  if (!weight) return alert("Please enter your weight")
  if (!activityText) return alert("Please select your Activity level");

  const dob = new Date(dobValue);
  let age = new Date().getFullYear() - dob.getFullYear();
  if (new Date().getMonth() < dob.getMonth() || 
      (new Date().getMonth() === dob.getMonth() && new Date().getDate() < dob.getDate())) {
    age--;
  }

let BMR;
  if (gender == "m") {BMR = 10 * weight + 6.25 * height - 5 * age + 5;} 
  else {BMR = 10 * weight + 6.25 * height - 5 * age - 161;}


  const TDEE = BMR * activityFactor;
  const carbs = (TDEE * 0.5) / 4;
  const protein = (TDEE * 0.2) / 4;
  const fat = (TDEE * 0.3) / 9;

  let resultsContainer = document.querySelector(".results");
  if (!resultsContainer) {
    resultsContainer = document.createElement("div");
    resultsContainer.classList.add("results");
    document.querySelector(".calculator").appendChild(resultsContainer);
  }
  resultsContainer.innerHTML = `
    
    <h2>Results</h2>
    <div class="bmr">
    <p>BMR: ${Math.round(BMR)} kcal/day</p>
    <p>TDEE: ${Math.round(TDEE)} kcal/day</p>
    </div>
      <div class="macro">
    <label>Carbs: ${Math.round(carbs)} g</label>
    <progress value="${carbs}" max="500"></progress>
  </div>

  <div class="macro">
    <label>Protein: ${Math.round(protein)} g</label>
    <progress value="${protein}" max="500"></progress>
  </div>

  <div class="macro">
    <label>Fat: ${Math.round(fat)} g</label>
    <progress value="${fat}" max="500"></progress>
  </div>
  `;
  
});






