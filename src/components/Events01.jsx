import React, { useState } from 'react';

    function Events01() {
      const allEvents = [
        {
          title: "HACKHAZARDS '25",
          date: 'Mar 16 - 17, 2024',
          description: "Join us at HACKHAZARDS, the ultimate tech showdown hosted by nameSpace, the largest tech society at IP University New Delhi! 🌟",
          image: 'https://devfolio.co/blog/content/images/size/w1000/2021/04/Artboard-7.png',
          registrationLink: 'https://hackhazards24.devfolio.co/',
          location: 'New Delhi, India',
          category: 'Coding, Problem-Solving, and Innovation'
        },
        {
          title: 'Google Cloud x MLB(TM) Hackathon',
          date: '5 Feb 2025 @ 3:30am',
          description: 'Google Cloud x MLB(TM) Hackathon – Building with Gemini Models Build the future of baseball using Google Cloud.',
          image: 'https://d112y698adiu2z.cloudfront.net/photos/production/challenge_photos/003/181/708/datas/full_width.png',
          registrationLink: 'https://next2025challenge.devpost.com/',
          location: 'Innovation Hub',
          category: 'Google Cloud'
        },
        {
          title: 'Smart India Hackathon',
          date: 'Aug-Sept 2025',
          description: 'Sparkathon is an open innovation challenge for Indian students to build cutting-edge tech solutions and create delightful shopping experiences. This year, you have an exclusive opportunity to reimagine a new era of retail that blurs the lines between the online and offline worlds more than ever. ',
          image: 'https://www.thehighereducationreview.com/newsimagespl/yfbZM507.png',
          registrationLink: 'https://sih.gov.in/',
          location: 'Virtual Event',
          category: 'Hackathon'
        },
        {
          title: 'Sparkathon 2025',
          date: 'July-Aug 2025',
          description: 'Deep dive into modern cloud architecture, serverless computing, and best practices. Features hands-on labs and certification preparation guidance.',
          image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000',
          registrationLink: 'https://walmart.converge.tech/content/converge/en_in/sparkathon.html',
          location: 'Tech Center',
          category: 'Open Innovation Challenge'
        },
        {
          title: 'India Tech Summit',
          date: 'Tuesday, July 15 · 10am - 1pm IST',
          description: 'India Tech Summit is an international program featuring global speakers and partners passionate about the future of India.',
          image: 'https://data1.ibtimes.co.in/en/full/625607/india-uk-tech-summit.jpg',
          registrationLink: 'https://www.eventbrite.com/e/india-tech-summit-tickets-97765875365?aff=ebdssbdestsearch',
          location: 'New Delhi',
          category: 'Summit'
        },
        {
          title: 'Google Girl Hackathon',
          date: 'March- April 2025',
          description: 'Girl Hackathon is a program for women students in computer science and allied courses across India. It has been designed to provide a platform for women in the engineering campus space to showcase their coding skills and promote creative solutions for real time technical challenges. ',
          image: 'https://assets.techcircle.in/uploads/article-image/2022/03/images/28686-google-hackathon.jpg',
          registrationLink: 'https://buildyourfuture.withgoogle.com/programs/girl-hackathon',
          location: 'Virtual (India)',
          category: 'Girl Hackathon'
        },
        // Add more Hackathon events here if needed
      ];

      const [visibleEvents, setVisibleEvents] = useState(4); // Initially show 4 events

      return (
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold text-center mb-12">Upcoming Events</h1>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {allEvents.slice(0, visibleEvents).map((event) => (
              <div
                key={event.title}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-blue-500/20 overflow-hidden
                         hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1
                         hover:shadow-lg hover:shadow-blue-500/20 flex flex-col"
              >
                <div className="h-36 overflow-hidden">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <span className="text-sm text-blue-400 mb-2 inline-block">{event.category}</span>
                      <h3 className="text-xl font-semibold">{event.title}</h3>
                    </div>
                    <span className="text-blue-400 text-sm">{event.date}</span>
                  </div>
                  <p className="text-gray-300 mb-4 flex-grow">{event.description}</p>
                  <div className="flex items-center text-sm text-gray-400 mb-4">
                    <span>📍 {event.location}</span>
                  </div>
                  <div className="text-center mt-auto">
                    <a
                      href={event.registrationLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-block px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600
                               transition-colors duration-200 transform hover:-translate-y-1"
                    >
                      Register Now
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }

    export default Events01;
