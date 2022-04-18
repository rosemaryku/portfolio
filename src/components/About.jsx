import React from "react";
import ProfilePic from "../assets/profile-pic.png";

const About = () => {
  return (
    <div name="about" className="w-full h-full py-10 bg-[#F7E9D7]">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <p className="text-4xl font-bold inline border-b-4 ml-2 border-[#827397]">
          ABOUT
        </p>

        <div className="max-w-[1000px] w-full grid grid-cols-1 sm:grid-cols-3 gap-8 py-4 px-4">
          <div className="col-span-1 text-4xl">
            <img
              src={ProfilePic}
              alt="Rosemary Ku"
              className="obkect-contain md: object-scale-down w-25 h-25 rounded-full"
            />
          </div>
          <div className="col-span-2 mt-2 text-justify">
            <p>
              Hello! I'm Rosemary and I'm based in Toronto. I love taking on
              intricate new challenges and building creative solutions with
              sound logic and clean code. After seeing first-hand how software
              could addess many gaps in the healthcare industry, I decided to
              continue growing my technical skills to build interactive web
              experiences. I enjoy continously learning and collaborating with
              others. When I'm not coding, I like spending my time with loved
              ones, exercising and exploring.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
