import React from 'react'
import icone from "../images/footer1.avif"
import icone1 from "../images/i.avif"
import icone2 from "../images/t.avif"
import icone3 from "../images/x.avif"

const Footer = () => {
  return (
    <div className="bg-gradient-to-r from-violet-900 via-black to-violet-900 py-[250px] px-[30px]">
        <hr></hr>
      <div class="grid grid-cols-4 gap-5 flex  py-8 pt-5">
        <div className='text-xl text-white'>
            <ul>MENU
                <li>New In</li>
                <li>Cell Phones</li>
                <li>Computers & Tablets</li>
                <li>Accessorie</li>
                <li>Sale</li>
                <li>Contact</li>
            </ul>
        </div>
        <div className='text-xl text-white'>
            <ul>POLICY
                <p>New In</p>
                <p>Cell Phones</p>
                <p>Computers & Tablets</p>
                <p>Accessorie</p>
                <p>Sale</p>
                <p>Contact</p>
            </ul>
        </div>
        <div className='text-xl text-white'>
            <ul>INFO
                <p>info@mysite.com</p>
                <p>123-456-7890</p>
                <p>500 Terry Francois Street</p>
                <p>San Francisco, CA 94158</p>
            </ul>
        </div>
        <div className='flex w-10 h-10'>
          <img src={icone} alt='icons'></img>
          <img src={icone2} alt='icons'></img>
          <img src={icone3} alt='icons'></img>
          <img src={icone1} alt='icons'></img>
        </div>
      </div>
      <p className='font-medium text-7xl text-white pt-[10PX]'>SELCORE</p>
    </div>
  )
}
export default Footer
