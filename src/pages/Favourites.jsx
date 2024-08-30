import { Link } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";

const Favourites = () => {
  const favourites = JSON.parse(localStorage.getItem("favourites")) || [];
  return ( 
    <div className="bg-[*faf9fb] flex-1 p-10 min-h-screen">
      <div className="max-w-screen-lg mx-auto"> 
        <p className="font-bold text-3xl md:text-5xl my-4">My Favourites</p>

        {favourites.length === 0 && (
          <div className="h-[80vh] flex flex-col items-center gap-4">
          <img src="./404.png" alt="" className="h-3/4" />

          <Link to={"/"}>
            <span className="font-bold hover:text-[#EE97BD]">
              Back to Home
            </span>
          </Link>
        </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
          {favourites.map((recipe) => (
            <RecipeCard key={recipe.label} recipe={recipe}/>
          ))}
        </div>

      </div>
    </div>
  );
}
 
export default Favourites;