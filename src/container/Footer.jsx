import Image from 'next/image';
import React from 'react';
import Logo from "../app/assact/logo.png"
const Footer = () => {
    return (
    <div className="bg-[#090A0D] px-4 py-6 sm:px-6">
  <div className="container mx-auto flex flex-col items-center justify-between gap-4 text-center md:flex-row md:text-left">

    {/* Logo */}
    <div className="flex items-center gap-2">
      <Image
        src={Logo}
        alt="Footer Logo"
        width={40}
        height={40}
      />

      <span className="text-2xl font-bold uppercase text-white sm:text-3xl">
        fitlog
      </span>
    </div>

    {/* Copyright */}
    <p className="text-sm leading-6 text-[#6B7280] sm:text-base">
      © 2026 FitLog — Workout Library. Train hard, log honest.
    </p>

  </div>
</div>
    );
};

export default Footer;