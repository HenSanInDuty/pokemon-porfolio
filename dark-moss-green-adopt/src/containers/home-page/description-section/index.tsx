import Image from "next/image";
import React from "react";
import { assets } from "../../../../public/images/assets";

const HomePageDescriptionSection = () => {
  return (
    <div className="h-min-25vh pt-4 text-primary md:mt-50 mt-10 duration-500">
      <h1 className="text-center text-2xl font-raleway-bold">
        Hello wanderer,{" "}
      </h1>
      <h1 className="text-center text-2xl">
        Welcome, to my portfolio. I am Nhan, web developer and aim for
        full-stack position.
      </h1>
      <div className="flex justify-center mt-10">
        <Image
          src={assets.avatar}
          alt="avatar"
          className="aspect-square rounded-full"
          width={150}
          height={150}
        ></Image>
      </div>
    </div>
  );
};

export default HomePageDescriptionSection;
