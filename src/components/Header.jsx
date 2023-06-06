import React from 'react'
import {FaFacebookF,FaTwitter, FaInstagram, FaPhoneAlt } from "react-icons/fa"
import {BiMailSend} from "react-icons/bi"
import {ImLocation} from "react-icons/im"

function Header() {
  return (
    <div>
         <div className='text-[10px] w-full bg-black h-[40px] flex  text-white'>
        <div className=''></div>
        
             <div className="flex justify-between my-5 gap-8 pl-[200px] ">
            <a href=""><FaFacebookF/></a>
            <a href=""><FaTwitter/></a>
            <a href=""><FaInstagram/></a>
        
        </div>
        
            <a href="" className='flex justify-around my-4 pl-[320px]'><BiMailSend/> 
            <div>saikiakaju@gmail.com </div> </a>
        
        
        <div className='my-4 flex justify-around pl-[60px]'><FaPhoneAlt/> +290222904</div>


        <div className='flex justify-around my-4 pl-[60px]'><ImLocation/> PO Box 784501, Tezpur 784501, Misson chariali</div>

        <div></div>
    
    </div>
    </div>
  )
}

export default Header
  