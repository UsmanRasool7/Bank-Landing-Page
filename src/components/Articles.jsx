import React from 'react';
import currency from '../images/image-currency.jpg'; 
import confetti from '../images/image-confetti.jpg';
import plane from '../images/image-plane.jpg';
import restaurant from '../images/image-restaurant.jpg'

const Articles = () => {
  return (
    <div className=''>
      <div className='py-2 ml-8 mr-8 mt-8'>
        <h1 className='text-[25px] md:text-[33px]  md:ml-10'>
          Latest Articles
        </h1>
      </div>

      <div className="container mx-auto grid grid-cols-1 
            md:grid-cols-4 gap-8 w-11/12 mb-8 mt-8">
        <div className='rounded-lg shadow-lg bg-white p-4'>
          <img src={currency} alt='Logo' className='rounded-lg w-[220px] h-[170px]  mb-[20px]' />
          <div>
            <h2 className='text-xl font-bold mb-2'>Receive money in any currency with no fees</h2>
            <p className='text-gray-600 mb-4'>The world is getting smaller and we're becoming more connected. 
              So why should you have to pay high fees to send money abroad?</p>
          </div>
        </div>

        <div className='rounded-lg shadow-lg bg-white p-4'>
          <img src={restaurant} alt='Logo' className='rounded-lg w-[220px] h-[170px]  mb-[20px]' />
          <div>
            <h2 className='text-xl font-bold mb-2'>Treat yourself without worrying about money</h2>
            <p className='text-gray-600 mb-4'>Our Simple Budget allows you to separate out you spending and set 
                limits for each category.
            </p>
          </div>
        </div>

        <div className='rounded-lg shadow-lg bg-white p-4'>
          <img src={plane} alt='Logo' className='rounded-lg w-[220px] h-[170px]  mb-[20px]' />
          <div>
            <h2 className='text-xl font-bold mb-2'>Take your easy bank card wherever you go</h2>
            <p className='text-gray-600 mb-4'>We want you to enjoy your travels this is why we dont charge any fees
                while you are abroad
            </p>
          </div>
        </div>
        

        <div className='rounded-lg shadow-lg bg-white p-4'>
          <img src={confetti} alt='Logo' className='rounded-lg w-[220px] h-[170px]  mb-[20px]' />
          <div>
            <h2 className='text-xl font-bold mb-2'>Our invite only beta accounts are now live</h2>
            <p className='text-gray-600 mb-4'>After a lot of hardwork by the whole team, we are excited to launch 
                our closed beta.
            </p>
          </div>
        </div>

      </div>
    </div>
    
  );
};

export default Articles;