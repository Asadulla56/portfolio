import React, { useState } from "react";
import { Mail, Github, Linkedin, Send } from "lucide-react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message Sent! Thank you for reaching out. I'll get back to you soon!");
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto rounded-full"></div>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="bg-white rounded-xl shadow-md p-6 md:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring focus:ring-blue-200 outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring focus:ring-blue-200 outline-none"
              />
              <textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:border-blue-600 focus:ring focus:ring-blue-200 outline-none resize-none"
              ></textarea>
              <button
                type="submit"
                className="w-full px-4 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full flex items-center justify-center hover:opacity-90 transition-all duration-300"
              >
                <Send className="mr-2" size={18} />
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <div className="space-y-4">
                <a
                  href="mailto:asadulla@example.com"
                  className="flex items-center space-x-3 text-gray-600 hover:text-blue-600 transition-colors"
                >
                  <div className="p-2 rounded-lg bg-blue-100">
                    <Mail className="text-blue-600" size={20} />
                  </div>
                  <span>asadulla@example.com</span>
                </a>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-6">
              <h3 className="text-xl font-bold mb-4">Follow Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/asadulla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-blue-100 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 flex items-center justify-center"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/asadulla"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-blue-100 hover:bg-blue-600 hover:text-white transition-all duration-300 hover:scale-110 flex items-center justify-center"
                >
                  <Linkedin size={24} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
