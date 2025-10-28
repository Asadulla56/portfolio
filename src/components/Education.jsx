import React from "react";
import { GraduationCap, Calendar } from "lucide-react";

const Education = () => {
  const education = [
    {
      year: "2022 - 2025",
      course: "Diploma in Computer Science & Technology",
      institution: "Moulviazar Polytechnic Institute",
      description:
        "Focused on web development, programming fundamentals, and software engineering.",
    },
    {
      year: "2021",
      course: "Secondary School Certificate (SSC)",
      institution: "Shamsurnnahar Osman Ghani Shikka Niketon",
      description:
        "Completed secondary education with focus on science and mathematics.",
    },
  ];

  return (
    <section id="education" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Education</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Education Cards */}
        <div className="max-w-4xl mx-auto space-y-6">
          {education.map((edu, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 md:p-8 transform transition-all hover:scale-105 hover:shadow-lg"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="p-3 rounded-lg bg-blue-100">
                    <GraduationCap className="text-blue-600" size={32} />
                  </div>
                </div>

                {/* Education Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <Calendar className="text-blue-600" size={16} />
                    <span className="text-sm text-blue-600 font-medium">{edu.year}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{edu.course}</h3>
                  <p className="text-gray-600 font-medium mb-2">{edu.institution}</p>
                  <p className="text-sm text-gray-500">{edu.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
