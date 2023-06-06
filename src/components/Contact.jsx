import React from "react";
import bg from "./assets/bg.jpg";
import { ImLocation } from "react-icons/im";
import { FiMail } from "react-icons/fi";

function Contact() {
  return (
    <div className="h-[800px]">
      <div
        className="someting h-[150px] "
        style={{ backgroundImage: `url(${bg})` }}
      >
        <div className="text-white text-[41px] font-extrabold text-center pt-[40px] font-mono">
          Contact Us Today
        </div>
        <div className="text-[25px] text-center text-amber-300 font-light">
          WE'RE HERE TO HELP!
        </div>

        <div className="max-w-[1000px] mx-auto mt-[40px] h-[600px]  grid grid-cols-2">
          <div className=" h-[600px]">
            <div className="bg-black h-[200px] pl-[60px] pt-[60px]">
              <h1 className="text-amber-300  font-bold text-[20px]">
                Do you have any questions?
              </h1>
              <h1 className="text-[38px] text-white font-bold">
                Contact OnlyAnimals{" "}
              </h1>
            </div>

            <div className="h-[150px] mt-[40px] ml-[60px] hover:scale-105 duration-500">
              <h1 className="text-[23px]">
                <ImLocation />
              </h1>
              <h1 className="text-[23px] font-bold font-sans mt-3">Address</h1>
              <h1 className="text-[14px] mt-[20px]">
                OnlyAnimals Foundation <br />
                Via Caracciolo 4/10 <br />
                Asti - Italy
              </h1>
            </div>
            <div className="h-[200px] mt-[40px] ml-[60px] hover:scale-105 duration-500 ">
              <h1 className="text-[23px]">
                <FiMail />{" "}
              </h1>
              <h1 className="text-[23px] font-bold font-sans mt-3">E-mail</h1>
              <h1 className="text-[14px] mt-[20px]">info@onlyanimals.org</h1>
            </div>
          </div>

          <div className="h-[600px] ">
            <div className="text-[16px] text-center text-amber-700 font-mono">- GET IN TOUCH -</div>
            <h1 className="text-[40px] font-extrabold font-mono text-center">Contact From</h1>

            <div className="ml-[30px]">Full Name</div>
            <input className="border-2 ml-[30px] w-[470px] h-[40px]" type="text"  />


            <div className="ml-[30px] mt-[35px]">Email</div>
            <input className="border-2 ml-[30px] w-[470px] h-[40px] " type="email"  />
            


            <div className="ml-[30px] mt-[35px]">Message</div>
            <input className="border-2 ml-[30px] w-[470px] h-[160px] " type="text"  />

          <button className="bg-black text-white m-[30px] py-[20px] pl-[50px] pr-[50px] font-bold text-[13px] hover:bg-amber-300
          hover:text-amber-700 hover:scale-105 hover:duration-500">SEND</button>    
          </div>

        
        </div>
      </div>
    </div>
  );
}

export default Contact;
