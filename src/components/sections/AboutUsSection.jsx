import React from 'react';
    import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';

    function AboutUsSection({ className }) {
      return (
        <section id="about-us" className={`container mx-auto px-4 py-16 mb-16 ${className} transition-opacity duration-500`}>
          <h2 className="text-4xl font-bold text-center mb-12">About Us</h2>
          <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20 hover:shadow-[0_0_12px_5px_rgba(0,0,255,0.4)] hover:scale-105 transition-all duration-300 glow-card max-w-xl">
              <h3 className="text-xl font-semibold mb-4">Why CodeX Network?</h3>
              <p className="text-gray-400 mb-4">
                CodeX Network is designed to empower B.Tech students with the right tools, resources, and career pathways to succeed in their academic and professional journey. Our platform consolidates study materials, internship opportunities, and career guidance, ensuring students have access to everything they need to thrive.
              </p>
              <div className="flex justify-start space-x-4 mt-4">
                <a href="https://www.instagram.com/your_instagram_profile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                  <FaInstagram className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/in/your_linkedin_profile" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                  <FaLinkedin className="h-6 w-6" />
                </a>
                 <a href="https://wa.me/your_whatsapp_number" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                  <FaWhatsapp className="h-6 w-6" />
                </a>
              </div>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-6 rounded-lg border border-blue-500/20 hover:shadow-[0_0_12px_5px_rgba(0,0,255,0.4)] hover:scale-105 transition-all duration-300 glow-card max-w-xl">
              <h3 className="text-xl font-semibold mb-4">Target Audience</h3>
              <p className="text-gray-400">
                Our platform is tailored for B.Tech students across various disciplines. Whether you're just starting your journey or looking for specific career guidance, CodeX Network provides the resources, notes, and opportunities to help you succeed and stand out in your field.
              </p>
            </div>
          </div>
        </section>
      );
    }

    export default AboutUsSection;
