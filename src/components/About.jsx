import React from "react";
import { MapPin, GraduationCap, Code } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* About Content */}
        <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-md p-6 md:p-8">
          <p className="text-lg text-gray-600 mb-8 leading-relaxed">
            I'm Md Asadulla, a Diploma student in Computer Science & Technology (CST). 
            I enjoy creating clean, interactive, and user-friendly web interfaces. 
            My passion lies in transforming ideas into beautiful, functional websites 
            that provide exceptional user experiences.
          </p>

          {/* Info Grid */}
          <div className="grid md:grid-cols-3 gap-6">
            {/* Education */}
            <div className="flex items-start space-x-3">
              <div className="p-3 rounded-lg bg-blue-100">
                <GraduationCap className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Education</h3>
                <p className="text-sm text-gray-500">Diploma in CST</p>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start space-x-3">
              <div className="p-3 rounded-lg bg-blue-100">
                <MapPin className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Location</h3>
                <p className="text-sm text-gray-500">Bangladesh</p>
              </div>
            </div>

            {/* Focus */}
            <div className="flex items-start space-x-3">
              <div className="p-3 rounded-lg bg-blue-100">
                <Code className="text-blue-600" size={24} />
              </div>
              <div>
                <h3 className="font-semibold mb-1">Focus</h3>
                <p className="text-sm text-gray-500">Frontend Development</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
