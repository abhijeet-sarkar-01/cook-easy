import { Search } from "lucide-react";
import RecipeCard from "./RecipeCard";
import { useEffect, useState } from "react";

const EDAMAM_APP_ID = import.meta.env.VITE_APP_ID;
const EDAMAM_APP_KEY = import.meta.env.VITE_APP_KEY;

const HomePage = () => {

  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchRecipes = async (query) => {
    setRecipes([]);
    setLoading(true);
    try {
      const res = await fetch(`https://api.edamam.com/api/recipes/v2/?app_id=${EDAMAM_APP_ID}&app_key=${EDAMAM_APP_KEY}&q=${query}&type=public`);
      const data = await res.json();
      console.log(data.hits);
      setRecipes(data.hits);
    } catch (error) {
      console.log(error.message);
    } finally{
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRecipes("pizza")
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchRecipes(e.target[0].value);
  }
 
  return ( 
    <div className="p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form onSubmit={handleSubmit}>
          <label className="bg-gray-700 shadow-md input flex items-center gap-2">
            <Search size={"24"}/>
            <input 
              type="text" 
              className="text-gray-100 text-sm d:text-md grow" 
              placeholder="Search for a recipe or type a few ingredients to start"/>
          </label>
        </form>

        <p className="text-[#f0f0f0] font-bold text-3xl md:text-4xl mt-4">For you</p>
        <p className="text-[#e0e0e0] font-semibold ml-1 my-2 text-sm tracking-tight">Popular Choices</p>

        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          

          {!loading && recipes.map(({recipe}, index) => (
            <RecipeCard key={index} recipe = {recipe} />
          ))
          
          }

          {loading && (
            [...Array(9)].map((_, index) => (
              <div key={index} className="flex w-full flex-col gap-4">
                <div className="skeleton h-36 w-full"></div>
                
                <div className=" flex justify-between">
                  <div className="skeleton h-4 w-28"></div>
                  <div className="skeleton h-4 w-24"></div>
                </div>

                <div className="skeleton h-4 w-1/2"></div>
              </div>
            ))
          )}

        </div>
      </div>
    </div>
   );
}
 
export default HomePage;