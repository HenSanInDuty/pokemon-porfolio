import React from "react";
import { assets, serviceData } from "../../assets/assets";
import Image from "next/image";

const Services = () => {
  return (
    <div id="services" className="w-full px-[12%] py-10 scroll-mt-20 font-outfit">
      <h4 className="text-center mb-2 text-lg">What i offer</h4>
      <h2 className="text-center text-5xl font-ovo">My Services</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        Well i am a developer from under somewhere bridge ---
      </p>

      <div className="grid grid-cols-(--auto) gap-6 my-10 ">
        {serviceData.map(({ icon, title, description, link }, index) => (
          <div
            key={`service-${index}`}
            className="font-outfit border 
            border-gray-400 rounded-lg px-8 py-12 hover:shadow-black duration-500 cursor-pointer 
            hover:bg-lightHover 
            dark:hover:bg-darkHover
            hover:-translate-y-1"
          >
            <Image src={icon} alt={description} className="w-10" />
            <h3 className="text-lg my-4 text-gray-700 dark:text-white">{title}</h3>
            <p className="text-sm text-gray-600 leading-5 dark:text-white">{description}</p>
            <a href={link} className="flex items-center gap-2 text-sm mt-5">
              Read more
              <Image
                src={assets.right_arrow}
                alt="rigt_arrow"
                className="w-4"
              />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
