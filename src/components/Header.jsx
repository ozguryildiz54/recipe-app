import React, { useContext } from "react";
import { RecipeContext } from "../context/RecipeProvider";

const Header = () => {
  const { toggleDarkMode, darkMode } = useContext(RecipeContext);

  const { query,
        setQuery,
        mealType,
        setMealType,getData} =useContext(RecipeContext)

  const handleSubmit=(e)=>{
e.preventDefault()
getData()
  }
  return (
    <div className={darkMode ? "dark" : ""}>
      <div
       className={`transition-colors ${darkMode ? "bg-gray-800 text-white" : "bg-gray-100 text--slate-800"}`}
      >
        <div className=" flex md:items-center py-5 md:justify-center">
          <h1 className="text-4xl font-bold">FOOD APP</h1>
          <form
            action=""
            className="flex flex-col sm:flex-row gap-3 items-center"
            onSubmit={(e)=>handleSubmit(e)}
          >
            <input type="text" className="px-4 py-2 mx-3 rounded-md"
            onChange={(e)=>setQuery(e.target.value)}
            />
            <button className="px-4 py-2 bg-orange-400 rounded-md  hover:bg-indigo-700">
              Search
            </button>
            <select
              name=""
              id=""
              className="px-4 py-2 rounded-md border border-gray-300"
              onChange={(e)=>{setMealType(e.target.value)}}
            >
              <option value="Seafood">SeaFood</option>
              <option value="chicken">Chicken</option>
              <option value="Beef">Beef</option>
            </select>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Header;
