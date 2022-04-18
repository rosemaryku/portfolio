import React from "react";
import { HiArrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
import { ImLinkedin2 } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#F7E9D7] text-black">
      {/* Container */}
      <div className="max-w-[1000pm] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-[#8E3200] px-1"> Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#3A3845]">
          Rosemary Ku
        </h1>
        <h2 className="text-3xl sm:text-6xl font-bold text-[#827397]">
          I'm a Full Stack Developer
        </h2>
        <p className="text-[#827397] text-lg py-43">
          I love building products that are aesthetically pleasing using clean
          code.
        </p>

        {/* Social media links */}

        <ul className="flex py-2 space-x-4">
          <li className="px-0">
            <a href="https://github.com/rosemaryku">
              <AiFillGithub size={28} />
            </a>
          </li>
          <li className="px-0 ">
            <a href="https://www.linkedin.com/in/rosemaryku">
              <ImLinkedin2 size={28} />
            </a>
          </li>
        </ul>

        <div>
          <Link to="projects" smooth={true} duration={500}>
            <button className="text-white group border-[#827397] px-6 py-3 my-3 flex items-center bg-[#827397] hover:bg-[#3A3845] hover:border-[#3A3845]">
              View Projects
              <HiArrowRight className="ml-3" />
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
