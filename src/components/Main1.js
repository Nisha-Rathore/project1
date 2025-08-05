import React from 'react'
import sound from '../images/Mask group.avif'

const Main1 = () => {
  return (
    <>
    <hr></hr>
    <div class='grid grid-cols-3 gap-4flex bg-gradient-to-r from-violet-900 via-black to-violet-900 p-10 pb-[200px]'>
    <div class='shadow w-7xl text-white bg-gradient-to-r from-[#4F3961] via-[#382039] to-[#4F3961] w-auto h-400 p-10 rounded-md'>
      <p class='text-5xl leading-[150px]'>Top Deals</p>
      <p class='text-xl leading-[50px]'>UP TO</p>
      <p class='text-8xl '>30% OFF</p>
      <p class='text-xl leading-[50px]'>SELECTED BRANDS</p>
      <a class='text-xl leading-[100px] underline'>SHOP NOW</a>
    </div>
     <div class="mx-10 col-span-2 gap-4 text-white ">
         {/* <p class='text-6xl leading-[170px]'>Our Staff Pick</p>
        <p class='text-xl leading-[150px]'>Tune into quality sound</p>
        <a class='text-xl leading-[150px] underline'>SHOP NOW</a> */}
        <img src={sound} alt='image'>
        </img>
     </div>
    </div>
    </>
  )
}

export default Main1
   