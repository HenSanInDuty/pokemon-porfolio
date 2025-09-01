"use client";
import React, { useEffect, useRef } from "react";
import LinkWithArrow from "./LinkWithArrow";
import Image from "next/image";
import { assets } from "../../public/images/assets";
import useShowOverlay from "@/store/useShowOverlay";
import OverlayType from "@/types/store/OverlayType";

const Navbar = () => {
  const navbar = useRef<HTMLDivElement>(null);

  const { hidden, showOverlay, hideOverlay } = useShowOverlay() as OverlayType;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 1) {
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
    <>
      <div
        ref={navbar}
        className="w-full h-20 flex justify-end px-4 fixed top-0 md:px-12 z-2"
      >
        <Image
          src={assets.menu}
          height={50}
          width={50}
          alt="menu-bar"
          className="hover:cursor-pointer duration-500 md:opacity-0 flex"
          onClick={showOverlay}
        ></Image>
        <ul className="md:flex justify-center items-center h-full gap-10 text-primary text-xl flex-2 hidden transition-all transition-discrete opacity-0 md:opacity-100 duration-500">
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
        <div className={`w-60 h-full fixed right-0 bg-forth transition-all duration-500 ${hidden ? "translate-x-full" : ""}`}>
          <ul className="flex-col items-center h-full gap-10 text-primary text-xl mt-20 duration-500 ">
            <li onClick={hideOverlay}>
              <LinkWithArrow href={"/"} name="Home"/>
            </li>
            <li onClick={hideOverlay}>
              <LinkWithArrow href={"/projects"} name="Projects" />
            </li>
            <li onClick={hideOverlay}>
              <LinkWithArrow href={"/about"} name="About" />
            </li>
            <li onClick={hideOverlay}>
              <LinkWithArrow href={"/contact"} name="Contact" />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
