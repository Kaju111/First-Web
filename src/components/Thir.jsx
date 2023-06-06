import React from "react";
import vh from "./assets/dog.jpeg";
import wh from "./assets/as.jpg";
import eh from "./assets/be.jpg";

function Thir() {
  return (
    <div className="h-[520px]">
      <div className=" flex">
        <img className="h-[200px] -z-10 w-[280px] ml-[200px] " src={vh} alt="" />
        <img className="h-[200px] -z-10 w-[280px] ml-[40px]" src={wh} alt="" />
        <img className="h-[200px] -z-10 w-[280px] ml-[40px]" src={eh} alt="" />
      </div>

      <div className="ml-[370px]  -mt-16 w-[80px] h-[90px] text-center pt-4 bg-amber-200 ">
        <div className="font-bold text-[26px] "> 17</div>
        <div className=" text-[12px] ">Feb</div>
      </div>

      <div className="ml-[690px] w-[90px] -mt-24 h-[100px] text-center pt-4 bg-amber-200 ">
        <div className="font-bold text-[26px] ">23</div>
        <div className=" text-[12px] ">Jan</div>
      </div>

      <div className="ml-[1010px] -mb-8  w-[90px] h-[100px] -mt-24 text-center pt-4 bg-amber-200 ">
        <div className="font-bold text-[26px] ">13</div>
        <div className=" text-[12px] ">Dec</div>
      </div>
      <div className=" text-slate-400 text-[9px] ml-[200px] mt-6 flex">
        <div className="mr-3">553 Views </div>
        <div className="mr-3">|</div>
        <div>0 Comments</div>

        <div className="ml-[196px]">544 Views</div>
        <div className="ml-3">|</div>
        <div className="ml-3">0 Comments </div>

        <div className="ml-[196px]">586 Views</div>
        <div className="ml-3">|</div>
        <div className="ml-3">0 Comments </div>
      </div>
      <div className="flex text-[12px] mt-[25px] font-bold">
      <div className="ml-[200px] ">18 FEBRUARY: THE DAY OF THE PANGOLIN</div>
      <div className="ml-[68px]">THE MIDNIGHT STORY</div>
      <div className="ml-[200px]">IN CONVERSATION WITH DR. CINDY <br/>HARPER</div>
      </div>
      <div className="ml-[850px] text-[9px]  text-slate-400 mt-[15px]">In conversation with Dr Cindy ...</div>

      <div className='mt-[60px] text-center text-[30px] font-bold'>
      OUR CURRENT FUNDRAISERS
      </div>
      <div className="text-green-700 text-[12px] mt-2 font-bold text-center">Ways you can support the Boucher Legacy</div>

    </div>
  );
}

export default Thir;
