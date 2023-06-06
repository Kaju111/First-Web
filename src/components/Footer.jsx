import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPhoneAlt,
} from "react-icons/fa";
import {BiMailSend} from "react-icons/bi";
import {AiOutlineGlobal} from "react-icons/ai"
import { AiOutlineUpload} from "react-icons/ai";


function Footer() {
  return (
    <div className="h-[300px] pl-20  text-white bg-black ">
        <div className="text-[20px] mb-[15px]  font-bold pt-12">ADDRESS </div>
        <span className="text-[13px] ">249, Patia chuburi Main Rd, Jatia, Kahilipara, Tezpur, Assam 781019
          <a href="https://facebook.com/ka ju" className="ml-[800px] flex hover:text-green-700 text-[18px] "> Facebook__ <FaFacebookF /></a>
        
        </span>
        <div className="text-[13px] gap-2 flex ">< BiMailSend/> info@olikon.com,saikiakajju@gmail.com
        <a href="https://instagram.com/kaju___saikia" className="ml-[530px] flex hover:text-green-700 text-[18px] ">
        Instagram__ <FaInstagram />
        </a>
        </div>
        <div className="text-[13px] gap-2 flex"><FaPhoneAlt/> +91-73450-22019, 0361-565480
        <a href="https://instagram.com/kaju___saikia" className="ml-[570px] flex hover:text-green-700 text-[18px] ">
        Contact__
          <FaPhoneAlt /></a>
        </div>
        <div className="text-[13px] py-3 gap-2 flex"><AiOutlineGlobal/> www.kajusaikia.com
        <a href="https://instagram.com/kaju___saikia" className="ml-[650px] flex hover:text-green-700 text-[18px] ">
        Twitter__
          <FaTwitter /></a>

          <a
          href="/"
          className="float-right ml-[70px] pt-[12px] font-bold text-[23px]  pl-[12px] text-green-700 rounded-[50px] w-[50px] h-[50px] place-items-center border-2 border-green-700 hover:bg-green-700 hover:text-white   duration-[400ms] transform: scale(1.06)"
        >
          <AiOutlineUpload />
        </a> 
    
        </div>
        

      



      {/* <div className="ml-[700px]  "> */}

        {/* <a href="https://facebook.com/ka ju" className="flex ml-[200px] pt-[70px] hover:text-green-700">
          Facebook__ <FaFacebookF />{" "}
        </a>
        <a href="https://instagram.com/kaju___saikia" className="flex ml-[250px] m-[20px]  hover:text-green-700">
          Instagram__
          <FaInstagram />
        </a>
        <a href="https://instagram.com/kaju___saikia" className="flex ml-[300px]  hover:text-green-700">
          Contact__
          <FaPhoneAlt />
        </a>
        <a href="https://instagram.com/kaju___saikia" className="flex ml-[350px] mt-[20px]  hover:text-green-700">
          Twitter__
          <FaTwitter />
        </a> 

        <a
          href="/"
          className="float-right mr-10 pt-[19px] pb-[10px] pl-[14px] text-green-700 rounded-[50px] w-[50px] h-[50px] place-items-center border-2 border-green-700 hover:bg-green-700 hover:text-white   duration-[400ms] transform: scale(1.06)"
        >
          <AiOutlineArrowUp />
        </a> */}

      {/* </div> */}
    </div>
  );
}

export default Footer;
