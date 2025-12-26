import React from 'react'
import laptop from '../images/laptop.avif'
import tablet from '../images/tablet1.avif'
import phones from '../images/phones.avif'
import accessories from '../images/accessories.avif'
import frame4 from '../images/Frame.avif'
import frame1 from '../images/frame1.avif'
import frame2 from '../images/frame2.avif'
import frame3 from '../images/frame3.avif'
import frame5 from '../images/frame5.avif'
import frame6 from '../images/frame6.avif'

const Card2 = () => {
  return (
    <div className='bg-gradient-to-r from-violet-900 via-black to-violet-900 py-20 md:py-[200px]'>
       <div class='grid grid-cols-1 bg-gradient-to-r from-violet-900 via-black to-violet-900 p-2 columns-lg-4 pl-4 md:pl-[50px] pb-20 md:pb-[250px]'>
        <img src={laptop} alt='laptop' className='w-full'></img>
         <div class='bg-gradient-to-r from-violet-900 via-black to-violet-900 p-2 pb-5 md:pb-[20px] columns-lg-4'>
        <hr></hr>
      <div class='grid grid-cols-1 md:grid-cols-3 gap-5 py-8'>
        <p class='col-span-2 text-4xl md:text-7xl text-white font-semibold'>Shop By Category</p>
          <button class="focus:ring outline-none rounded-lg text-black bg-purple-500 font-bold active:scale-10 hover:opacity-90">ALL PRODUCTS</button>
      </div>
      <div class='grid grid-cols-1 md:grid-cols-3 gap-6 rounded-lg'>
          <img src={tablet} alt='camera' className='w-full'></img>
          <img src={phones}  alt='mouse' className='w-full'></img>
          <img src={accessories} alt='watch' className='w-full'></img>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-6 font-semibold text-xl md:text-4xl text-white underline pb-5'>
        <p>Computers & Tablets</p>
        <p>Cell Phones</p>
        <p>Accessories</p>
      </div>
       </div>
       </div>
        <hr></hr>
       <div class='grid grid-cols-2 md:grid-cols-6 gap-5'>
        <p class='col-span-2 text-3xl md:text-5xl text-white font-semibold'>Brands</p>
        </div>
        <div class='grid grid-cols-2 md:grid-cols-6 gap-5 py-8 items-end'>
        <img src={frame1} alt='frame' className='w-full'></img>
        <img src={frame2} alt='frame' className='w-full'></img>
        <img src={frame3} alt='frame' className='w-full'></img>
        <img src={frame4} alt='frame' className='w-full'></img>
        <img src={frame5} alt='frame' className='w-full'></img>
        <img src={frame6} alt='frame' className='w-full'></img>
        </div>
       
    </div>
  )
}

export default Card2;
