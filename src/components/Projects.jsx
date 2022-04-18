import React from "react";
import mentorMe from "../assets/mentorMe.png";
import scheduler from "../assets/scheduler.png";
import tinyApp from "../assets/tinyApp.png";
import jungleRails from "../assets/jungleRails.png";
import twitterClone from "../assets/twitterClone.png";
import logo from "../assets/logo.png";

const Projects = () => {
  return (
    <div name="projects" className="w-full h-full pt-20 bg-[#F7E9D7]">
      <div className="max-w-[1200px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8 pl-4 text-center">
          <p className="text-4xl font-bold inline border-b-4 border-[#827397]">
            MY PROJECTS
          </p>
          <p className="mt-2">
            <i>Collection of some of my work</i>{" "}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Project #1 */}
          <div class=" mx-auto md:mx-4 lg:mx-4 my-4  bg-white border border-white shadow-md dark:bg-white dark:border-white">
            <a href="https://github.com/rosemaryku/mentor-me">
              <img src={mentorMe} alt="Mentor Me App" />
            </a>
            <div class="p-5">
              <a href="https://github.com/rosemaryku/mentor-me">
                <h2 className="text-2xl text-[#827397] hover:text-[#3A3845] font-bold">
                  Mentor Me
                </h2>
              </a>
              <p className="my-3 font-normal text-gray-700">
                Enables users to connect with mentors who can assist with
                coding-related questions.
              </p>
              <p className="my-3 font-bold text-[#827397]">
                <i>React / Material UI / PostgreSQL</i>
              </p>
              <a href="https://github.com/rosemaryku/mentor-me">
                <button className="text-white group rounded-md border-[#827397] px-6 py-3 my-3 flex items-center bg-[#827397] hover:bg-[#3A3845] hover:border-[#3A3845]">
                  Code
                </button>
              </a>
            </div>
          </div>
          {/* Project #2 */}
          <div class=" mx-auto md:mx-4 lg:mx-4 my-4 bg-white border border-white shadow-md dark:bg-white dark:border-white">
            <div className="h-40 inline-block align-middle">
              <a href="https://github.com/rosemaryku/scheduler">
                <img
                  className="rounded-lg mt-3"
                  src={scheduler}
                  alt="Scheduler App"
                />
              </a>
            </div>
            <div class="p-5">
              <a href="https://github.com/rosemaryku/scheduler">
                <h2 className="text-2xl text-[#827397] hover:text-[#3A3845] font-bold">
                  Scheduler
                </h2>
              </a>
              <p class="my-3 font-normal text-gray-700 dark:text-gray-600">
                App where users are able to create, edit and delete interview
                appointments.
              </p>
              <p className="my-3 font-bold text-[#827397]">
                <i>React / Storybook / Jest</i>
              </p>
              <a href="https://github.com/rosemaryku/scheduler">
                <button className="text-white group rounded-md border-[#827397] px-6 py-3 my-3 flex items-center bg-[#827397] hover:bg-[#3A3845] hover:border-[#3A3845]">
                  Code
                </button>
              </a>
            </div>
          </div>
          {/* Project #3 */}
          <div class="mx-auto md:mx-4 lg:mx-4 my-4 bg-white border border-white shadow-md dark:bg-white dark:border-white">
            <a href="https://github.com/rosemaryku/tinyapp">
              <img src={tinyApp} alt="TinyApp" />
            </a>
            <div class="p-5">
              <a href="https://github.com/rosemaryku/tinyapp">
                <h2 className="text-2xl text-[#827397] hover:text-[#3A3845] font-bold">
                  TinyApp
                </h2>
              </a>
              <p class="my-3 font-normal text-gray-700 dark:text-gray-600">
                Allows users to shorten long URLs.
              </p>
              <p className="my-3 font-bold text-[#827397]">
                <i>Node / Express / Bootstrap </i>
              </p>
              <a href="https://github.com/rosemaryku/tinyapp">
                <button className="text-white group rounded-md border-[#827397] px-6 py-3 my-3 flex items-center bg-[#827397] hover:bg-[#3A3845] hover:border-[#3A3845]">
                  Code
                </button>
              </a>
            </div>
          </div>
          {/* Project #4 */}
          <div class=" mx-auto md:mx-4 lg:mx-4 my-4  bg-white border border-white shadow-md dark:bg-white dark:border-white">
            <a href="https://github.com/rosemaryku/jungle-rails">
              <img src={jungleRails} alt="Jungle Rails App" />
            </a>
            <div class="p-5">
              <a href="https://github.com/rosemaryku/jungle-rails">
                <h2 className="text-2xl text-[#827397] hover:text-[#3A3845] font-bold">
                  Jungle Rails
                </h2>
              </a>
              <p class="my-3 font-normal text-gray-700 dark:text-gray-600">
                A mini e-commerce app where users are able to browse and
                purchase items.
              </p>
              <p className="my-3 font-bold text-[#827397]">
                <i>Ruby on Rails / PostgreSQL / Stripe API </i>
              </p>
              <a href="https://github.com/rosemaryku/jungle-rails">
                <button className="text-white group rounded-md border-[#827397] px-6 py-3 my-3 flex items-center bg-[#827397] hover:bg-[#3A3845] hover:border-[#3A3845]">
                  Code
                </button>
              </a>
            </div>
          </div>
          {/* Project #5 */}
          <div class=" mx-auto md:mx-4 lg:mx-4 my-4 shadow-md dark:bg-white dark:border-white">
            <a href="https://github.com/rosemaryku/twitter-clone">
              <img src={twitterClone} alt="Twitter Clone App" />
            </a>
            <div class="p-5">
              <a href="https://github.com/rosemaryku/twitter-clone">
                <h2 className="text-2xl text-[#827397] hover:text-[#3A3845] font-bold">
                  Twitter Clone
                </h2>
              </a>
              <p class="my-3 font-normal text-gray-700 dark:text-gray-600">
                Allows users to share thoughts that are 140 characters or less.
              </p>
              <p className="my-3 font-bold text-[#827397]">
                <i>JavaScript / jQuery / Express </i>
              </p>
              <a href="https://github.com/rosemaryku/twitter-clone">
                <button className="text-white group rounded-md border-[#827397] px-6 py-3 my-3 flex items-center bg-[#827397] hover:bg-[#3A3845] hover:border-[#3A3845]">
                  Code
                </button>
              </a>
            </div>
          </div>
          {/* Project #6 */}
          <div class="mx-auto md:mx-4 lg:mx-4 my-4 bg-white border border-white shadow-md dark:bg-white dark:border-white">
            <a href="https://github.com/rosemaryku/portfolio">
              <img className="h-22 px-12" src={logo} alt="Portfolio App" />
            </a>
            <div class="p-5">
              <a href="https://github.com/rosemaryku/portfolio">
                <h2 className="text-2xl text-[#827397] hover:text-[#040404] font-bold">
                  Portfolio Website
                </h2>
              </a>
              <p class="my-3 font-normal text-gray-700 dark:text-gray-600">
                Means to document my development journey
              </p>
              <p className="my-3 font-bold text-[#827397]">
                <i>React / Tailwind CSS / HTML </i>
              </p>
              <a href="https://github.com/rosemaryku/portfolio">
                <button className="text-white group rounded-md border-[#827397] px-6 py-3 my-3 flex items-center bg-[#827397] hover:bg-[#3A3845] hover:border-[#3A3845]">
                  Code
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

{
  /* OLD VERSION */
}
{
  /* <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-4">
          <a href="https://github.com/rosemaryku/mentor-me">
            <div
              style={{ backgroundImage: `url(${mentorMe})` }}
              className="group container flex justify-center items-center mx-auto content-div"
            ></div>
          </a>
          <div>
            <a href="https://github.com/rosemaryku/mentor-me">
              <h2 className="text-2xl text-[#827397] hover:text-[#3A3845] font-bold text-center">
                MENTOR ME
              </h2>
            </a>
            <p className="pt-2 text-justify">
              A React app designed to connect users with mentors who can assist
              with coding-related questions. Users can search for mentors,
              favourite mentors, chat with a mentor, and book
              sessions/appointments.
            </p>

            <a href="https://github.com/rosemaryku/mentor-me">
              <button className="text-white group border-[#827397] px-6 py-3 my-3 flex items-center bg-[#827397] hover:bg-[#3A3845] hover:border-[#3A3845]">
                Code
              </button>
            </a>
          </div>
        </div> */
}
