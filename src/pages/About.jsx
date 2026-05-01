import React, { useContext } from 'react'
import developer from "../assets/developer.jpg"
import { RecipeContext } from '../context/RecipeProvider'


const About = () => {
    const {darkMode}=useContext(RecipeContext)
  
  return (
      <div className={darkMode ? "dark" : ""}>
    <div className='flex flex-col justify-center items-center px-6 py-3'>
      <img src={developer} alt="" className='w-[30rem] h-[30rem]  rounded-full border-4 border-slate-800'/>
    <h1 className="text-4xl font-bold mb-4">I am a developer</h1>
      <p className="max-w-xl text-center mb-8 text-lg leading-relaxed dark:text-gray-100">
        I love building modern web applications with React, Tailwind CSS, and
        other awesome tools. Passionate about clean code, performance, and user experience.
      </p>

      <div className="flex space-x-6">
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-md bg-gray-800 dark:bg-gray-200 text-white dark:text-gray-900 font-semibold hover:bg-gray-700 dark:hover:bg-gray-300 transition"
        >
          GitHub
        </a>
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="px-5 py-2 rounded-md bg-blue-600 dark:bg-blue-400 text-white dark:text-gray-900 font-semibold hover:bg-blue-500 dark:hover:bg-blue-300 transition"
        >
          LinkedIn
        </a>
        <a
          href="mailto:your.email@example.com"
          className="px-5 py-2 rounded-md bg-green-600 dark:bg-green-400 text-white dark:text-gray-100 font-semibold hover:bg-green-500 dark:hover:bg-green-300 transition"
        >
          Contact
        </a>
      </div>
   
    </div>
    </div>
  )
}

export default About