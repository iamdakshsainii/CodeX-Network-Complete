import React from 'react';

    function EventCard({ event }) {
      return (
        <div
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
      );
    }

    export default EventCard;
