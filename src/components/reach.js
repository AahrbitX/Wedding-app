'use clientss'


import React from "react";
import Image from "next/image";

import logo from "../../public/images/Logo/Pommi catering light.png"

const Reach = () => {
  return (
    <div className="bg-black rounded-3xl text-center flex flex-col justify-center mt-60 p-20">

      <div className="w-full flex flex-col justify-center items-center">
        <h1 className="text-3xl flex md:w-[800px] w-full text-white font-bold py-10"> Congratulations to the beautiful couple! May your love grow stronger with each passing day.</h1> 
      </div>


        <div className="w-full flex justify-center pb-10">

          <Image src={logo} className="w-[250px] h-[100px]" alt="alt"/>

        </div>
      <h1 className="text-white text-lg font-bold mb-4">Transforming Moments into Unforgettable Memories</h1>
        <div className="w-full">
          <a 
            href="https://www.pommicaters.in" 
            className="w-[600px] items-center justify-center px-8 py-4 font-sans font-semibold tracking-wide text-white bg-blue-500 rounded-lg h-[60px] hover:bg-blue-600"
          >
            Contact us
          </a>
        </div>
        <div className="text-white p-10">
            <p> &copy; 2025 <a href="https://www.aahrbitx.in" className="text-blue-500">AahrbitX</a>. All Rights Reserved.</p>
        </div>
    </div>



  );
};

export default Reach;
