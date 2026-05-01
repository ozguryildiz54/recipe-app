import React, { createContext, useState } from "react";
import axios from "axios";

export const RecipeContext = createContext();

const RecipeProvider = ({ children }) => {
  const [username, setUsername] = useState(
    localStorage.getItem("username") || ""
  );
  const [password, setPassword] = useState(
    localStorage.getItem("password") || ""
  );

  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => setDarkMode((prev) => !prev);

  const [query, setQuery] = useState("");
  const [mealType, setMealType] = useState("");

  const [error, setError] = useState(false);
  const [food, setFood] = useState([]);

  const [loading, setLoading] = useState(false);

  const getData = async () => {
    let url = "";

    try {
      if (query) {
        url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`;
      } else if (mealType) {
        url = `https://www.themealdb.com/api/json/v1/1/search.php?c=${mealType}`;
      }

      const { data } = await axios.get(url);

      setFood(data.meals);
      console.log(data);
    } catch (error) {
      setError(true);
    }
  };

  if (loading) {
    return(
    <div className="flex justify-center items-center h-24">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-600"></div>
    </div>)
  }

  return (
    <RecipeContext.Provider
      value={{
        username,
        setUsername,
        password,
        setPassword,
        darkMode,
        toggleDarkMode,
        query,
        setQuery,
        mealType,
        setMealType,
        getData,
        food,
      }}
    >
      {children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
