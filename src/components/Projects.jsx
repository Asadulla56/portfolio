import React from "react";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Hotel Booking App",
      description:
        "A full-stack hotel booking platform with user authentication, room search, and booking management.",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?w=800&h=500&fit=crop",
      tech: ["React", "Tailwind CSS", "Node.js", "Express", "MongoDB"],
      liveUrl: "#",
      githubUrl: "https://github.com/Asadulla56/Hostel-Booking",
    },
    {
      title: "E-Commerce shopHub",
      description:
        "Admin dashboard for managing products, orders, and customer data with real-time analytics.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=500&fit=crop",
      tech: ["React", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "https://github.com/Asadulla56/shophub",
    },
    {
      title: "Task Management App",
      description:
        "Collaborative task management tool with drag-and-drop functionality and team features.",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=800&h=500&fit=crop",
      tech: ["React", "Tailwind CSS", "Firebase"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden transform transition-all hover:scale-105 hover:shadow-lg group flex flex-col"
            >
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-bold mb-2 group-hover:text-blue-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4 text-sm flex-grow">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-100 text-blue-600 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Buttons (mt-auto pushes them to the bottom) */}
                <div className="mt-auto flex gap-3 flex-col sm:flex-row">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center hover:opacity-90 transition-all duration-300 text-sm font-medium"
                  >
                    <ExternalLink className="mr-2" size={16} />
                    Live Demo
                  </a>
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 px-4 py-2 border-2 border-blue-600 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-600 hover:text-white transition-all duration-300 text-sm font-medium"
                  >
                    <Github className="mr-2" size={16} />
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;