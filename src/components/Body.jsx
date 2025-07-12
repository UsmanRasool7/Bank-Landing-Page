import React from 'react';
import background from '../images/bg-intro-desktop.svg'; 
import backgroundMobile from '../images/bg-intro-mobile.svg';
import mockup from '../images/image-mockups.png';
import bank from '../images/icon-online.svg';
import budgeting from '../images/icon-budgeting.svg';
import onboarding from '../images/icon-onboarding.svg';
import api from '../images/icon-api.svg';

const Body = () => {
  return (
    <div className='md:mt-8 mt-8'>
      <div className="container mx-auto grid grid-cols-1 
            md:grid-cols-2 gap-6 w-11/12 rounded-lg shadow-lg bg-white p-4">
        
        <div className='flex flex-col justify-center items-start p-4'>
            <h1 className='text-[30px] md:text-[50px] text-bold mb-4'>
                Next Generation Digital Banking
            </h1>
            <p className='text-gray-600 mb-4'>
                Take your financial life online. Your Easy Bank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
            </p>
        </div>
        
        <div className='overflow-hidden relative flex flex-col justify-center items-start p-4'>
            <img src={background} alt='Background' className=' hidden md:block w-full h-full mb-4' />
            <img src={backgroundMobile} alt='Background Mobile' className=' md:hidden w-full h-auto mb-4' />
            <img src={mockup} alt='Mockup' className='absolute w-full h-auto' />
        </div>

        <button className="md:hidden bg-gradient-to-r from-green-500 to-blue-400  text-white py-2 rounded-full border border-green-500 shadow-md transition duration-300 ease-in-out transform hover:scale-105">
          Request Invite
        </button>
      </div>

      
      <div className='py-8 ml-8 mr-8 mt-8'>
        <h1 className='text-[25px] md:text-[33px] ml-4 md:ml-12 mb-8'>
          Why choose Easy Bank?
        </h1>
        <p className='text-gray-600 mb-4 md:ml-12 ml-4'>
          We leverage Open Banking to turn your bank account into your financial hub.
            <br />
          Why choose Easy Bank?
        </p>
      </div>

      <div className="container mx-auto grid grid-cols-1 
            md:grid-cols-4 gap-6 w-11/12  bg-white p-4 mt-8">
        
        <div className=' '>
            <div className='flex justify-center items-center md:justify-start'>
                <img src={bank} alt='Online Banking' className='' />
            </div>
            
            <div className='flex justify-center items-center md:justify-start'>
                <h2 className='text-xl mb-2 mt-4'>Online Banking</h2>
            </div>
            
            <p className='text-gray-600 mb-4 ml-4 md:ml-0'>
                Our modern web and mobile applications allow you to keep track of your finances wherever you are in the world.
            </p>
        </div>

        <div className=' '>
            <div className='flex justify-center items-center md:justify-start'>
                <img src={budgeting} alt='Simple Budgeting' className='' />
            </div>
            
            <div className='flex justify-center items-center md:justify-start'>
                <h2 className='text-xl mb-2 mt-4'>Simple Budgeting</h2>
            </div>
            
            <p className='text-gray-600 mb-4 ml-4 md:ml-0'>
                See exactly where your money goes each month. Receive notifications when you’re close to hitting your limits.   
            </p>
        </div>

        <div className=' '>
            <div className='flex justify-center items-center md:justify-start'>
                <img src={onboarding} alt='Fast Onboarding' className='' />
            </div>
            
            <div className='flex justify-center items-center md:justify-start'>
                <h2 className='text-xl mb-2 mt-4'>Fast Onboarding</h2>
            </div>
            
            <p className='text-gray-600 mb-4 ml-4 md:ml-0'>
                We don’t do branches. Open your account in minutes online and start taking control of your finances right away.
            </p>
        </div>

        <div className=' '>
            <div className='flex justify-center items-center md:justify-start'>
                <img src={api} alt='Open API' className='' />
            </div>
            <div className='flex justify-center items-center md:justify-start'>
                <h2 className='text-xl mb-2 mt-4'>Open API</h2>
            </div>
            
            <p className='text-gray-600 mb-4 ml-4 md:ml-0'>
                Manage your savings, investments, pension, and much more from one account. Tracking your money has never been easier.
            </p>
            
        </div>
      </div>
      
    </div>
  );
};

export default Body;