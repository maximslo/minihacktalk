async function fetchRecipes() {
    const ingredientInput = document.getElementById("ingredientInput");
    const recipeList = document.getElementById("recipeList");
    const ingredient = ingredientInput.value.toLowerCase();
    

    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        if (!response.ok) {
            throw new Error("Failed to fetch recipes.");
        }
        const data = await response.json();

        // Clear previous results
        recipeList.innerHTML = "";
        console.log(1);

        if (data.meals) {
            data.meals.forEach((meal) => {
                const card = document.createElement("div");
                card.classList.add("card");

                card.innerHTML = `
                    <h2>${meal.strMeal}</h2>
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                `;

                /* <p>Category: ${meal.strCategory}</p>
                    <p>Instructions: ${meal.strInstructions}...</p> */
                
                recipeList.appendChild(card);
            });
        } else {
            recipeList.innerHTML = "<p>No recipes found.</p>";
        }
    } catch (error) {
        console.error(error);
        recipeList.innerHTML = "<p>Error fetching recipes.</p>";
    }
}

const titleElement = document.getElementById("fork"); // Use the id of the <img> element, which also contains the "Cookbook" title

// Function to clear the data
function clearData() {
    const recipeList = document.getElementById("recipeList");
    recipeList.innerHTML = ""; // Clear the recipe list
}

// Add a click event listener to the title element
titleElement.addEventListener("click", clearData);
