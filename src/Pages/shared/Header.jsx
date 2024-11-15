import { useState } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import { RiArrowDropDownLine, RiArrowDropUpLine } from "react-icons/ri";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { Link } from "react-router-dom";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const openDropdown = () => setIsDropdownOpen(true);
  const closeDropdown = () => setIsDropdownOpen(false);

  return (
    <header
      className={`absolute w-full z-50 transition-all duration-500 ease-in-out ${
        isDropdownOpen ? "bg-white text-gray-900" : "bg-transparent text-white"
      }`}
    >
      
      <div className="flex justify-between items-center border-b border-gray-300 md:px-32 px-4 py-2">
        <div>
          <p className="flex items-center gap-x-2 text-xs md:text-sm">
            <IoCallOutline
              className={`${
                isDropdownOpen ? "text-gray-900" : "text-white"
              } h-[16px]`}
            />
            <span>Call us: 783 367 2678</span>
          </p>
        </div>
        <div className="hidden md:flex items-center">
          <p className="text-[13px] border-r border-l border-gray-300 p-4">
            Free brochure
          </p>
          <p className="text-[13px] border-r border-gray-300 p-4">Help centre</p>
        </div>
      </div>

    
      <div className="flex justify-between items-center py-4 md:px-32 px-4">
      
        <div className="text-2xl md:text-3xl font-medium uppercase">Logo</div>

      
        <div className="md:hidden">
          {isMenuOpen ? (
            <HiX
              className="text-2xl cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            />
          ) : (
            <HiMenuAlt3
              className="text-2xl cursor-pointer"
              onClick={() => setIsMenuOpen(true)}
            />
          )}
        </div>

    
        <ul
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex items-center gap-x-6 text-[13px] font-light`}
        >
          <li>
            <a href="#" className="cursor-pointer">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer">
              About
            </a>
          </li>
          <li
            className="relative cursor-pointer"
            onMouseEnter={openDropdown}
            onMouseLeave={closeDropdown}
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
          >
            <a
              className={`flex items-center gap-x-1 ${
                isDropdownOpen ? "text-[#EA4715]" : ""
              }`}
            >
              Products
              {isDropdownOpen ? (
                <RiArrowDropDownLine className="text-2xl text-[#EA4715]" />
              ) : (
                <RiArrowDropUpLine className="text-2xl" />
              )}
            </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer">
              Projects
            </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer">
              Sustainability
            </a>
          </li>
          <li>
            <a href="#" className="cursor-pointer">
              More
            </a>
          </li>
        </ul>

      
        <div className="hidden md:flex items-center gap-x-3">
          <IoIosSearch
            className={`${
              isDropdownOpen ? "text-gray-900" : "text-white"
            } text-xl`}
          />
          <p className="text-sm font-medium">Sign in</p>
        </div>
      </div>

      {/* Mega Menu */}
      <div
        className={`absolute top-full left-0 w-full bg-white text-gray-900 shadow-lg z-40 overflow-hidden ${
          isDropdownOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
        } transition-all duration-700 ease-in-out transform ${
          isDropdownOpen ? "translate-y-0" : "-translate-y-4"
        }`}
        onMouseEnter={openDropdown}
        onMouseLeave={closeDropdown}
      >
        <div className="flex flex-col md:flex-row justify-between p-4 gap-x-20 md:px-16">
          <div className="flex flex-col md:flex-row w-full md:w-3/5 justify-between md:px-16">
         
            <div className="mb-6 md:mb-0">
              <p className="font-bold mb-6">By Size</p>
              <ul className="space-y-3">
                <li>Small Bifolds</li>
                <li>Medium Bifolds</li>
                <li>Large Bifolds</li>
                <li>All Stock Bifolds</li>
              </ul>
            </div>
          
            <div className="mb-6 md:mb-0">
              <p className="font-bold mb-6">By Type</p>
              <ul className="space-y-3">
                <li>Stock Bifolds</li>
                <li>Corner Bifolds</li>
                <li>Bespoke Bifolds</li>
              </ul>
            </div>
         
            <div>
              <p className="font-bold mb-6 ">By Panel</p>
              <ul className="space-y-3">
                <li>2 Panel Bifolds</li>
                <li>3 Panel Bifolds</li>
                <li>4 Panel Bifolds</li>
                <li>5 Panel Bifolds</li>
                <li>6 Panel Bifolds</li>
                <li>7 Panel Bifolds</li>
              </ul>
            </div>
          </div>

         
          <div className="relative w-full md:w-2/5">
            <img
              src="https://res.cloudinary.com/dpomtzref/image/upload/v1731658760/Image_ncepdn.png"
              alt="Bifold"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 text-white left-4 space-y-4">
              <h1 className="text-xl md:text-2xl">Bespoke Bifolds</h1>
              <p className="text-[12px] md:text-[14px] md:w-3/5">
                Our most popular bifold. Perfect for thermal efficiency.
              </p>
              <Link className="underline text-[12px] md:text-[14px]">
                Create your own
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
