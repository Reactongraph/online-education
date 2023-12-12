import React from "react";
import { courseCategories } from "../../../Data";
import { courses } from "../../../Data";
import Categories from "./Categories";
import Course from "./Course";
import { motion } from "framer-motion";

const Courses = () => {
  // Animation variants for course categories container
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  return (
    // Courses section container
    <div className="section" id="courses">
      {/* Introduction text */}
      <div className="text-center">
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Our Top <span className="text-Teal">Categories</span>
        </div>
        <p className="text-sm text-gray leading-7 max-w-[700px] mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore
          tempora illo laborum ex cupiditate tenetur doloribus non velit atque
          amet repudiandae ipsa modi numquam quas odit optio, totam voluptate
          sit! Lorem ipsum dolor sit amet.
        </p>
      </div>

      {/* Course categories with animation */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="grid md:grid-cols-4 sm:grid-cols-2 mt-12 gap-8"
      >
        {courseCategories.map((category) => (
          <Categories key={category.id} {...category} />
        ))}
      </motion.div>

      {/* Most popular courses section */}
      <div className="text-xl font-bold mt-32">Most Popular Courses</div>
      <div className="mt-12 overflow-x-hidden w-full relative">
        <div className="flex gap-8 md:w-full sm:w-[170%] xs:w-[340%] w-[480%] animate-slide">
          {/* Render each course */}
          {courses.map((course) => (
            <Course key={course.id} {...course} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Courses;
