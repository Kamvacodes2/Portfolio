"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

const About = () => {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      ref={ref}
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        After graduating with a bachelors degree in{" "}
        <span className="font-medium">Accounting</span>, I entered the workforce
        as a junior accountant for just under 3 years utlimately I decided to
        pursue my passion for programming. I am currently enrolled in a coding
        bootcamp at Code College and I have learned{" "}
        <span className="font-medium">full-stack web development</span>.{" "}
        <span className="italic">What I enjoy most about programming</span> is
        the problem-solving aspect. I <span className="underline">love</span>{" "}
        the feeling of finally figuring out a solution to a problem. My core
        stack is{" "}
        <span className="font-medium">
          React, Next.js, Node.js, MongoDB, Firebase, Java and SQL
        </span>
        . I am also familiar with TypeScript. I am always looking to learn new
        technologies. I am currently looking for a{" "}
        <span className="font-medium">full-time position</span> as a software
        developer.
      </p>
    </motion.section>
  );
};

export default About;
