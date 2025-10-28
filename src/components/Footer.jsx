import React from "react";
import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-gray-100 border-t border-gray-300 py-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Copyright */}
          <p className="text-gray-500 text-sm text-center md:text-left">
            © 2025 Md Asadulla. All rights reserved.
          </p>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/asadulla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://linkedin.com/in/asadulla"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:asadulla@example.com"
              className="text-gray-500 hover:text-blue-600 transition-colors"
            >
              <Mail size={20} />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="px-4 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center hover:opacity-90 transition-all duration-300"
          >
            <ArrowUp size={16} className="mr-2" />
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
