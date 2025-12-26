import React from "react";
import sound from '../images/Maskgroup.avif'
// import { BASE_URL } from "../config";


const Main1 = () => {
  // const backgroundImage = `${BASE_URL}/logo192.png`;
  return (
    <>
      <hr></hr>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-gradient-to-r from-violet-900 via-black to-violet-900 p-10 pb-[200px] items-stretch">
        <div className="shadow w-full md:w-7xl text-white bg-gradient-to-r from-[#4F3961] via-[#382039] to-[#4F3961] w-auto h-400 p-10 rounded-md">
          <p className="text-4xl md:text-5xl leading-[150px]">Top Deals</p>
          <p className="text-lg md:text-xl leading-[50px]">UP TO</p>
          <p className="text-6xl md:text-8xl ">30% OFF</p>
          <p className="text-lg md:text-xl leading-[50px]">SELECTED BRANDS</p>
          <a className="text-lg md:text-xl leading-[100px] underline">SHOP NOW</a>
        </div>
          {/* <p className="text-6xl leading-[170px]">Our Staff Pick</p>
          <p className="text-xl leading-[150px]">Tune into quality sound</p>
          <a className="text-xl leading-[150px] underline">SHOP NOW</a> */}
          {/* <img src={`${BASE_URL}/logo192.png`} alt='image' /> */}
          <img src={sound} alt='sound' className='w-full'></img>
        </div>
      
    </>
  );
};

export default Main1;
