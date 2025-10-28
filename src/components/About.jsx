import React from "react";
import { Download, GraduationCap, MapPin, Code2 } from "lucide-react";
import  motion  from "framer-motion";
import myPhoto from "../assets/Picsart_25-06-25_22-59-47-897.jpg"; 

const About = () => {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-br from-[#0A0F1C] via-[#0C1224] to-[#1A237E] text-white overflow-hidden"
    >
      {/* Floating Glow Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(0,102,255,0.15),transparent_60%)]"></div>

      <div className="container mx-auto max-w-6xl px-6 relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 to-blue-500"
        >
          About Me
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative flex justify-center"
          >
            <div className="relative w-80 h-80 md:w-96 md:h-96 rounded-2xl overflow-hidden shadow-2xl group">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-400/30 to-blue-600/30 group-hover:opacity-70 transition duration-500"></div>
              <img
                src={myPhoto}
                alt="Md Asadulla"
                className="relative  w-full h-full object-cover border-4 border-blue-500/30 shadow-lg"
              />
              <div className="absolute inset-0 border border-cyan-500/30 rounded-2xl"></div>
            </div>
          </motion.div>

          {/* Text Info */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <p className="text-lg leading-relaxed text-gray-300">
              Hello! I'm{" "}
              <span className="font-semibold text-cyan-400">
                Md Asadulla
              </span>
              , a passionate front-end developer and Diploma student in Computer
              Science & Technology. I love crafting clean, modern, and
              responsive web interfaces using{" "}
              <span className="font-semibold text-blue-400">React</span> and{" "}
              <span className="font-semibold text-blue-400">Tailwind CSS</span>.
              My goal is to turn ideas into beautiful digital experiences.
            </p>

            <div className="grid gap-4">
              <div className="flex items-center gap-3 text-gray-300">
                <Code2 className="w-5 h-5 text-cyan-400" />
                <span>
                  <strong>Specialization:</strong> Front-End Development
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <GraduationCap className="w-5 h-5 text-cyan-400" />
                <span>
                  <strong>Education:</strong> Diploma in CST
                </span>
              </div>
              <div className="flex items-center gap-3 text-gray-300">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>
                  <strong>Location:</strong> Bangladesh
                </span>
              </div>
            </div>

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/Asad%20(3).pdf"
              download
              className="inline-flex items-center gap-2 mt-6 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full font-semibold shadow-lg hover:shadow-cyan-500/30 transition"
            >
              <Download className="w-5 h-5" />
              Download CV
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
