import React from 'react';
    import { Code, Cpu, Database, Globe, Smartphone, Brain, Cloud, Shield, FileText, Music, Edit, Zap } from 'lucide-react';
    import { Link, useNavigate } from 'react-router-dom';

    export default function Projects01() {
      const projects = [
        {
          title: 'Web Development',
          icon: <Globe className="h-8 w-8 text-blue-500" />,
          description: 'Craft dynamic websites and web applications.',
          link: '/projects/web-development',
        },
        {
          title: 'Android Development',
          icon: <Smartphone className="h-8 w-8 text-blue-500" />,
          description: 'Mobile app development for Android using Kotlin and Java.',
          link: '/projects/android-development',
        },
        {
          title: 'Machine Learning',
          icon: <Brain className="h-8 w-8 text-blue-500" />,
          description: 'Explore AI and ML with Python and popular frameworks.',
          link: '/projects/machine-learning',
        },
        {
          title: 'Data Science',
          icon: <Database className="h-8 w-8 text-blue-500" />,
          description: 'Data analysis and visualization projects.',
          link: '/projects/data-science',
        },
      ];

      const navigate = useNavigate();

      const handleProjectClick = (projectTitle) => {
        navigate(`/projects/${projectTitle.toLowerCase().replace(/ /g, '-')}`);
      };

      return (
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold text-center mb-4">All Project Ideas</h1>
          <p className="text-gray-400 text-center mb-8">To truly learn and master any skill, you need to apply it to real-world projects. Check out these ideas!</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project) => (
              <div
                key={project.title}
                onClick={() => handleProjectClick(project.title)}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-blue-500/20 p-6 hover:shadow-[0_0_12px_5px_rgba(0,0,255,0.4)] hover:scale-105 transition-all duration-300 glow-card cursor-pointer transform hover:-translate-y-1"
              >
                <div className="flex items-center mb-4">
                  {project.icon}
                  <h3 className="text-2xl font-semibold ml-3 group-hover:text-blue-400 transition-colors">{project.title}</h3>
                </div>
                <p className="text-gray-400 mb-4">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      );
    }
