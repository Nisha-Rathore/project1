import React from 'react'
import logo from '../images/logo.jpg'
import { CiHeart } from 'react-icons/ci';
import { IoPersonOutline } from 'react-icons/io5';
import { TbShoppingBagHeart } from 'react-icons/tb';


const Navbar = () => {
  return (
    <div class="justify-around bg-gradient-to-r from-violet-900 via-black to-violet-900 px-5">
      <header class="mb-2  shadow bg-gradient-to-r from-violet-900 via-black to-violet-900 ">
      <div class="relative  flex  px-5 py-4 sm:flex-row sm:items-center gap-2 sm:justify-between">
        <div>
      <a class="flex items-center text-2xl font-black" href="/">
      <span class="mr-2 text-3xl text-blue-600"
        ><img src={logo} alt='logo' width={"180px"} className='w-full md:w-auto'></img>
      </span>
    </a>
    </div>
   <div class="gap-x-20 ">
     <nav aria-label="Header Navigation" class="peer-checked:block hidden pl-2 py-4 sm:block sm:py-0">
      <ul class="flex whitespace-nowrap flex-col gap-10 gap-x-10 sm:flex-row sm:gap-x-18">
        <li class=""><a class="text-white hover:text-white" href="#">New In</a></li>
        <li class=""><a class="text-white hover:text-white" href="#">Cell Phones</a></li>
        <li class=""><a class="text-white hover:text-white" href="#">Computers & Tablets</a></li>
        <li class=""><a class="text-white hover:text-white" href="#">Accessories</a></li>
        <li class=""><a class="text-white hover:text-white" href="#">Sale</a></li>
        <li class=""><a class="text-white hover:text-white" href="#">Contact</a></li>
      </ul>
    </nav>
   </div>
    <div className='text-white text-3xl flex gap-4 m-[20px]'>
    <CiHeart />
    <IoPersonOutline />
    <TbShoppingBagHeart />
  </div>
  </div>
</header>
<div class='grid grid-cols-1 md:grid-cols-3 bg-gradient-to-r from-violet-900 via-black to-violet-900 px-5 py-5'>
    <div className='col-span-2'>
<div class='text-6xl md:text-[250px] font-semibold text-white'>SELCORE</div>
<p class='text-xl md:text-3xl font-semibold text-white'>Your Ultimate Destination for the Best Value <br></br>Electronics and Gadgets</p>
</div>
<div className='mt-5 md:mt-0 md:ml-20'>
<div class="flex w-full md:w-96 col-span-1 rounded-lg border py-10 px-5 shadow-xl mx-auto">
  <div class="mx-auto mb-2 space-y-6">
    <h1 class="text-lg md:text-2xl font-semibold text-white px-5">Sign up to receive updates on new products and special offers</h1>
    <p class="text-white px-5">Enter your email*</p>
    <hr></hr>

    <div class="my-4 space-y-10">
        <label for="marketing" class="flex space-x-4">
          <input id="marketing" name="marketing" type="checkbox" class="h-6 w-6 shrink-0 accent-gray-500" />
          <span id="marketing-description" class="text-sm text-white">Yes, subscribe me to your newsletter.</span>
        </label>
    </div>
     <button class="rounded-lg bg-purple-400 py-3 px-10 font-semibold text-black">SUBMIT</button>
  </div>
</div>
</div>
</div>

    </div>
  );
};

export default Navbar

