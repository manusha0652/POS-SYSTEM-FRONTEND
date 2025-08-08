import React from 'react';
import { FaSearch, FaUserCircle, FaBell } from 'react-icons/fa';

const Header = () => {
return (
    <header className="flex justify-between items-center py-4 px-8 bg-[#1a1a1a] border-b border-[#262626]">
    {/* LOGO */}
    <div className="flex items-center gap-2">
      {/* Logo placeholder - replace with actual logo path */}
      <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center">
        <span className="text-black font-bold text-sm">RC</span>
      </div>
      <h1 className="text-lg font-semibold text-[#f5f5f5]">ZUZU CAFE</h1>
    </div>

    {/* SEARCH */}
    <div className="flex items-center gap-2 bg-[#262626] px-4 py-2 rounded-lg flex-1 max-w-md mx-8">
      <FaSearch className="text-[#888]" />
      <input
        type="text"
        placeholder="Search here"
        className="bg-transparent outline-none text-[#f5f5f5] flex-1"
      />
    </div>

    {/*LOGGED USER DETAILS */}
    <div className="flex items-center gap-4">
      <div className="relative">
        <FaBell className="text-[#f5f5f5] text-xl cursor-pointer" />
        <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">3</span>
      </div>
      <div className="flex items-center gap-3">
        <FaUserCircle className="text-[#f5f5f5] text-3xl cursor-pointer" />
        <div className="text-[#f5f5f5]">
          <div className="flex items-center gap-2">
            <span className="font-semibold">Jenny Wilson</span>
            <span className="text-xs bg-gray-600 px-2 py-1 rounded">▼</span>
          </div>
          <p className="text-sm text-gray-400">Waiter</p>
        </div>
      </div>
    </div>
  </header>
 );
};

export default Header;
