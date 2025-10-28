import React from "react";
import { ArrowRight, Sparkles } from "lucide-react"; 
import { motion } from "framer-motion";

import myPhoto from "../assets/Picsart_25-06-25_22-59-47-897.jpg";

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section
      id="home"
      className="relative min-h-screen w-full
                 bg-gradient-to-b from-[rgb(10,15,28)] via-[#0C1224] to-[#1A237E] text-white
                 overflow-hidden
                 flex items-center"
    >
      {/* Background Orbs */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl opacity-50"></div>
      <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-3xl opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10 pt-24 pb-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            className="flex flex-col justify-center text-center lg:text-left"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Greeting */}
            <motion.div
              className="flex items-center justify-center lg:justify-start gap-2 mb-4"
              variants={itemVariants}
            >
              <Sparkles className="w-5 h-5 text-cyan-400" />
              <p className="text-cyan-400 font-medium tracking-wide">
                Hi, I'm glad you're here
              </p>
            </motion.div>

            {/* Name */}
            <motion.h1
              className="text-4xl md:text-6xl font-extrabold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
              variants={itemVariants}
            >
              Md Asadulla
            </motion.h1>

            {/* Role */}
            <motion.h2
              className="text-2xl md:text-3xl text-gray-300 font-semibold mb-6"
              variants={itemVariants}
            >
              Front-End Developer
            </motion.h2>

            {/* Short intro */}
            <motion.p
              className="text-gray-400 text-lg md:text-xl mb-10 leading-relaxed max-w-xl mx-auto lg:mx-0"
              variants={itemVariants}
            >
              I craft modern, responsive, and user-friendly web experiences.
              Turning ideas into interactive digital products is what I love
              most.
            </motion.p>

            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={itemVariants}
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
          </motion.div>
          <div className="relative  lg:flex items-center justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="w-full max-w-[450px] h-[450px] bg-white/5 backdrop-blur-xl rounded-2xl border border-cyan-400/20 shadow-2xl flex items-center justify-center p-8 overflow-hidden"
            >
              <motion.img
                src={myPhoto} 
                alt="Md Asadulla"
                className="w-full h-full object-cover rounded-xl"
                animate={{
                  y: [0, -10, 0], 
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;