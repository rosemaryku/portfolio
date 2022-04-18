import React from "react";
import mentorMe from "../assets/mentorMe.png";

const Projects = () => {
  return (
    <div name="projects" className="w-full md:h-screen text-black bg-[#F7E9D7]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 pl-4 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-[#827397]">
            MY PROJECTS
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          <div
            style={{ backgroundImage: `url(${mentorMe})` }}
            className="shadow-lg shadow-[#bbbbbb] group container rounded-md flex justify-center items-center mx-auto content-div"
          ></div>
          <div>
            <h2>REACTS.JS APP </h2>
            <p>
              Mentor Me is a web app designed to connect users with mentors who
              can assist with coding-related questions. Users can search for
              mentors, favourite mentors, chat with a mentor, and book
              sessions/appointments.
            </p>
            <a href="/">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Demo
              </button>
            </a>
            <a href="/">
              <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                Code
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
