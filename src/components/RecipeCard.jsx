import { Heart, HeartPulse, Soup } from "lucide-react";
import _ from "lodash";
import { useState } from "react";

const RecipeCard = ({recipe}) => {

  const [isFav, setisFav] = useState(localStorage.getItem("favourites")?.includes(recipe.label));

  const addToFavs = () => {
    
    let favourites = JSON.parse(localStorage.getItem("favourites")) || [];
    const isPresent = favourites.some((fav) => fav.label === recipe.label); 

    if (isPresent){
      favourites = favourites.filter((fav) => fav.label !== recipe.label);
      setisFav(false);
    }else{
      favourites.push(recipe);
      setisFav(true);
    }

    localStorage.setItem("favourites", JSON.stringify(favourites));
  }

  return ( 
    <div className="flex flex-col rounded-md bg-slate-600 overflow-hidden p-3 relative">
      <a href= {`https://www.youtube.com/results?search_query=${recipe.label} Recipe`} className="relative h-32" target="__blank">

        <div className="skeleton absolute inset-0 bg-slate-700"></div>
        <img src={recipe.image} alt="" 
          className="rounded-md w-full h-full object-cover cursor-pointer opacity-0 transition-opacity duration-500"
          onLoad={
            (e) => {
              e.currentTarget.style.opacity = 1;
              e.currentTarget.previousElementSibling.style.display = "none";
            }
          }
        />

        <div className="absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center text-gray-800">
          <Soup size={16} /> &nbsp;{recipe.yield} servings
        </div>

        {/* Save to favourites button */}
        <div 
          className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer" 
          onClick={
            (e) => {
              e.preventDefault();
              addToFavs();
            }
          }
        >

          {isFav && (<Heart size={20} className="fill-red-500 text-red-500" />)}
          {!isFav && (<Heart size={20} className="hover:fill-red-500 hover:text-red-500" />)}

        </div>

      </a>

      <div className="flex mt-1">
          <p className="font-bold tracking-wide text-gray-100">{recipe.label}</p>
        </div>
        <p className="my-2 text-gray-200 font-thin italic">{_.capitalize(recipe.cuisineType)}</p>

        <div className="flex gap-2 mt-auto">
          {recipe.healthLabels.slice(0,2).map((label, index) => (
            <div key={index} className="flex gap-1 bg-gray-300 items-center p-1 rounded-md text-gray-800 text-sm font-bold">
              <HeartPulse size={16}/> {label}
            </div>
          ))}
        </div>
    </div>
  );
}
 
export default RecipeCard;