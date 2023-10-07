async function fetchPokemonData() {
    const pokemonInput = document.getElementById("pokemonName");
    const outputDiv = document.getElementById("output");

    // Get the user input from the input field
    const pokemonNameOrId = pokemonInput.value.toLowerCase().trim();

    if (pokemonNameOrId === "") {
        alert("Please enter a Pokemon name or ID.");
        return;
    }

    // API URL for PokeAPI
    const apiUrl = `https://pokeapi.co/api/v2/pokemon/${pokemonNameOrId}`;

    try {
        // Fetch data from the API
        const response = await fetch(apiUrl);

        if (!response.ok) {
            throw new Error("Pokemon not found.");
        }

        // Parse the response as JSON
        const data = await response.json();

        const capitalizedName = data.name.charAt(0).toUpperCase() + data.name.slice(1)

        // Display the data in the output div
        outputDiv.innerHTML = `
            <h2>${capitalizedName}</h2>
            <img src="${data.sprites.front_default}" alt="${data.name}" />
            <p>Height: ${data.height} decimetres</p>
            <p>Weight: ${data.weight} hectograms</p>
        `;

    } catch (error) {
        outputDiv.innerHTML = `<p>Error: ${error.message}</p>`;
    }
}