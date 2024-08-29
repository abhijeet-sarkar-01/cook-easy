import { Heart, HeartPulse, Soup } from "lucide-react";

const RecipeCard = () => {
  return ( 
    <div className="flex flex-col rounded-md bg-slate-600 overflow-hidden p-3 relative">
      <a href="#" className="relative h-32">
        <img src="./Butter_chicken_recipe.jpg" alt="" className="rounded-md w-full h-full object-cover cursor-pointer"/>

        <div className="absolute bottom-2 left-2 bg-white rounded-full p-1 cursor-pointer flex items-center">
          <Soup size={16} /> 4 servings
        </div>

        <div className="absolute top-1 right-2 bg-white rounded-full p-1 cursor-pointer">
          <Heart size={20} className="hover:fill-red-500 hover:text-red-500" />
        </div>

      </a>

      <div className="flex mt-1">
          <p className="font-bold tracking-wide">Chicken Butter Masala</p>
        </div>
        <p className="my-2">Indian</p>

        <div className="flex gap-2 mt-auto">
          <div className="flex gap-1 bg-[#EE97BD] items-center p-1 rounded-md text-gray-800">
            <HeartPulse size={16}/> Healthy Heart
          </div>

          <div className="flex gap-1 bg-[#EE97BD] items-center p-1 rounded-md text-gray-800">
            <HeartPulse size={16}/>Keto-friendly
          </div>
        </div>
    </div>
  );
}
 
export default RecipeCard;