import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold text-[#3498DB]">iTransiGo</span>
            </div>
          </div>
          <div className="flex items-center">
            <a href="#features" className="px-3 py-2 text-gray-700 hover:text-[#3498DB]">Features</a>
            <a href="#how-it-works" className="px-3 py-2 text-gray-700 hover:text-[#3498DB]">How It Works</a>
            <a href="#waitlist" className="ml-4 px-4 py-2 bg-[#3498DB] text-white rounded-md hover:bg-[#2980B9]">Join Waitlist</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
