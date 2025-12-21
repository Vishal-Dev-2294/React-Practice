import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className=" bg-cyan-500 flex items-center justify-between py-4 px-8">
      <h2 className="text-xl font-bold"> Vishal </h2>
      <div className="flex gap-10">
        <Link className="text-lg font-bold" to="/">
          {" "}
          Home{" "}
        </Link>
        <Link className="text-lg font-bold" to="/About">
          {" "}
          About{" "}
        </Link>
         <Link className="text-lg font-bold" to="/Courses">
          {" "}
          Courses{" "}
        </Link>
        <Link className="text-lg font-bold" to="/Contact">
          {" "}
          Contact{" "}
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
