import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-white dark:bg-transparent text-slate-600 dark:text-white w-full py-6 px-4 lg:px-0 sticky top-0 backdrop-blur-lg z-50">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link to="/" className="text-xl font-light">
            &lt;FaridAlam&#47;&gt;
          </Link>
        </div>
        <div className="flex justify-end gap-4 lg:gap-8">
          <a href="#projects" className="  font-normal">
            Projects
          </a>
          <a href="#contact" className="  font-normal">
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
