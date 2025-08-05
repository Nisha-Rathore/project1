import React from 'react'
import camera from '../images/camera.avif'
import mouse from '../images/mouse.avif'
import watch from '../images/watch.avif'
import earbuds from '../images/earbuds.avif'


const Card1 = () => {
  return (
    <div class='bg-gradient-to-r from-violet-900 via-black to-violet-900 p-10 pb-[20px]'>
        <hr></hr>
      <div class='grid grid-cols-2 gap-4 flex p-10 py-8'>
        <p class=' text-7xl text-white font-semibold'>Best Sellers</p>
        <button class="focus:ring outline-none rounded-lg text-black bg-purple-500 font-bold active:scale-10 hover:opacity-90">VIEW ALL</button>
      </div>
      <div class='flex gap-6 rounded-lg'>
          <img src={camera} alt='camera'></img>
          <img src={mouse} alt='mouse'></img>
          <img src={watch} alt='watch'></img>
          <img src={earbuds }alt='earbuds'></img>
         
      </div>
    </div>
  )
}

export default Card1
