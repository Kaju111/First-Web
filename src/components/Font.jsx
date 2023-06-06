import React from 'react'
import vh from "./assets/m4.jpg"



function Font() {
  return (
    <div className=''>
        <div  className = "someting h-[589px]"
    style={{backgroundImage: `url(${vh})`}}>
        
            <div className=' font-sans text-center   '>
              <div className=' mx-auto font-bold text-amber-200 text-3xl text-[50px] pt-[180px]'>PROTECT THE FUTURE</div>
              <div className='text-white text-[35px] pt-[35px] font-bold uppercase'>protect our home</div>
              <div className='text-zinc-200 text-[26px] pt-[29px] font-bold uppercase'>protect the nature</div>
            </div>
        </div>
    </div>
  )
}

export default Font
