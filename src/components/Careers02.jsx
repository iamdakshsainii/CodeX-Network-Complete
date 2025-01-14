import React from 'react';
    import { Code, Cpu, Database, Globe, Smartphone, Brain, Cloud, Shield, FileText, Music, Edit, Zap } from 'lucide-react';
    import { Link } from 'react-router-dom';

    function Careers02() {
      const careerPaths = [
        {
          title: 'AI/ML Engineer',
          description: 'Develop and implement AI and machine learning models.',
          link: '/careers/ai-ml-engineer',
          skills: ['Python', 'TensorFlow', 'Machine Learning'],
          icon: <Brain className="h-6 w-6" />
        },
        {
          title: 'DevOps Engineer',
          description: 'Automate and streamline software development processes.',
          link: '/careers/devops-engineer',
          skills: ['Docker', 'Kubernetes', 'CI/CD'],
          icon: <Cpu className="h-6 w-6" />
        },
        {
          title: 'Mobile App Developer',
          description: 'Create mobile applications for iOS and Android platforms.',
          link: '/careers/mobile-app-developer',
          skills: ['React Native', 'Swift', 'Kotlin'],
          icon: <Smartphone className="h-6 w-6" />
        },
        {
          title: 'Blockchain Developer',
          description: 'Develop decentralized applications using blockchain technology.',
          link: '/careers/blockchain-developer',
          skills: ['Solidity', 'Ethereum', 'Web3.js'],
          icon: <Code className="h-6 w-6" />
        },
        {
          title: 'Technical Writer',
          description: 'Create technical documentation for software and hardware products.',
          link: '/careers/technical-writer',
          skills: ['Technical Writing', 'Documentation', 'Communication'],
          icon: <FileText className="h-6 w-6" />
        },
         {
          title: 'Frontend Developer',
          description: 'Develop user interfaces for web applications.',
          link: '/careers/frontend-developer',
          skills: ['HTML', 'CSS', 'JavaScript', 'React'],
          icon: <Code className="h-6 w-6" />
        },
      ];

      return (
        <div className="container mx-auto py-12 px-4">
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

    export default Careers02;
