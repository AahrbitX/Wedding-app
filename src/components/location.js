'use client';


import React from "react";

const Location = () => {
  return (
    <div className="w-full h-[400px] p-20">
        <h1 className="text-3xl w-full flex justify-center text-black p-10 font-bold">
          Get Locations for wedding
        </h1>
      <div className="w-full">
        <iframe
          className="w-full h-[400px]"
          frameBorder="1"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src=" https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=CSI church atoor&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;



