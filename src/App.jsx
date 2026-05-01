import AppRouter from "./router/AppRouter";
import RecipeProvider from "./context/RecipeProvider";
import './App.css';

function App() {
  return (
    <RecipeProvider>
      <AppRouter />
    </RecipeProvider>
  );
}

export default App;
