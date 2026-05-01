import React, { useContext } from "react";
import RecipeNavbar from "./../components/RecipeNavbar";
import { Outlet } from "react-router-dom";
import { RecipeContext } from "../context/RecipeProvider";

const Layout = () => {
  const { darkMode, toggleDarkMode } = useContext(RecipeContext);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        className={`min-h-screen transition-colors duration-200 text-gray-900 
       ${darkMode ? "bg-slate-800 bg-[url('/bg-light.jpg')]" : "bg-slate-800 bg-[url('/bg-dark.jpg')]"} bg-fixed bg-cover`}
      >
        <div className="p-10 rounded-5 w-5/6 mx-auto">
          <RecipeNavbar  />
          <main className={`min-h-screen bg-slate-800    ${darkMode ? " bg-slate-800" : "bg-stone-50" }`}>
            <Outlet />
          </main>
        </div>
      </div>
    </div>
  );
};

export default Layout;
