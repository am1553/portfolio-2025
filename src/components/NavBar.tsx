import React from "react";

function NavBar() {
  return (
    <div className="absolute inset-0 top-18 bg-gray-900/50 transition-opacity nav-bar z-20 md:hidden">
      <nav className="w-64 bg-white absolute top-0 right-0 bottom-0 border-l border-[#00000010] shadow-md">
        <ul className="flex flex-col gap-4 py-6">
          <li className="text-headline-small px-6 py-1 cursor-pointer">Home</li>
          <li className="text-headline-small px-6 py-1 cursor-pointer">
            About
          </li>
          <li className="text-headline-small px-6 py-1 cursor-pointer">
            Projects
          </li>
          <li className="text-headline-small px-6 py-1 cursor-pointer">Blog</li>
        </ul>
      </nav>
    </div>
  );
}

export default NavBar;
