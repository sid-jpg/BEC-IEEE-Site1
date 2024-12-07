import React from "react";
import { TiArrowRight } from "react-icons/ti";

const ExecutiveTeam = () => {
  return (
    <>
      <div className="h-fit max-w-[90rem] lg:px-5 sm:px-8 px-5 mx-auto mt-10 pt-10">
        <div className="lg:h-[33vmin] h-fit flex items-center">
          <div className="xl:w-[55%] lg:w-[48%] w-full">
            <h1 className="xl:text-[3.62rem] lg:text-5xl md:text-6xl sm:text-5xl text-3xl font-bold">
              THE EXECUTIVE TEAM
            </h1>
            <h1 className="xl:text-[3.62rem] lg:text-5xl md:text-6xl sm:text-5xl text-3xl font-thin">
              YOU'VE BEEN
            </h1>
            <h1 className="xl:text-[3.62rem] lg:text-5xl md:text-6xl sm:text-5xl text-3xl font-thin">
              LOOKING FOR
            </h1>
          </div>
          <div className="xl:w-[45%] lg:w-[52%] hidden lg:block pl-20 text-justify">
            <p className="lg:text-sm">
              Our executive team is the backbone of our branch, leading with
              passion, innovation, and a relentless commitment to excellence.
              Each member plays a vital role in driving our vision forward,
              fostering a culture of collaboration and growth. Curious to know
              who’s behind the success stories and groundbreaking initiatives?
              Dive deeper and discover the brilliant minds shaping our journey!
            </p>
            <button className="group bg-white text-black rounded-full px-5 py-3 font-bold flex justify-center items-center gap-2 mt-5">
              MEET OUR EXECOM
              <TiArrowRight className="text-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>
          </div>
        </div>

        <div className="w-full h-[67vmin] hidden lg:flex justify-start items-end">
          <div className="xl:w-[20%] lg:w-[25%] h-full bg-[#F4A261] rounded-full"></div>
          <div className="xl:w-[20%] lg:w-[25%] h-[85%] bg-[#CBD5D4] rounded-full"></div>
          <div className="xl:w-[20%] lg:w-[25%] h-[75%] bg-[#E4DBD2] rounded-full"></div>
          <div className="xl:w-[20%] lg:w-[25%] h-[90%] bg-[#FFC931] rounded-full"></div>
          <div className="xl:w-[20%] hidden xl:block h-[65%] bg-[#FEB9CE] rounded-full"></div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:hidden gap-6 place-items-center">
          <div className="bg-gray-200 p-4 rounded-md h-48 w-40 sm:h-64 sm:w-56 flex justify-center items-center">
            Div 1
          </div>
          <div className="bg-gray-200 p-4 rounded-md h-48 w-40 sm:h-64 sm:w-56 flex justify-center items-center">
            Div 2
          </div>
          <div className="bg-gray-200 p-4 rounded-md h-48 w-40 sm:h-64 sm:w-56 flex justify-center items-center">
            Div 3
          </div>
          <div className="bg-gray-200 p-4 rounded-md h-48 w-40 sm:h-64 sm:w-56 flex justify-center items-center">
            Div 4
          </div>
          <div className="bg-gray-200 p-4 rounded-md h-48 w-40 sm:h-64 sm:w-56 flex justify-center items-center">
            Div 5
          </div>
          <div className="bg-gray-200 p-4 rounded-md h-48 w-40 sm:h-64 sm:w-56 flex justify-center items-center">
            Div 6
          </div>
        </div>
      </div>
    </>
  );
};

export default ExecutiveTeam;
