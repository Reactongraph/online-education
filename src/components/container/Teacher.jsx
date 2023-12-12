import React from "react";
import teacher1 from "../../assets/teacher1.jpg";
import teacher2 from "../../assets/teacher2.jpg";
import { accordions } from "../../Data";
import Accordion from "./Accordion";

const Teacher = () => {
  return (
    // Teacher section container
    <div className="section" id="teacher">
      {/* Grid layout for responsive design */}
      <div className="grid sm:grid-cols-2 place-items-center gap-8">
        {/* Left side content */}
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Become <span className="text-Teal">An Instructor</span> <br /> of
            Our Platform
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            perferendis debitis dolorum facilis culpa, quidem voluptate suscipit
            deserunt. Magni neque at eos dolore dignissimos fugit repudiandae?
            Aut laudantium asperiores et!
          </p>
          <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold ">
            Start Teaching
          </button>
        </div>

        {/* Image container */}
        <div className="p-4 md:w-3/4 sm:row-start-1">
          <img src={teacher1} alt="" />
        </div>

        {/* Right side content */}
        <div className="pl-5">
          <div className="font-bold sm:text-[1.875rem] text-[1.5rem] mb-5">
            Become <span className="text-Teal">An Instructor</span> <br /> of
            Our Platform
          </div>
          <p className="text-sm leading-7 text-gray mb-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
            perferendis debitis dolorum facilis culpa, quidem voluptate suscipit
            deserunt. Magni neque at eos dolore dignissimos fugit repudiandae?
            Aut laudantium asperiores et!
          </p>
          <button className="py-3 px-4 bg-Teal text-white rounded-lg text-sm font-bold ">
            Get Started
          </button>
        </div>

        {/* Image container */}
        <div className="p-4 md:w-3/4">
          <img src={teacher2} alt="" />
        </div>
      </div>

      {/* Frequently Asked Questions section */}
      <div className="text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]">
        Frequently <span className="text-Teal">Asked Questions</span>
      </div>

      {/* Accordion component for FAQs */}
      <div className="mt-12 max-w-[700px] mx-auto">
        {accordions.map((accordion) => (
          <Accordion key={accordion.id} {...accordion} />
        ))}
      </div>
    </div>
  );
};

export default Teacher;
