import React from "react";
import { motion } from "framer-motion";

const Contact = () => {
  return (
    // Contact section container
    <div className="section" id="contact">
      <div className="text-center max-w-[600px] mx-auto">
        {/* Section title */}
        <div className="sm:text-3xl text-2xl font-bold mb-5">
          Subscribe Newsletter
        </div>

        {/* Section description */}
        <p className="text-sm leading-7 text-gray">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum autem
          minus doloribus voluptatem illo velit quia eum aperiam! Repudiandae,
          tempore. Lorem ipsum dolor sit amet.
        </p>

        {/* Newsletter subscription form with motion animation */}
        <motion.form
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3 }}
          className="mt-5"
        >
          {/* Email input field */}
          <input
            type="text"
            placeholder="Enter your email address"
            className="sm:p-3 p-2 outline-none text-sm shadow-md sm:w-72 w-60"
          />

          {/* Subscribe button */}
          <button className="text-sm text-white bg-Teal sm:p-3 p-2 shadow-md font-bold">
            Subscribe
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
