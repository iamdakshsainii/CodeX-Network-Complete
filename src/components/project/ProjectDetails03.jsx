import React, { useState, useEffect, useRef } from 'react';
    import { useParams, useNavigate } from 'react-router-dom';

    const projectData = {
      'iot-projects': {
        title: 'IoT Projects',
        description: 'Explore the world of connected devices and IoT.',
        levels: {
          'Basic': [
            { name: 'Blink an LED with Arduino', technologies: ['Arduino', 'C++'], message: 'Start with the basics! Control an LED using Arduino.', resources: [] },
            { name: 'Read Sensor Data with Raspberry Pi', technologies: ['Raspberry Pi', 'Python'], message: 'Read data from a sensor! Focus on sensor interfacing and data handling.', resources: [] },
            { name: 'Control a Servo Motor with Arduino', technologies: ['Arduino', 'C++'], message: 'Control a servo motor! Focus on motor control and basic robotics.', resources: [] },
            { name: 'Display Sensor Data on LCD with Raspberry Pi', technologies: ['Raspberry Pi', 'Python', 'LCD'], message: 'Display sensor data on an LCD! Focus on display interfacing and data visualization.', resources: [] },
          ],
          'Intermediate': [
            { name: 'Build a Smart Home System with ESP32', technologies: ['ESP32', 'Arduino', 'MQTT'], message: 'Build a smart home system! Focus on wireless communication and IoT protocols.', resources: [] },
            { name: 'Create a Weather Station with Raspberry Pi', technologies: ['Raspberry Pi', 'Python', 'Sensors'], message: 'Create a weather station! Focus on sensor integration and data logging.', resources: [] },
            { name: 'Build a Remote Monitoring System with Arduino', technologies: ['Arduino', 'GSM', 'Cloud'], message: 'Build a remote monitoring system! Focus on wireless communication and cloud integration.', resources: [] },
            { name: 'Create a Smart Agriculture System with ESP32', technologies: ['ESP32', 'Sensors', 'Cloud'], message: 'Create a smart agriculture system! Focus on sensor data and cloud analytics.', resources: [] },
          ],
          'Master': [
            { name: 'Build a Smart City System with Multiple Devices', technologies: ['Multiple IoT Devices', 'Cloud', 'MQTT'], message: 'Build a smart city system! Focus on large-scale IoT deployments and data management.', resources: [] },
            { name: 'Create a Predictive Maintenance System with IoT', technologies: ['IoT Devices', 'Machine Learning', 'Cloud'], message: 'Create a predictive maintenance system! Focus on machine learning and data analysis.', resources: [] },
            { name: 'Build a Smart Healthcare System with Wearables', technologies: ['Wearable Devices', 'Cloud', 'Data Analysis'], message: 'Build a smart healthcare system! Focus on wearable devices and data analysis.', resources: [] },
            { name: 'Create a Smart Transportation System with IoT', technologies: ['IoT Devices', 'GPS', 'Cloud'], message: 'Create a smart transportation system! Focus on location tracking and data analysis.', resources: [] },
          ],
        },
      },
      'data-analytics': {
        title: 'Data Analytics',
        description: 'Learn data analysis techniques and tools.',
        levels: {
          'Basic': [
            { name: 'Learn Basic SQL Queries', technologies: ['SQL'], message: 'Write basic SQL queries to retrieve data from databases.', resources: [] },
            { name: 'Explore Data with Pandas', technologies: ['Python', 'Pandas'], message: 'Use Pandas to explore and manipulate datasets.', resources: [] },
            { name: 'Create Basic Charts with Matplotlib', technologies: ['Python', 'Matplotlib'], message: 'Create basic charts to visualize data.', resources: [] },
            { name: 'Calculate Descriptive Statistics', technologies: ['Python', 'Pandas'], message: 'Calculate descriptive statistics for datasets.', resources: [] },
          ],
          'Intermediate': [
            { name: 'Perform Exploratory Data Analysis (EDA)', technologies: ['Python', 'Pandas', 'Seaborn'], message: 'Perform EDA to understand data distributions and relationships.', resources: [] },
            { name: 'Data Analysis with SQL', technologies: ['SQL'], message: 'Analyze data using SQL queries and aggregations.', resources: [] },
            { name: 'Create Interactive Dashboards with Plotly', technologies: ['Python', 'Plotly'], message: 'Create interactive dashboards to visualize data.', resources: [] },
            { name: 'Perform Hypothesis Testing', technologies: ['Python', 'Statsmodels'], message: 'Perform hypothesis testing to validate statistical claims.', resources: [] },
          ],
          'Master': [
            { name: 'Build a Data Pipeline with Airflow', technologies: ['Python', 'Airflow'], message: 'Build a data pipeline to automate data processing.', resources: [] },
            { name: 'Analyze Big Data with Spark', technologies: ['Python', 'PySpark'], message: 'Analyze big data using Spark and distributed computing.', resources: [] },
            { name: 'Create Advanced Visualizations with D3.js', technologies: ['JavaScript', 'D3.js'], message: 'Create advanced visualizations to tell data stories.', resources: [] },
            { name: 'Build a Data-Driven Application', technologies: ['Python', 'Flask', 'Data Analysis'], message: 'Build a data-driven application to showcase your skills.', resources: [] },
          ],
        },
      },
      'devops': {
        title: 'DevOps',
        description: 'Master DevOps practices and tools.',
        levels: {
          'Basic': [
            { name: 'Learn Basic Linux Commands', technologies: ['Linux'], message: 'Master basic Linux commands for system administration.', resources: [] },
            { name: 'Set up a Docker Container', technologies: ['Docker'], message: 'Set up a Docker container to run applications.', resources: [] },
            { name: 'Create a Simple CI/CD Pipeline with GitHub Actions', technologies: ['GitHub Actions'], message: 'Create a simple CI/CD pipeline to automate deployments.', resources: [] },
            { name: 'Learn Basic Git Commands', technologies: ['Git'], message: 'Master basic Git commands for version control.', resources: [] },
          ],
          'Intermediate': [
            { name: 'Set up a Kubernetes Cluster', technologies: ['Kubernetes'], message: 'Set up a Kubernetes cluster to manage containerized applications.', resources: [] },
            { name: 'Implement Infrastructure as Code with Terraform', technologies: ['Terraform'], message: 'Implement infrastructure as code to manage cloud resources.', resources: [] },
            { name: 'Automate Deployments with Ansible', technologies: ['Ansible'], message: 'Automate deployments with Ansible for configuration management.', resources: [] },
            { name: 'Monitor Applications with Prometheus and Grafana', technologies: ['Prometheus', 'Grafana'], message: 'Monitor applications using Prometheus and Grafana.', resources: [] },
          ],
          'Master': [
            { name: 'Build a Scalable Microservices Architecture', technologies: ['Docker', 'Kubernetes', 'API Gateway'], message: 'Build a scalable microservices architecture! Focus on container orchestration and API design.', resources: [] },
            { name: 'Implement a CI/CD Pipeline with Jenkins', technologies: ['Jenkins', 'Git', 'Docker'], message: 'Implement a CI/CD pipeline with Jenkins! Focus on automation and continuous integration.', resources: [] },
            { name: 'Set up a Monitoring System with ELK Stack', technologies: ['ELK Stack', 'Prometheus', 'Grafana'], message: 'Set up a monitoring system with ELK Stack! Focus on log management and monitoring.', resources: [] },
            { name: 'Build a Cloud-Native Application', technologies: ['Docker', 'Kubernetes', 'Cloud Services'], message: 'Build a cloud-native application! Focus on cloud services and container orchestration.', resources: [] },
          ],
        },
      },
       'game-development': {
        title: 'Game Development',
        description: 'Creating interactive games using Unity and Unreal Engine.',
        levels: {
          'Basic': [
            { name: 'Simple 2D Platformer Game', technologies: ['Unity', 'C#'], message: 'Create a simple 2D platformer! Focus on basic game mechanics and player movement.', resources: [] },
            { name: 'Basic Puzzle Game', technologies: ['Unity', 'C#'], message: 'Build a basic puzzle game! Focus on game logic and puzzle design.', resources: [] },
            { name: 'Simple First-Person Shooter', technologies: ['Unreal Engine', 'C++'], message: 'Create a simple first-person shooter! Focus on player movement and shooting mechanics.', resources: [] },
            { name: 'Basic Top-Down Shooter', technologies: ['Unity', 'C#'], message: 'Build a basic top-down shooter! Focus on player movement and enemy AI.', resources: [] },
            { name: 'Simple Racing Game', technologies: ['Unreal Engine', 'C++'], message: 'Create a simple racing game! Focus on vehicle physics and track design.', resources: [] },
          ],
          'Intermediate': [
            { name: 'Multiplayer Game with Networking', technologies: ['Unity', 'C#', 'Photon'], message: 'Build a multiplayer game! Focus on networking and real-time interactions.', resources: [] },
            { name: '3D Adventure Game', technologies: ['Unreal Engine', 'C++'], message: 'Create a 3D adventure game! Focus on level design and character interaction.', resources: [] },
            { name: 'Mobile Game with Touch Controls', technologies: ['Unity', 'C#', 'Android SDK'], message: 'Build a mobile game with touch controls! Focus on mobile UI and touch input.', resources: [] },
            { name: 'RPG Game with Inventory System', technologies: ['Unity', 'C#'], message: 'Create an RPG game with an inventory system! Focus on game mechanics and data management.', resources: [] },
            { name: 'Puzzle Game with Advanced Mechanics', technologies: ['Unreal Engine', 'C++'], message: 'Build a puzzle game with advanced mechanics! Focus on puzzle design and logic.', resources: [] },
          ],
          'Master': [
            { name: 'Advanced AI for Game Characters', technologies: ['Unity', 'C#', 'Behavior Trees'], message: 'Implement advanced AI for game characters! Focus on behavior trees and AI algorithms.', resources: [] },
            { name: 'Procedural Content Generation', technologies: ['Unreal Engine', 'C++', 'Algorithms'], message: 'Create procedural content! Focus on algorithms and random generation.', resources: [] },
            { name: 'VR Game Development', technologies: ['Unity', 'C#', 'VR SDK'], message: 'Build a VR game! Focus on VR interaction and immersion.', resources: [] },
            { name: 'Open-World Game with Dynamic Environment', technologies: ['Unreal Engine', 'C++', 'World Composition'], message: 'Create an open-world game! Focus on world composition and dynamic environments.', resources: [] },
            { name: 'Multiplayer Game with Custom Server', technologies: ['Unity', 'C#', 'Custom Server'], message: 'Build a multiplayer game with a custom server! Focus on server-side logic and networking.', resources: [] },
          ],
        },
      },
    };

    function ProjectDetails03() {
      const { projectTitle } = useParams();
      const navigate = useNavigate();
      const project = projectData[projectTitle];
      const [completedProjects, setCompletedProjects] = useState({});
      const [completionMessage, setCompletionMessage] = useState('');
      const [resourceModal, setResourceModal] = useState({ isOpen: false, resources: [] });
      const dbRef = useRef(null);

      useEffect(() => {
        const openDB = () => {
          return new Promise((resolve, reject) => {
            const request = window.indexedDB.open('projectDB', 1);

            request.onerror = (event) => {
              console.error('Error opening database', event);
              reject(event.target.error);
            };

            request.onsuccess = (event) => {
              dbRef.current = event.target.result;
              resolve();
            };

            request.onupgradeneeded = (event) => {
              const db = event.target.result;
              if (!db.objectStoreNames.contains('projects')) {
                db.createObjectStore('projects');
              }
            };
          });
        };

        const closeDB = () => {
          if (dbRef.current) {
            dbRef.current.close();
            dbRef.current = null;
          }
        };

        openDB().catch(console.error);

        return () => {
          closeDB();
        };
      }, []);

      const handleProjectComplete = (level, projectName) => {
        if (!dbRef.current) {
          console.error('Database not initialized');
          return;
        }

        const db = dbRef.current;
        const transaction = db.transaction(['projects'], 'readwrite');
        const store = transaction.objectStore('projects');

        const key = `${projectTitle}-${level}-${projectName}`;
        const request = store.put(true, key);

        request.onsuccess = () => {
          setCompletedProjects(prev => ({
            ...prev,
            [level]: {
              ...prev[level],
              [projectName]: true,
            }
          }));
          setCompletionMessage(`You just leveled up! ${projectName} is done!`);
          setTimeout(() => setCompletionMessage(''), 3000);
        };

        request.onerror = (event) => {
          console.error('Error saving project completion', event);
        };
      };

      const handlePrev = () => {
        navigate(-1);
      };

      const handleNext = () => {
        navigate(1);
      };

      const handleOpenResources = (resources) => {
        setResourceModal({ isOpen: true, resources });
      };

      const handleCloseResources = () => {
        setResourceModal({ isOpen: false, resources: [] });
      };

      const projectKeys = Object.keys(projectData);
      const currentIndex = projectKeys.indexOf(projectTitle);
      const prevProject = currentIndex > 0 ? projectKeys[currentIndex - 1] : null;
      const nextProject = currentIndex < projectKeys.length - 1 ? projectKeys[currentIndex + 1] : null;

      return (
        <div className="container mx-auto py-12 px-4">
          <div className="flex justify-between items-center mb-4">
            <button
              onClick={handlePrev}
              className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-all"
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-600 transition-all"
            >
              Next
            </button>
          </div>
          <h1 className="text-4xl font-bold text-center mb-8">{project.title}</h1>
          <p className="text-gray-400 text-center mb-8">{project.description}</p>
          {completionMessage && (
            <div className="text-center mb-8 text-green-500 font-semibold">
              {completionMessage}
            </div>
          )}
          <div className="space-y-8">
            {Object.keys(project.levels).map((level) => (
              <div key={level} className="bg-gray-800/50 backdrop-blur-sm p-4 rounded-lg border border-blue-500/20 hover:border-blue-500/50 transition-all duration-300">
                <h2 className="text-2xl font-semibold mb-4">{level}</h2>
                <ul className="space-y-4">
                  {project.levels[level].map((item) => (
                    <li key={item.name} className="bg-gray-700/50 backdrop-blur-sm rounded-lg p-4 border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 flex justify-between items-center">
                      <div className="flex-1">
                        <h3 className="text-xl font-semibold mb-2">{item.name}</h3>
                        <p className="text-gray-400 text-sm mb-1">{item.message}</p>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {item.technologies.map((tech, index) => (
                            <span key={index} className="inline-block bg-blue-500/10 text-blue-400 text-xs px-2 py-1 rounded">{tech}</span>
                          ))}
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleOpenResources(item.resources)}
                          className="px-3 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-all text-xs flex-1"
                        >
                          Resources
                        </button>
                        <button
                          onClick={() => handleProjectComplete(level, item.name)}
                          disabled={completedProjects[level]?.[item.name]}
                          className={`px-4 py-2 rounded hover:bg-blue-600 transition-all text-xs flex-1 ${completedProjects[level]?.[item.name] ? 'bg-green-500 text-white cursor-not-allowed' : 'bg-blue-500 text-white'}`}
                        >
                          {completedProjects[level]?.[item.name] ? 'Completed!' : 'Mark Complete'}
                        </button>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          {resourceModal.isOpen && (
            <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
              <div className="bg-gray-800 p-8 rounded-lg max-w-md w-full">
                <h3 className="text-2xl font-semibold text-center mb-4">Resources</h3>
                <ul className="space-y-2">
                  {resourceModal.resources.map((resource, index) => (
                    <li key={index} className="text-gray-300 text-left">
                      <a href={resource.url} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400">
                        {resource.title} ({resource.type})
                      </a>
                    </li>
                  ))}
                </ul>
                <div className="text-center mt-6">
                  <button
                    onClick={handleCloseResources}
                    className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-200"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      );
    }

    export default ProjectDetails03;
