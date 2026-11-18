const recipes = [
    {
        title: "Avocado & Egg Breakfast Toast",
        desc: "Toasted artisanal sourdough topped with smashed avocado, poached egg, and red pepper flakes",
        image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=800",
        rating: "4.9",
        reviews: "112",
        prepTime: "10 min",
        cookTime: "5 min",
        servings: "1 person",
        difficulty: "Easy",
        category: "Breakfast",
        showWarning: false,
        ingredients: [
            "2 slices sourdough bread",
            "1 ripe avocado",
            "1 large egg",
            "1 tbsp lemon juice",
            "A pinch of chili flakes",
            "Salt and pepper to taste"
        ],
        instructions: [
            "Toast the sourdough slices until golden and crispy.",
            "In a bowl, mash the avocado with lemon juice, salt, and pepper.",
            "Poach or fry the egg to your preferred doneness.",
            "Spread the mashed avocado generously over the toasted bread.",
            "Top with the cooked egg and sprinkle chili flakes on top."
        ],
        nutrition: [
            { name: "Calories", value: "340 kcal", icon: "fa-fire", bg: "#fef2f2", color: "#ef4444" },
            { name: "Protein", value: "13g", icon: "fa-dumbbell", bg: "#eff6ff", color: "#3b82f6" },
            { name: "Carbohydrates", value: "30g", icon: "fa-wheat-awn", bg: "#fffbeb", color: "#f59e0b" },
            { name: "Fat", value: "19g", icon: "fa-droplet", bg: "#fdf2f8", color: "#db2777" },
            { name: "Fiber", value: "9g", icon: "fa-seedling", bg: "#f0fdf4", color: "#22c55e" },
            { name: "Sodium", value: "310mg", icon: "fa-cube", bg: "#faf5ff", color: "#9333ea" },
            { name: "Sugar", value: "2g", icon: "fa-candy-cane", bg: "#fff1f2", color: "#e11d48" },
            { name: "Cholesterol", value: "185mg", icon: "fa-heart-pulse", bg: "#f0fdf4", color: "#16a34a" }
        ],
        tips: [
            "Add a drizzle of hot honey for an amazing sweet and savory twist."
        ]
    },
    {
        title: "Mediterranean Quinoa Bowl",
        desc: "Healthy bowl with quinoa, vegetables, and tahini dressing",
        image: "https://images.unsplash.com/photo-1540420773420-3366772f4999?w=800",
        rating: "4.5",
        reviews: "156",
        prepTime: "20 min",
        cookTime: "35 min",
        servings: "2 people",
        difficulty: "Easy",
        category: "Mediterranean",
        showWarning: true,
        ingredients: [
            "1 cup quinoa",
            "Cherry tomatoes, halved",
            "Cucumber, diced",
            "Red onion, sliced",
            "Kalamata olives",
            "Feta cheese, crumbled",
            "Fresh parsley",
            "Tahini dressing",
            "Extra virgin olive oil",
            "Lemon juice"
        ],
        instructions: [
            "Rinse quinoa thoroughly. Cook according to package directions, usually 15 minutes.",
            "While quinoa cooks, prepare all vegetables and set aside.",
            "For tahini dressing: mix tahini, lemon juice, garlic, and water until smooth.",
            "Fluff cooked quinoa with a fork and let cool slightly.",
            "Arrange quinoa in bowls. Top with tomatoes, cucumber, onion, and olives."
        ],
        nutrition: [
            { name: "Calories", value: "420 kcal", icon: "fa-fire", bg: "#fef2f2", color: "#ef4444" },
            { name: "Protein", value: "14g", icon: "fa-dumbbell", bg: "#eff6ff", color: "#3b82f6" },
            { name: "Carbohydrates", value: "58g", icon: "fa-wheat-awn", bg: "#fffbeb", color: "#f59e0b" },
            { name: "Fat", value: "16g", icon: "fa-droplet", bg: "#fdf2f8", color: "#db2777" },
            { name: "Fiber", value: "8g", icon: "fa-seedling", bg: "#f0fdf4", color: "#22c55e" },
            { name: "Sodium", value: "520mg", icon: "fa-cube", bg: "#faf5ff", color: "#9333ea" },
            { name: "Sugar", value: "6g", icon: "fa-candy-cane", bg: "#fff1f2", color: "#e11d48" },
            { name: "Cholesterol", value: "10mg", icon: "fa-heart-pulse", bg: "#f0fdf4", color: "#16a34a" }
        ],
        tips: [
            "Use warm quinoa for a comforting bowl or chill it for a refreshing summer salad."
        ]
    },
    {
        title: "Classic Margherita Pizza",
        desc: "Traditional Italian pizza with San Marzano tomatoes, fresh mozzarella, and basil",
        image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143?w=800",
        rating: "4.9",
        reviews: "320",
        prepTime: "25 min",
        cookTime: "12 min",
        servings: "3 people",
        difficulty: "Medium",
        category: "Italian",
        showWarning: false,
        ingredients: [
            "Pizza dough ball",
            "Crushed San Marzano tomatoes",
            "Fresh mozzarella cheese",
            "Fresh basil leaves",
            "Extra virgin olive oil",
            "Sea salt"
        ],
        instructions: [
            "Preheat oven to high temperature with a pizza stone.",
            "Stretch the pizza dough out on a floured surface.",
            "Spread the crushed tomatoes evenly over the base.",
            "Add torn mozzarella cheese and fresh basil leaves.",
            "Drizzle with olive oil and bake until crust is golden and crispy."
        ],
        nutrition: [
            { name: "Calories", value: "600 kcal", icon: "fa-fire", bg: "#fef2f2", color: "#ef4444" },
            { name: "Protein", value: "24g", icon: "fa-dumbbell", bg: "#eff6ff", color: "#3b82f6" },
            { name: "Carbohydrates", value: "75g", icon: "fa-wheat-awn", bg: "#fffbeb", color: "#f59e0b" },
            { name: "Fat", value: "20g", icon: "fa-droplet", bg: "#fdf2f8", color: "#db2777" },
            { name: "Fiber", value: "4g", icon: "fa-seedling", bg: "#f0fdf4", color: "#22c55e" },
            { name: "Sodium", value: "850mg", icon: "fa-cube", bg: "#faf5ff", color: "#9333ea" },
            { name: "Sugar", value: "5g", icon: "fa-candy-cane", bg: "#fff1f2", color: "#e11d48" },
            { name: "Cholesterol", value: "35mg", icon: "fa-heart-pulse", bg: "#f0fdf4", color: "#16a34a" }
        ],
        tips: [
            "Make sure your oven is as hot as possible for that authentic pizzeria crust."
        ]
    },
    {
        title: "Classic Beef Burger",
        desc: "Juicy grilled beef patty with cheddar cheese, lettuce, tomato, and special sauce",
        image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=800",
        rating: "4.6",
        reviews: "310",
        prepTime: "15 min",
        cookTime: "15 min",
        servings: "2 people",
        difficulty: "Medium",
        category: "Fast Food",
        showWarning: true,
        ingredients: [
            "2 ground beef patties",
            "2 brioche burger buns",
            "2 slices cheddar cheese",
            "Crispy lettuce leaves",
            "Tomato slices",
            "Pickles",
            "Special burger sauce"
        ],
        instructions: [
            "Season beef patties with salt and black pepper.",
            "Grill patties over medium-high heat for 4-5 minutes on each side.",
            "Place cheddar cheese on top of patties during the last minute to melt.",
            "Toast the burger buns lightly on the grill.",
            "Assemble burger with sauce, lettuce, tomato, cheesy patty, and pickles."
        ],
        nutrition: [
            { name: "Calories", value: "650 kcal", icon: "fa-fire", bg: "#fef2f2", color: "#ef4444" },
            { name: "Protein", value: "34g", icon: "fa-dumbbell", bg: "#eff6ff", color: "#3b82f6" },
            { name: "Carbohydrates", value: "42g", icon: "fa-wheat-awn", bg: "#fffbeb", color: "#f59e0b" },
            { name: "Fat", value: "38g", icon: "fa-droplet", bg: "#fdf2f8", color: "#db2777" },
            { name: "Fiber", value: "2g", icon: "fa-seedling", bg: "#f0fdf4", color: "#22c55e" },
            { name: "Sodium", value: "920mg", icon: "fa-cube", bg: "#faf5ff", color: "#9333ea" },
            { name: "Sugar", value: "7g", icon: "fa-candy-cane", bg: "#fff1f2", color: "#e11d48" },
            { name: "Cholesterol", value: "95mg", icon: "fa-heart-pulse", bg: "#f0fdf4", color: "#16a34a" }
        ],
        tips: [
            "Let the beef patties rest for 5 minutes after grilling to keep them juicy."
        ]
    },
    {
        title: "Creamy Garlic Butter Salmon",
        desc: "Pan-seared salmon fillets in a rich garlic butter and lemon cream sauce",
        image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=800",
        rating: "4.9",
        reviews: "215",
        prepTime: "10 min",
        cookTime: "15 min",
        servings: "2 people",
        difficulty: "Medium",
        category: "Seafood",
        showWarning: false,
        ingredients: [
            "2 salmon fillets",
            "2 tbsp butter",
            "3 cloves minced garlic",
            "1/2 cup heavy cream",
            "1 tbsp lemon juice",
            "Fresh spinach",
            "Salt and pepper"
        ],
        instructions: [
            "Season salmon fillets with salt and pepper.",
            "Melt butter in a skillet over medium-high heat and sear salmon for 4 minutes per side, then remove.",
            "In the same pan, sauté garlic and add heavy cream and lemon juice.",
            "Stir in fresh spinach until wilted.",
            "Return salmon to the pan and spoon the sauce over it."
        ],
        nutrition: [
            { name: "Calories", value: "510 kcal", icon: "fa-fire", bg: "#fef2f2", color: "#ef4444" },
            { name: "Protein", value: "36g", icon: "fa-dumbbell", bg: "#eff6ff", color: "#3b82f6" },
            { name: "Carbohydrates", value: "4g", icon: "fa-wheat-awn", bg: "#fffbeb", color: "#f59e0b" },
            { name: "Fat", value: "38g", icon: "fa-droplet", bg: "#fdf2f8", color: "#db2777" },
            { name: "Fiber", value: "1g", icon: "fa-seedling", bg: "#f0fdf4", color: "#22c55e" },
            { name: "Sodium", value: "480mg", icon: "fa-cube", bg: "#faf5ff", color: "#9333ea" },
            { name: "Sugar", value: "1g", icon: "fa-candy-cane", bg: "#fff1f2", color: "#e11d48" },
            { name: "Cholesterol", value: "125mg", icon: "fa-heart-pulse", bg: "#f0fdf4", color: "#16a34a" }
        ],
        tips: [
            "Do not overcook the salmon to keep its tender and flaky texture."
        ]
    },
    {
        title: "Berry Healthy Smoothie Bowl",
        desc: "Blended mixed berries and banana topped with granola, chia seeds, and coconut flakes",
        image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?w=800",
        rating: "4.8",
        reviews: "95",
        prepTime: "5 min",
        cookTime: "0 min",
        servings: "1 person",
        difficulty: "Easy",
        category: "Breakfast",
        showWarning: false,
        ingredients: [
            "1 cup frozen mixed berries",
            "1 frozen banana",
            "1/2 cup almond milk",
            "Granola for topping",
            "Chia seeds",
            "Coconut flakes"
        ],
        instructions: [
            "Blend frozen berries, banana, and almond milk until thick and smooth.",
            "Pour the mixture into a bowl.",
            "Top with a line of granola, chia seeds, and coconut flakes.",
            "Serve immediately with a spoon."
        ],
        nutrition: [
            { name: "Calories", value: "290 kcal", icon: "fa-fire", bg: "#fef2f2", color: "#ef4444" },
            { name: "Protein", value: "6g", icon: "fa-dumbbell", bg: "#eff6ff", color: "#3b82f6" },
            { name: "Carbohydrates", value: "55g", icon: "fa-wheat-awn", bg: "#fffbeb", color: "#f59e0b" },
            { name: "Fat", value: "7g", icon: "fa-droplet", bg: "#fdf2f8", color: "#db2777" },
            { name: "Fiber", value: "10g", icon: "fa-seedling", bg: "#f0fdf4", color: "#22c55e" },
            { name: "Sodium", value: "85mg", icon: "fa-cube", bg: "#faf5ff", color: "#9333ea" },
            { name: "Sugar", value: "28g", icon: "fa-candy-cane", bg: "#fff1f2", color: "#e11d48" },
            { name: "Cholesterol", value: "0mg", icon: "fa-heart-pulse", bg: "#f0fdf4", color: "#16a34a" }
        ],
        tips: [
            "Keep your fruits completely frozen to get a thick, ice-cream-like consistency."
        ]
    },
    {
        title: "Garlic Butter Shrimp Skillet",
        desc: "Tender shrimp sautéed in a rich garlic butter sauce with fresh herbs and lemon",
        image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?w=800", // رابط صورة جديد ومضمون التحميل
        rating: "4.9",
        reviews: "195",
        prepTime: "10 min",
        cookTime: "8 min",
        servings: "2 people",
        difficulty: "Easy",
        category: "Seafood",
        showWarning: false,
        ingredients: [
            "500g large shrimp, peeled and deveined",
            "3 tbsp butter",
            "4 cloves minced garlic",
            "1 tbsp lemon juice",
            "Fresh chopped parsley",
            "Salt and black pepper"
        ],
        instructions: [
            "Season the shrimp with salt and black pepper.",
            "Melt butter in a large skillet over medium-high heat.",
            "Add minced garlic and sauté for 30 seconds until fragrant.",
            "Add shrimp to the skillet and cook for 2-3 minutes per side until pink and opaque.",
            "Remove from heat, drizzle with fresh lemon juice, and garnish with parsley."
        ],
        nutrition: [
            { name: "Calories", value: "280 kcal", icon: "fa-fire", bg: "#fef2f2", color: "#ef4444" },
            { name: "Protein", value: "26g", icon: "fa-dumbbell", bg: "#eff6ff", color: "#3b82f6" },
            { name: "Carbohydrates", value: "3g", icon: "fa-wheat-awn", bg: "#fffbeb", color: "#f59e0b" },
            { name: "Fat", value: "18g", icon: "fa-droplet", bg: "#fdf2f8", color: "#db2777" },
            { name: "Fiber", value: "0g", icon: "fa-seedling", bg: "#f0fdf4", color: "#22c55e" },
            { name: "Sodium", value: "590mg", icon: "fa-cube", bg: "#faf5ff", color: "#9333ea" },
            { name: "Sugar", value: "1g", icon: "fa-candy-cane", bg: "#fff1f2", color: "#e11d48" },
            { name: "Cholesterol", value: "185mg", icon: "fa-heart-pulse", bg: "#f0fdf4", color: "#16a34a" }
        ],
        tips: [
            "Serve hot with crusty French bread to soak up the delicious garlic butter sauce."
        ]
    },
    {
        title: "Creamy Wild Mushroom Pasta",
        desc: "Fettuccine pasta tossed in a rich garlic and wild mushroom parmesan cream sauce",
        image: "https://images.unsplash.com/photo-1556761223-4c4282c73f77?w=800",
        rating: "4.7",
        reviews: "140",
        prepTime: "15 min",
        cookTime: "20 min",
        servings: "3 people",
        difficulty: "Medium",
        category: "Italian",
        showWarning: false,
        ingredients: [
            "300g fettuccine pasta",
            "2 cups sliced wild mushrooms",
            "1 cup heavy cream",
            "1/2 cup grated parmesan cheese",
            "2 tbsp butter",
            "Fresh parsley"
        ],
        instructions: [
            "Cook fettuccine pasta in boiling salted water until al dente.",
            "Melt butter in a large pan and sauté mushrooms until golden brown.",
            "Pour in heavy cream and bring to a gentle simmer.",
            "Stir in parmesan cheese until smooth and creamy.",
            "Toss the cooked pasta directly into the mushroom sauce and garnish with parsley."
        ],
        nutrition: [
            { name: "Calories", value: "550 kcal", icon: "fa-fire", bg: "#fef2f2", color: "#ef4444" },
            { name: "Protein", value: "16g", icon: "fa-dumbbell", bg: "#eff6ff", color: "#3b82f6" },
            { name: "Carbohydrates", value: "62g", icon: "fa-wheat-awn", bg: "#fffbeb", color: "#f59e0b" },
            { name: "Fat", value: "26g", icon: "fa-droplet", bg: "#fdf2f8", color: "#db2777" },
            { name: "Fiber", value: "4g", icon: "fa-seedling", bg: "#f0fdf4", color: "#22c55e" },
            { name: "Sodium", value: "410mg", icon: "fa-cube", bg: "#faf5ff", color: "#9333ea" },
            { name: "Sugar", value: "4g", icon: "fa-candy-cane", bg: "#fff1f2", color: "#e11d48" },
            { name: "Cholesterol", value: "70mg", icon: "fa-heart-pulse", bg: "#f0fdf4", color: "#16a34a" }
        ],
        tips: [
            "Reserve a half cup of pasta water before draining to adjust the sauce consistency if needed."
        ]
    }
];

let currentRecipeIndex = 0;
let currentActiveTab = 'nutrition';

const recipeTitle = document.getElementById('recipe-title');
const recipeDesc = document.getElementById('recipe-desc');
const recipeImg = document.getElementById('recipe-img');
const recipeRating = document.getElementById('recipe-rating');
const recipeReviews = document.getElementById('recipe-reviews');
const prepTime = document.getElementById('prep-time');
const cookTime = document.getElementById('cook-time');
const servings = document.getElementById('servings');
const tagDifficulty = document.getElementById('tag-difficulty');
const tagCategory = document.getElementById('tag-category');
const warningBox = document.getElementById('warning-box');
const tabContentArea = document.getElementById('tab-content-area');
const tryAnotherBtn = document.getElementById('try-another-btn');
const tabBtns = document.querySelectorAll('.tab-btn');
const saveRecipeBtn = document.getElementById('save-recipe-btn');

function loadRecipe(index) {
    const r = recipes[index];
    recipeTitle.textContent = r.title;
    recipeDesc.textContent = r.desc;
    recipeImg.src = r.image;
    recipeRating.textContent = r.rating;
    recipeReviews.textContent = r.reviews;
    prepTime.textContent = r.prepTime;
    cookTime.textContent = r.cookTime;
    servings.textContent = r.servings;
    tagDifficulty.textContent = r.difficulty;
    tagCategory.textContent = r.category;

    warningBox.style.display = r.showWarning ? 'flex' : 'none';
    renderTabContent(currentActiveTab);
}

function renderTabContent(tabName) {
    const r = recipes[currentRecipeIndex];
    tabContentArea.innerHTML = '';

    if (tabName === 'nutrition') {
        const gridDiv = document.createElement('div');
        gridDiv.className = 'nutrition-grid';
        r.nutrition.forEach(nutri => {
            const card = document.createElement('div');
            card.className = 'nutrition-card';
            card.innerHTML = `
                <div class="nutrition-info">
                    <div class="nutrition-icon" style="background-color: ${nutri.bg}; color: ${nutri.color};">
                        <i class="fa-solid ${nutri.icon}"></i>
                    </div>
                    <span class="nutrition-name">${nutri.name}</span>
                </div>
                <span class="nutrition-value">${nutri.value}</span>
            `;
            gridDiv.appendChild(card);
        });
        tabContentArea.appendChild(gridDiv);
    } else {
        let items = [];
        if (tabName === 'ingredients') items = r.ingredients;
        else if (tabName === 'instructions') items = r.instructions;
        else if (tabName === 'tips') items = r.tips;

        const listContainer = document.createElement('div');
        if (items.length > 8) {
            listContainer.className = 'list-scroll-container';
        }

        items.forEach((item, idx) => {
            const div = document.createElement('div');
            div.className = 'ingredient-item';
            div.innerHTML = `
                <div class="ingredient-number">${idx + 1}</div>
                <span>${item}</span>
            `;
            listContainer.appendChild(div);
        });
        tabContentArea.appendChild(listContainer);
    }
}

tabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        tabBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        currentActiveTab = btn.getAttribute('data-tab');
        renderTabContent(currentActiveTab);
    });
});

tryAnotherBtn.addEventListener('click', () => {
    currentRecipeIndex = (currentRecipeIndex + 1) % recipes.length;
    loadRecipe(currentRecipeIndex);
});

saveRecipeBtn.addEventListener('click', () => {
    saveRecipeBtn.classList.toggle('saved');
});

loadRecipe(currentRecipeIndex);