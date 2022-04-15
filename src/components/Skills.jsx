import React from "react";
import ReactLogo from "../assets/react.png";
import NodeLogo from "../assets/node.png";
import JavaScriptLogo from "../assets/javascript.png";
import TypeScript from "../assets/typescript.png";
import HTMLLogo from "../assets/html.png";
import CSSLogo from "../assets/css.png";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#F7E9D7] text-black">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col text-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-[#827397]">
            SKILLS
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-6 gap-1 text-center py-10">
          <div>
            <img className="w-20 mx-auto" src={ReactLogo} alt="React Logo" />
            <p className="my-3">React</p>
          </div>

          <div>
            <img className="w-20 mx-auto" src={NodeLogo} alt="Node Logo" />{" "}
            <p className="my-3">Node</p>
          </div>

          <div>
            <img
              className="w-20 mx-auto"
              src={JavaScriptLogo}
              alt="JavaScript"
            />{" "}
            <p className="my-3">JavaScript</p>
          </div>

          <div>
            <img
              className="w-20 mx-auto"
              src={TypeScript}
              alt="TypeScript Logo"
            />
            <p className="my-3">TypeScript</p>
          </div>

          <div>
            <img className="w-20 mx-auto" src={HTMLLogo} alt="HTML Logo" />
            <p className="my-3">HTML</p>
          </div>

          <div>
            <img className="w-20 mx-auto" src={CSSLogo} alt="CSS Logo" />
            <p className="my-3">CSS</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
