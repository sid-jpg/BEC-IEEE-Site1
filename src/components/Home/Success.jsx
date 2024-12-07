import React from "react";
import { TiArrowRight } from "react-icons/ti";

const Success = () => {
  return (
    <>
      <div className="w-full h-[170vh] sm:h-[130vh] lg:h-[90vh] bg-red-800">
        <h1 className="font-bold text-4xl text-center lg:hidden">Our Achievements & Success</h1>
        <div className="lg:flex justify-center">
          <div className="w-full lg:w-1/2 lg:h-[90vh]">
          <div className="relative w-full h-[80vh] lg:h-full bg-green-300">
              <img
                className="absolute"
                src="https://i.pinimg.com/236x/4c/a0/da/4ca0da0a27585d5986aec3a2a707942c.jpg"
                alt=""
              />
              <img
                className="absolute"
                src="https://i.pinimg.com/236x/ef/91/b8/ef91b86b0fdae5434b6f9f9fb864f002.jpg"
                alt=""
              />
              <img
                className="absolute" 
                src="https://i.pinimg.com/236x/8c/1a/34/8c1a34f8c8c369c75d0f2581688671c1.jpg"
                alt=""
              />
              <img
                className="absolute"
                src="https://i.pinimg.com/236x/d8/26/8b/d8268bab19c7fdcab89b6b960ca701ec.jpg"
                alt=""
              />
          </div>
            
          </div>

          <div className="w-full lg:w-1/2 px-5 xl:pt-24 lg:py-10">
            <h1 className="hidden lg:block font-bold text-5xl">Our Achievements</h1>
            <h1 className="hidden lg:block font-bold text-5xl">& Success</h1>

            <p className="w-full xl:w-3/4 lg:mt-14 text-justify">
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
