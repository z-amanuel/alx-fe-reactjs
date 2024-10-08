import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import recipesData from '../data.json'; 

const HomePage = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
  }, []);

  return (
    <div className="container mx-auto p-4 sm:p-6">
      <h1 className="text-2xl sm:text-3xl font-bold text-center mb-6 sm:mb-8">Recipe Sharing Platform</h1>
      <div className="text-center mb-6">
        <Link to="/add-recipe" className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-600 transition-colors duration-300">
          Add New Recipe
        </Link>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {recipes.map((recipe) => (
          <div
            key={recipe.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transform hover:scale-105 transition duration-300 ease-in-out"
          >
            <Link to={`/recipe/${recipe.id}`}>
              <img src={recipe.image} alt={recipe.title} className="w-full h-40 sm:h-48 object-cover" />
              <div className="p-3 sm:p-4">
                <h2 className="text-lg sm:text-xl font-semibold mb-2">{recipe.title}</h2>
                <p className="text-gray-700 text-sm sm:text-base mb-3 sm:mb-4">{recipe.summary}</p>
                <span className="text-indigo-500 hover:underline">View Recipe</span>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HomePage;