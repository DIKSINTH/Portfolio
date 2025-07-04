import React from "react";
import { motion } from "framer-motion";
import { Award, Book, Heart, Code } from "lucide-react";
import Diksinth from "../images/diksinth.jpg"; // Adjust the path as needed

export const About: React.FC = () => {
  const stats = [
    { icon: Award, label: "Years Experience", value: "0" },
    { icon: Book, label: "Projects Completed", value: "6+" },
    { icon: Code, label: "Lines of Code", value: "4,000+" },
    { icon: Heart, label: "Happy Clients", value: "0" },
  ];

  return (
    <div className="pt-24 pb-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-6">
            About{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Me
            </span>
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I enjoy creating simple and helpful digital experiences for people
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-2xl backdrop-blur-sm border border-white/10 flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white text-6xl font-bold">
                  <img
                    src={Diksinth}
                    style={{ borderRadius: "90%" }}
                    alt="diksinth"
                  ></img>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-emerald-400 to-blue-500 rounded-full opacity-70 animate-pulse" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full opacity-50 animate-pulse delay-1000" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white mb-6">My Story</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm a fresher Full Stack Developer with a strong interest in
              building useful and user-friendly web applications. My journey
              started with curiosity about how websites work, and now I'm
              excited to turn that interest into real projects.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              I'm learning and working with modern technologies like HTML, CSS,
              JavaScript, React, and Node.js. I enjoy solving problems, writing
              clean code, and improving my skills every day.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              When I'm not coding, I like exploring new tools, building small
              projects, and learning from the developer community.
            </p>
            <p className="text-gray-300 text-lg leading-relaxed">
              "I learn something new every day—even if it's small."
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map(({ icon: Icon, label, value }, index) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon size={32} className="text-white" />
              </div>
              <div className="text-3xl font-bold text-white mb-2">{value}</div>
              <div className="text-gray-300 text-sm">{label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
