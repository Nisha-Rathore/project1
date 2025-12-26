import React from "react";
import camera2 from '../images/camera2.avif'
import headphones from '../images/headphones.avif'

const Card3 = () => {
  return (
    <div className="bg-gradient-to-r from-violet-900 via-black to-violet-900 py-[50px] px-[20px]">
      <hr></hr>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-5 py-8">
        <p class="col-span-2 text-4xl md:text-7xl text-white font-semibold">
          New Arrivals
        </p>
        <button class="focus:ring outline-none rounded-lg text-black bg-purple-500 font-bold active:scale-10 hover:opacity-90">
          VIEW ALL
        </button>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6 rounded-lg">
        <img src={camera2} alt="camera" className='w-full'></img>
        <img src={headphones} alt="mouse" className='w-full'></img>
      </div>
       <div className='grid grid-cols-1 md:grid-cols-2 gap-6 font-semibold text-lg md:text-2xl text-white pb-5'>
        <p>Instant camera <br></br>Price $100.00</p>
        <p>Tonx Headphones<br></br> Price $100.00</p>
      </div>
    </div>
  );
};

export default Card3;
