import React from 'react';

    function Internships() {
      const internships = [
        {
          title: 'Software Engineering Intern',
          company: 'TechCorp',
          duration: 'June 2025 - August 2025',
          link: 'https://internshala.com/internships/software-development-internship/',
          image: 'https://wallpapercave.com/wp/wp7723775.jpg'
        },
        {
          title: 'Data Scientist Intern',
          company: 'INTERNSHALA',
          duration: 'May 2025 - July 2025',
          link: 'https://internshala.com/internships/data-science-internship/',
          image: 'https://www.firstnaukri.com/career-guidance/wp-content/uploads/2023/11/what-is-data-science.jpg'
        },
        {
          title: 'Cloud Computing Intern',
          company: 'INTERNSHALA',
          duration: 'July 2025 - September 2025',
          link: 'https://internshala.com/internships/cloud-computing-internship/',
          image: 'https://i0.wp.com/biztechcollege.com/wp-content/uploads/2021/05/Cloud-Engineer.png'
        },
        {
          title: 'AI Intern',
          company: 'INTERNSHALA',
          duration: 'August 2025 - October 2025',
          link: 'https://internshala.com/internships/artificial-intelligence-ai-internship/',
          image: 'https://cdn.open-pr.com/W/8/W801652820_g.jpg'
        },
        {
          title: 'Frontend Developer Intern',
          company: 'INTERNSHALA',
          duration: 'June 2025 - August 2025',
          link: 'https://internshala.com/internships/front-end-development-internship/',
          image: 'https://wallpapercave.com/wp/wp11301620.jpg'
        },
        {
          title: 'Backend Developer Intern',
          company: 'INTERNSHALA',
          duration: 'May 2025 - July 2025',
          link: 'https://internshala.com/internships/backend-development-internship/',
          image: 'https://images.ctfassets.net/aq13lwl6616q/2w6RsKsVuc0IwHImyqx1TZ/030dff02ec89e35c72cfff4f66f0065e/Become_a_Backend_Developer.jpg?w=800&h=450&fl=progressive&q=50&fm=jpg&bg=transparent'
        },
        {
          title: 'Data Analyst Intern',
          company: 'Data Insights Inc.',
          duration: 'July 2025 - September 2025',
          link: 'https://internshala.com/internships/data-analytics-internship/',
          image: 'https://www.simplilearn.com/ice9/free_resources_article_thumb/How_to_Become_a_Data_Analyst.jpg'
        },
        {
          title: 'Network Engineer Intern',
          company: 'NetSolutions',
          duration: 'August 2025 - October 2025',
          link: 'https://internshala.com/internships/network-engineering-internship/',
          image: 'https://th.bing.com/th/id/OIP.AujSUgBbl7VqUVS9Eb9e-gHaEQ?w=1998&h=1147&rs=1&pid=ImgDetMain'
        },
        {
          title: 'Cybersecurity Intern',
          company: 'SecureTech',
          duration: 'June 2025 - August 2025',
          link: 'https://internshala.com/internships/cyber-security-internship/',
          image: 'https://candid.technology/wp-content/uploads/2019/04/cyber-security-1784985_1280.png'
        },
        {
          title: 'Mobile App Development Intern',
          company: 'AppMakers',
          duration: 'May 2025 - July 2025',
          link: 'https://internshala.com/internships/mobile-app-development-internship/',
          image: 'https://dxbapps.com/blogimages/mobile-app-development-company-dubai.jpg'
        },
        {
          title: 'UI/UX Design Intern',
          company: 'DesignHub',
          duration: 'July 2025 - September 2025',
          link: 'https://internshala.com/internships/ui-ux-design-internship/',
          image: 'https://i.pinimg.com/originals/a9/cc/75/a9cc75c1c6142c330d5697509c5268c5.jpg'
        },
        {
          title: 'Game Development Intern',
          company: 'GameOn Studios',
          duration: 'August 2025 - October 2025',
          link: 'https://internshala.com/internships/game-development-internship/',
          image: 'https://wallpaperbat.com/img/1949757-game-dev-setup.jpg'
        }
      ];

      return (
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold text-center mb-12">All Internships</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {internships.map((internship) => (
              <a
                key={internship.title}
                href={internship.link}
                className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-blue-500/20 hover:shadow-[0_0_12px_5px_rgba(0,0,255,0.4)] hover:scale-105 transition-all duration-300 glow-card"
              >
                <div className="relative w-full h-48 mb-6">
                  <img src={internship.image} alt={internship.title} className="object-cover w-full h-full" />
                </div>
                <div className="p-6">
                  <h3 className="text-2xl font-semibold group-hover:text-blue-400 mb-2">{internship.title}</h3>
                  <p className="text-lg text-gray-400 mb-4">{internship.company}</p>
                  <p className="text-gray-400">{internship.duration}</p>
                </div>
                <div className="text-center mt-4">
                  <button
                    onClick={() => window.open(internship.link, "_blank")}
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all"
                  >
                    Register Now
                  </button>
                </div>
              </a>
            ))}
          </div>
        </div>
      );
    }

    export default Internships;
