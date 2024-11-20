import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion"; 
import YourImage from "./images/me.jpg";
import Pong from "./Pong";

const darkColor = "#2D2D2D";

function App() {
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeInOut", when: "beforeChildren", staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeInOut" },
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

  const projectItemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      className="relative h-screen text-white overflow-hidden"
      style={{ backgroundColor: darkColor }}
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.section
        className="h-full flex flex-col md:flex-row items-center relative z-10"
        variants={itemVariants}
      >
        <motion.div
          className="w-full md:w-1/3 h-full relative overflow-hidden"
          variants={itemVariants}
        >
          <motion.img
            src={YourImage}
            alt="[Your Name]"
            className="w-full h-full object-cover object-center transition-transform transform hover:scale-110"
            whileHover={{ scale: 1.1 }}
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </motion.div>

        <motion.div
          className="w-full md:w-2/3 flex flex-col p-6 space-y-12"
          variants={containerVariants}
        >
          <div className="flex">
            <div className="flex flex-col w-2/3 justify-start items-center md:items-start text-center md:text-left">
              <motion.h1
                className="text-4xl md:text-5xl font-bold neon-text"
                variants={itemVariants}
              >
                Oluwafemi Emmanuel Ayedogbon
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl text-yellow-400"
                variants={itemVariants}
              >
                React/React Native Developer | UI/UX Designer
              </motion.p>
              <motion.p
                className="text-md md:text-lg text-gray-300 mt-2"
                variants={itemVariants}
              >
                I create simple, futuristic, immersive experiences.
              </motion.p>
            </div>

            <motion.div className="w-1/3 my-auto" variants={itemVariants}>
              <Pong />
            </motion.div>
          </div>

          <motion.div
            className="flex justify-center md:justify-start space-x-6 mt-2"
            variants={itemVariants}
          >
            <motion.a
              href="https://github.com/oluwafemi0?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="text-3xl hover:text-yellow-400 transition duration-300"
              />
            </motion.a>

            <motion.a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="text-3xl hover:text-yellow-400 transition duration-300"
              />
            </motion.a>

            <motion.a
              href="https://x.com/holluwaphemie5"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <FontAwesomeIcon
                icon={faTwitter}
                className="text-3xl hover:text-yellow-400 transition duration-300"
              />
            </motion.a>
          </motion.div>

          <motion.div
            className="mt-2 bg-gray-600 bg-opacity-90 p-4 rounded-lg shadow-lg"
            variants={itemVariants}
          >
            <h2 className="text-2xl font-semibold mb-2 text-yellow-400">
              Skills
            </h2>
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
                  className="flex items-center bg-gray-800 rounded-lg p-4 shadow"
                  variants={skillVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <FontAwesomeIcon
                    icon={faCode}
                    className="text-yellow-400 mr-3"
                  />
                  <span className="text-lg">{skill}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="mt-4 bg-gray-600 bg-opacity-90 p-4 rounded-lg shadow-lg"
            variants={projectVariants}
          >
            <h2 className="text-2xl font-semibold mb-2 text-yellow-400">
              Active Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                {
                  title: "Gainsphere",
                  description: "Gainsphere is a work from home webapp that pays users to complete tasks.",
                  link: "https://github.com/oluwafemi0/gainsphere",
                },
                {
                  title: "Amica",
                  description: "Amica is a app that brings a community of artisans together and connect them to end users.",
                  link: "https://github.com/oluwafemi0/amica",
                },
                {
                  title: "Portfolio",
                  description: "This is oluwafemi's portfolio that shows his skills and information about him",
                  link: "https://github.com/oluwafemi0/my-portfolio",
                },
              ].map(({ title, description, link }) => (
                <motion.div
                  key={title}
                  className="bg-gray-800 rounded-lg p-4 shadow transition-transform transform hover:scale-105 hover:bg-gray-700 space-y-4 flex flex-col"
                  variants={projectItemVariants}
                >
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="text-sm text-gray-400">{description}</p>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:underline"
                  >
                    View Code On Github
                  </a>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </motion.section>

      <footer className="absolute bottom-0 left-0 right-0 p-4 bg-gray-800 text-center text-gray-400 z-10">
        <p>
          © {new Date().getFullYear()} Oluwafemi Emmanuel Ayedogbon. All rights
          reserved.
        </p>
      </footer>
    </motion.div>
  );
}

export default App;
