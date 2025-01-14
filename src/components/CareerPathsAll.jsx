import React from 'react';
    import { Code, Cpu, Database, Smartphone, Brain, Shield, FileText, Edit } from 'lucide-react';
    import { useNavigate, Link } from 'react-router-dom';

    function CareerPathsAll() {
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
          title: 'Embedded Systems Engineer',
          description: 'Design and develop embedded systems for various devices.',
          link: '/careers/embedded-systems-engineer',
          skills: ['C/C++', 'Microcontrollers', 'Hardware Design'],
          icon: <Smartphone className="h-6 w-6" />
        },
        {
          title: 'Technical Writer',
          description: 'Create technical documentation for software and hardware products.',
          link: '/careers/technical-writer',
          skills: ['Technical Writing', 'Documentation', 'Communication'],
          icon: <FileText className="h-6 w-6" />
        }
      ];

      const navigate = useNavigate();

      const handleCareerClick = (careerTitle) => {
        navigate(`/careers/${careerTitle.toLowerCase().replace(/ /g, '-')}`);
      };

      return (
        <div className="container mx-auto py-12 px-4 mt-16">
          <h1 className="text-4xl font-bold text-center mb-12">All Career Paths</h1>
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {careerPaths.map((career) => (
              <div
                key={career.title}
                onClick={() => handleCareerClick(career.title)}
                className="group block p-8 bg-gray-800/50 backdrop-blur-sm rounded-lg border border-blue-500/20
                         hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1
                         hover:shadow-lg hover:shadow-blue-500/20 cursor-pointer mx-auto max-w-md"
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
              </div>
            ))}
          </div>
           <div className="text-center mt-8">
            <p className="text-gray-400">
              Want to explore project ideas? Check out our{' '}
              <Link
                to="/projects"
                className="text-blue-500 hover:underline"
              >
                Project Ideas
              </Link>
            </p>
          </div>
        </div>
      );
    }

    export default CareerPathsAll;
