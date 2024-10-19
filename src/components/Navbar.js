import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-white shadow-lg">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="logo text-2xl font-bold">
          <Link to="/">Monito</Link>
        </div>
        <nav>
          <ul className="flex space-x-4">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </nav>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg">Join the community</button>
      </div>
    </header>
  );
};

export default Navbar;
