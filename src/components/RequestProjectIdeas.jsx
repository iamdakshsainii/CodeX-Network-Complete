import React, { useState } from 'react';

    function RequestProjectIdeas() {
      const [isRequestFormVisible, setIsRequestFormVisible] = useState(false);
      const [requestDetails, setRequestDetails] = useState('');
      const [requestName, setRequestName] = useState('');
      const [requestEmail, setRequestEmail] = useState('');

      const handleRequestFormOpen = () => {
        setIsRequestFormVisible(true);
      };

      const handleRequestFormClose = () => {
        setIsRequestFormVisible(false);
        setRequestDetails('');
        setRequestName('');
        setRequestEmail('');
      };

      const handleRequestSubmit = (e) => {
        e.preventDefault();
        const mailtoLink = `mailto:codexnetwork8@gmail.com?subject=Project Idea Request&body=Name: ${encodeURIComponent(requestName)}%0AEmail: ${encodeURIComponent(requestEmail)}%0ADetails: ${encodeURIComponent(requestDetails)}`;
        window.location.href = mailtoLink;
        setIsRequestFormVisible(false);
        setRequestDetails('');
        setRequestName('');
        setRequestEmail('');
      };

      return (
        <div className="text-center mt-8">
          <h2 className="text-2xl font-semibold mb-4">
            Can't find the project you need?
          </h2>
          <p className="text-gray-400 mb-6">
            Request specific project ideas, and we'll do our best to help!
          </p>
          <button
            onClick={handleRequestFormOpen}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
          >
            Request Project Ideas
          </button>
          {isRequestFormVisible && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full">
                <h3 className="text-2xl font-semibold text-center mb-4">Request Project Ideas</h3>
                <p className="text-gray-400 text-center mb-4">
                  Please provide your details and the project ideas you are looking for.
                </p>
                <form onSubmit={handleRequestSubmit} className="space-y-4">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      value={requestName}
                      onChange={(e) => setRequestName(e.target.value)}
                      className="w-full p-3 bg-gray-700 rounded border border-blue-500/20 focus:outline-none focus:border-blue-500 text-white"
                      required
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      value={requestEmail}
                      onChange={(e) => setRequestEmail(e.target.value)}
                      className="w-full p-3 bg-gray-700 rounded border border-blue-500/20 focus:outline-none focus:border-blue-500 text-white"
                      required
                    />
                  </div>
                  <div>
                    <textarea
                      value={requestDetails}
                      onChange={(e) => setRequestDetails(e.target.value)}
                      placeholder="Enter your request details here..."
                      className="w-full p-3 bg-gray-700 rounded border border-blue-500/20 focus:outline-none focus:border-blue-500 text-white"
                      rows="4"
                      required
                    />
                  </div>
                  <div className="text-center">
                    <button
                      type="submit"
                      className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                    >
                      Submit Request
                    </button>
                    <button
                      type="button"
                      onClick={handleRequestFormClose}
                      className="ml-4 px-4 py-2 bg-gray-600 text-white rounded-lg hover:bg-gray-700 transition-colors duration-200"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </div>
            </div>
          )}
        </div>
      );
    }

    export default RequestProjectIdeas;
