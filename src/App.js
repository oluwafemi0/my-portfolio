import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import YourImage from "./images/me.jpg";
import Pong from "./Pong";
import './Pong.css'; 

const darkColor = "#121212";

function App() {
  const [showMainContent, setShowMainContent] = useState(false);

  const sphereVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: [1, 1.5, 1],
      opacity: 1,
      transition: {
        duration: 2,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "easeInOut",
      },
    },
  };

  const textVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      textShadow: "0px 0px 8px #00FFF6, 0px 0px 16px #FF006E",
      transition: {
        delay: 2,
        duration: 1.5,
        ease: "easeInOut",
      },
    },
  };

  const fadeOutVariants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0, transition: { duration: 1.5 } },
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut", staggerChildren: 0.3 },
    },
  };

  const skillVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", staggerChildren: 0.2 },
    },
  };

  const handleIntroEnd = () => setShowMainContent(true);

  return (
    <div className="relative h-screen text-white overflow-hidden" style={{ backgroundColor: darkColor }}>
      {!showMainContent && (
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center space-y-6"
          initial="visible"
          animate="hidden"
          onAnimationComplete={handleIntroEnd}
          variants={fadeOutVariants}
        >
          {/* Glowing Sphere */}
          <motion.div
            className="w-24 h-24 bg-gradient-to-r from-[#00FFF6] to-[#FF006E] rounded-full shadow-[0_0_15px_rgba(255,255,255,0.8)]"
            initial="hidden"
            animate="visible"
            variants={sphereVariants}
          />

          {/* Neon Text */}
          <motion.h1
            className="text-4xl font-bold text-[#00FFF6] tracking-widest"
            variants={textVariants}
            initial="hidden"
            animate="visible"
          >
            Welcome to the Future
          </motion.h1>

          {/* Dynamic Starfield Background */}
          <div className="absolute inset-0 bg-gradient-to-b from-[#000000] to-[#1E1E1E] overflow-hidden">
            <div className="stars"></div>
          </div>
        </motion.div>
      )}

      {showMainContent && (
        <motion.div
          className="relative h-screen text-white overflow-hidden"
          initial="hidden"
          animate="visible"
          variants={containerVariants}
        >
          {/* Main Content */}
          <motion.section className="h-full flex flex-col md:flex-row items-center relative z-10">
            <motion.div className="w-full md:w-1/3 h-full relative overflow-hidden">
              <motion.img
                src={YourImage}
                alt="Your Name"
                className="w-full h-full object-cover object-center"
              />
            </motion.div>

            <motion.div className="w-full md:w-2/3 flex flex-col p-6 space-y-12">
              <motion.div className="flex">
                <motion.div className="flex flex-col w-2/3">
                  <motion.h1 className="text-4xl md:text-5xl font-bold textgray-800 neon-text">
                    Oluwafemi Emmanuel Ayedogbon
                  </motion.h1>
                  <motion.p className="text-lg md:text-xl text-[#FF006E]">
                    React/React Native Developer | UI/UX Designer
                  </motion.p>
                  <motion.p className="text-md md:text-lg text-gray-300 mt-2">
                    I create simple, futuristic, immersive experiences.
                  </motion.p>
                </motion.div>
                <motion.div className="w-1/3 my-auto">
                  <Pong />
                </motion.div>
              </motion.div>

              <motion.div className="flex justify-center md:justify-start space-x-6 mt-2">
                <motion.a href="https://github.com/oluwafemi0?tab=repositories" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={faGithub}
                    className="text-3xl hover:text-[#FF006E] transition duration-300"
                  />
                </motion.a>
                <motion.a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={faLinkedin}
                    className="text-3xl hover:text-[#FF006E] transition duration-300"
                  />
                </motion.a>
                <motion.a href="https://x.com/holluwaphemie5" target="_blank" rel="noopener noreferrer">
                  <FontAwesomeIcon
                    icon={faTwitter}
                    className="text-3xl hover:text-[#FF006E] transition duration-300"
                  />
                </motion.a>
              </motion.div>

              <motion.div className="mt-2 bg-[#1E1E1E] p-4 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-2 ">Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {[
                    "React Native",
                    "Frontend Development",
                    "UI/UX Design",
                    "Mobile App Development",
                    "React",
                    "JavaScript",
                    "Tailwind CSS",
                    "API Development",
                  ].map((skill) => (
                    <motion.div
                      key={skill}
                      className="flex items-center bg-[#FF006E] rounded-lg p-4 shadow-xl"
                      variants={skillVariants}
                      whileHover={{ scale: 1.05 }}
                    >
                      <FontAwesomeIcon icon={faCode} className=" mr-3" />
                      <span className="text-lg">{skill}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div className="mt-4 bg-[#1E1E1E] p-4 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-2 ">Active Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {[
                    {
                      title: "Gainsphere",
                      description:
                        "Gainsphere is a work-from-home webapp that pays users to complete tasks.",
                      link: "https://github.com/oluwafemi0/gainsphere",
                    },
                    {
                      title: "Amica",
                      description:
                        "Amica connects artisans to end users in a thriving community.",
                      link: "https://github.com/oluwafemi0/amica",
                    },
                    {
                      title: "Portfolio",
                      description: "Oluwafemi's portfolio showcases skills, information and projects.",
                      link: "https://github.com/oluwafemi0/my-portfolio",
                    },
                  ].map(({ title, description, link }) => (
                    <motion.div
                      key={title}
                      className="bg-[#FF006E] rounded-lg p-4 shadow-xl transform hover:scale-105"
                      variants={projectVariants}
                    >
                      <h3 className="text-xl font-bold">{title}</h3>
                      <p className="text-sm mb-2">{description}</p>
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#E0E0E0] hover:underline"
                      >
                        View Code on Github
                      </a>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          </motion.section>

          <footer className="absolute bottom-0 left-0 right-0 p-4 bg-[#1E1E1E] text-center text-gray-400 ">
            <p>© {new Date().getFullYear()} Oluwafemi Emmanuel Ayedogbon. All rights reserved.</p>
          </footer>
        </motion.div>
      )}
    </div>
  );
}

export default App;
