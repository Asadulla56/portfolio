import React from "react";
import { ArrowRight, Code2, Sparkles } from "lucide-react";
import { motion } from "framer-motion";


const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#0A0F1C] via-[#0C1224] to-[#1A237E] text-white overflow-hidden"
    >
      {/* Glowing background orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="relative z-10 text-center px-6 max-w-3xl">
        {/* Greeting */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex items-center justify-center gap-2 mb-4"
        >
          <Sparkles className="w-5 h-5 text-cyan-400" />
          <p className="text-cyan-400 font-medium tracking-wide">
            Hi, I'm glad you're here
          </p>
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl md:text-6xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          Md Asadulla
        </motion.h1>

        {/* Role */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="text-2xl md:text-3xl text-gray-300 font-semibold mb-6"
        >
          Front-End Developer 
        </motion.h2>

        {/* Short intro */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed"
        >
          I craft modern, responsive, and user-friendly web experiences.
          Turning ideas into interactive digital products is what I love most.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button
            onClick={() => scrollToSection("#projects")}
            className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full text-white font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-cyan-500/30 transition-transform hover:scale-105"
          >
            View My Work
            <ArrowRight className="w-5 h-5" />
          </button>

          <button
            onClick={() => scrollToSection("#contact")}
            className="px-8 py-3 border-2 border-cyan-400 rounded-full text-cyan-400 font-semibold hover:bg-cyan-400 hover:text-white transition-all duration-300"
          >
            Contact Me
          </button>
        </motion.div>

        {/* Floating code icon */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="absolute bottom-10 right-10 hidden md:block"
        >
          <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-cyan-400/20 shadow-lg">
            <Code2 className="w-8 h-8 text-cyan-400 animate-bounce" />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
