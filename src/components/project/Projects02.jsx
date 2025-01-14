import React from 'react';
    import { Code, Cpu, Database, Globe, Smartphone, Brain, Cloud, Shield, FileText, Music, Edit, Zap } from 'lucide-react';
    import { Link, useNavigate } from 'react-router-dom';
    import RequestProjectIdeas from '../RequestProjectIdeas';

    export default function Projects02() {
      const projects = [
        {
          title: 'Cloud Computing',
          icon: <Cloud className="h-8 w-8 text-blue-500" />,
          description: 'Projects focusing on cloud architecture and deployment.',
          link: '/projects/cloud-computing',
        },
        {
          title: 'Cybersecurity',
          icon: <Shield className="h-8 w-8 text-blue-500" />,
          description: 'Security analysis and penetration testing projects.',
          link: '/projects/cybersecurity',
        },
         {
          title: 'Game Development',
          icon: <Zap className="h-8 w-8 text-blue-500" />,
          description: 'Creating interactive games using Unity and Unreal Engine.',
          link: '/projects/game-development',
        },
        {
          title: 'IoT Projects',
          icon: <Globe className="h-8 w-8 text-blue-500" />,
          description: 'Explore the world of connected devices and IoT.',
          link: '/projects/iot-projects',
        },
        {
          title: 'Data Analytics',
          icon: <Database className="h-8 w-8 text-blue-500" />,
          description: 'Learn data analysis techniques and tools.',
          link: '/projects/data-analytics',
        },
        {
          title: 'DevOps',
          icon: <Cpu className="h-8 w-8 text-blue-500" />,
          description: 'Master DevOps practices and tools.',
          link: '/projects/devops',
        },
      ];

      const navigate = useNavigate();

      const handleProjectClick = (projectTitle) => {
        navigate(`/projects/${projectTitle.toLowerCase().replace(/ /g, '-')}`);
      };

      return (
        <div className="container mx-auto py-12 px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.title}
                onClick={() => handleProjectClick(project.title)}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-blue-500/20 p-8 hover:shadow-[0_0_12px_5px_rgba(0,0,255,0.4)] hover:scale-105 transition-all duration-300 glow-card cursor-pointer transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  {project.icon}
                  <h3 className="text-2xl font-semibold ml-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
              </div>
            ))}
          </div>
          <RequestProjectIdeas />
        </div>
      );
    }
