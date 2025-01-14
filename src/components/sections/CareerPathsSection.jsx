import React from 'react';
    import { Link } from 'react-router-dom';

    function CareerPathsSection({ className }) {
      const careerPaths = [
        {
          title: 'Software Developer',
          description: 'Build and maintain software applications.',
          link: '/careers/software-developer',
          skills: ['Java', 'C++', 'Problem Solving'],
          icon: <span className="material-icons">code</span>
        },
        {
          title: 'Data Scientist',
          description: 'Analyze and interpret complex data to help companies make decisions.',
          link: '/careers/data-scientist',
          skills: ['Python', 'Machine Learning', 'Statistics'],
          icon: <span className="material-icons">bar_chart</span>
        },
        {
          title: 'Cloud Engineer',
          description: 'Design and manage cloud infrastructure.',
          link: '/careers/cloud-engineer',
          skills: ['AWS', 'Azure', 'Docker'],
          icon: <span className="material-icons">cloud</span>
        },
        {
          title: 'Game Developer',
          description: 'Create interactive games for various platforms.',
          link: '/careers/game-developer',
          skills: ['Unity', 'C#', 'Game Design'],
          icon: <span className="material-icons">sports_esports</span>
        },
        {
          title: 'Cybersecurity Analyst',
          description: 'Protect computer systems and networks from threats.',
          link: '/careers/cybersecurity-analyst',
          skills: ['Network Security', 'Ethical Hacking', 'Cryptography'],
          icon: <span className="material-icons">security</span>
        },
        {
          title: 'UI/UX Designer',
          description: 'Design user interfaces and user experiences for applications.',
          link: '/careers/ui-ux-designer',
          skills: ['Figma', 'Adobe XD', 'User Research'],
          icon: <span className="material-icons">design_services</span>
        },
        {
          title: 'AI/ML Engineer',
          description: 'Develop and implement AI and machine learning models.',
          link: '/careers/ai-ml-engineer',
          skills: ['Python', 'TensorFlow', 'Machine Learning'],
          icon: <span className="material-icons">memory</span>
        },
        {
          title: 'DevOps Engineer',
          description: 'Automate and streamline software development processes.',
          link: '/careers/devops-engineer',
          skills: ['Docker', 'Kubernetes', 'CI/CD'],
          icon: <span className="material-icons">settings_applications</span>
        },
        {
          title: 'Mobile App Developer',
          description: 'Create mobile applications for iOS and Android platforms.',
          link: '/careers/mobile-app-developer',
          skills: ['React Native', 'Swift', 'Kotlin'],
          icon: <span className="material-icons">smartphone</span>
        },
        {
          title: 'Technical Writer',
          description: 'Create technical documentation for software and hardware products.',
          link: '/careers/technical-writer',
          skills: ['Technical Writing', 'Documentation', 'Communication'],
          icon: <span className="material-icons">description</span>
        }
      ];

      return (
        <section id="careers" className={`container mx-auto px-4 mb-16 ${className} transition-opacity duration-500`}>
          <h2 className="text-4xl font-bold text-center mb-12">Career Paths</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {careerPaths.slice(0, 3).map((career) => (
              <Link
                key={career.title}
                to={`/careers/${career.title.toLowerCase().replace(/ /g, '-')}`}
                className="group p-6 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 block"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <h3 className="text-xl font-semibold group-hover:text-blue-400">{career.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{career.description}</p>
                <div className="flex flex-wrap gap-2">
                  {career.skills.map((skill) => (
                    <span
                      key={skill}
                      className="bg-blue-500/20 text-blue-500 rounded py-1 px-2 text-xs"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-6">
            <p className="text-gray-400">
              Ready to shape your future?{' '}
              <Link
                to="/careers"
                className="text-blue-500 hover:underline"
              >
                Explore All Career Paths
              </Link>
            </p>
          </div>
        </section>
      );
    }

    export default CareerPathsSection;
