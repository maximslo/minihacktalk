document.addEventListener("DOMContentLoaded", function () {
  const getIngredientsButton = document.getElementById("getIngredientsButton");
  const recipeInput = document.getElementById("recipeInput");
  const ingredientsList = document.getElementById("ingredientsList");

  getIngredientsButton.addEventListener("click", async function () {
      const recipe = recipeInput.value;
      if (recipe.trim() === "") {
          alert("Please enter a recipe.");
          return;
      }

      // Replace with your ChatGPT API endpoint and API key
      const apiUrl = "https://api.openai.com/v1/chat/completions";
      const apiKey = "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";

      try {
          const response = await fetch(apiUrl, {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  "Authorization": `Bearer ${apiKey}`,
              },
              body: JSON.stringify({ prompt: recipe }),
          });

          if (!response.ok) {
              throw new Error("Error fetching data from the API.");
          }

          const data = await response.json();
          const ingredients = data.choices[0].text;
          ingredientsList.innerHTML = `<strong>Ingredients:</strong><br>${ingredients}`;
      } catch (error) {
          console.error("Error:", error);
          ingredientsList.innerHTML = "<strong>Error retrieving ingredients.</strong>";
      }
  });
});