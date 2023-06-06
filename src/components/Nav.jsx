import React from 'react'
import { Link } from 'react-router-dom';




export default function Nav() {
  return (
    <div>
        <nav className=' h-[50px] flex border border-b-black pl-32 gap-10 cursor-pointer text-xs font-bold select-none'>
       



        <Link to={"/"} className='pl-[35px] py-5 hover:text-green-700'>Home</Link>
        <Link to={"/about"} className='pl-[35px] py-5 hover:text-green-700'>About</Link>
        <Link to={"./blog"} className='pl-[35px] py-5 hover:text-green-700'>Blog</Link>
        <Link to={"./contact"} className='pl-[35px] py-5 hover:text-green-700'>Contact Us</Link>
        <div className='pl-[35px] py-5 hover:text-green-700'>Donate</div>
        
        

      


      </nav>
    </div>
  )
}
