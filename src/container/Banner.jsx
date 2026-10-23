import React from 'react';
import ImagesBanner from "../app/assact/banner.png"
import Image from 'next/image';

const Banner = () => {
    return (
<div className="container mx-auto px-4 py-6">
  <div className="bg-[#222630] p-5 sm:p-8 lg:p-10 rounded-2xl flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-10">

    {/* Left Content */}
    <div className="w-full lg:w-1/2">
      <span className="text-[#C2F800] text-sm sm:text-base font-semibold tracking-wider">
        WORKOUT LIBRARY
      </span>

      <h1 className="mt-5 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight">
        TRAIN WITH INTENT. LOG
        <br className="hidden sm:block" />
        {" "}EVERY SET.
      </h1>

      <p className="mt-5 text-sm sm:text-base leading-7 text-[#9CA3AF] max-w-xl">
        FitLog is a dark, no-nonsense gym companion: pick a lift,
        lock it into today&apos;s plan, and watch the week&apos;s work add up.
      </p>

      <button className="mt-7 bg-[#C2F800] hover:bg-white transition-colors duration-300 text-black px-6 py-3 rounded-lg uppercase font-bold text-sm sm:text-base">
        BROWSE WORKOUTS
      </button>
    </div>

    {/* Right Image */}
    <div className="w-full lg:w-1/2 flex justify-center">
      <Image
        src={ImagesBanner}
        alt="BannerImage"
        width={600}
        height={400}
        priority
        className="w-full max-w-150 h-auto object-contain rounded-xl"
      />
    </div>

  </div>
</div>
    );
};

export default Banner;