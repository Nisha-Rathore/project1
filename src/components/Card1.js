import React from 'react'
import camera from '../images/camera.avif'
import mouse from '../images/mouse.avif'
import watch from '../images/watch.avif'
import earbuds from '../images/earbuds.avif'


const Card1 = () => {
  return (
    <div class='bg-gradient-to-r from-violet-900 via-black to-violet-900 p-2 pb-[20px] columns-lg-4'>
        <hr></hr>
      <div class='grid grid-cols-3 gap-5 flex  py-8'>
        <p class='col-span-2 text-7xl text-white font-semibold'>Best Sellers</p>
          <button class="focus:ring outline-none rounded-lg text-black bg-purple-500 font-bold active:scale-10 hover:opacity-90">VIEW ALL</button>
      </div>
      <div class='grid grid-cols-4 flex gap-6 rounded-lg'>
          <img src={camera} alt='camera'></img>
          <img src={mouse} alt='mouse'></img>
          <img src={watch} alt='watch'></img>
          <img src={earbuds }alt='earbuds'></img>
      </div>
      <div className='grid grid-cols-4 flex gap-6 font-semibold text-xl text-white'>
        <p>Instant camera <br></br>Price $100.00</p>
        <p>Wireless mouse <br></br>Price $50.00</p>
        <p>Fitness tracker <br></br>Price $75.00</p>
        <p>Wireless earbuds<br></br>Price $100.00</p>
      </div>
      <div className='place-items-center text-white pt-8 '>
         <button class="flex items-center justify-center space-x-2 rounded-md border-2 border-white p-10 py-4 font-medium text-white transition hover:bg-blue-500 hover:text-white">
        <span> Learn more </span>
      </button>
      </div>
      <div className='text-5xl font-semibold text-white leading-[150px]'>
        Why Us
      </div>
      <hr></hr>
    </div>
  )
}

export default Card1
