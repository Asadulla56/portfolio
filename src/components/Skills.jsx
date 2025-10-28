import React from "react";

const Skills = () => {
  const skills = [
    { name: "HTML5", icon: "🌐", level: 90 },
    { name: "CSS3", icon: "🎨", level: 85 },
    { name: "JavaScript", icon: "⚡", level: 80 },
    { name: "React", icon: "⚛️", level: 85 },
    { name: "Tailwind CSS", icon: "🎭", level: 90 },
    { name: "Git & GitHub", icon: "📦", level: 75 },
    { name: "VS Code", icon: "💻", level: 95 },
    { name: "Figma", icon: "🎯", level: 70 },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        {/* Skills Grid */}
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md p-6 text-center transform transition-all hover:scale-105 hover:-translate-y-2 cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-4xl md:text-5xl mb-3">{skill.icon}</div>
              <h3 className="font-semibold mb-2 text-sm md:text-base">{skill.name}</h3>

              {/* Skill bar */}
              <div className="w-full bg-gray-200 rounded-full h-2 mb-2">
                <div
                  className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>

              <span className="text-xs text-gray-500">{skill.level}%</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
