"use client";
import React from "react";
import Image from "next/image";
import { assets } from "../../assets/assets";

function Header() {
  return (
    <div className="w-11/12 max-w-3xl text-center mx-auto h-screen flex flex-col items-center justify-center gap-4 font-outfit">
      <div className="mt-20">
        <Image
          src={assets.profile_img}
          alt="profile_img"
          className="rounded-full w-32"
        />
        </div>
        <h3 className="flex items-end gap-2 text-xl md:text-2xl mb-3 font-ovo">
          Hi! Welcome to my portfolio{" "}
          <Image src={assets.hand_icon} alt="hand_icon" className="w-6" />
        </h3>
        <h1 className="text-3xl sm:text-6xl lg:text-[66px] font-ovo">
          front-end developer
        </h1>
        <p className="max-w-2xl mx-auto font-ovo">
          I am a front-end developer with a passion for creating beautiful and
          functional web applications. I love to learn new technologies and
          improve my skills.
        </p>
        <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
            <a href="#contact" className="px-10 py-3 border border-white rounded-full bg-black text-white flex items-center gap-2 hover:bg-darkHover duration-500 dark:bg-transparent"> 
                Contact me
                <Image src={assets.right_arrow_white} alt="contact-img" className="w-4" />
            </a>
            <a href="/sample-resume.pdf" className="px-10 py-3 border rounded-full border-gray-500 flex items-center gap-2 hover:bg-lightHover duration-500 dark:bg-white dark:text-black"> 
                My resume
                <Image src={assets.download_icon} alt="contact-img" className="w-4" />
            </a>
        </div>
    </div>
  );
}

export default Header;
