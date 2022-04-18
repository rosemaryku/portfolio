import React from "react";
import ReactLogo from "../assets/react.png";
import Node from "../assets/node.png";
import JavaScript from "../assets/javascript.png";
import TypeScript from "../assets/typescript.png";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Postgres from "../assets/postgres.png";

const Skills = () => {
  return (
    <div
      name="skills"
      className="flex flex-col justify-center items-center w-full h-full pb-20 bg-[#F7E9D7] text-black"
    >
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col text-center w-full h-full">
        <div className="pb-8 pl-4 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-[#827397]">
            SKILLS
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-1 text-center py-2">
          <div>
            <img className="w-20 mx-auto" src={ReactLogo} alt="React Logo" />
            <p className="my-3">React</p>
          </div>

          <div>
            <img className="w-20 mx-auto" src={Node} alt="Node Logo" />{" "}
            <p className="my-3">Node</p>
          </div>

          <div>
            <img className="w-20 mx-auto" src={JavaScript} alt="JavaScript" />{" "}
            <p className="my-3">JavaScript</p>
          </div>

          <div>
            <img
              className="w-20 mx-auto"
              src={Postgres}
              alt="TypeScript Logo"
            />
            <p className="my-3">PostgreSQL</p>
          </div>

          <div>
            <img className="w-20 mx-auto" src={HTML} alt="HTML Logo" />
            <p className="my-3">HTML</p>
          </div>

          <div>
            <img className="w-20 mx-auto" src={CSS} alt="CSS Logo" />
            <p className="my-3">CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
