import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([]);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://mern-starter-zbbr.onrender.com/recipes');
      setRecipes(response.data);
      console.log(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="recipe-list">
      {recipes.map(recipe => (
        <div key={recipe._id} className="recipe-card">
          <img src={recipe.imageUrl} alt={recipe.title} />
          <h2>{recipe.title}</h2>
          <p>{recipe.description}</p>
          <ul>
            {recipe.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>
          <p>Prep Time: {recipe.prepTime} mins</p>
          <p>Cook Time: {recipe.cookTime} mins</p>
          <p>Total Time: {recipe.totalTime} mins</p>
          <p>Servings: {recipe.servings}</p>
        </div>
      ))}
    </div>
  );
};

export default RecipeList;
