import React from "react";
import { Code2, Palette, GitBranch } from "lucide-react"; // Removed unused imports (Figma, Github)

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      icon: Code2,
      skills: ["HTML", "CSS", "JavaScript", "React", "Tailwind CSS","Firebase"],
    },
    {
      title: "Backend",
      icon: Code2,
      skills: ["Node.js","TypeScript", "Express.js", "JWT", "MongoDB and Mongoose",],
    },
    {
      title: "Design",
      icon: Palette,
      skills: ["Responsive Design", "Modern Layouts"],
    },
    {
      title: "Tools",
      icon: GitBranch,
      skills: ["Git", "GitHub", "VS Code", "Figma", "npm"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-100"> 
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gray-800">
          Skills & Expertise
        </h2>

        {/* Skills Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon; 
            return (
              <div
                key={idx}
                className="bg-white rounded-xl p-8 border border-gray-200 shadow-md transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Card Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900">
                    {category.title}
                  </h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIdx) => (
                    <span
                      key={skillIdx}
                      className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700 hover:bg-blue-600 hover:text-white transition-colors duration-300 cursor-default"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;