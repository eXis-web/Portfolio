import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-100 bg-gradient-to-b from-gray-800 to-black text-white about"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-5">
          I am a frontend web developer with a passion for crafting engaging user experiences. Eager to enhance my skills and explore new technologies, I am actively seeking permanent employment opportunities while also taking on freelance projects.
        </p>

        <br />

        <p className="text-xl">
        I thrive on building projects from the ground up and find joy in bringing ideas to fruition. Reach out to me to discuss how I can assist with your project. Whether you're looking for ongoing support or need a specific task completed, I'm here to help. <br /> <br />
        I prioritize innovative solutions aimed at ensuring your project's success, focusing on creating unique experiences and enhancing conversion rates. Let's work together to find the best ways to achieve your goals!<br /> <br />
        </p>
      </div>
    </div>
  );
};

export default About;
