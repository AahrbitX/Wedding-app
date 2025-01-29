'use client';


import React from "react";

const Location = () => {
  return (
    <div className="relative text-right w-full h-[400px]">
      <div className="overflow-hidden bg-none w-full h-[400px]">
        <iframe
          className="w-full h-[400px]"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=at Our Lady of Sorrows Community Hall, Vellicode &amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
        ></iframe>
      </div>
    </div>
  );
};

export default Location;
