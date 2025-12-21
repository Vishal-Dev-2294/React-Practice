import React from "react";
import { Link, Outlet } from "react-router-dom";

function Contact() {
  return (
    <>
      <div className="flex justify-center gap-5 py-4">
        <Link to="/Contact/Men" className="font-bold text-xl">
          {" "}
          Mens{" "}
        </Link>
        <Link to="/Contact/Women" className="font-bold text-xl">
          {" "}
          Womens {" "}
        </Link>
        <Link to="/Contact/Kids" className="font-bold text-xl">
          {" "}
          Kids {" "}
        </Link>
      </div>
      <Outlet />
    </>
  );
}

export default Contact;
