import React from "react";
import { assets, workData } from "../../assets/assets";
import Image from "next/image";

const Work = () => {
  return (
    <div id="work" className="w-full px-[12%] py-10 scroll-mt-20 font-outfit">
      <h4 className="text-center mb-2 text-lg">My portfolio</h4>
      <h2 className="text-center text-5xl font-ovo">My latest work</h2>

      <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo">
        Welcome to my web dev portfolio!
      </p>

      <div className="grid grid-cols-(--auto) my-10 gap-5">
        {workData.map((project, index) => (
          <div
            key={`work-${index}`}
            className="aspect-square bg-no-repeat bg-cover bg-center rounded-lg relative cursor-pointer group font-outfit"
            style={{ backgroundImage: `url(${project.bgImage})` }}
          >
            <div className="bg-white w-10/12 rounded-md absolute bottom-5 left-1/2 -translate-x-1/2 py-3 px-5 flex items-center justify-between duration-500 dark:bg-black group-hover:bottom-7 group-hover:bg-lightHover dark:group-hover:bg-darkHover">
              <div>
                <h2 className="font-semibold">{project.title}</h2>
                <p className="text-sm text-gray-700 dark:text-white">{project.description}</p>
              </div>
              <div className="border rounded-full border-black w-9 aspect-square flex items-center justify-center shadow-[2px_2px_0_#000] group-hover:bg-lime-300 transition">
                <Image src={assets.send_icon} alt="send_icon" className="w-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      <a href="" className="w-max flex items-center justify-center gap-2 text-gray-700 border-[0.5px] border-gray-700 rounded-full y-3 px-10 mx-auto my-20 hover:bg-lightHover duration-500 font-outfit py-3 hover:shadow-black hover:-translate-y-1 dark:text-white dark:hover:bg-darkHover">
        Show more <Image src={assets.right_arrow_bold} alt="Right arrow" className="w-4"/>
      </a>
    </div>
  );
};

export default Work;
