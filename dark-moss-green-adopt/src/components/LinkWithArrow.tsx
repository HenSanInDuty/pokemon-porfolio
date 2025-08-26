import LinkWithArrowsProps from "@/types/LinkWithArrow";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import assets from "../../public/images/assets";

const LinkWithArrow = ({ href, name }: LinkWithArrowsProps) => {
  return (
    <div className="relative flex items-center gap-1 p-4 hover:cursor-pointer hover:-translate-y-1 duration-500 group">
      <Link href={href} className="group-hover:text-secondary duration-500 mb-2">
        {name}
      </Link>
      <Image
        src={assets["up-arrow-secondary"]}
        alt="up-arrow-secondary"
        width={16}
        height={16}
        className="left-1/2 -translate-x-1/2 opacity-0 transition-opacity group-hover:block duration-500 animate-bounce ease-in-out group-hover:opacity-100 fill-secondary absolute bottom-0"
      ></Image>
    </div>
  );
};

export default LinkWithArrow;
