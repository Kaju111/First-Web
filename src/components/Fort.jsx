import React from 'react'
import vh from "./assets/the.jpg"
import wh from "./assets/mi.jpg"
import eh from "./assets/rh.jpg"


function Fort() {
  return (
    <div className='h-[370px]'>
      
      <div className=" flex">
        <img className="h-[200px] -z-10 w-[280px] ml-[200px] " src={vh} alt="" />
        <img className="h-[200px] -z-10 w-[280px] ml-[40px]" src={wh} alt="" />
        <img className="h-[200px] -z-10 w-[280px] ml-[40px]" src={eh} alt="" />
      </div>
      <div className='text-[12px]'>
        <div className='font-bold  ml-[200px] mt-[30px] text-amber-900 hover:text-green-700 cursor-pointer'>Wild Dogs</div>
        <div className='ml-[200px] text-[11px] mt-3'>Collaring all African wild dog packs in the Greater <br/> Kruger National Park.</div>
        <div className='  ml-[200px]  text-amber-900 hover:text-green-700 cursor-pointer mt-3'>Find out more.</div>
    
        <div className='font-bold  ml-[520px] mt-[-93px] text-amber-900 hover:text-green-700 cursor-pointer'>Pangolin</div>
        <div className='ml-[520px] text-[11px] mt-3'>The ongoing rehabilitation of <br/> pangolins.</div>
        <div className=' ml-[520px]  text-amber-900 hover:text-green-700 cursor-pointer mt-3'>Find out more.</div>

        <div className='font-bold  ml-[845px] mt-[-93px] text-amber-900 hover:text-green-700 cursor-pointer'>Rhinos</div>
        <div className='ml-[845px] text-[11px] mt-3'>The ongoing monitoring and protection of <br/> rhinos.</div>
        <div className='  ml-[845px]  text-amber-900 hover:text-green-700 cursor-pointer mt-3'>Find out more.</div>

        </div>

    </div>
  )
}

export default Fort
