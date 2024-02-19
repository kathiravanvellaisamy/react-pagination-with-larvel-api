import React from "react";

const Header = () => {
  return (
    <header className="w-full py-2 shadow bg-red-600">
      <nav className="max-w-5xl mx-auto px-8 my-1">
        <div className="flex justify-between items-center">
          <h1 className="text-white font-semibold text-2xl">Product List</h1>
          <div className="hidden md:block w-1/2">
            <input
              type="search"
              className="w-full bg-slate-50 py-2 px-3 rounded-md"
              placeholder="Search Product"
            />
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
