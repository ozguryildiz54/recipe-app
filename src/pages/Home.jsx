import React, { useContext } from "react";
import Header from "./../components/Header";
import { RecipeContext } from "../context/RecipeProvider";
import RecipeCard from "./RecipeCard";
import chief from "../assets/home.svg";

const Home = () => {
  const { darkMode, food } = useContext(RecipeContext);

  console.log("food", food);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        className={`transition-colors ${
          darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text-slate-800"
        }`}
      >
        <Header />

        {food.length > 0 ? (
          <RecipeCard />
        ) : (
          <div className="flex justify-center items-center h-[calc(100vh-100px)]">
            <img src={chief} alt="chief" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
