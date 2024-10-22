import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faCode, faPalette, faMobileAlt } from '@fortawesome/free-solid-svg-icons';
import YourImage from './images/me.jpg';

const darkColor = '#2D2D2D';

function App() {
  return (
    <div
      className="relative h-screen text-white overflow-hidden"
      style={{
        backgroundColor: darkColor,
      }}
    >
      
      <section className="h-full flex flex-col md:flex-row items-center relative z-10">
       
        <div className="w-full md:w-1/3 h-full relative overflow-hidden">
          <img
            src={YourImage}
            alt="[Your Name]"
            className="w-full h-full object-cover object-center transition-transform transform hover:scale-110"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
        </div>

       
        <div className="w-full md:w-2/3 flex flex-col p-6 space-y-6">
          
          <div className="flex flex-col justify-start items-center md:items-start text-center md:text-left mt-4">
            <h1 className="text-4xl md:text-5xl font-bold neon-text">Oluwafemi Emmanuel Ayedogbon</h1>
            <p className="text-lg md:text-xl text-yellow-400">React/React Native Developer | UI/UX Designer</p>
            <p className="text-md md:text-lg text-gray-300 mt-2">I create futuristic, immersive web experiences.</p>
            <p className="text-sm md:text-base text-gray-400 mt-2">
              Passionate about coding and design, I strive to deliver high-quality solutions that enhance user experience.
            </p>
          </div>

          
          <div className="flex justify-center md:justify-start space-x-6 mt-4">
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} className="text-3xl hover:text-yellow-400 transition duration-300 transform hover:scale-110" />
            </a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin} className="text-3xl hover:text-yellow-400 transition duration-300 transform hover:scale-110" />
            </a>
            <a href="https://twitter.com/yourusername" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} className="text-3xl hover:text-yellow-400 transition duration-300 transform hover:scale-110" />
            </a>
          </div>

          
          <div className="mt-10 bg-gray-600 bg-opacity-90 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Skills</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {['Frontend Development', 'UI/UX Design', 'Mobile App Development', 'JavaScript', 'React', 'Tailwind CSS', 'Node.js', 'API Development'].map(skill => (
                <div key={skill} className="flex items-center bg-gray-800 rounded-lg p-4 shadow transition-transform transform hover:scale-105">
                  <FontAwesomeIcon icon={faCode} className="text-yellow-400 mr-3" />
                  <span className="text-lg">{skill}</span>
                </div>
              ))}
            </div>
          </div>

         
          <div className="mt-10 bg-gray-600 bg-opacity-90 p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4 text-yellow-400">Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[
                { title: 'Project Title 1', description: 'Brief description of project 1.', link: 'https://github.com/yourusername/project1' },
                { title: 'Project Title 2', description: 'Brief description of project 2.', link: 'https://github.com/yourusername/project2' },
                { title: 'Project Title 3', description: 'Brief description of project 3.', link: 'https://github.com/yourusername/project3' },
              ].map(({ title, description, link }) => (
                <div key={title} className="bg-gray-800 rounded-lg p-4 shadow transition-transform transform hover:scale-105 hover:bg-gray-700">
                  <h3 className="text-xl font-semibold">{title}</h3>
                  <p className="text-sm text-gray-400">{description}</p>
                  <a
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-yellow-400 hover:underline"
                  >
                    View Code
                  </a>
                </div>
              ))}
             
            </div>
          </div>
        </div>
      </section>

      
      <footer className="absolute bottom-0 left-0 right-0 p-4 bg-gray-800 text-center text-gray-400">
        <p>© {new Date().getFullYear()} Oluwafemi Emmanuel Ayedogbon. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
