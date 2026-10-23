"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";
import Image from "next/image";
import Logo from "../app/assact/logo.png";
import { WorkOutContextApi } from "@/context/WorkOutContext";

const Navbar = () => {
  const pathName = usePathname();
  const { AddWorkOut = [], SaveWorkOut = [] } = useContext(WorkOutContextApi);

  // Active link highlighted
  const linkClass = (href) =>
    `rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
      pathName === href
        ? "bg-[#1A2312] text-[#ccff00]"
        : "text-gray-300 hover:bg-[#1A2312] hover:text-[#ccff00]"
    }`;

  const navLinks = (
    <>
      <li>
        <Link href="/" className={linkClass("/")}>
          Workout
        </Link>
      </li>
     <li>
  <Link href="/MyPlan" className={linkClass("/MyPlan")}>
    My Plan
  </Link>
</li>
    </>
  );

  return (
    <div className="w-full">
      <div className="navbar bg-black px-3 sm:px-6 lg:px-10">
        {/* LEFT: Logo (+ mobile menu) */}
        <div className="navbar-start gap-1">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-sm text-white lg:hidden"
              aria-label="Open menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content z-50 mt-3 w-52 gap-2 rounded-box bg-[#222630] p-3 text-white shadow-lg"
            >
              {navLinks}
            </ul>
          </div>

          <Link href="/" className="btn btn-ghost gap-1 px-1 sm:px-2">
            <Image
              src={Logo}
              width={40}
              height={40}
              alt="Fitlog Logo"
              priority
              className="h-8 w-8 sm:h-10 sm:w-10"
            />
            <span className="text-2xl font-bold uppercase text-white sm:text-3xl">
              fitlog
            </span>
          </Link>
        </div>

        {/* MIDDLE: Navigation links */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal gap-2 px-1 text-white">
            {navLinks}
          </ul>
        </div>

        {/* RIGHT: Plan (filled) + Saved (outline) badges */}
        <div className="navbar-end gap-2 sm:gap-3">
          <Link
            href="/MyPlan"
            className="flex items-center gap-2 rounded-full bg-[#ccff00] px-4 py-1.5 text-sm font-bold text-black transition hover:bg-[#b8e600]"
          >
            Plan
            <span className="rounded-full bg-black px-2 py-0.5 text-xs text-[#ccff00]">
              {AddWorkOut.length}
            </span>
          </Link>

          <Link
            href="/MyPlan"
            className="flex items-center gap-2 rounded-full border border-white/40 px-4 py-1.5 text-sm font-semibold text-white transition hover:bg-white/10"
          >
            Saved
            <span className="rounded-full border border-white/40 px-2 py-0.5 text-xs">
              {SaveWorkOut.length}
            </span>
          </Link>
        </div>
      </div>
      <hr className="border-white/20" />
    </div>
  );
};

export default Navbar;