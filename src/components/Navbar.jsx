import React, { useState } from 'react';
import logo from '../images/logo.svg';
import options from '../images/favicon-32x32.png'; 

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };
  
  const navItems = [
    { id: 1, text: 'Home' },
    { id: 2, text: 'About' },
    { id: 3, text: 'Contact' },
    { id: 4, text: 'Blog' },
    { id: 5, text: 'Careers' },
  ];

  return (
    <div className='bg-white flex justify-between items-center h-15  mx-auto px-4 text-black md:mr-8 md:ml-8'>
      <img src={logo} alt='Logo' className='w-24 h-[25px] ml-[10px]' />
      <ul className='hidden md:flex'>
        {navItems.map(item => (
          <li
            key={item.id}
            className='p-4 text-black  hover:underline
            hover:text-green-500 rounded-xl m-2 cursor-pointer duration-300'
          >
            {item.text}
          </li>
        ))}
      </ul>

      <div className='md:hidden relative'>
        <select  defaultValue="None" className='appearance-none bg-gray-200 text-black rounded-lg shadow-md'>
          <option value="" selected disabled hidden>
            <img src={options} alt='Options' className='w-6 h-6 bg-black'/>
          </option>
          {navItems.map(item => (
            <option key={item.id} value={item.text}>
              {item.text}
            </option>
          ))}
        </select>
      </div>
      <button className="hidden md:block bg-gradient-to-r from-green-500 to-blue-400  text-white py-2 px-6 rounded-full border border-green-500 shadow-md transition duration-300 ease-in-out transform hover:scale-105">
          Request Invite
      </button>
    </div>
  );
};

export default Navbar;