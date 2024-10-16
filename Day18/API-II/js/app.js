// Fetch random cocktail recipe from TheCocktailDB API
document.getElementById('cocktailButton').addEventListener('click', () => {
    fetchRandomCocktail();
});

function fetchRandomCocktail() {
    fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(data => {
            const cocktail = data.drinks[0];
            document.getElementById('cocktailResult').innerHTML = `
                <h3>${cocktail.strDrink}</h3>
                <img src="${cocktail.strDrinkThumb}" alt="${cocktail.strDrink}">
                <p><strong>Category:</strong> ${cocktail.strCategory}</p>
                <p><strong>Instructions:</strong> ${cocktail.strInstructions}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching cocktail:', error);
        });
}

// Fetch random meal recipe from TheMealDB API
document.getElementById('mealButton').addEventListener('click', () => {
    fetchRandomMeal();
});

function fetchRandomMeal() {
    fetch('https://www.themealdb.com/api/json/v1/1/random.php')
        .then(response => response.json())
        .then(data => {
            const meal = data.meals[0];
            document.getElementById('mealResult').innerHTML = `
                <h3>${meal.strMeal}</h3>
                <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                <p><strong>Category:</strong> ${meal.strCategory}</p>
                <p><strong>Instructions:</strong> ${meal.strInstructions}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching meal:', error);
        });
}

// Fetch random taco ingredients from TacoFancy API
document.getElementById('tacoButton').addEventListener('click', () => {
    fetchTacoIngredients();
});

function fetchTacoIngredients() {
    fetch('https://taco-1150.herokuapp.com/random/')
        .then(response => response.json())
        .then(data => {
            document.getElementById('tacoResult').innerHTML = `
                <h3>Taco Ingredients</h3>
                <p><strong>Base Layer:</strong> ${data.base_layer.name}</p>
                <p><strong>Condiment:</strong> ${data.condiment.name}</p>
                <p><strong>Mixin:</strong> ${data.mixin.name}</p>
                <p><strong>Seasoning:</strong> ${data.seasoning.name}</p>
                <p><strong>Shell:</strong> ${data.shell.name}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching taco ingredients:', error);
        });
}