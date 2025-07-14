import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Globe, Cloud, Settings } from "lucide-react";

export const Skills: React.FC = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: Globe,
      skills: [
        { name: "React", level: 90 },
        { name: "Tailwind CSS", level: 90 },

        { name: "HTML", level: 95 },
        { name: "CSS", level: 85 },
        { name: "React Router", level: 80 },
        { name: "Redux. js", level: 82 },
      ],
    },
    {
      title: "Backend Development",
      icon: Code,
      skills: [{ name: "Java", level: 92 }],
    },
    {
      title: "Database & Storage",
      icon: Database,
      skills: [{ name: "MySQL", level: 78 }],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "Netlify", level: 90 },
        { name: "Vercel", level: 90 },
        { name: "Github Pages", level: 85 },
      ],
    },
    {
      title: "Tools & Others",
      icon: Settings,
      skills: [
        { name: "Git", level: 95 },
        { name: "GitHub", level: 95 },
        { name: "VS Code", level: 98 },
        { name: "Figma", level: 85 },
        { name: "Postman", level: 90 },
        { name: "Vite. js", level: 95 },
      ],
    },
  ];

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
              Skills
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: categoryIndex * 0.1 }}
              className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-6 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg mr-4 group-hover:scale-110 transition-transform duration-300">
                  <category.icon size={24} className="text-white" />
                </div>
                <h3 className="text-xl font-bold text-white">
                  {category.title}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: categoryIndex * 0.1 + skillIndex * 0.05,
                    }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-400 text-sm font-bold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1,
                          delay: categoryIndex * 0.2 + skillIndex * 0.1,
                          ease: "easeOut",
                        }}
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full" />
                      </motion.div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 p-8">
            <h3 className="text-2xl font-bold text-white mb-4">
              Always Learning
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Technology evolves rapidly, and I'm committed to continuous
              learning. Currently exploring AI/ML integration, Web3
              technologies, and advanced cloud architectures.
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {[
                "AI/ML",
                "Web3",
                "Blockchain",
                "Microservices",
                "Serverless",
                "Edge Computing",
              ].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 bg-gradient-to-r from-emerald-500/20 to-blue-500/20 text-emerald-300 rounded-full border border-emerald-400/30 text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};
