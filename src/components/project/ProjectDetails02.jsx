import React, { useState, useEffect, useRef } from 'react';
    import { useParams, useNavigate } from 'react-router-dom';

    const projectData = {
      'data-science': {
        title: 'Data Science',
        description: 'Analyze and visualize data to extract valuable insights.',
        levels: {
          'Basic': [
            { name: 'Basic Data Analysis with Pandas', technologies: ['Python', 'Pandas'], message: 'Start with basic data analysis! Focus on data loading and manipulation.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=e60ItWLvj2A', title: 'Data Analysis with Pandas' },
              { type: 'Website', url: 'https://pandas.pydata.org/docs/', title: 'Pandas Documentation' },
            ] },
            { name: 'Data Visualization with Matplotlib', technologies: ['Python', 'Matplotlib'], message: 'Create basic visualizations! Focus on plotting and data representation.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=q7BoX_JqK_Y', title: 'Data Visualization with Matplotlib' },
              { type: 'Website', url: 'https://matplotlib.org/stable/contents.html', title: 'Matplotlib Documentation' },
            ] },
            { name: 'Simple Data Cleaning Project', technologies: ['Python', 'Pandas'], message: 'Clean a dataset! Focus on handling missing values and outliers.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=kG6j790-1-0', title: 'Data Cleaning with Pandas' },
              { type: 'Website', url: 'https://pandas.pydata.org/docs/user_guide/missing_data.html', title: 'Pandas Missing Data Documentation' },
            ] },
            { name: 'Descriptive Statistics Analysis', technologies: ['Python', 'Pandas'], message: 'Calculate descriptive statistics! Focus on mean, median, and standard deviation.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=0G07qP1Yj2Y', title: 'Descriptive Statistics with Pandas' },
              { type: 'Website', url: 'https://pandas.pydata.org/docs/reference/api/pandas.DataFrame.describe.html', title: 'Pandas Describe Documentation' },
            ] },
          ],
          'Intermediate': [
            { name: 'Exploratory Data Analysis (EDA)', technologies: ['Python', 'Pandas', 'Seaborn'], message: 'Perform exploratory data analysis! Focus on data distribution and relationships.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=y1s1G1-01_g', title: 'Exploratory Data Analysis with Pandas and Seaborn' },
              { type: 'Website', url: 'https://seaborn.pydata.org/tutorial.html', title: 'Seaborn Tutorial' },
            ] },
            { name: 'Data Analysis with SQL', technologies: ['Python', 'SQL', 'Pandas'], message: 'Analyze data using SQL! Focus on database queries and data retrieval.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=7S_tz1z_5bA', title: 'Data Analysis with SQL and Pandas' },
              { type: 'Website', url: 'https://www.w3schools.com/sql/', title: 'SQL Tutorial' },
            ] },
            { name: 'Time Series Analysis', technologies: ['Python', 'Pandas', 'Statsmodels'], message: 'Analyze time series data! Focus on time series decomposition and forecasting.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=0jX_1-01_g', title: 'Time Series Analysis with Pandas and Statsmodels' },
              { type: 'Website', url: 'https://www.statsmodels.org/stable/tsa.html', title: 'Statsmodels Time Series Analysis Documentation' },
            ] },
            { name: 'A/B Testing Analysis', technologies: ['Python', 'Pandas', 'Statsmodels'], message: 'Analyze A/B testing results! Focus on statistical significance and hypothesis testing.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=0jX_1-01_g', title: 'A/B Testing Analysis with Python' },
              { type: 'Website', url: 'https://www.statsmodels.org/stable/stats.html', title: 'Statsmodels Statistical Tests Documentation' },
            ] },
          ],
          'Master': [
            { name: 'Machine Learning Model Deployment', technologies: ['Python', 'Flask', 'Docker'], message: 'Deploy a machine learning model! Focus on API development and containerization.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=s_y1-1-01_g', title: 'Machine Learning Model Deployment with Flask and Docker' },
              { type: 'Website', url: 'https://flask.palletsprojects.com/en/2.3.x/', title: 'Flask Documentation' },
            ] },
            { name: 'Big Data Analysis with Spark', technologies: ['Python', 'PySpark', 'Hadoop'], message: 'Analyze big data using Spark! Focus on distributed computing and data processing.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=jD7FnbI767Q', title: 'Big Data Analysis with PySpark' },
              { type: 'Website', url: 'https://spark.apache.org/docs/latest/api/python/', title: 'PySpark Documentation' },
            ] },
            { name: 'Advanced Data Visualization with D3.js', technologies: ['JavaScript', 'D3.js'], message: 'Create advanced data visualizations! Focus on interactive charts and data storytelling.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=sE_00mJb0-o', title: 'Advanced Data Visualization with D3.js' },
              { type: 'Website', url: 'https://d3js.org/', title: 'D3.js Documentation' },
            ] },
            { name: 'Building a Data Pipeline', technologies: ['Python', 'Airflow', 'Cloud Services'], message: 'Build a data pipeline! Focus on data ingestion, transformation, and loading.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=9l9V-Ou0-6I', title: 'Building a Data Pipeline with Airflow' },
              { type: 'Website', url: 'https://airflow.apache.org/docs/', title: 'Apache Airflow Documentation' },
            ] },
          ],
        },
      },
      'cloud-computing': {
        title: 'Cloud Computing',
        description: 'Design and deploy scalable cloud-based solutions.',
        levels: {
          'Basic': [
            { name: 'Deploy a Static Website on AWS S3', technologies: ['AWS', 'S3'], message: 'Deploy a static website! Focus on cloud storage and basic deployment.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=s_y1-1-01_g', title: 'Deploy a Static Website on AWS S3' },
              { type: 'Website', url: 'https://aws.amazon.com/s3/', title: 'AWS S3 Documentation' },
            ] },
            { name: 'Create a Virtual Machine on Azure', technologies: ['Azure', 'Virtual Machines'], message: 'Create a virtual machine! Focus on cloud compute and basic configuration.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=jD7FnbI767Q', title: 'Create a Virtual Machine on Azure' },
              { type: 'Website', url: 'https://azure.microsoft.com/en-us/services/virtual-machines/', title: 'Azure Virtual Machines Documentation' },
            ] },
            { name: 'Set up a Simple Web Server on Google Cloud', technologies: ['Google Cloud', 'Compute Engine'], message: 'Set up a web server! Focus on cloud compute and basic networking.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=GuA0_QJ-70w', title: 'Set up a Web Server on Google Cloud' },
              { type: 'Website', url: 'https://cloud.google.com/compute', title: 'Google Compute Engine Documentation' },
            ] },
            { name: 'Deploy a Simple Application on AWS Elastic Beanstalk', technologies: ['AWS', 'Elastic Beanstalk'], message: 'Deploy a simple application! Focus on platform as a service.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=1jS-5-101Kk', title: 'Deploy a Simple Application on AWS Elastic Beanstalk' },
              { type: 'Website', url: 'https://aws.amazon.com/elasticbeanstalk/', title: 'AWS Elastic Beanstalk Documentation' },
            ] },
          ],
          'Intermediate': [
            { name: 'Deploy a Web Application with Docker on AWS ECS', technologies: ['AWS', 'Docker', 'ECS'], message: 'Deploy a web application with Docker! Focus on containerization and orchestration.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=s_y1-1-01_g', title: 'Deploy a Web Application with Docker on AWS ECS' },
              { type: 'Website', url: 'https://aws.amazon.com/ecs/', title: 'AWS ECS Documentation' },
            ] },
            { name: 'Set up a Kubernetes Cluster on Azure AKS', technologies: ['Azure', 'Kubernetes', 'AKS'], message: 'Set up a Kubernetes cluster! Focus on container orchestration and management.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=jntmZ-0-j1o', title: 'Set up a Kubernetes Cluster on Azure AKS' },
              { type: 'Website', url: 'https://azure.microsoft.com/en-us/services/kubernetes-service/', title: 'Azure Kubernetes Service Documentation' },
            ] },
            { name: 'Create a Serverless Function on Google Cloud Functions', technologies: ['Google Cloud', 'Cloud Functions'], message: 'Create a serverless function! Focus on function as a service.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=GuA0_QJ-70w', title: 'Create a Serverless Function on Google Cloud Functions' },
              { type: 'Website', url: 'https://cloud.google.com/functions', title: 'Google Cloud Functions Documentation' },
            ] },
            { name: 'Implement a CI/CD Pipeline with AWS CodePipeline', technologies: ['AWS', 'CodePipeline', 'CodeBuild'], message: 'Implement a CI/CD pipeline! Focus on automation and continuous delivery.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=1jS-5-101Kk', title: 'Implement a CI/CD Pipeline with AWS CodePipeline' },
              { type: 'Website', url: 'https://aws.amazon.com/codepipeline/', title: 'AWS CodePipeline Documentation' },
            ] },
          ],
          'Master': [
            { name: 'Build a Scalable Microservices Architecture on AWS', technologies: ['AWS', 'ECS', 'API Gateway', 'Lambda'], message: 'Build a scalable microservices architecture! Focus on distributed systems and API design.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=jD7FnbI767Q', title: 'Build a Scalable Microservices Architecture on AWS' },
              { type: 'Website', url: 'https://aws.amazon.com/microservices/', title: 'AWS Microservices Documentation' },
            ] },
            { name: 'Implement a CI/CD Pipeline on Azure DevOps', technologies: ['Azure', 'DevOps', 'Pipelines'], message: 'Implement a CI/CD pipeline! Focus on automation and continuous integration.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=sE_00mJb0-o', title: 'Implement a CI/CD Pipeline on Azure DevOps' },
              { type: 'Website', url: 'https://azure.microsoft.com/en-us/services/devops/', title: 'Azure DevOps Documentation' },
            ] },
            { name: 'Set up a Data Lake on Google Cloud Storage', technologies: ['Google Cloud', 'Cloud Storage', 'BigQuery'], message: 'Set up a data lake! Focus on data storage and analytics.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=9l9V-Ou0-6I', title: 'Set up a Data Lake on Google Cloud Storage' },
              { type: 'Website', url: 'https://cloud.google.com/storage', title: 'Google Cloud Storage Documentation' },
            ] },
            { name: 'Build a Serverless Application with AWS Lambda', technologies: ['AWS', 'Lambda', 'API Gateway', 'DynamoDB'], message: 'Build a serverless application! Focus on function as a service and event-driven architecture.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=GuA0_QJ-70w', title: 'Build a Serverless Application with AWS Lambda' },
              { type: 'Website', url: 'https://aws.amazon.com/lambda/', title: 'AWS Lambda Documentation' },
            ] },
          ],
        },
      },
      'cybersecurity': {
        title: 'Cybersecurity',
        description: 'Protect systems and networks from cyber threats.',
        levels: {
          'Basic': [
            { name: 'Basic Network Scanning with Nmap', technologies: ['Nmap', 'Linux'], message: 'Perform basic network scanning! Focus on network discovery and port scanning.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=8-1-01_g', title: 'Basic Network Scanning with Nmap' },
              { type: 'Website', url: 'https://nmap.org/docs/', title: 'Nmap Documentation' },
            ] },
            { name: 'Vulnerability Scanning with Nessus', technologies: ['Nessus', 'Linux'], message: 'Scan for vulnerabilities! Focus on vulnerability assessment and reporting.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=jD7FnbI767Q', title: 'Vulnerability Scanning with Nessus' },
              { type: 'Website', url: 'https://www.tenable.com/products/nessus', title: 'Nessus Documentation' },
            ] },
            { name: 'Simple Password Cracking with John the Ripper', technologies: ['John the Ripper', 'Linux'], message: 'Crack passwords! Focus on password cracking techniques and tools.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=sE_00mJb0-o', title: 'Simple Password Cracking with John the Ripper' },
              { type: 'Website', url: 'https://www.openwall.com/john/', title: 'John the Ripper Documentation' },
            ] },
            { name: 'Basic Web Application Security Testing', technologies: ['Burp Suite', 'OWASP ZAP'], message: 'Perform basic web application security testing! Focus on common vulnerabilities.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=9l9V-Ou0-6I', title: 'Basic Web Application Security Testing' },
              { type: 'Website', url: 'https://owasp.org/www-project-top-ten/', title: 'OWASP Top Ten' },
            ] },
          ],
          'Intermediate': [
            { name: 'Web Application Penetration Testing', technologies: ['Burp Suite', 'OWASP ZAP'], message: 'Perform web application penetration testing! Focus on OWASP top 10 vulnerabilities.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=GuA0_QJ-70w', title: 'Web Application Penetration Testing' },
              { type: 'Website', url: 'https://portswigger.net/burp', title: 'Burp Suite Documentation' },
            ] },
            { name: 'Network Traffic Analysis with Wireshark', technologies: ['Wireshark', 'Linux'], message: 'Analyze network traffic! Focus on packet capture and analysis.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=1jS-5-101Kk', title: 'Network Traffic Analysis with Wireshark' },
              { type: 'Website', url: 'https://www.wireshark.org/docs/', title: 'Wireshark Documentation' },
            ] },
            { name: 'Security Auditing and Compliance', technologies: ['Security Frameworks', 'Compliance Standards'], message: 'Perform security auditing and compliance checks! Focus on security frameworks and standards.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=jD7FnbI767Q', title: 'Security Auditing and Compliance' },
              { type: 'Website', url: 'https://www.iso.org/isoiec-27001-information-security.html', title: 'ISO 27001 Standard' },
            ] },
            { name: 'Incident Response', technologies: ['Malware Analysis', 'Forensics'], message: 'Respond to security incidents! Focus on malware analysis and forensics.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=sE_00mJb0-o', title: 'Incident Response and Forensics' },
              { type: 'Website', url: 'https://www.sans.org/incident-response/', title: 'SANS Incident Response' },
            ] },
          ],
          'Master': [
            { name: 'Advanced Penetration Testing with Metasploit', technologies: ['Metasploit', 'Linux'], message: 'Perform advanced penetration testing! Focus on exploitation and post-exploitation.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=9l9V-Ou0-6I', title: 'Advanced Penetration Testing with Metasploit' },
              { type: 'Website', url: 'https://www.metasploit.com/', title: 'Metasploit Documentation' },
            ] },
            { name: 'Malware Analysis', technologies: ['IDA Pro', 'Ghidra', 'Sandbox'], message: 'Analyze malware! Focus on reverse engineering and malware behavior.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=GuA0_QJ-70w', title: 'Malware Analysis' },
              { type: 'Website', url: 'https://ghidra-sre.org/', title: 'Ghidra Documentation' },
            ] },
            { name: 'Building a Security Information and Event Management (SIEM) System', technologies: ['ELK Stack', 'Security Tools'], message: 'Build a SIEM system! Focus on log management and security monitoring.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=1jS-5-101Kk', title: 'Building a SIEM System with ELK Stack' },
              { type: 'Website', url: 'https://www.elastic.co/what-is/elk-stack', title: 'ELK Stack Documentation' },
            ] },
            { name: 'Developing a Custom Security Tool', technologies: ['Python', 'Security Libraries'], message: 'Develop a custom security tool! Focus on security automation and tool development.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=jD7FnbI767Q', title: 'Developing a Custom Security Tool with Python' },
              { type: 'Website', url: 'https://pypi.org/search/?q=security', title: 'Python Security Libraries' },
            ] },
          ],
        },
      },
    };

    function ProjectDetails02() {
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
                        <p className="text-gray-400 text-sm">Technologies: {item.technologies.join(', ')}</p>
                      </div>
                      <div className="flex space-x-2">
                        <button
                          onClick={() => handleOpenResources(item.resources)}
                          className="px-3 py-2 bg-gray-600 text-white rounded hover:bg-gray-700 transition-all text-xs"
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

    export default ProjectDetails02;
