'use client';

import React from "react";

const Location = () => {
  return (
    <div className="w-full h-[400px] md:p-10">
      <h1 className="text-3xl text-center text-black font-bold md:mb-6">
        Get Locations for Wedding
      </h1>
      <div className="w-full">
        <iframe
          className="w-full h-[400px] border rounded-lg"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
          src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=CSI church atoor&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default Location;