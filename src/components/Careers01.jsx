import React from 'react';
    import { Code, Cpu, Database, Globe, Smartphone, Brain, Cloud, Shield, FileText, Music, Edit, Zap } from 'lucide-react';
    import { Link } from 'react-router-dom';

    function Careers01() {
      const careerPaths = [
        {
          title: 'Software Developer',
          description: 'Build and maintain software applications.',
          link: '/careers/software-developer',
          skills: ['Java', 'C++', 'Problem Solving'],
          icon: <Code className="h-6 w-6" />
        },
        {
          title: 'Frontend Developer',
          description: 'Develop user interfaces for web applications.',
          link: '/careers/frontend-developer',
          skills: ['HTML', 'CSS', 'JavaScript', 'React'],
          icon: <Code className="h-6 w-6" />
        },
        {
          title: 'Backend Developer',
          description: 'Design and manage server-side applications.',
          link: '/careers/backend-developer',
          skills: ['Node.js', 'Python', 'SQL', 'API Design'],
          icon: <Cpu className="h-6 w-6" />
        },
        {
          title: 'Data Scientist',
          description: 'Analyze and interpret complex data to help companies make decisions.',
          link: '/careers/data-scientist',
          skills: ['Python', 'Machine Learning', 'Statistics'],
          icon: <Database className="h-6 w-6" />
        },
        {
          title: 'Cloud Engineer',
          description: 'Design and manage cloud infrastructure.',
          link: '/careers/cloud-engineer',
          skills: ['AWS', 'Azure', 'Docker'],
          icon: <Cloud className="h-6 w-6" />
        },
        {
          title: 'Game Developer',
          description: 'Create interactive games for various platforms.',
          link: '/careers/game-developer',
          skills: ['Unity', 'C#', 'Game Design'],
          icon: <Zap className="h-6 w-6" />
        },
        {
          title: 'Cybersecurity Analyst',
          description: 'Protect computer systems and networks from threats.',
          link: '/careers/cybersecurity-analyst',
          skills: ['Network Security', 'Ethical Hacking', 'Cryptography'],
          icon: <Shield className="h-6 w-6" />
        },
        {
          title: 'UI/UX Designer',
          description: 'Design user interfaces and user experiences for applications.',
          link: '/careers/ui-ux-designer',
          skills: ['Figma', 'Adobe XD', 'User Research'],
          icon: <Edit className="h-6 w-6" />
        },
      ];

      return (
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold text-center mb-12">All Career Paths</h1>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerPaths.map((career) => (
              <Link
                key={career.title}
                to={career.link}
                className="group block p-8 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-blue-500/20
                         hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1
                         hover:shadow-lg hover:shadow-blue-500/20"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center space-x-4 mb-4">
                    {career.icon}
                    <h3 className="text-xl font-semibold group-hover:text-blue-400 transition-colors">
                      {career.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 mb-4 flex-grow">{career.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {career.skills.map((tech) => (
                      <span
                        key={tech}
                        className="text-sm px-2 py-1 bg-blue-500/10 rounded text-blue-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      );
    }

    export default Careers01;
