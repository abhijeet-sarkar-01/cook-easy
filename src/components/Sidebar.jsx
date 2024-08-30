import { Heart, Home } from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return ( 
    <>
      <DesktopSidebar />
      <MobileSidebar />
    </>
  );
}
 
export default Sidebar;

const DesktopSidebar = () => {
  return ( 
    <div className="p-3 md:p-10 border-r border-r-gray-600 min-h-screen w-24 md:w-64 hidden sm:block"> 
      <div className="flex flex-col gap-20 sticky top-10 left-0">
        <div className="w-full">
          <img src="/dark-fork-logo.png" alt="logo" className="hidden md:block"/>
          <img src="/mobile-logo.png" alt="logo" className="block md:hidden m-auto"/>
        </div>

        <ul className="flex flex-col items-center md:items-start gap-8">
          <Link to={"/"} className="flex gap-1">
            <Home size={"24"} />
            <span className="font-bold hidden md:block">
              Home
            </span>
          </Link>

          <Link to={"/favourites"} className="flex gap-1">
            <Heart size={"24"} />
            <span className="font-bold hidden md:block">
              Favourites
            </span>
          </Link>
        </ul>
      </div>
    </div>
  );
}
 

const MobileSidebar = () => {
  return ( 
    <div className="flex justify-center items-center gap-14 border-t-4 fixed w-full h-12 bottom-0 left-0 bg-slate-800 z-10 p-2 sm:hidden">

      <Link to={"/"}>
        <Home size={"26"} className="cursor-pointer"/>
      </Link>

      <Link to={"/favourites"}>
        <Heart size={"26"} className="cursor-pointer"/>
      </Link>
      
    </div>
  );
}
 