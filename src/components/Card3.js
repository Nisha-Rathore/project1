import React from "react";
import camera2 from '../images/camera2.avif'
import headphones from '../images/headphones.avif'

const Card3 = () => {
  return (
    <div className="bg-gradient-to-r from-violet-900 via-black to-violet-900 py-[50px] px-[20px]">
      <hr></hr>
      <div class="grid grid-cols-3 gap-5 flex  py-8">
        <p class="col-span-2 text-7xl text-white font-semibold">
          New Arrivals
        </p>
        <button class="focus:ring outline-none rounded-lg text-black bg-purple-500 font-bold active:scale-10 hover:opacity-90">
          VIEW ALL
        </button>
      </div>
      <div class="grid grid-cols-2 flex gap-6 rounded-lg">
        <img src={camera2} alt="camera"></img>
        <img src={headphones} alt="mouse"></img>
      </div>
       <div className='grid grid-cols-2 flex gap-6 font-semibold text-2xl text-white  pb-5'>
        <p>Instant camera <br></br>Price $100.00</p>
        <p>Tonx Headphones<br></br> Price $100.00</p>
      </div>
    </div>
  );
};

export default Card3;
