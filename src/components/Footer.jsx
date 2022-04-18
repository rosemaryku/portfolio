import React from "react";
import { Link } from "react-scroll";
import { ImLinkedin2 } from "react-icons/im";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="w-full h-[80px] flex justify-between items-center text-center px-4 bg-[#eae6f0] text-black">
      <div className="row">
        <div className="flex justify-items-center">
          <ul className="flex py-2 space-x-4">
            <li className="px-0">
              <a href="https://github.com/rosemaryku">
                <AiFillGithub size={24} />
              </a>
            </li>
            <li className="px-0 ">
              <a href="https://www.linkedin.com/in/rosemaryku">
                <ImLinkedin2 size={24} />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <p>Copyright &copy; Rosemary Ku {new Date().getFullYear()}</p>
      <div id="go-top">
        <Link to="home" smooth={true} duration={500}>
          <button
            type="button"
            // data-mdb-ripple="true"
            // data-mdb-ripple-color="light"
            class="inline-block p-3 bg-[#6e7578] text-white font-medium text-xs leading-tight uppercase rounded-full hover:bg-[#3A3845]   bottom-0 right-0"
          >
            <svg
              aria-hidden="true"
              focusable="false"
              data-prefix="fas"
              class="w-4 h-4"
              role="img"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 448 512"
            >
              <path
                fill="currentColor"
                d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
              ></path>
            </svg>
          </button>
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
