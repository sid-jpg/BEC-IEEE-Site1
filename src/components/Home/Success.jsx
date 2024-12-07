import React from "react";
import { TiArrowRight } from "react-icons/ti";
import collage from "./assets/achievementCollage.png"

const Success = () => {
  return (
    <>
      <div className="w-full ">
        <h1 className="font-bold text-4xl text-center lg:hidden">Our Achievements & Success</h1>
        <div className="lg:flex justify-center">
          <div className="flex justify-center items-center w-full p-5 py-10 lg:w-1/2 ">
              <img src={collage} className="" alt="images" />   
          </div>

          <div className="w-full lg:w-1/2 px-5 xl:pt-24 lg:py-10">
            <h1 className="hidden lg:block font-bold text-5xl">Our Achievements</h1>
            <h1 className="hidden lg:block font-bold text-5xl">& Success</h1>

            <p className="w-full xl:w-3/4 lg:mt-14 lg:text-justify">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially 
            </p>

            <button className="group bg-white text-black rounded-full px-5 py-3 font-bold flex justify-center items-center gap-2 mt-14">
              Our Milestones
              <TiArrowRight className="text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Success;
