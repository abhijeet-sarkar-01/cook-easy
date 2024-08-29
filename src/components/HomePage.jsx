import { Search } from "lucide-react";
import RecipeCard from "./RecipeCard";

const HomePage = () => {
  return ( 
    <div className="p-10 flex-1">
      <div className="max-w-screen-lg mx-auto">
        <form>
          <label className="bg-gray-700 shadow-md input flex items-center gap-2">
            <Search size={"24"}/>
            <input 
              type="text" 
              className="text-gray-100 text-sm d:text-md grow" 
              placeholder="Search for a recipe or type a few ingredients to start"/>
          </label>
        </form>

        <p className="text-[#f0f0f0] font-bold text-3xl md:text-5xl mt-4">Recommended Recipes</p>
        <p className="text-[#e0e0e0] font-semibold ml-1 my-2 text-sm tracking-tight">Popular Choices</p>

        <div className="grid gap-3 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />

        </div>
      </div>
    </div>
   );
}
 
export default HomePage;