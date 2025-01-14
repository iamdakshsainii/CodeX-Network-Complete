import React from 'react';
    import { FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
    import { Link } from 'react-router-dom';

    function HeaderSection({ className }) {
      return (
        <header className={`text-center py-24 px-4 mt-16 ${className} flex items-center justify-center h-[calc(100vh-4rem)] relative overflow-hidden transition-opacity duration-500`}>
          <div className="max-w-3xl z-10">
            <h1 className="text-6xl font-bold mb-6">
              CodeX
              <span className="text-blue-500"> Network</span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              Your comprehensive resource hub for B.Tech students - from study materials to career opportunities
            </p>
             <div className="flex justify-center space-x-4 mb-8">
              <Link to="/internships" className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors duration-200">
                Explore Internships
              </Link>
              <Link to="/careers" className="px-6 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition-colors duration-200">
                Explore Careers
              </Link>
            </div>
            <div className="flex justify-center space-x-4 mt-4">
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
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-40 z-0"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl z-0"></div>
        </header>
      );
    }

    export default HeaderSection;
