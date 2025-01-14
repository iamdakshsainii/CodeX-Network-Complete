import React from 'react';
    import { Link } from 'react-router-dom';
    import InternshipsLoadMore from '../InternshipsLoadMore';

    function InternshipsSection({ className }) {
      const internships = [
        {
          title: 'Software Engineering Intern',
          company: 'TechCorp',
          duration: 'June 2025 - August 2025',
          link: 'https://internshala.com/internships/software-development-internship/',
          image: 'https://wallpapercave.com/wp/wp7723775.jpg',
          location: 'Remote'
        },
        {
          title: 'Data Scientist Intern',
          company: 'INTERNSHALA',
          duration: 'May 2025 - July 2025',
          link: 'https://internshala.com/internships/data-science-internship/',
          image: 'https://www.firstnaukri.com/career-guidance/wp-content/uploads/2023/11/what-is-data-science.jpg',
          location: 'Bangalore'
        },
        {
          title: 'Cloud Computing Intern',
          company: 'INTERNSHALA',
          duration: 'July 2025 - September 2025',
          link: 'https://internshala.com/internships/cloud-computing-internship/',
          image: 'https://static.vecteezy.com/system/resources/previews/006/050/184/original/cloud-technology-background-cloud-computing-cloud-storage-internet-concept-abstract-futuristic-cyberspace-data-flow-tunnel-big-data-illustration-vector.jpg',
          location: 'Hyderabad'
        },
        {
          title: 'AI Intern',
          company: 'INTERNSHALA',
          duration: 'August 2025 - October 2025',
          link: 'https://internshala.com/internships/artificial-intelligence-ai-internship/',
          image: 'https://www.udacity.com/blog/wp-content/uploads/2021/03/Advanced-AI-Courses_Blog.jpeg',
          location: 'Mumbai'
        },
        {
          title: 'Frontend Developer Intern',
          company: 'INTERNSHALA',
          duration: 'June 2025 - August 2025',
          link: 'https://internshala.com/internships/front-end-development-internship/',
          image: 'assets/frontend-intern.jpg',
          location: 'Delhi'
        },
        {
          title: 'Backend Developer Intern',
          company: 'INTERNSHALA',
          duration: 'May 2025 - July 2025',
          link: 'https://internshala.com/internships/backend-development-internship/',
          image: 'assets/backend-intern.jpg',
          location: 'Chennai'
        },
        {
          title: 'Data Analyst Intern',
          company: 'Data Insights Inc.',
          duration: 'July 2025 - September 2025',
          link: 'https://internshala.com/internships/data-analytics-internship/',
          image: 'assets/data-analyst-intern.jpg',
          location: 'Remote'
        },
        {
          title: 'Network Engineer Intern',
          company: 'NetSolutions',
          duration: 'August 2025 - October 2025',
          link: 'https://internshala.com/internships/network-engineering-internship/',
          image: 'assets/network-intern.jpg',
          location: 'Remote'
        },
        {
          title: 'Cybersecurity Intern',
          company: 'SecureTech',
          duration: 'June 2025 - August 2025',
          link: 'https://internshala.com/internships/cyber-security-internship/',
          image: 'assets/cybersecurity-intern.jpg',
          location: 'Remote'
        },
        {
          title: 'Mobile App Development Intern',
          company: 'AppMakers',
          duration: 'May 2025 - July 2025',
          link: 'https://internshala.com/internships/mobile-app-development-internship/',
          image: 'assets/mobile-intern.jpg',
          location: 'Remote'
        },
        {
          title: 'UI/UX Design Intern',
          company: 'DesignHub',
          duration: 'July 2025 - September 2025',
          link: 'https://internshala.com/internships/ui-ux-design-internship/',
          image: 'assets/ui-ux-intern.jpg',
          location: 'Remote'
        },
        {
          title: 'Game Development Intern',
          company: 'GameOn Studios',
          duration: 'August 2025 - October 2025',
          link: 'https://internshala.com/internships/game-development-internship/',
          image: 'assets/game-intern.jpg',
          location: 'Remote'
        }
      ];

      return (
        <section id="internships" className={`container mx-auto px-4 mb-16 ${className} animate-fade-in`}>
          <h2 className="text-4xl font-bold text-center mb-12">Featured Internships</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {internships.slice(0, 3).map((internship) => (
              <div
                key={internship.title}
                className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-blue-500/20 hover:shadow-[0_0_12px_5px_rgba(0,0,255,0.4)] hover:scale-105 transition-all duration-300 glow-card"
              >
                <div className="relative w-full h-48 mb-6">
                  <img src={internship.image} alt={internship.title} className="object-cover w-full h-full" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold group-hover:text-blue-400 mb-2">{internship.title}</h3>
                  <p className="text-lg text-gray-400 mb-4">{internship.company}</p>
                  <p className="text-gray-400">{internship.duration}</p>
                  <p className="text-gray-400">📍 {internship.location}</p>
                </div>
                <div className="text-center mt-4">
                  <button
                    onClick={() => window.open(internship.link, "_blank")}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all"
                  >
                    Register Now
                  </button>
                </div>
              </div>
            ))}
          </div>
          <InternshipsLoadMore internships={internships} />
        </section>
      );
    }

    export default InternshipsSection;
