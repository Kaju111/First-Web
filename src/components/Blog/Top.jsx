import React from "react";
import dh from "../assets/dh.jpg";
import vh from "../assets/vh1.jpg";
import bh from "../assets/ti.jpg";
import mh from "../assets/ti1.avif";
import nh from "../assets/ti2.jpg";

function Top() {
  return (
    <div className="">
      <div
        className="someting h-[450px] w-full filter grayscale "
        style={{ backgroundImage: `url(${vh})` }}
      >
        <div className="  text-center">
          <div className=" mx-auto font-bold text-amber-200 text-3xl text-[50px] pt-[140px]">
            DON'T KILL TIGER{" "}
          </div>
          <div className="text-white text-[35px] pt-[35px] font-bold uppercase">
            SAVE AND PROTECT TIGER{" "}
          </div>
        </div>
      </div>

      {/* 
<div className=" mt-[20px] font-bold text-[45px] mr-[40px] h-[70px] p-3 ">
              DON'T KILL TIGER 
              <h1 className='text-[20px] text-gray-400'>DON'T KILL TIGER </h1>
              </div> */}

      <div className="h-[400px] ml-[100px]">
        <div className="mt-[50px] flex ">
          <img src={dh} alt="" />
          <div className="ml-[40px] font-bold font-serif text-[35px] mr-[40px] h-[70px] border p-3 border-b-black">
            Explore Fundraising Campaigns
            <h1 className="text-[15px] text-gray-400 mt-[39px]">
              Forest is natural habitats of wild life. So we have to save tigers
              as well as forests. We always see around us cruelty and inhumanity
              by some people for animals. So we need love for them and some work
              to preserve them in their natural habitats by all whomever
              government or people in real manner.
            </h1>
          </div>
        </div>
      </div>

      <div className="ml-[100px] mb-[20px] border-b-2 mr-[590px] border-black text-[37px] font-mono font-bold "> SAVE ANIMALS SAVE NATURE</div>

      <div className="  flex">
        <img
          className="h-[250px] - w-[340px] ml-[100px] "
          src={bh}
          alt=""
        />
        <img className="h-[250px]  w-[340px] ml-[40px]" src={mh} alt="" />
        <img className="h-[250px]  w-[340px] ml-[40px]" src={nh} alt="" />
      </div>

              <div className="flex text-[15px] text-amber-900 font-bold font-mono ml-[100px] mt-[20px] ">
                 <h1> Panthera tigris virgata </h1>
                <h1 className="ml-[175px]">Pantera tigris balica</h1>
                <h1 className="ml-[190px]">Panthera tigris sondaica</h1>                

              </div>

              <div className=" text-[11px] font-light ml-[100px] flex">
                <h1>The Caspian tiger was a Panthera tigris tigris population <br/> native to eastern Turkey, northern Iran, </h1>
                <h1 className="ml-[95px]">The Bali tiger was a Panthera tigris sondaica population on<br/> the Indonesian island of Bali which has been extinct <br/></h1>
                <h1 className="ml-[80px]">The Javan tiger was a Panthera tigris sondaica population native <br/> to the Indonesian island of Java until the mid-1970s.</h1>
              </div>
                <div className="text-[11px] m-2 text-amber-900 flex ml-[100px]">
                  <h1 className=" hover:text-green-700 select-none">Read more...</h1>
                  <h1 className="ml-[315px]  hover:text-green-700 select-none">Read more...</h1>
                  <h1 className="ml-[315px]  hover:text-green-700 select-none">Read more...</h1>
                </div>




      {/* <div className="flex ml-[100px] mr-[300px]">
        Conclusion. Saving Tiger is not only our duty but also our
        responsibility. We have to support the government in its projects for
        the protection of the tigers so that a healthy population of the tigers
        exists. We should know that when we ask something from nature, we must
        be ready to give something back.
      <div className="w-[300px] ml-[50px] ">
        <img src={bh} alt="" />
      </div>
      </div> */}
    </div>
  );
}

export default Top;
