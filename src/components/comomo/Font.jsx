import React from "react";
import vh from "../assets/about1.jpeg";
import ah from "../assets/ah.jpg";
import bh from "../assets/bh.jpeg";
import ch from "../assets/ch.jpg";


function Font() {
  return (
    <div className="font-sans">
      <div className="h-[700px] flex">
        <img
          src={vh}
          alt=""
          className="h-[650px] mt-[30px] w-[500px] ml-[100px] "
        />
        <div className="  text-center  ml-[50px] ">
          <div className=" mx-auto font-bold text-black text-3xl text-[50px] pt-[80px]">
            PROTECT THE FUTURE
          </div>
          <div className="text-black text-[35px] pt-[35px] font-bold uppercase">
            protect our home
          </div>
          <div className="text-black text-[26px] pt-[29px] font-bold uppercase">
            protect the nature
          </div>
          <div className="mt-[40px] text-[12px] ml-[40px] mr-[40px] p-9 h-[359px] border-2 border-black">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nobis
            minus, voluptate laboriosam reprehenderit quia distinctio beatae
            assumenda? Consequatur rerum sequi aspernatur quasi, voluptates eius
            saepe facilis voluptate dolorum. Obcaecati ut expedita, autem
            aperiam distinctio cupiditate accusamus? Dolores minus dolorem
            voluptatum, ipsum eius rerum ipsam iste libero eaque officiis
            dignissimos quidem fugit quisquam natus dicta temporibus modi ullam
            provident quos dolorum harum odit magni. Sapiente officia laboriosam
            alias debitis fugit mollitia cumque, incidunt totam iste doloribus
            dignissimos non doloremque? Itaque et laborum vitae assumenda
            laudantium unde quasi modi tenetur praesentium, minus ab temporibus
            facere ipsum, velit dolorem. Ea et ipsam voluptate recusandae
            tempore in quis suscipit explicabo odio tenetur corporis distinctio
            nemo labore tempora ipsum reiciendis, fuga cum veritatis, doloremque
            odit sed accusantium! Magni, vel officiis error cupiditate
            accusantium quam quaerat ipsum et! Exercitationem assumenda sint
            quaerat autem molestiae minima commodi ab asperiores recusandae quam
            quas dolorem quibusdam, cum, fugit pariatur repellendus voluptates
            provident adipisci, ut sequi dolore! Blanditiis iure eum, cum
            aliquid, ex officiis possimus, sint velit est repellendus eligendi
            ipsum. Accusantium vitae placeat quidem molestiae, voluptas, illum
          </div>
        </div>
      </div>

      <div className="h-[700px] ml-[100px]">
        <div className="mt-[60px] text-[37px] font-bold">
          Explore Fundraising Campaigns <br />
        </div>{" "}
        <span className="font-sans text-[20px]  font-bold">and donate</span>
        <div>
          {/* <button className="bg-green-700 font-bold  mt-[60px] ml-[550px]  text-white text-[12px] py-[9px] pl-[90px] pr-[90px] rounded hover:bg-white hover:text-green-700 border-2 border-green-700  duration-[400ms] transform: scale(1.06)">
          SUPPORT NOW
        </button> */}
          <div className=" flex m-[40px]">
            <img
              className="h-[200px] -z-10 w-[280px] ml-[200px]"
              src={ah}
              alt=""
            />
            <img
              className="h-[200px] -z-10 w-[280px] ml-[40px]"
              src={bh}
              alt=""
            />
            <img
              className="h-[200px] -z-10 w-[280px] ml-[40px]"
              src={ch}
              alt=""
            />
          </div>
          <div className="text-[12px]">
            <div className="font-bold  ml-[235px] mt-[30px] text-amber-900 hover:text-green-700 cursor-pointer">
              Wild Dogs
            </div>
            <div className="ml-[235px] text-[11px] mt-3">
              Collaring all African wild dog packs in the Greater <br /> Kruger
              National Park.
            </div>
            <div className="  ml-[235px]  text-amber-900 hover:text-green-700 cursor-pointer mt-3">
              Find out more.
            </div>

            <div className="font-bold  ml-[545px] mt-[-93px] text-amber-900 hover:text-green-700 cursor-pointer">
              Pangolin
            </div>
            <div className="ml-[545px] text-[11px] mt-3">
              The ongoing rehabilitation of <br /> pangolins.
            </div>
            <div className=" ml-[545px]  text-amber-900 hover:text-green-700 cursor-pointer mt-3">
              Find out more.
            </div>

            <div className="font-bold  ml-[850px] mt-[-93px] text-amber-900 hover:text-green-700 cursor-pointer">
              Rhinos
            </div>
            <div className="ml-[850px] text-[11px] mt-3">
              The ongoing monitoring and protection of <br /> rhinos.
            </div>
            <div className="  ml-[850px]  text-amber-900 hover:text-green-700 cursor-pointer mt-3">
              Find out more.
            </div>
          </div>
        </div>
        <button className="bg-green-700 font-bold mt-[50px]  ml-[235px] text-white text-[12px] py-[9px] pl-[25px] pr-[25px] rounded hover:bg-white hover:text-green-700 border-2 border-green-700  duration-[400ms] transform: scale(1.06)">
          SUPPORT NOW
        </button>
        <button className="bg-green-700 font-bold mt-[50px] ml-[470px] text-white text-[12px] py-[9px] pl-[25px] pr-[25px] rounded hover:bg-white hover:text-green-700 border-2 border-green-700  duration-[400ms] transform: scale(1.06)">
          SUPPORT NOW
        </button>
        {/* <button className="bg-green-700 font-bold  ml-[480px]  text-white text-[12px] py-[9px] pl-[90px] pr-[90px] rounded hover:bg-white hover:text-green-700 border-2 border-green-700  duration-[400ms] transform: scale(1.06)">
          SUPPORT NOW
        </button> */}



        {/* <div className="h-[400px]">
          <div className="mt-[100px] flex ">
            <img src={dh} alt="" />
            <div className="ml-[40px] font-bold text-[35px] mr-[40px] h-[70px] border p-3 border-b-black">
              Explore Fundraising Campaigns
              <h1 className="text-[15px] text-gray-400 mt-[39px]">
                Forest is natural habitats of wild life. So we have to save
                tigers as well as forests. We always see around us cruelty and
                inhumanity by some people for animals. So we need love for them
                and some work to preserve them in their natural habitats by all
                whomever government or people in real manner.
              </h1>
            </div>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Font;
