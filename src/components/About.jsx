import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#F7E9D7] text-black">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-full w-full px-4 grid gap-8">
          <div className="pb-8 pl-4 text-center">
            <p className="text-4xl font-bold inline border-b-4 border-[#827397]">
              ABOUT ME
            </p>
            <p className="w-30 px-20 mx-20 pt-10 text-justify">
              Hi, my name is Rosemary Ku and I'm a full-stack developer based in
              Toronto. I love taking on intricate new challenges and building
              creative solutions with sound logic and clean code. After seeing
              first-hand how software could addess many gaps in the healthcare
              industry, I decided to continue growing my technical skills to
              build interactive web experiences using Javascript and React.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
