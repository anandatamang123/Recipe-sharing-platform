document.addEventListener('DOMContentLoaded', () => {
    const recipeForm = document.getElementById('recipe-form');
    const recipesContainer = document.getElementById('recipes');

    recipeForm.addEventListener('submit', (event) => {
        event.preventDefault();

        const title = document.getElementById('recipe-title').value;
        const description = document.getElementById('recipe-description').value;
        const rating = document.getElementById('recipe-rating').value;
        const imageFile = document.getElementById('recipe-image').files[0];

        // Create a new recipe card
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipe');

        // Create an image element if image is selected
        if (imageFile) {
            const reader = new FileReader();
            reader.onload = () => {
                const recipeImage = document.createElement('img');
                recipeImage.src = reader.result;
                recipeImage.alt = title;
                recipeCard.appendChild(recipeImage);
            };
            reader.readAsDataURL(imageFile);
        }

        // Add title, description, and rating
        recipeCard.innerHTML += `
            <h3>${title}</h3>
            <p>${description}</p>
            <p>Rating: ${rating}</p>
        `;

        // Add delete button
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('delete-button');
        deleteButton.textContent = 'Delete';
        deleteButton.addEventListener('click', () => {
            recipesContainer.removeChild(recipeCard);
        });
        recipeCard.appendChild(deleteButton);

        // Append the recipe card to the recipes container
        recipesContainer.appendChild(recipeCard);

        // Clear the form fields
        recipeForm.reset();
    });
});
