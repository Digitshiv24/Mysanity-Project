import React from 'react';
import { Link } from 'gatsby';

const Header = () => {
  return (
    <header className='flex flex-col md:flex-row items-center justify-between bg-gray-900 text-white p-6'>
      <nav className='container mx-auto flex justify-between items-center'>
        <Link to="/" className='bg-gradient-to-r from-orange-400 via-red-500 to-indigo-600 bg-clip-text text-transparent text-4xl font-bold mb-4 md:mb-0 md:mr-6'>
        Sanity io
        </Link>
        <ul className='flex space-x-6 ml-8'>
          <li className=''>
            <Link to="/about" className='hover:text-gray-400 transition duration-300'>
              About 
            </Link>
          </li>
          <li className=''>
            <Link to="/contact" className='hover:text-gray-400 transition duration-300'>
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
