// import React from "react";
// import ProfilePic from "../assets/profile-pic.png";

// const About = () => {
//   return (
//     <div name="about" className="w-full h-screen bg-[#F7E9D7] text-black">
//       <div className="flex flex-col justify-center items-center w-full h-full">
//         <div className="max-w-full w-full px-4 grid gap-8">
//           <div className="pb-8 pl-4 text-center">
//             <p className="text-4xl font-bold inline border-b-4 border-[#827397]">
//               ABOUT ME
//             </p>
//             <div className="flex">
//               <img
//                 src={ProfilePic}
//                 alt="Rosemary Ku"
//                 className="inline w-24 h-24 rounded-full"
//               />
//               <p className="w-30 px-20 mx-20 pt-10 text-justify">
//                 Based in Toronto, I love taking on intricate new challenges and
//                 building creative solutions with sound logic and clean code.
//                 After seeing first-hand how software could addess many gaps in
//                 the healthcare industry, I decided to continue growing my
//                 technical skills to build interactive web experiences. I enjoy
//                 continously learning and collaborating with others. When I'm not
//                 coding, I like spending my time with loved ones, exploring, and
//                 exercising!
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

// TEST

import React from "react";
import ProfilePic from "../assets/profile-pic.png";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#F7E9D7] text-black">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <p className="text-4xl font-bold inline border-b-4 border-[#827397]">
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
          <div className="col-span-2 mt-2">
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
