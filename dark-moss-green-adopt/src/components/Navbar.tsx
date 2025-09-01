"use client";
import React, { useEffect, useRef } from "react";
import LinkWithArrow from "./LinkWithArrow";
import Image from "next/image";
import { assets } from "../../public/images/assets";

const Navbar = () => {
  const navbar = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
        console.log("scrolled");
        navbar.current?.classList.add("backdrop-blur-md");
      } else {
        navbar.current?.classList.remove("backdrop-blur-md");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={navbar}
      className="w-full h-20 flex justify-around items-center px-4 fixed top-0 md:flex-rơw flex-row-reverse md:px-12"
    >
      <Image
        src={assets.menu}
        height={50}
        width={50}
        alt="menu-bar"
        className="hover:cursor-pointer duration-500 md:opacity-0 flex"
        onClick={() => {
          alert("Menu is not available yet!");
        }}
      ></Image>
      <ul className="md:flex justify-center items-center h-full gap-10 text-primary text-xl flex-2 opacity-0 md:opacity-100 duration-700">
        <li>
          <LinkWithArrow href={"/"} name="Home" />
        </li>
        <li>
          <LinkWithArrow href={"/projects"} name="Projects" />
        </li>
        <li>
          <LinkWithArrow href={"/about"} name="About" />
        </li>
        <li>
          <LinkWithArrow href={"/contact"} name="Contact" />
        </li>
      </ul>

      <div
        id="menu"
        className="hidden fixed top-0 right-0 w-64 h-full bg-white shadow-lg p-4"
      >
        <button id="closeBtn" className="text-gray-600 float-right">
          ✕
        </button>
        <h2 className="text-xl font-bold mb-4">Menu</h2>
        <ul className="space-y-2">
          <li>
            <a href="#" className="block hover:text-blue-500">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-blue-500">
              About
            </a>
          </li>
          <li>
            <a href="#" className="block hover:text-blue-500">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
