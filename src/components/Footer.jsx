import React from 'react';
import logo from '../images/logo.svg'; 
import twitter from '../images/icon-twitter.svg';
import facebook from '../images/icon-facebook.svg';
import instagram from '../images/icon-instagram.svg';
import youtube from '../images/icon-youtube.svg';

const Footer = () => {
  return (
    <footer className="bg-sky-950 text-white py-8 mt-12">
      <div className="container mx-auto grid grid-cols-4 
            md:grid-cols-4 gap-8 w-11/12">

        <div className="flex items-center">
          <img src={logo} alt='Logo' className='w-24 h-[25px] ml-[10px] bg-white' />
        </div>

        <div>
          <p className="text-[10px] md:text-[15px] py-1  hover:text-green-500 rounded-xl m-2 cursor-pointer duration-300">
            About Us
          </p>
          <p className=" text-[10px] md:text-[15px] py-1  hover:text-green-500 rounded-xl m-2 cursor-pointer duration-300">
            Contact
          </p>
          <p className=" text-[10px] md:text-[15px]  py-1 hover:text-green-500 rounded-xl m-2 cursor-pointer duration-300">
            Blog
          </p>
        </div>

        <div>
          <p className="text-[10px] md:text-[15px] py-1  hover:text-green-500 rounded-xl m-2 cursor-pointer duration-300">
            Career
          </p>
          <p className="text-[10px]  md:text-[15px] py-1  hover:text-green-500 rounded-xl m-2 cursor-pointer duration-300">
            Support
          </p>
          <p className="text-[10px]  md:text-[15px] py-1 hover:text-green-500 rounded-xl m-2 cursor-pointer duration-300">
            Privacy
          </p>
        </div>
        

        <div>
            <button className="bg-gradient-to-r from-green-500 to-blue-400  text-[10px] md:text-[14px] text-white py-2 px-2 md:py-2 md:px-6 rounded-full border border-green-500 shadow-md transition duration-300 ease-in-out transform hover:scale-105">
                Request Invite
            </button>
        </div>

      </div>

      <div className='flex gap-4 ml-5 md:ml-12 mt-6 md:mt-0 md:mr-0'>
           <img src={twitter} alt='Twitter' className='w-6 h-6 hover:bg-green-500 rounded-xl' />
           <img src={facebook} alt='Facebook' className='w-6 h-6 hover:bg-green-500 rounded-xl' />
           <img src={instagram} alt='Instagram' className='w-6 h-6 hover:bg-green-500 rounded-xl' />
           <img src={youtube} alt='YouTube' className='w-6 h-6 hover:bg-green-500 rounded-xl'/> 
        </div>
    </footer>
  );
};

export default Footer;