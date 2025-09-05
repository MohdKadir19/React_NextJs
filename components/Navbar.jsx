"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <>
      <header className="bg-white shadow-md px-6 py-4 grid grid-cols-2">
        <div className="flex justify-between items-center">
          <h1 className="text-2xl font-bold text-black font-roboto">
            Next.js App
          </h1>
        </div>
        <nav className="flex mx-auto font-work">
          <Link
            href="/"
            className={`px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 ${
              pathname === "/" ? "bg-amber-300 font-medium" : ""
            }`}
          >
            Home
          </Link>
          <Link
            href="/about"
            className={`px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 ${
              pathname === "/about" ? "bg-amber-300 font-medium" : ""
            }`}
          >
            About
          </Link>
          <Link
            href="/client"
            className={`px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 ${
              pathname === "/client" ? "bg-amber-300 font-medium" : ""
            }`}
          >
            Client
          </Link>
          <Link
            href="/server"
            className={`px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 ${
              pathname === "/server" ? "bg-amber-300 font-medium" : ""
            }`}
          >
            Server
          </Link>
          <Link
            href="/contact"
            className={`px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900 ${
              pathname === "/contact" ? "bg-amber-300 font-medium" : ""
            }`}
          >
            Contact
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Navbar;
