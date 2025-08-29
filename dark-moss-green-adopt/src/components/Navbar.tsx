"use client";
import React, { useEffect, useRef } from "react";
import LinkWithArrow from "./LinkWithArrow";

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
    <div ref={navbar} className="w-full h-20 flex justify-around items-center px-10 fixed top-0">
      <ul className="flex justify-center items-center h-full gap-10 text-primary text-xl flex-2">
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
    </div>
  );
};

export default Navbar;
