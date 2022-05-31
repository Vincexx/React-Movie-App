import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-black h-16 flex items-center border-b-2 border-slate-500">
      <Link to={"/React-Movie-App"}>
        <h3 className="text-red-600 text-1xl uppercase font-extrabold tracking-tight hover:text-white cursor-pointer">
          FREEMOVIES
        </h3>
      </Link>
    </div>
  );
};

export default Header;
