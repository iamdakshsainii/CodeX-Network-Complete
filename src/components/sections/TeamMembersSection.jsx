import React, { useState } from 'react';
import { FaInstagram, FaLinkedin, FaGithub } from 'react-icons/fa';

const teamMembers = [
  {
    name: 'Daksh Saini',
    title: 'Founder & Developer',
    image: 'src/img/founder.jpg',
    intro: 'Founder of CodeX Network and Passionate B.Tech student with expertise in web development. On a mission to make learning accessible and fun!',
    social: {
      instagram: 'https://www.instagram.com/dakshsainii/',
      linkedin: 'https://www.linkedin.com/in/dakshsainii/',
      github: 'https://github.com/iamdakshsainii',
    },
  },
  {
    name: 'Ashish Soni',
    title: 'Founder Member & Lead Generator',
    image: 'src/img/ashish.jpg',
    intro: 'Founder member and Passionate Coder ',
    social: {
      instagram: 'https://www.instagram.com/ashishxsoni/#',
      linkedin: 'https://www.linkedin.com/in/ashishxsoni/',
      github: 'https://github.com/ashishxsoni',
    },
  },
  {
    name: 'Saurabh Yadav',
    title: 'Social Media Manager',
    image: 'src/img/saurabh.jpg',
    intro: 'Experienced backend developer with a strong background in server-side technologies. Building the backbone of the web, one API at a time!',
    social: {
      instagram: 'https://www.instagram.com/thesaurabhyadavv',
      linkedin: 'https://www.linkedin.com/in/saurabh-yadav-5301381b2',
      github: null,
    },
  },
  {
    name: 'Vishakha Mishra',
    title: 'Manager & Content Writer',
    image: 'src/img/vishaka.jpg',
    intro: 'Frontend enthusiast with a passion for creating engaging and responsive user interfaces. Turning ideas into interactive experiences!',
    social: {
      instagram: 'https://www.instagram.com/itz_vishakha_24/',
      linkedin: 'https://www.linkedin.com/in/vishakha-mishra-54b62a258',
      github: 'https://github.com/vishakha2406',
    },
  },
  {
    name: 'Tanishka Singh',
    title: 'Technical & PR Head',
    image: 'src/img/tanishka.jpg',
    intro: 'Data scientist with a knack for extracting insights from complex datasets and building predictive models. Making sense of data, one analysis at a time!',
    social: {
      instagram: null,
      linkedin: 'https://www.linkedin.com/in/tanishka-singh-5b34252ba',
      github: 'https://github.com/sin-tan',
    },
  },
  {
    name: 'Rohit Yadav',
    title: 'Marketing head & Event Organiser',
    image: 'src/img/rohit.jpg',
    intro: 'Mobile app developer with a passion for creating innovative and user-friendly mobile experiences. Bringing ideas to your fingertips!',
    social: {
      instagram: 'https://www.instagram.com/rohit.ayadav/',
      linkedin: 'https://www.linkedin.com/in/rohit-kumar-yadav-7b5805250/',
      github: 'https://github.com/rohit-ayadav',
    },
  },
];


function TeamMembersSection() {
    const [currentMemberIndex, setCurrentMemberIndex] = useState(0);

    const handlePrevMember = () => {
      setCurrentMemberIndex((prevIndex) =>
        prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
      );
    };

    const handleNextMember = () => {
      setCurrentMemberIndex((prevIndex) =>
        prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
      );
    };

    const currentMember = teamMembers[currentMemberIndex];

    return (
      <section id="team-members" className="container mx-auto px-4 py-16 mb-16">
        <h2 className="text-4xl font-bold text-center mb-12">Meet the Minds Behind CodeX</h2>
        <p className="text-gray-400 text-center mb-8">
          We're a team of passionate individuals dedicated to making learning accessible and fun for all engineering students.
        </p>
        <div className="relative max-w-3xl mx-auto">
          <div className="flex justify-center items-center">
            <button
              onClick={handlePrevMember}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-blue-500 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
            </button>
            <div className="text-center">
              <div className="relative w-48 h-48 mx-auto mb-8">
                <img
                  src={currentMember.image}
                  alt={currentMember.name}
                  className="rounded-full w-full h-full object-cover border-4 border-blue-500/50"
                />
              </div>
              <h3 className="text-2xl font-semibold mb-2">{currentMember.name}</h3>
              <p className="text-blue-400 mb-4">{currentMember.title}</p>
              <p className="text-gray-300 mb-6 max-w-md mx-auto">{currentMember.intro}</p>
              <div className="flex justify-center space-x-4">
                {currentMember.social.instagram && (
                  <a href={currentMember.social.instagram} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                    <FaInstagram className="h-6 w-6" />
                  </a>
                )}
                {currentMember.social.linkedin && (
                  <a href={currentMember.social.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                    <FaLinkedin className="h-6 w-6" />
                  </a>
                )}
                {currentMember.social.github && (
                  <a href={currentMember.social.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-500">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github w-6 h-6">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7a3.37 3.37 0 0 0-.94 2.61V22" />
                    </svg>
                  </a>
                )}
              </div>
            </div>
            <button
              onClick={handleNextMember}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 p-2 text-gray-400 hover:text-blue-500 focus:outline-none"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
        </div>
      </section>
    );
  }

  export default TeamMembersSection;
