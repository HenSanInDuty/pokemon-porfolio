"use client";
import React, { useEffect, useRef, useState } from "react";
import { assets } from "../../../assets/assets";
import Image from "next/image";

type NavbarProps = {
  isDarkMode: boolean;
  setIsDarkMode: (value: any) => void;
};

const Navbar = ({ isDarkMode, setIsDarkMode }: NavbarProps) => {
  const [isScroll, setIsScroll] = useState(false);
  const sideMenuRef = useRef<HTMLUListElement | null>(null);

  const openMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(-16rem)";
    }
  };

  const closeMenu = () => {
    if (sideMenuRef.current) {
      sideMenuRef.current.style.transform = "translateX(16rem)";
    }
  };

  const handleScroll = () => {
    if (scrollY > 50) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      handleScroll();
    });

    return () => {
      window.removeEventListener("scroll", () => {
        handleScroll();
      });
    };
  }, []);

  return (
    <>
      <div className="fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80] dark:hidden">
        <Image
          src={assets.header_bg_color}
          alt="header_bg"
          className="w-full"
        />
      </div>
      <nav
        className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 ${
          isScroll ? "bg-white/50 backdrop-blur-lg shadow-sm dark:bg-darkTheme dark:shadown-white/20" : ""
        }`}
      >
        <a href="#top">
          <Image
            src={isDarkMode ? assets.logo_dark : assets.logo}
            alt="Logo"
            className="w-28 cursor-pointer mr-14"
          />
        </a>

        <ul
          className={`hidden md:flex items-center gap-6 lg:gap-8 rounded-full px-12 py-3 ${
            isScroll ? "" : "bg-white/50 shadow-sm dark:border dark:border-white/50 dark:bg-transparent"
          } `}
        >
          <li>
            <a className="font-ovo" href="#top">
              Home
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#about">
              About me
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#services">
              Services
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#work">
              My Work
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#contact">
              Contact me
            </a>
          </li>
        </ul>

        <div className="flex items-center gap-4">
          <button onClick={() => setIsDarkMode((prev: boolean) => !prev)}>
            <Image
              src={isDarkMode ? assets.sun_icon : assets.moon_icon}
              alt="moon"
              className="w-6 cursor-pointer"
            />
          </button>
          <a
            href="#contact"
            className="hidden lg:flex items-center gap-3 px-10 py-2.5 border border-gray-500 rounded-full ml-4 font-ovo hover:bg-lightHover duration-500 dark:border-white/50 dark:hover:bg-darkHover"
          >
            Contact
            <Image src={isDarkMode ? assets.arrow_icon_dark : assets.arrow_icon} alt="contact-img" className="w-3" />
          </a>
          <button className="block md:hidden ml-3" onClick={openMenu}>
            <Image
              src={isDarkMode ? assets.menu_white : assets.menu_black}
              alt="menu_black"
              className="w-6 cursor-pointer"
            />
          </button>
        </div>

        {/* mobile menu */}
        <ul
          ref={sideMenuRef}
          className="md:hidden flex flex-col gap-4 py-20 px-10 fixed -right-64 top-0 bottom-0 w-64 z-50 h-screen bg-rose-50 transition duration-500 dark:bg-darkHover dark:text-white"
        >
          <div className="absolute right-6 top-6">
            <Image
              src={isDarkMode ? assets.close_white : assets.close_black}
              alt="close_black"
              className="w-5 cursor-pointer"
              onClick={closeMenu}
            />
          </div>

          <li>
            <a className="font-ovo" href="#top" onClick={closeMenu}>
              Home
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#about" onClick={closeMenu}>
              About me
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#services" onClick={closeMenu}>
              Services
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#work" onClick={closeMenu}>
              My Work
            </a>
          </li>
          <li>
            <a className="font-ovo" href="#contact" onClick={closeMenu}>
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
