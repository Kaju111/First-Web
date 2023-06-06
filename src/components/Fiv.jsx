import React from 'react'

function Fiv() {
  return (
    <div className='h-[600px]'>
      
        <div className='font-bold text-[29px] text-center '>OUR BIG GOAL</div>
        <div className='font-bold text-[14px] text-green-700 mt-3 text-center'>SAVE OUR ENDANGERED MAMMALS</div>

        <div className='text-[12px] text-center'>
            <div className='mt-3'>The Boucher Legacy is aiming to raise money to protect our endangered mammals across South Africa and Africa. Our big goals include – collaring of all African</div>
            <div className='mt-1'>wild dog packs in the Greater Kruger National Park, ongoing rehabilitation of pangolins, working to develop high tech tracking monitoring for endangered</div>
            <div className='mt-1 mb-4'>mammals, and the ongoing monitoring and protection of rhino as a key species.</div>

            <button className='rounded-[50px] bg-green-700 text-white py-[10px] pl-[30px] pr-[30px] hover:bg-white hover:text-green-700 border-2 border-green-700  duration-[400ms] transform: scale(1.06)'>DONATE NOW</button>
        </div>

          <div className='text-white bg-zinc-900 h-[250px] ml-[200px] mr-[200px] mt-14'>
                <div className='font-bold text-[20px] pl-20 pt-16'>BECOME AN AGENT OF CHANGE</div>
                <div className='text-[12px] pl-20 pt-3 flex'> Help us to educate the world that the senseless murdering of rhino for <br/> 
                their horn is just unacceptable! We really need to stop the poaching of <br/>
                 rhino in Africa, the last outpost for this beautiful animal for the sake of <br/>
                 our children’s children and future generations to follow.
                 
                 <div className='border-2 font-bold my-5 ml-20 pl-8 pr-8 py-3 rounded-lg text-[10px]  border-green-700 text-green-700 hover:bg-green-700 hover:text-white   duration-[400ms] transform: scale(1.06) '>
                    <button>
                    JOIN NOW
                    </button></div>
                 </div>
            </div>

    </div>
  )
}

export default Fiv
