import { useState } from 'react';
import { FaSearch, FaShoppingCart, FaStore } from 'react-icons/fa';

const Navbar = () => {
  const [searchActive, setSearchActive] = useState(false);

  return (
    <nav className="bg-white shadow-lg w-full p-4">
      <div className="container mx-auto flex justify-between items-center">

        <div className="flex items-center ml-0">
          <img
            src="https://www.pngplay.com/wp-content/uploads/1/Letter-A-PNG-Royalty-Free-High-Quality.png"
            alt="Logo"
            className="h-6"
          />
          <span className="text-xl font-bold text-blue-400 ml-1">FindMyBook</span>
        </div>


        <div className={`relative hidden md:block ${searchActive ? 'w-80 lg:w-96' : 'w-64'}`}>
          <input
            type="text"
            className="w-full p-2 border-b-2 border-gray-400 outline-none focus:border-blue-500"
            placeholder="Search..."
            onFocus={() => setSearchActive(true)}
            onBlur={() => setSearchActive(false)}
          />
          <FaSearch className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>


        <div className="flex items-center space-x-2 text-blue-400 mr-0">


          <div className="relative">
            <FaShoppingCart className="text-xl cursor-pointer" />
            <div className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
              1
            </div>
          </div>

          <FaStore className="text-xl cursor-pointer" />

          <div className="flex items-center">
            <img
              src="https://st4.depositphotos.com/1007566/40229/v/450/depositphotos_402291302-stock-illustration-avatar-user-silhouette-style-icon.jpg"
              alt="Profile"
              className="h-6 w-6 rounded-full"
            />
            <span className="text-sm font-semibold text-blue-400">Ali</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
