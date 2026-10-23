import React from 'react';
import Image from 'next/image';
import Logo from '../app/assact/logo.png'; // Adjust relative path if needed

const Loading = () => {
  return (
    <div className="min-h-screen bg-[#090A0D] flex flex-col items-center justify-center px-4">
      <div className="relative flex flex-col items-center justify-center">
        
        {/* Outer Pulsing Lime Glow */}
        <div className="absolute -inset-4 rounded-full bg-[#C2F800]/20 blur-xl animate-pulse"></div>

        {/* Outer Rotating Spinner Ring */}
        <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-full border-4 border-[#222630] border-t-[#C2F800] border-r-[#C2F800] animate-spin"></div>

        {/* Centered FitLog Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <Image
            src={Logo}
            alt="Fitlog Loading"
            width={48}
            height={48}
            priority
            className="w-10 h-10 sm:w-12 sm:h-12 object-contain animate-bounce"
          />
        </div>
      </div>

      {/* Brand Name & Dynamic Text */}
      <div className="mt-8 text-center space-y-2">
        <h2 className="text-2xl sm:text-3xl font-extrabold uppercase tracking-wider text-white">
          FIT<span className="text-[#C2F800]">LOG</span>
        </h2>
        
        <p className="text-[#9CA3AF] text-sm sm:text-base font-medium tracking-wide animate-pulse">
          PREPARING YOUR WORKOUTS...
        </p>
      </div>

      {/* Skeleton / Progress Bar Line */}
      <div className="mt-6 w-48 sm:w-64 h-1.5 bg-[#222630] rounded-full overflow-hidden relative">
        <div className="absolute top-0 left-0 h-full w-2/5 bg-[#C2F800] rounded-full animate-pulse"></div>
      </div>
    </div>
  );
};

export default Loading;