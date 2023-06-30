import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-white dark:bg-[#060708] text-slate-600 dark:text-white w-full py-6 px-4 lg:px-0 sticky top-0">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link to="/" className="text-xl font-bold">
            &lt;FaridAlam&#47;&gt;
          </Link>
        </div>
        <div className="flex justify-end gap-4 lg:gap-8">
          <Link to="/projects" className=" uppercase font-semibold">
            Projects
          </Link>
          <Link to="/projects" className=" uppercase font-semibold">
            Contact
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
