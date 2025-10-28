import React from "react";
import { ArrowRight } from "lucide-react";
import myPhoto from "../assets/Picsart_25-06-25_22-59-47-897.jpg"; 

const Hero = () => {
  const scrollToSection = (href) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-gradient-to-b from-blue-50 to-white relative overflow-hidden"
    >
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div
          className="absolute bottom-1/4 -right-20 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left side - Photo */}
          <div className="order-2 md:order-1 animate-slide-in-left">
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full blur-2xl opacity-30 animate-pulse"></div>
              <img
                src={myPhoto} 
                alt="Md Asadulla"
                className="relative rounded-full w-full h-full object-cover border-4 border-blue-500/30 shadow-lg"
              />
            </div>
          </div>

          {/* Right side - Info */}
          <div className="order-1 md:order-2 text-center md:text-left animate-slide-in-right">
            <h2 className="text-lg md:text-xl text-blue-600 mb-2 font-medium">
              Hi, I'm
            </h2>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-gray-800">
              Md Asadulla
            </h1>
            <h3 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Front-End Developer
            </h3>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <button
                className="px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full hover:opacity-90 transition-all duration-300 shadow-md flex items-center justify-center group"
                onClick={() => scrollToSection("#projects")}
              >
                View My Work
                <ArrowRight
                  className="ml-2 group-hover:translate-x-1 transition-transform"
                  size={18}
                />
              </button>

              <button
                className="px-6 py-3 border-2 border-blue-600 text-blue-600 rounded-full hover:bg-blue-600 hover:text-white transition-all duration-300 shadow-md flex items-center justify-center"
                onClick={() => scrollToSection("#contact")}
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
