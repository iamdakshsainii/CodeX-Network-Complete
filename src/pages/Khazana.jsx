import React from 'react';
    import { Link } from 'react-router-dom';
    import * as Lucide from 'lucide-react';

    function Khazana() {
      return (
        <div className="container mx-auto py-12 px-4 flex flex-col items-center justify-center min-h-[calc(100vh-4rem)]">
          <h1 className="text-5xl font-bold text-center mb-16 relative before:absolute before:bottom-0 before:left-1/2 before:-translate-x-1/2 before:h-1 before:w-24 before:bg-blue-500 before:rounded">
            Khazana: What's Next?
          </h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-blue-500/20 p-6 hover:shadow-[0_0_12px_5px_rgba(0,0,255,0.4)] hover:scale-105 transition-all duration-300 glow-card relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-blue-500/5 opacity-20"></div>
              <div className="flex items-center mb-4 relative z-10">
                <Lucide.Users className="h-8 w-8 text-blue-500 mr-2" />
                <h3 className="text-xl font-semibold">Peer Support</h3>
              </div>
              <p className="text-gray-400 mb-4 relative z-10">
                Connect with fellow students, share experiences, and learn from each other.
              </p>
              <p className="text-gray-400 relative z-10">
                <span className="font-semibold">Coming Soon:</span> A dedicated space for peer-to-peer interaction and support.
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-blue-500/20 p-6 hover:shadow-[0_0_12px_5px_rgba(0,0,255,0.4)] hover:scale-105 transition-all duration-300 glow-card relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-blue-500/5 opacity-20"></div>
              <div className="flex items-center mb-4 relative z-10">
                <Lucide.MessageCircle className="h-8 w-8 text-blue-500 mr-2" />
                <h3 className="text-xl font-semibold">Chat with Experts</h3>
              </div>
              <p className="text-gray-400 mb-4 relative z-10">
                Get personalized guidance from industry experts and experienced professionals.
              </p>
              <p className="text-gray-400 relative z-10">
                <span className="font-semibold">Coming Soon:</span> Live chat sessions and Q&A forums with mentors.
              </p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-blue-500/20 p-6 hover:shadow-[0_0_12px_5px_rgba(0,0,255,0.4)] hover:scale-105 transition-all duration-300 glow-card relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-full bg-blue-500/5 opacity-20"></div>
              <div className="flex items-center mb-4 relative z-10">
                <Lucide.UserPlus className="h-8 w-8 text-blue-500 mr-2" />
                <h3 className="text-xl font-semibold">Mentorship Program</h3>
              </div>
              <p className="text-gray-400 mb-4 relative z-10">
                Connect with mentors who can guide you through your academic and career path.
              </p>
              <p className="text-gray-400 relative z-10">
                <span className="font-semibold">Coming Soon:</span> A structured mentorship program with experienced professionals.
              </p>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-gray-400 text-lg">
              Stay tuned for these exciting features!
            </p>
          </div>
        </div>
      );
    }

    export default Khazana;
