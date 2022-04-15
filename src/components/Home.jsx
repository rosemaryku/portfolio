import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#F7E9D7] text-black">
      {/* Container */}
      <div className="max-w-[1000pm] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#8E3200]">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#3A3845]">
          Rosemary Ku
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-[#827397]">
          I'm a Full Stack Developer
        </h2>
        <p className="text-[#827397] py-4">
          I have a passion for building products that are aesthetically pleasing
          using clean code.
        </p>
        <div>
          <button className="text-white group border-[#827397] px-6 py-3 my-2 flex items-center bg-[#827397] hover:bg-[#3A3845] hover:border-[#3A3845]">
            View Work
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
