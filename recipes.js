const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');});

const recipesData = {
  breakfast: [
    {
      id: 1,
      name: "Avocado Toast",
      image: "images/avacadotoast.jpg",
      brief: "Toasted bread topped with creamy avocado and seasoning.",
      ingredients: [
        "2 slices whole grain bread",
        "1 ripe avocado",
        "Salt",
        "Black pepper",
        "Red pepper flakes (optional)",
        "Lemon juice"
      ],
      steps: [
        "Toast the bread slices.",
        "Mash avocado with salt, pepper, and lemon juice.",
        "Spread avocado mixture on toast.",
        "Sprinkle red pepper flakes if desired.",
        "Serve immediately."
      ],
      nutrients: {
        Calories: "250 kcal",
        Protein: "6g",
        Carbs: "28g",
        Fat: "14g"
      }
    },
    {
      id: 2,
      name: "Spinach and Feta Omelette",
      image: "images/Spinach-and-Feta-Omelet.jpg",
      brief: "Fluffy omelette filled with fresh spinach and tangy feta cheese.",
      ingredients: [
        "3 eggs",
        "1 cup fresh spinach",
        "50g feta cheese",
        "Salt",
        "Pepper",
        "Butter or oil"
      ],
      steps: [
        "Beat eggs with salt and pepper.",
        "Sauté spinach until wilted.",
        "Pour eggs over spinach, cook on medium heat.",
        "Add feta cheese, fold omelette.",
        "Cook until set and cheese melts.",
        "Serve warm."
      ],
      nutrients: {
        Calories: "320 kcal",
        Protein: "20g",
        Carbs: "3g",
        Fat: "25g"
      }
    },
    {
      id: 3,
      name: "Greek Yogurt with Berries and Honey",
      image: "images/GreekYogurt.jpeg",
      brief: "Creamy Greek yogurt topped with fresh berries and honey.",
      ingredients: [
        "1 cup Greek yogurt",
        "1/2 cup mixed berries",
        "1 tablespoon honey",
        "Granola (optional)"
      ],
      steps: [
        "Spoon yogurt into a bowl.",
        "Top with berries.",
        "Drizzle honey.",
        "Add granola if desired.",
        "Serve chilled."
      ],
      nutrients: {
        Calories: "180 kcal",
        Protein: "15g",
        Carbs: "25g",
        Fat: "0g"
      }
    }
  ],

  lunch: [
    {
      id: 1,
      name: "Grilled Chicken Wrap",
      image: "images/grilledchicken.jpg",
      brief: "A healthy wrap filled with grilled chicken and fresh veggies.",
      ingredients: [
        "1 whole wheat tortilla",
        "100g grilled chicken breast",
        "Lettuce leaves",
        "Tomato slices",
        "Cucumber slices",
        "2 tbsp hummus or yogurt sauce"
      ],
      steps: [
        "Place tortilla on a flat surface.",
        "Spread hummus or yogurt sauce.",
        "Add chicken, lettuce, tomato, and cucumber.",
        "Roll tightly and slice in half.",
        "Serve fresh."
      ],
      nutrients: {
        Calories: "350 kcal",
        Protein: "28g",
        Carbs: "32g",
        Fat: "12g"
      }
    },
    {
      id: 2,
      name: "Vegetable Stir Fry with Brown Rice",
      image: "images/Brown-rice-stir-fry-with-vegetables.jpg",
      brief: "Colorful vegetables stir-fried and served with brown rice.",
      ingredients: [
        "1 cup brown rice (cooked)",
        "1/2 cup broccoli florets",
        "1/2 cup bell peppers",
        "1/2 cup carrots",
        "2 tbsp soy sauce",
        "1 tsp sesame oil"
      ],
      steps: [
        "Cook brown rice and set aside.",
        "Heat oil in a wok, add vegetables.",
        "Stir fry for 5-7 minutes.",
        "Add soy sauce and toss well.",
        "Serve hot with brown rice."
      ],
      nutrients: {
        Calories: "400 kcal",
        Protein: "12g",
        Carbs: "65g",
        Fat: "8g"
      }
    },
    {
      id: 3,
      name: "Chicken Caesar Salad",
      image: "images/caesarsalad.jpeg",
      brief: "Classic Caesar salad topped with grilled chicken.",
      ingredients: [
        "2 cups romaine lettuce",
        "100g grilled chicken breast",
        "2 tbsp Caesar dressing",
        "Croutons",
        "2 tbsp grated Parmesan"
      ],
      steps: [
        "Chop lettuce and place in a bowl.",
        "Add grilled chicken slices.",
        "Top with croutons and Parmesan.",
        "Drizzle Caesar dressing and toss.",
        "Serve chilled."
      ],
      nutrients: {
        Calories: "320 kcal",
        Protein: "26g",
        Carbs: "12g",
        Fat: "18g"
      }
    }
  ],

  dinner: [
    {
      id: 1,
      name: "Beef and Broccoli Stir Fry",
      image: "images/Beef-and-Broccoli.jpg",
      brief: "Tender beef stir-fried with broccoli in a savory sauce.",
      ingredients: [
        "150g beef strips",
        "1 cup broccoli florets",
        "2 tbsp soy sauce",
        "1 tbsp oyster sauce",
        "1 garlic clove (minced)",
        "1 tsp sesame oil"
      ],
      steps: [
        "Heat oil in a pan and sauté garlic.",
        "Add beef strips and cook until browned.",
        "Add broccoli and sauces.",
        "Stir fry for 5 minutes until tender.",
        "Serve hot with rice or noodles."
      ],
      nutrients: {
        Calories: "420 kcal",
        Protein: "30g",
        Carbs: "18g",
        Fat: "24g"
      }
    },
    {
      id: 2,
      name: "Creamy Mushroom Pasta",
      image: "images/Creamy-Mushroom-Pasta.jpg",
      brief: "Pasta tossed in a creamy mushroom sauce.",
      ingredients: [
        "150g pasta",
        "1 cup mushrooms (sliced)",
        "1/2 cup cream",
        "1 garlic clove (minced)",
        "2 tbsp olive oil",
        "Salt & pepper"
      ],
      steps: [
        "Cook pasta until al dente.",
        "Heat oil and sauté garlic and mushrooms.",
        "Add cream, salt, and pepper.",
        "Simmer sauce for 5 minutes.",
        "Mix pasta into sauce and serve."
      ],
      nutrients: {
        Calories: "480 kcal",
        Protein: "14g",
        Carbs: "65g",
        Fat: "18g"
      }
    },
    {
      id: 3,
      name: "Baked Salmon with Garlic and Lemon",
      image: "images/salmon.jpg",
      brief: "Oven-baked salmon flavored with garlic and lemon.",
      ingredients: [
        "1 salmon fillet (150g)",
        "1 tbsp olive oil",
        "1 garlic clove (minced)",
        "1 lemon (sliced)",
        "Salt & pepper"
      ],
      steps: [
        "Preheat oven to 180°C.",
        "Place salmon on a baking tray.",
        "Season with garlic, lemon, salt, and pepper.",
        "Drizzle with olive oil.",
        "Bake for 15-20 minutes until cooked through.",
        "Serve warm."
      ],
      nutrients: {
        Calories: "360 kcal",
        Protein: "34g",
        Carbs: "2g",
        Fat: "22g"
      }
    }
  ],

  snacks: [
    {
      id: 1,
      name: "Fruit Salad",
      image: "images/fruitsalad.jpg",
      brief: "A refreshing mix of seasonal fruits.",
      ingredients: [
        "1 cup mixed fruits (apple, banana, grapes, orange, etc.)",
        "1 tsp lemon juice",
        "Mint leaves (optional)"
      ],
      steps: [
        "Chop fruits into bite-sized pieces.",
        "Mix in a bowl.",
        "Add lemon juice and toss.",
        "Garnish with mint leaves."
      ],
      nutrients: {
        Calories: "150 kcal",
        Protein: "2g",
        Carbs: "38g",
        Fat: "0g"
      }
    },
    {
      id: 2,
      name: "Roasted Chickpeas",
      image: "images/crispy-roasted-chickpeas.jpg",
      brief: "Crunchy and protein-packed roasted chickpeas.",
      ingredients: [
        "1 cup chickpeas (cooked)",
        "1 tbsp olive oil",
        "1 tsp paprika",
        "Salt"
      ],
      steps: [
        "Preheat oven to 200°C.",
        "Toss chickpeas with oil, paprika, and salt.",
        "Spread on a baking tray.",
        "Bake for 25-30 minutes until crispy.",
        "Cool before serving."
      ],
      nutrients: {
        Calories: "190 kcal",
        Protein: "8g",
        Carbs: "28g",
        Fat: "5g"
      }
    },
    {
      id: 3,
      name: "Peanut Butter and Apple Slices",
      image: "images/apple.jpeg",
      brief: "Apple slices paired with creamy peanut butter.",
      ingredients: [
        "1 apple (sliced)",
        "2 tbsp peanut butter"
      ],
      steps: [
        "Wash and slice the apple.",
        "Serve with peanut butter for dipping."
      ],
      nutrients: {
        Calories: "210 kcal",
        Protein: "5g",
        Carbs: "28g",
        Fat: "10g"
      }
    }
  ]
};

const recipesContainer = document.getElementById("recipes");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("closebtn");

const modalName = document.getElementById("modalname");
const modalIngredients = document.getElementById("modalingredients");
const modalSteps = document.getElementById("modalsteps");
const modalNutrition = document.getElementById("modalnutrition");


function openModal(recipe) {
  modalName.textContent = recipe.name;
  modalIngredients.innerHTML = recipe.ingredients
    .map(ing => `<li>${ing}</li>`)
    .join("");

  modalSteps.innerHTML = recipe.steps
    .map(step => `<li>${step}</li>`)
    .join("");

  modalNutrition.innerHTML = Object.entries(recipe.nutrients)
    .map(([k, v]) => `<li>${k}: ${v}</li>`)
    .join("");

  modal.style.display = "flex";
}


closeBtn.onclick = () => { modal.style.display = "none"; }
window.onclick = e => { if (e.target === modal) modal.style.display = "none"; }


for (const category in recipesData) {
  recipesData[category].forEach(recipe => {
    const card = document.createElement("div");
    card.classList.add("recipe-card");
    card.innerHTML = `
      <img src="${recipe.image}" alt="${recipe.name}" style="width:100%; height:150px; object-fit:cover; border-radius:8px;">
      <h3>${recipe.name}</h3>
      <p>${recipe.brief}</p>
    `;
    card.onclick = () => openModal(recipe);
    recipesContainer.appendChild(card);
  });
}


const searchInput = document.getElementById("search");
const filterSelect = document.getElementById("filter");

function createCard(recipe) {
  const card = document.createElement("div");
  card.classList.add("recipe-card");
  card.innerHTML = `
    <img src="${recipe.image}" alt="${recipe.name}" style="width:100%; height:150px; object-fit:cover; border-radius:8px;">
    <h3>${recipe.name}</h3>
    <p>${recipe.brief}</p>
  `;
  card.onclick = () => openModal(recipe);
  return card;
}

function displayRecipes(recipesToDisplay) {
  recipesContainer.innerHTML = "";
  recipesToDisplay.forEach(recipe => {
    const card = createCard(recipe);
    recipesContainer.appendChild(card);
  });
}

function getAllRecipes() {
  return Object.values(recipesData).flat();
}

function filterAndSearchRecipes() {
  const searchTerm = searchInput.value.toLowerCase();
  const selectedCategory = filterSelect.value;

  let allRecipes = [];

  if (selectedCategory === "all") {
    allRecipes = getAllRecipes();
  } else if (recipesData[selectedCategory]) {
    allRecipes = recipesData[selectedCategory];
  }

  const filteredRecipes = allRecipes.filter(recipe =>
    recipe.name.toLowerCase().includes(searchTerm)
  );

  displayRecipes(filteredRecipes);
}

// Initial rendering of all recipes with search and filter support
displayRecipes(getAllRecipes());

searchInput.addEventListener("input", filterAndSearchRecipes);
filterSelect.addEventListener("change", filterAndSearchRecipes);








