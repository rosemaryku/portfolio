import React from "react";
import { GrLinkedin } from "react-icons/gr";
import { BsGithub } from "react-icons/bs";
import { IoIosArrowDropup } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="w-full h-[80px] flex justify-between items-center text-center px-4 bg-[#F7E9D7] text-black">
      <div id="go-top">
        <button>
          <IoIosArrowDropup />
        </button>
      </div>
      <div className="row">
        <div className="flex justify-items-center">
          <GrLinkedin />
          <BsGithub />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
