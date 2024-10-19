
import React from 'react';

const Header = () => {
  return (
    <header className="flex flex-col md:flex-row justify-between items-center p-4 bg-green-500">
      <div className="text-white text-2xl">Monito Pet Store</div>
      <nav className="mt-4 md:mt-0">
        <ul className="flex space-x-4">
          <li><a href="#" className="text-white">Home</a></li>
          <li><a href="#" className="text-white">Pets</a></li>
          <li><a href="#" className="text-white">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
