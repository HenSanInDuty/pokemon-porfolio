import Link from "next/link";
import React from "react";
import LinkWithArrow from "./LinkWithArrow";
import Image from "next/image";
import assets from "../../public/images/assets";
import WeatherWidget from "./WeatherWidget";

const Navbar = () => {
  return (
    <div className="w-full h-20 shadow-md flex justify-between items-center px-10">
      <Link href={"/"}>
        <Image
          src={assets.logo}
          alt="logo"
          height={100}
          width={100}
          className="aspect-square hover:cursor-pointer"
        ></Image>
      </Link>
      <ul className="flex justify-center items-center h-full gap-10 text-primary text-xl flex-1">
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
      <WeatherWidget city="Montreal" />
    </div>
  );
};

export default Navbar;
