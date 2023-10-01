"use client";
import React, { useState } from "react";
import slides from "@/app/components/slider.json";

const Slider = () => {
  const [currIndex, setCurrIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currIndex === 0;
    const newSlide = isFirstSlide ? slides.length - 1 : currIndex - 1;
    setCurrIndex(newSlide);
  };

  const nextSlide = () => {
    const isLastSlide = currIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currIndex + 1;
    setCurrIndex(newIndex);
  };
  // w-[1220px] transition-all  ml-6 my-3 h-[70vh] max-w-[1400px] relative duration-500  group
  return (
    <>
      <div className=" lg:w-full md:w-[800px] p-4 sm:w-[400px] transition-all my-4 h-[70vh] max-w-[1400px] relative duration-500  group">
        <div
          style={{ backgroundImage: `url(${slides[currIndex].url})` }}
          className="w-full h-full duration-500 bg-center bg-cover rounded-2xl flex items-end overflow-hidden"
        >
          {/* /////////--Left-Icon--////////// */}
          <div
            onClick={prevSlide}
            className="hidden group-hover:block duration-500 transition-all  absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-3 text-2xl rounded-full p-3 bg-blue-300 text-white cursor-pointer"
          ></div>
          {/* /////////--Riight-Icon--////////// */}
          <div
            onClick={nextSlide}
            className="hidden group-hover:block absolute transition-all top-[50%] -translate-x-0 -translate-y-[-50%] right-3 text-2xl rounded-full p-3 bg-blue-300 text-white cursor-pointer"
          ></div>
        </div>
      </div>
    </>
  );
};

export default Slider;
