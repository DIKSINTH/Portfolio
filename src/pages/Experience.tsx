import React from "react";
import { motion } from "framer-motion";
import { Calendar, MapPin, ExternalLink } from "lucide-react";

export const Experience: React.FC = () => {
  const experiences = [
    {
      title: "Full Stack Developer Intern",
      company: "Walachain Technologies",
      location: "Sattur, TamilNadu",
      period: "May, 2025 - Present",
      description: [
        "As a Full Stack Developer Intern at Walachain Technologies, I build complete web applications using both front-end and back-end technologies. I collaborate with the development team to create user-friendly interfacesand connect them to server-side logic and databases. Web Developer Intern, Aathesh Soft Infotech , PVT LTD",
      ],
      technologies: [
        "React",
        "React Router",
        "Redux",
        "Node.js",
        "MongoDB",
        "Express.js",
        "Tailwind CSS",
      ],
    },
    {
      title: "Web Developer Intern",
      company: "Aathesh Softtech Infotech PVT LMD",
      location: "Sivakasi, TamilNadu",
      period: "May, 2024 - June, 2024 (1 Month)",
      description: [
        "I completed an internship at Aathesh Soft Infotech Pvt. Ltd., Sivakasi, where I gained hands-on experience in the fundamentals of web design, focusing on HTML and CSS to build responsive and structured web layouts.",
      ],
      technologies: ["HTML", "CSS"],
    },
  ];

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            Work{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Experience
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            My professional journey and key achievements
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-600 hidden md:block" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="relative"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full border-4 border-slate-900 hidden md:block" />

                <div className="md:ml-20 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8 hover:bg-white/20 transition-all duration-300 group">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors duration-300">
                        {exp.title}
                      </h3>
                      <p className="text-xl text-blue-400 font-medium">
                        {exp.company}
                      </p>
                    </div>
                    <div className="flex flex-col sm:items-end mt-2 sm:mt-0">
                      <div className="flex items-center text-gray-300 mb-1">
                        <Calendar size={16} className="mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center text-gray-300">
                        <MapPin size={16} className="mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <ul className="space-y-2 mb-6">
                    {exp.description.map((item, i) => (
                      <li key={i} className="text-gray-300 flex items-start">
                        {/* <span className="text-blue-400 mr-3 mt-2">•</span> */}
                        {item}
                      </li>
                    ))}
                  </ul>

                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech, i) => (
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
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Want to work together?
            </h3>
            <p className="text-gray-300 mb-6">
              I'm always interested in new opportunities and exciting projects.
            </p>
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-medium rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Get In Touch
              <ExternalLink size={20} className="ml-2" />
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
