import React from "react";
import { motion } from "framer-motion";
import { ExternalLink, Github, Eye } from "lucide-react";
import cineverseImage from "../images/cineverse.jpg"; // Adjust the path as needed
import tictacToe from "../images/ttt.jpg"; // Adjust the path as needed
import rockpaperScissor from "../images/rps.jpg"; // Adjust the path as needed
import playwithPanda from "../images/play_with_panda.jpg"; // Adjust the path as needed
import quickMath from "../images/quickmath.jpg"; // Adjust the path as needed
import cineVerse2024 from "../images/cineverse2024.jpg"; // Adjust the path as needed
export const Projects: React.FC = () => {
  const projects = [
    {
      title: "Cineflix",
      description:
        "Cineflix 2025 is a modern, responsive movie browsing web app built using React.js. It allows users to search view movie details, and explore genres in an easy-to-use interface. The app features dynamic routing, clean UI, and real-time filtering, simulating an IMDb-style experience for movie enthusiasts.",
      image: cineverseImage,
      technologies: [
        "React.js",
        "Tailwind CSS",
        "React Router DOM",
        "Framer Motion",
        "GSAP",
        "Lenis",
      ],
      githubUrl: "https://github.com/DIKSINTH/cineflix",
      liveUrl: "https://cineverse2025.netlify.app/",
      featured: true,
    },
    {
      title: "Tic-Tac-Toe",
      description:
        "Tic-Tac-Toe is a simple and interactive web-based game built using HTML, CSS, and JavaScript. It allows two players to take turns marking X and O on a 3x3 layout, with automatic win and draw detection. The design is responsive and user-friendly, making it a great example of core web development skills.",
      image: tictacToe,
      technologies: ["HTML5", "CSS", "Javascript"],
      githubUrl: "https://github.com/DIKSINTH/Tic-Tac-Toe",
      liveUrl: "https://diksinth.github.io/Tic-Tac-Toe/",
      featured: false,
    },
    {
      title: "Rock Paper Scissor",
      description:
        "Rock-Paper-Scissors is a fun and responsive web game built using HTML, CSS, and JavaScript. Users can choose rock, paper, or scissors to play against the computer, with instant results and score updates. It showcases interactive logic, smooth UI behavior, and basic front-end development skills.",
      image: rockpaperScissor,
      technologies: ["HTML5", "CSS", "Javascript"],
      githubUrl: "https://github.com/DIKSINTH/RPS",
      liveUrl: "https://rock-paper-scissor-39.netlify.app/",
      featured: false,
    },
    {
      title: "Play with Panda",
      description:
        "**Play with Panda** is a creative and engaging web mini-game designed using HTML, CSS, and JavaScript. It features animated visuals and playful interactions that allow users to interact with a cute panda character. The project highlights beginner-friendly front-end development with a focus on fun user experience and simple animations.",
      image: playwithPanda,
      technologies: ["HTML5", "CSS3", "Javascript"],
      githubUrl: "https://github.com/DIKSINTH/Game",
      liveUrl: "https://play-with-panda.netlify.app/",
      featured: false,
    },
    {
      title: "QuickMath (Standard Calculator)",
      description:
        "**QuickMath** is a simple and fast web application built using HTML, CSS, and JavaScript. It helps users solve basic math problems instantly, providing a clean layout and responsive interface. This project demonstrates core front-end development skills with a focus on user input handling and real-time result display.",
      image: quickMath,
      technologies: ["HTML5", "CSS3", "Javascript"],
      githubUrl: "https://github.com/DIKSINTH/QuickMath",
      liveUrl: "https://diksinth.github.io/QuickMath/",
      featured: false,
    },
    // {
    //   title: "My Portfolio",
    //   description:
    //     "This is a modern and responsive personal portfolio website built with React and TypeScript. It highlights my projects, skills, and experience with a clean design and smooth animations, making it easy for visitors to learn more about my work.",
    //   image: myPortfolio,
    //   technologies: [
    //     "React.js",
    //     "TypeScript",
    //     "Framer Motion",
    //     "Tailwind CSS",
    //     "Lucide React",
    //     "Vite",
    //     "Netlify",
    //   ],
    //   githubUrl: "https://github.com/DIKSINTH/React_Portfolio",
    //   liveUrl: "https://diksinth-s-portfolio.netlify.app/",
    //   featured: true,
    // },
    {
      title: "Cineverse 2024",
      description:
        "Cineverse 2024 is a simple movie website made with only HTML and CSS. It shows movie details using clean and basic web design.",
      image: cineVerse2024,
      technologies: ["HTML 3.2", "CSS", "Vercel"],
      githubUrl: "https://github.com/DIKSINTH/Movie-Universe",
      liveUrl: "https://cineverse2024.vercel.app/",
      featured: false,
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my work and technical expertise
          </p>
        </motion.div>

        {/* Featured Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-bold text-white mb-8">
            Featured Projects
          </h2>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                className="group bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden hover:bg-white/20 transition-all duration-300"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute top-4 right-4 flex space-x-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
                      title="View Code"
                    >
                      <Github size={20} />
                    </a>
                    <a
                      href={project.liveUrl}
                      className="p-2 bg-black/50 backdrop-blur-sm rounded-full text-white hover:bg-black/70 transition-colors"
                      title="View Live"
                    >
                      <ExternalLink size={20} />
                    </a>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-300 text-sm rounded-full border border-blue-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Other Projects */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="text-3xl font-bold text-white mb-8">Other Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="group bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 overflow-hidden hover:bg-white/20 transition-all duration-300 hover:scale-105"
              >
                <div className="relative overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-32 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {project.technologies.slice(0, 3).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gradient-to-r from-blue-500/20 to-purple-600/20 text-blue-300 text-xs rounded-full border border-blue-400/30"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-1 text-gray-400 text-xs">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <a
                      href={project.githubUrl}
                      className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-gradient-to-r from-gray-600 to-gray-700 text-white text-sm rounded-lg hover:from-gray-700 hover:to-gray-800 transition-all duration-300"
                    >
                      <Github size={16} className="mr-1" />
                      Code
                    </a>
                    <a
                      href={project.liveUrl}
                      className="flex-1 inline-flex items-center justify-center px-3 py-2 bg-gradient-to-r from-blue-500 to-purple-600 text-white text-sm rounded-lg hover:from-blue-600 hover:to-purple-700 transition-all duration-300"
                    >
                      <Eye size={16} className="mr-1" />
                      Live
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};
