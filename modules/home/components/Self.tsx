"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const Self = () => {
  return (
    <div>
      <div className="flex items-center gap-4 pb-2">
        <TypeAnimation
          sequence={[
            "Frontend Developer",
            4000,
            "React Developer",
            4000,
            "Fullstack Developer",
            4000,
          ]}
          wrapper="span"
          speed={20}
          repeat={Infinity}
        />
      </div>
      <p className="text-sm text-justify text-neutral-500">
        With a background in D4 Information Technology from the State
        Polytechnic of Lhokseumawe, I bring skills in website development with a
        specific focus on FrontEnd Development. I have completed several website
        projects that demonstrate my dedication and expertise. I have a strong
        interest in continuously expanding my knowledge in various aspects of
        web development, and I am ready to take on new challenges in the world
        of technology. I believe that the combination of my educational
        background in information technology and practical experience in website
        development enables me to make valuable contributions to future
        projects. I am eager to continue learning and growing in the world of
        web development, and I am prepared to take my skills and dedication to
        the next level.
      </p>
    </div>
  );
};

export default Self;
