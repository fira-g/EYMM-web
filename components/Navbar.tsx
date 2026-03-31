"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();
  console.log(pathname);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="w-full bg-linear-to-b from-white to-[#94d3ed] py-1">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center ">
          {/* Logo/Brand */}
          <div className="flex-shrink-0">
            <Link
              href="/"
              className="text-xl font-bold text-gray-900 dark:text-white"
            >
              <img src="/logo.png" alt="" className="size-12" />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link
                href="/"
                className={`relative group text-primary-100 font-bold  py-1 hover:text-primary-200 rounded-md text-sm transition-all flex flex-col justify-center items-center ${pathname === "/" ? "text-primary-200" : ""}`}
              >
                Home
                <span
                  className={`absolute bottom-px left-0 w-full -mt-4 h-0.5 mx-auto rounded-2xl bg-primary-200 origin-center scale-x-10 transition-transform duration-300 ease-out group-hover:scale-x-100 ${pathname === "/" ? "scale-x-100" : ""}`}
                />
              </Link>
              <Link
                href="/departments"
                className={`relative group text-primary-100 font-bold  py-1 hover:text-primary-200  rounded-md text-sm  transition-all ${pathname === "/departments" ? "text-primary-200" : ""}`}
              >
                Departments
                <span
                  className={`absolute bottom-px left-0 w-full -mt-4 h-0.5 mx-auto rounded-2xl bg-primary-200 origin-center scale-x-10 transition-transform duration-300 ease-out group-hover:scale-x-100 ${pathname === "/departments" ? "scale-x-100" : ""}`}
                />
              </Link>
              <Link
                href="/services"
                className={`relative group text-primary-100 font-bold py-1 hover:text-primary-200  rounded-md text-sm  transition-all ${pathname === "/services" ? "text-primary-200" : ""}`}
              >
                Services
                <span
                  className={`absolute bottom-px left-0 w-full -mt-4 h-0.5 mx-auto rounded-2xl bg-primary-200 origin-center scale-x-10 transition-transform duration-300 ease-out group-hover:scale-x-100 ${pathname === "/services" ? "scale-x-100" : ""}`}
                />
              </Link>
              <Link
                href="/contact"
                className={`relative group text-primary-100 font-bold  py-1 hover:text-primary-200  rounded-md text-sm  transition-all ${pathname === "/contact" ? "text-primary-200" : ""}`}
              >
                Contact
                <span
                  className={`absolute bottom-px left-0 w-full -mt-4 h-0.5 mx-auto rounded-2xl bg-primary-200 origin-center scale-x-10 transition-transform duration-300 ease-out group-hover:scale-x-100 ${pathname === "/contact" ? "scale-x-100" : ""}`}
                />
              </Link>
            </div>
          </div>
          <button className=" text-base-100 px-6 py-1 rounded-md bg-primary-100 hover:bg-primary-100/20 border-primary-100 border-2 hover:text-primary-100 cursor-pointer transition-all">
            Pray
          </button>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
            <Link
              href="/"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/services"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/contact"
              className="text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
