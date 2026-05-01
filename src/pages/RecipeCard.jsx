import React, { useContext } from "react";
import { RecipeContext } from "../context/RecipeProvider";
import { useNavigate } from "react-router-dom";

const RecipeCard = () => {
  const { food, darkMode } = useContext(RecipeContext);

  const navigate=useNavigate()

  console.log(food);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 min-h-screen p-5">
        {food.map((recipe) => (
          <div
            key={recipe.idMeal}
            className="w-100 bg-white dark:bg-gray-800 shadow-xl rounded-2xl overflow-hidden  transition transform hover:scale-105 "
          >
            <img src={recipe.strMealThumb} alt="" />
            <div className="p-4">
              <p className="text-gray-800 dark:text-white">
                {recipe.strMeal}
              </p>
              <button 
              onClick={()=>navigate("/app/details", {state:{recipe}}) }
              className="mt-4 bg-orange-300 py-2 px-4 w-full rounded-xl">
                Details
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecipeCard;
