import React from 'react';

function About() {
  return (
    <div className="max-w-4xl mx-auto py-12">
      <div className="text-center mb-12">
        <div className="relative w-48 h-48 mx-auto mb-8">
          <img
            src="myimg2.jpg"
            alt="Developer"
            className="rounded-full w-full h-full object-cover border-4 border-blue-500/50"
          />
        </div>
        <h1 className="text-4xl font-bold mb-4">Daksh Saini</h1>
        <p className="text-blue-400 mb-4">Founder & Developer</p>
      </div>

      <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-lg border border-blue-500/20">
        <div className="space-y-6 text-gray-300">
          <p>
            Hello! I'm a passionate B.Tech student and developer who created this platform to help fellow engineering students access resources and opportunities more easily.
          </p>
          <p>
            With experience in web development, machine learning, and system design, I understand the challenges students face in finding quality learning materials and opportunities.
          </p>
          <p>
            This portal is my contribution to making the journey easier for other students. Feel free to connect with me through the social links provided in the LinkTree section!
          </p>

          <div className="mt-8">
            <h2 className="text-2xl font-semibold mb-4">Skills</h2>
            <div className="flex flex-wrap gap-3">
              {['React', 'Node.js', 'javascript', 'Machine Learning', 'GitHub', 'MongoDB'].map((skill) => (
                <span key={skill} className="px-4 py-2 bg-blue-500/20 rounded-full text-blue-400 border border-blue-500/30">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
