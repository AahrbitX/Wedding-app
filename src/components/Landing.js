"use client";
import React from "react";
import { ContainerScroll } from "./ui/container-scroll-animation";
import Image from "next/image";
import lanImage from "../../public/images/photos/KSK_4318.jpg"; // Fixed variable name
import lanImage1 from "../../public/images/photos/IMG-20250127-WA0042.jpg"; // Fixed variable name

export function Landing() {
  return (
    <div className="flex flex-col overflow-hidden">
      <ContainerScroll
              titleComponent={
                <>
                  <h1 className=" text-4xl md:text-[6rem] font-bold mt-1 leading-none">
                    Dasmi.D <br /> 
                    <span className="text-4xl font-semibold text-red-700 dark:text-white  ">
                    &#128151;
                    </span> <br/>
                    Labeesh Bin Lal R.V
      
                  </h1>
                </>
              }
      >
        <Image
          src={lanImage} // Fixed variable name
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-center"
          draggable={false}
        />
      </ContainerScroll>


      <ContainerScroll
        titleComponent={
            <>
                <h1 className=" text-2xl md:text-[4rem] font-bold mt-1 leading-none">
                We warmly welcome you for Our wedding at
                <span className="text-pink-400 pl-5">
                30-01-2025
                </span>
                </h1>
            </>
            }
      >
        <Image
          src={lanImage1} // Fixed variable name
          alt="hero"
          height={720}
          width={1400}
          className="mx-auto rounded-2xl object-cover h-full object-center"
          draggable={false}
        />
      </ContainerScroll>
    </div>
  );
}
