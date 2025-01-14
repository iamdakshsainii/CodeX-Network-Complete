import React, { useState } from 'react';

    const careerData = {
      'software-developer': {
        title: 'Software Developer',
        skills: {
          'Core Programming': ['JavaScript (ES6+)', 'HTML5', 'CSS3', 'TypeScript'],
          'Frontend Development': ['React', 'Angular', 'Vue.js', 'Responsive Design', 'UI/UX Principles', 'State Management (Redux, Context API)', 'Testing (Jest, Cypress)'],
          'Backend Development': ['Node.js', 'Express.js', 'Python (Flask/Django)', 'RESTful APIs', 'GraphQL', 'Authentication & Authorization', 'Serverless Functions'],
          'Databases': ['SQL (PostgreSQL, MySQL)', 'NoSQL (MongoDB, Firebase)', 'Database Design', 'ORM (Sequelize, Prisma)'],
          'Version Control': ['Git', 'GitHub', 'GitLab', 'Branching Strategies'],
          'Testing': ['Unit Testing', 'Integration Testing', 'End-to-End Testing', 'Test-Driven Development (TDD)'],
          'DevOps': ['Docker', 'CI/CD Pipelines', 'Cloud Deployment (AWS, Azure, GCP)'],
          'Problem Solving': ['Algorithms', 'Data Structures', 'Design Patterns'],
        },
        resources: [
          { title: 'MDN Web Docs', url: 'https://developer.mozilla.org/en-US/' },
          { title: 'React Official Docs', url: 'https://react.dev/' },
          { title: 'Node.js Official Docs', url: 'https://nodejs.org/en/docs/' },
          { title: 'JavaScript.info', url: 'https://javascript.info/' },
        ],
      },
      'data-scientist': {
        title: 'Data Scientist',
        skills: {
          'Programming': ['Python', 'R', 'SQL'],
          'Machine Learning': ['Supervised Learning', 'Unsupervised Learning', 'Deep Learning', 'Model Evaluation', 'Model Selection'],
          'Statistics': ['Hypothesis Testing', 'Regression Analysis', 'Probability', 'Statistical Modeling', 'Experimental Design'],
          'Data Analysis': ['Data Cleaning', 'Data Wrangling', 'Feature Engineering', 'Exploratory Data Analysis (EDA)'],
          'Data Visualization': ['Matplotlib', 'Seaborn', 'Plotly', 'Tableau', 'Power BI'],
          'Databases': ['SQL', 'NoSQL', 'Data Warehousing', 'ETL Processes'],
          'Big Data': ['Hadoop', 'Spark', 'Data Lakes'],
        },
        resources: [
          { title: 'Scikit-learn Docs', url: 'https://scikit-learn.org/stable/' },
          { title: 'Pandas Docs', url: 'https://pandas.pydata.org/docs/' },
          { title: 'TensorFlow Docs', url: 'https://www.tensorflow.org/api_docs' },
          { title: 'Kaggle', url: 'https://www.kaggle.com/' },
        ],
      },
      'cybersecurity-analyst': {
        title: 'Cybersecurity Analyst',
        skills: {
          'Network Security': ['Firewalls', 'Intrusion Detection Systems', 'VPNs', 'Network Protocols'],
          'Ethical Hacking': ['Penetration Testing', 'Vulnerability Scanning', 'Exploitation'],
          'Cryptography': ['Encryption', 'Hashing', 'Digital Signatures', 'PKI'],
          'Security Auditing': ['Risk Assessment', 'Compliance', 'Security Policies'],
          'Incident Response': ['Malware Analysis', 'Forensics', 'Incident Handling'],
          'Security Tools': ['Nmap', 'Wireshark', 'Metasploit'],
          'Operating Systems': ['Linux', 'Windows'],
        },
        resources: [
          { title: 'OWASP', url: 'https://owasp.org/' },
          { title: 'Nmap Docs', url: 'https://nmap.org/docs/' },
          { title: 'Metasploit Docs', url: 'https://docs.metasploit.com/' },
          { title: 'SANS Institute', url: 'https://www.sans.org/' },
        ],
      },
      'ui-ux-designer': {
        title: 'UI/UX Designer',
        skills: {
          'Design Tools': ['Figma', 'Adobe XD', 'Sketch', 'Adobe Photoshop', 'Illustrator'],
          'User Research': ['User Interviews', 'Surveys', 'Usability Testing', 'User Personas'],
          'Wireframing': ['Low-Fidelity Wireframes', 'High-Fidelity Wireframes', 'User Flows'],
          'Prototyping': ['Interactive Prototypes', 'Clickable Prototypes', 'Microinteractions'],
          'Usability Testing': ['A/B Testing', 'User Feedback Analysis', 'Heuristic Evaluation'],
          'Accessibility': ['WCAG Guidelines', 'Inclusive Design'],
          'Design Systems': ['Component Libraries', 'Style Guides'],
        },
        resources: [
          { title: 'Figma Learn', url: 'https://www.figma.com/learn/' },
          { title: 'Adobe XD Tutorials', url: 'https://helpx.adobe.com/xd/tutorials.html' },
          { title: 'Material Design', url: 'https://material.io/design' },
          { title: 'Laws of UX', url: 'https://lawsofux.com/' },
        ],
      },
      'ai-ml-engineer': {
        title: 'AI/ML Engineer',
        skills: {
          'Programming': ['Python', 'R'],
          'Machine Learning': ['Supervised Learning', 'Unsupervised Learning', 'Deep Learning', 'Model Evaluation', 'Model Selection'],
          'Data Analysis': ['Data Cleaning', 'Data Wrangling', 'Feature Engineering', 'Exploratory Data Analysis (EDA)'],
          'Deep Learning': ['TensorFlow', 'Keras', 'PyTorch'],
          'Natural Language Processing': ['NLTK', 'SpaCy', 'Transformers'],
          'Computer Vision': ['OpenCV', 'Image Processing', 'Object Detection'],
        },
        resources: [
          { title: 'TensorFlow Tutorials', url: 'https://www.tensorflow.org/tutorials' },
          { title: 'PyTorch Tutorials', url: 'https://pytorch.org/tutorials/' },
          { title: 'Hugging Face Transformers', url: 'https://huggingface.co/transformers/' },
          { title: 'OpenCV Docs', url: 'https://docs.opencv.org/4.x/' },
        ],
      },
      'devops-engineer': {
        title: 'DevOps Engineer',
        skills: {
          'Infrastructure as Code': ['Terraform', 'CloudFormation', 'Ansible'],
          'Containerization': ['Docker', 'Kubernetes', 'Container Orchestration'],
          'CI/CD': ['Jenkins', 'GitLab CI', 'GitHub Actions'],
          'Monitoring': ['Prometheus', 'Grafana', 'ELK Stack'],
          'Scripting': ['Bash', 'Python'],
          'Version Control': ['Git', 'GitHub', 'GitLab'],
        },
        resources: [
          { title: 'Docker Docs', url: 'https://docs.docker.com/' },
          { title: 'Kubernetes Docs', url: 'https://kubernetes.io/docs/' },
          { title: 'Terraform Docs', url: 'https://www.terraform.io/docs' },
          { title: 'Ansible Docs', url: 'https://docs.ansible.com/' },
        ],
      },
      'mobile-app-developer': {
        title: 'Mobile App Developer',
        skills: {
          'Cross-Platform Development': ['React Native', 'Flutter', 'Xamarin'],
          'Native iOS Development': ['Swift', 'Objective-C', 'Xcode'],
          'Native Android Development': ['Kotlin', 'Java', 'Android Studio'],
          'UI/UX Design': ['Mobile UI/UX Principles', 'Responsive Design'],
          'Testing': ['Unit Testing', 'UI Testing', 'Integration Testing'],
          'API Integration': ['RESTful APIs', 'GraphQL'],
          'State Management': ['Redux', 'Context API', 'MobX'],
        },
        resources: [
          { title: 'React Native Docs', url: 'https://reactnative.dev/docs/getting-started' },
          { title: 'Flutter Docs', url: 'https://flutter.dev/docs' },
          { title: 'Android Developers', url: 'https://developer.android.com/' },
          { title: 'Swift Docs', url: 'https://docs.swift.org/swift-book/' },
        ],
      },
      'blockchain-developer': {
        title: 'Blockchain Developer',
        skills: {
          'Smart Contracts': ['Solidity', 'Vyper', 'Web3.js'],
          'Blockchain Platforms': ['Ethereum', 'Hyperledger Fabric', 'Binance Smart Chain'],
          'Cryptography': ['Hashing', 'Encryption', 'Digital Signatures'],
          'Decentralized Applications (DApps)': ['Web3.js', 'Ethers.js', 'Truffle'],
          'Consensus Mechanisms': ['Proof of Work', 'Proof of Stake', 'Delegated Proof of Stake'],
          'Tokenomics': ['Token Design', 'Token Distribution', 'Token Utility'],
          'Security': ['Smart Contract Security', 'Vulnerability Analysis'],
        },
        resources: [
          { title: 'Ethereum Docs', url: 'https://ethereum.org/en/developers/docs/' },
          { title: 'Solidity Docs', url: 'https://docs.soliditylang.org/en/v0.8.20/' },
          { title: 'Web3.js Docs', url: 'https://web3js.readthedocs.io/en/v1.10.0/' },
          { title: 'Hyperledger Fabric Docs', url: 'https://hyperledger-fabric.readthedocs.io/en/latest/' },
        ],
      },
      'embedded-systems-engineer': {
        title: 'Embedded Systems Engineer',
        skills: {
          'Programming': ['C', 'C++', 'Assembly Language'],
          'Microcontrollers': ['ARM', 'AVR', 'PIC'],
          'Real-Time Operating Systems (RTOS)': ['FreeRTOS', 'uC/OS', 'VxWorks'],
          'Hardware Interfacing': ['SPI', 'I2C', 'UART', 'GPIO'],
          'Digital Signal Processing (DSP)': ['Filtering', 'FFT', 'Signal Analysis'],
          'PCB Design': ['Schematic Capture', 'Layout Design', 'Prototyping'],
          'Testing': ['Unit Testing', 'Integration Testing', 'Hardware Debugging'],
        },
        resources: [
          { title: 'ARM Docs', url: 'https://developer.arm.com/documentation' },
          { title: 'AVR Docs', url: 'https://www.microchip.com/en-us/products/microcontrollers-microprocessors/8-bit-mcus/avr-mcus' },
          { title: 'FreeRTOS Docs', url: 'https://www.freertos.org/documentation/' },
          { title: 'Embedded.com', url: 'https://www.embedded.com/' },
        ],
      },
      'technical-writer': {
        title: 'Technical Writer',
        skills: {
          'Technical Writing': ['Documentation', 'User Manuals', 'API Documentation'],
          'Communication': ['Clear Writing', 'Concise Language', 'Audience Analysis'],
          'Content Creation': ['Content Planning', 'Content Strategy', 'Content Editing'],
          'Tools': ['Markdown', 'LaTeX', 'Confluence', 'Jira'],
          'Information Architecture': ['Content Organization', 'Navigation Design'],
          'Collaboration': ['Teamwork', 'Feedback Management'],
          'Version Control': ['Git', 'GitHub', 'GitLab'],
        },
        resources: [
          { title: 'Google Developer Documentation Style Guide', url: 'https://developers.google.com/style' },
          { title: 'Microsoft Writing Style Guide', url: 'https://learn.microsoft.com/en-us/style-guide/' },
          { title: 'The Chicago Manual of Style', url: 'https://www.chicagomanualofstyle.org/home.html' },
          { title: 'Write the Docs', url: 'https://www.writethedocs.org/' },
        ],
      },
      'backend-developer': {
        title: 'Backend Developer',
         skills: {
          'Server-Side Languages': ['Node.js', 'Python', 'Java', 'Go', 'C#'],
          'Frameworks': ['Express.js', 'Django', 'Spring Boot', 'ASP.NET Core', 'Gin'],
          'Databases': ['SQL (PostgreSQL, MySQL)', 'NoSQL (MongoDB, Cassandra)', 'Database Design', 'ORM (Sequelize, Prisma)'],
          'API Design': ['RESTful APIs', 'GraphQL', 'API Documentation'],
          'Authentication & Authorization': ['OAuth 2.0', 'JWT', 'Session Management'],
          'Server Management': ['Linux', 'Docker', 'Kubernetes'],
          'Testing': ['Unit Testing', 'Integration Testing', 'API Testing'],
          'Cloud Services': ['AWS', 'Azure', 'GCP'],
        },
        resources: [
          { title: 'Node.js Docs', url: 'https://nodejs.org/en/docs/' },
          { title: 'Django Docs', url: 'https://docs.djangoproject.com/en/4.2/' },
          { title: 'Spring Boot Docs', url: 'https://spring.io/projects/spring-boot' },
          { title: 'PostgreSQL Docs', url: 'https://www.postgresql.org/docs/' },
        ],
      },
       'game-developer': {
        title: 'Game Developer',
        skills: {
          'Game Engines': ['Unity', 'Unreal Engine', 'Godot'],
          'Programming Languages': ['C#', 'C++', 'GDScript'],
          'Game Design': ['Level Design', 'Game Mechanics', 'Storytelling'],
          'Graphics': ['3D Modeling', 'Texturing', 'Animation'],
          'Physics': ['Collision Detection', 'Rigid Body Dynamics'],
          'Audio': ['Sound Design', 'Music Composition'],
          'AI': ['Pathfinding', 'Behavior Trees'],
          'Networking': ['Multiplayer Game Development', 'Server-Side Logic'],
        },
        resources: [
          { title: 'Unity Docs', url: 'https://docs.unity3d.com/Manual/' },
          { title: 'Unreal Engine Docs', url: 'https://docs.unrealengine.com/' },
          { title: 'Godot Engine Docs', url: 'https://docs.godotengine.org/en/stable/' },
          { title: 'GameDev.net', url: 'https://www.gamedev.net/' },
        ],
      },
      'frontend-developer': {
        title: 'Frontend Developer',
        skills: {
          'Core Languages': ['HTML5', 'CSS3', 'JavaScript (ES6+)'],
          'Frameworks/Libraries': ['React', 'Angular', 'Vue.js', 'Svelte'],
          'State Management': ['Redux', 'Context API', 'Vuex', 'Zustand'],
          'UI/UX': ['Responsive Design', 'Accessibility', 'UI Libraries (Material UI, Tailwind CSS)'],
          'Testing': ['Unit Testing', 'Integration Testing', 'End-to-End Testing'],
          'Build Tools': ['Webpack', 'Parcel', 'Vite'],
          'Version Control': ['Git', 'GitHub', 'GitLab'],
          'API Integration': ['RESTful APIs', 'GraphQL'],
        },
        resources: [
          { title: 'React Docs', url: 'https://react.dev/' },
          { title: 'Angular Docs', url: 'https://angular.io/docs' },
          { title: 'Vue.js Docs', url: 'https://vuejs.org/guide/introduction.html' },
          { title: 'CSS-Tricks', url: 'https://css-tricks.com/' },
        ],
      },
    };

    function CareerDetailsContent({ careerName }) {
      const career = careerData[careerName];
      const [progress, setProgress] = useState({});
      const [expandedSkills, setExpandedSkills] = useState({});

      if (!career) {
        return <div className="container mx-auto py-12 px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Career Not Found</h1>
          <p className="text-gray-400">Sorry, the career path you are looking for does not exist.</p>
        </div>;
      }

      const handleSkillClick = (skill) => {
        setProgress(prevProgress => {
          const newProgress = { ...prevProgress };
          if (Array.isArray(career.skills[skill])) {
             const allSubSkillsCompleted = career.skills[skill].every(subSkill => prevProgress[`${skill}-${subSkill}`] === 100);
             newProgress[skill] = allSubSkillsCompleted ? 0 : 100;
             career.skills[skill].forEach(subSkill => {
              newProgress[`${skill}-${subSkill}`] = allSubSkillsCompleted ? 0 : 100;
             })
          } else {
            newProgress[skill] = prevProgress[skill] === 100 ? 0 : 100;
          }
          return newProgress;
        });
      };

      const handleSubSkillClick = (skill, subSkill) => {
        setProgress(prevProgress => {
          const newProgress = { ...prevProgress };
          const subSkillKey = `${skill}-${subSkill}`;
          newProgress[subSkillKey] = newProgress[subSkillKey] === 100 ? 0 : 100;
          return newProgress;
        });
      };

      const toggleSkillExpansion = (skill) => {
        setExpandedSkills(prevExpanded => ({
          ...prevExpanded,
          [skill]: !prevExpanded[skill],
        }));
      };

      const calculateSkillProgress = (skill) => {
        if (Array.isArray(career.skills[skill])) {
          const completedSubSkills = career.skills[skill].filter(subSkill => progress[`${skill}-${subSkill}`] === 100).length;
          return career.skills[skill].length > 0 ? Math.round((completedSubSkills / career.skills[skill].length) * 100) : 0;
        }
        return progress[skill] || 0;
      };

      const calculateOverallProgress = () => {
        let totalSubSkills = 0;
        let completedSubSkills = 0;

        for (const skill in career.skills) {
          if (Array.isArray(career.skills[skill])) {
            totalSubSkills += career.skills[skill].length;
            completedSubSkills += career.skills[skill].filter(subSkill => progress[`${skill}-${subSkill}`] === 100).length;
          } else {
            totalSubSkills++;
            if (progress[skill] === 100) {
              completedSubSkills++;
            }
          }
        }
        return totalSubSkills > 0 ? Math.round((completedSubSkills / totalSubSkills) * 100) : 0;
      };

      return (
        <div className="container mx-auto py-12 px-4">
          <h1 className="text-4xl font-bold text-center mb-8">{career.title}</h1>
          <div className="mb-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Skills to Master</h2>
            <div className="space-y-4">
              {Object.keys(career.skills).map((skill) => (
                <div key={skill} className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex items-center justify-between mb-2">
                    <button onClick={() => toggleSkillExpansion(skill)} className="flex items-center space-x-2 focus:outline-none">
                      <span className="text-gray-300">{skill}</span>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-4 h-4 text-gray-400 transition-transform duration-300 ${expandedSkills[skill] ? 'transform rotate-180' : ''}`}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleSkillClick(skill)}
                      className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all"
                    >
                      {progress[skill] === 100 ? 'Completed' : 'Mark Complete'}
                    </button>
                  </div>
                  {expandedSkills[skill] && Array.isArray(career.skills[skill]) && (
                    <div className="ml-4 space-y-2">
                      {career.skills[skill].map((subSkill) => (
                        <div key={subSkill} className="flex items-center justify-between mb-2">
                          <span className="text-gray-400 text-sm">{subSkill}</span>
                          <button
                            onClick={() => handleSubSkillClick(skill, subSkill)}
                            className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition-all text-xs"
                          >
                            {progress[`${skill}-${subSkill}`] === 100 ? 'Completed' : 'Mark Complete'}
                          </button>
                        </div>
                      ))}
                    </div>
                  )}
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-full h-3 overflow-hidden border border-blue-500/20 mt-2">
                    <div
                      className="bg-blue-500 h-full rounded-full transition-all duration-500"
                      style={{ width: `${calculateSkillProgress(skill) > 0 ? calculateSkillProgress(skill) : 5}%` }}
                    >
                      <span className="text-white text-center block h-full leading-3 text-[10px]">{calculateSkillProgress(skill)}%</span>
                    </div>
                  </div>
                   {Array.isArray(career.skills[skill]) && (
                    <div className="ml-4 space-y-2 mt-2">
                      {career.skills[skill].map((subSkill) => (
                        <div key={subSkill} className="flex items-center justify-between mb-1">
                          <span className="text-gray-400 text-sm">{subSkill}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
          <div className="mb-8 max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-4">Overall Progress</h2>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-full h-6 overflow-hidden border border-blue-500/20">
              <div
                className="bg-blue-500 h-full rounded-full transition-all duration-500"
                style={{ width: `${calculateOverallProgress() > 0 ? calculateOverallProgress() : 5}%` }}
              >
                <span className="text-white text-center block h-full leading-6">{calculateOverallProgress()}%</span>
              </div>
            </div>
          </div>
           {career.resources && career.resources.length > 0 && (
            <div className="mt-8 max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold mb-4">Resources</h2>
              <ul className="space-y-2">
                {career.resources.map((resource, index) => (
                  <li key={index} className="text-gray-300 text-left">
                    <a href={resource.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                      {resource.title}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      );
    }

    export default CareerDetailsContent;
