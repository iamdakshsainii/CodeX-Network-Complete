import React, { useState, useEffect, useRef } from 'react';
    import { useParams, useNavigate } from 'react-router-dom';

    const projectData = {
      'web-development': {
        title: 'Web Development',
        description: 'Craft dynamic websites and web applications.',
        levels: {
          'Basic': [
            { name: 'Personal Portfolio Website', technologies: ['HTML', 'CSS', 'JavaScript'], message: 'Craft your digital identity! Build this portfolio from scratch to showcase your skills. Start with JavaScript for this project.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=1jS-5-101Kk', title: 'Build a Personal Portfolio Website' },
              { type: 'Website', url: 'https://www.freecodecamp.org/learn/responsive-web-design/', title: 'FreeCodeCamp Responsive Web Design' },
            ] },
            { name: 'Simple To-Do List App', technologies: ['HTML', 'CSS', 'JavaScript'], message: 'Master the basics of DOM manipulation! Try building this app without looking at the code. Start with JavaScript for this project.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=G_j6l1iE-0Y', title: 'Build a To-Do List App' },
              { type: 'Website', url: 'https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model', title: 'MDN Web Docs: DOM' },
            ] },
            { name: 'Basic Landing Page', technologies: ['HTML', 'CSS', 'JavaScript'], message: 'Design a compelling landing page! Focus on layout and responsiveness. Start with JavaScript for this project.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=bMknfKXIFA8', title: 'Build a Landing Page' },
              { type: 'Website', url: 'https://getbootstrap.com/', title: 'Bootstrap Framework' },
            ] },
            { name: 'Simple Calculator App', technologies: ['HTML', 'CSS', 'JavaScript'], message: 'Build a functional calculator! Focus on logic and event handling. Start with JavaScript for this project.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=j59qQ7Yk20o', title: 'Build a Calculator App' },
              { type: 'Website', url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling', title: 'MDN Web Docs: Control Flow' },
            ] },
          ],
          'Intermediate': [
            { name: 'Blog Application', technologies: ['React', 'Node.js', 'MongoDB'], message: 'Create a dynamic blog! Focus on component architecture and data fetching. Start with React for this project.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=SccSCuHhOw0', title: 'Build a Blog with React, Node.js, and MongoDB' },
              { type: 'Website', url: 'https://react.dev/', title: 'React Official Documentation' },
            ] },
            { name: 'E-commerce Website', technologies: ['React', 'Redux', 'Node.js', 'Express', 'PostgreSQL'], message: 'Build a functional e-commerce site! Focus on state management and database interaction. Start with React for this project.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=s_y1-1-01_g', title: 'Build an E-commerce Website with React and Node.js' },
              { type: 'Website', url: 'https://redux.js.org/', title: 'Redux Official Documentation' },
            ] },
            { name: 'Social Media Dashboard', technologies: ['Vue.js', 'Firebase'], message: 'Create a social media dashboard! Focus on real-time data and user authentication. Start with Vue.js for this project.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=jntmZ-0-j1o', title: 'Build a Social Media Dashboard with Vue.js and Firebase' },
              { type: 'Website', url: 'https://vuejs.org/', title: 'Vue.js Official Documentation' },
            ] },
            { name: 'Weather Application', technologies: ['React', 'API Integration'], message: 'Build a weather app! Focus on API integration and data handling. Start with React for this project.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=GuA0_QJ-70w', title: 'Build a Weather App with React' },
              { type: 'Website', url: 'https://openweathermap.org/api', title: 'OpenWeatherMap API' },
            ] },
          ],
          'Master': [
            { name: 'Real-Time Chat Application', technologies: ['React', 'Node.js', 'WebSockets', 'MongoDB'], message: 'Build a real-time chat app! Focus on WebSockets and server-side logic. Start with React for this project.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=jD7FnbI767Q', title: 'Build a Real-Time Chat App with React and Node.js' },
              { type: 'Website', url: 'https://socket.io/', title: 'Socket.IO Official Documentation' },
            ] },
            { name: 'Complex SaaS Platform', technologies: ['Angular', 'NestJS', 'GraphQL', 'PostgreSQL'], message: 'Develop a complex SaaS platform! Focus on scalability and API design. Start with Angular for this project.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=j-m1_01_110', title: 'Build a SaaS Platform with Angular and NestJS' },
              { type: 'Website', url: 'https://angular.io/', title: 'Angular Official Documentation' },
            ] },
            { name: 'Progressive Web App (PWA)', technologies: ['React', 'Service Workers', 'IndexedDB'], message: 'Create a PWA! Focus on offline capabilities and performance. Start with React for this project.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=sE_00mJb0-o', title: 'Build a PWA with React' },
              { type: 'Website', url: 'https://web.dev/progressive-web-apps/', title: 'Web.dev: Progressive Web Apps' },
            ] },
            { name: 'Advanced E-commerce Platform', technologies: ['Next.js', 'GraphQL', 'PostgreSQL'], message: 'Build an advanced e-commerce platform! Focus on server-side rendering and performance. Start with Next.js for this project.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=9l9V-Ou0-6I', title: 'Build an Advanced E-commerce Platform with Next.js' },
              { type: 'Website', url: 'https://nextjs.org/', title: 'Next.js Official Documentation' },
            ] },
          ],
        },
      },
      'android-development': {
        title: 'Android Development',
        description: 'Mobile app development for Android using Kotlin and Java.',
        levels: {
          'Basic': [
            { name: 'Simple Calculator App', technologies: ['Kotlin', 'Android SDK'], message: 'Build a basic calculator! Focus on UI design and basic logic. Start with Kotlin for this project.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=smVg01-1-0o', title: 'Build a Calculator App in Android with Kotlin' },
              { type: 'Website', url: 'https://developer.android.com/kotlin', title: 'Android Kotlin Documentation' },
            ] },
            { name: 'Basic Note-Taking App', technologies: ['Java', 'Android SDK'], message: 'Create a simple note-taking app! Focus on data storage and UI. Start with Java for this project.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=j-m1_01_110', title: 'Build a Note-Taking App in Android with Java' },
              { type: 'Website', url: 'https://developer.android.com/java', title: 'Android Java Documentation' },
            ] },
            { name: 'Weather App', technologies: ['Kotlin', 'Android SDK', 'API Integration'], message: 'Build a weather app! Focus on API integration and data handling. Start with Kotlin for this project.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=a-s7-1-01_g', title: 'Build a Weather App in Android with Kotlin' },
              { type: 'Website', url: 'https://developer.android.com/training/basics/network-ops', title: 'Android Network Operations' },
            ] },
            { name: 'Simple Quiz App', technologies: ['Kotlin', 'Android SDK'], message: 'Create a quiz app! Focus on UI design and basic logic. Start with Kotlin for this project.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=j59qQ7Yk20o', title: 'Build a Quiz App in Android with Kotlin' },
              { type: 'Website', url: 'https://developer.android.com/guide/components/activities', title: 'Android Activities Documentation' },
            ] },
          ],
          'Intermediate': [
            { name: 'Task Management App', technologies: ['Kotlin', 'Room Database', 'Android Architecture Components'], message: 'Create a task management app! Focus on data persistence and architecture. Start with Kotlin for this project.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=jD7FnbI767Q', title: 'Build a Task Management App in Android with Kotlin' },
              { type: 'Website', url: 'https://developer.android.com/topic/libraries/architecture/room', title: 'Android Room Database Documentation' },
            ] },
            { name: 'Social Media App', technologies: ['Java', 'Firebase', 'Android SDK'], message: 'Build a social media app! Focus on user authentication and real-time data. Start with Java for this project.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=sE_00mJb0-o', title: 'Build a Social Media App in Android with Java and Firebase' },
              { type: 'Website', url: 'https://firebase.google.com/docs', title: 'Firebase Official Documentation' },
            ] },
            { name: 'E-commerce App', technologies: ['Kotlin', 'Retrofit', 'Android SDK'], message: 'Create an e-commerce app! Focus on API integration and data handling. Start with Kotlin for this project.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=9l9V-Ou0-6I', title: 'Build an E-commerce App in Android with Kotlin and Retrofit' },
              { type: 'Website', url: 'https://square.github.io/retrofit/', title: 'Retrofit Official Documentation' },
            ] },
            { name: 'Image Gallery App', technologies: ['Kotlin', 'Android SDK', 'Glide'], message: 'Build an image gallery app! Focus on image loading and UI. Start with Kotlin for this project.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=bMknfKXIFA8', title: 'Build an Image Gallery App in Android with Kotlin and Glide' },
              { type: 'Website', url: 'https://bumptech.github.io/glide/', title: 'Glide Official Documentation' },
            ] },
          ],
          'Master': [
            { name: 'Real-Time Chat App', technologies: ['Kotlin', 'WebSockets', 'Firebase'], message: 'Build a real-time chat app! Focus on WebSockets and real-time data. Start with Kotlin for this project.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=jntmZ-0-j1o', title: 'Build a Real-Time Chat App in Android with Kotlin and WebSockets' },
              { type: 'Website', url: 'https://developer.android.com/guide/topics/connectivity/websockets', title: 'Android WebSockets Documentation' },
            ] },
            { name: 'Augmented Reality App', technologies: ['Java', 'ARCore', 'Android SDK'], message: 'Create an augmented reality app! Focus on ARCore and 3D rendering. Start with Java for this project.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=GuA0_QJ-70w', title: 'Build an Augmented Reality App in Android with Java and ARCore' },
              { type: 'Website', url: 'https://developers.google.com/ar/develop/java', title: 'ARCore Java Documentation' },
            ] },
            { name: 'Advanced Data Visualization App', technologies: ['Kotlin', 'MPAndroidChart', 'Android SDK'], message: 'Build an advanced data visualization app! Focus on data analysis and charting. Start with Kotlin for this project.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=s_y1-1-01_g', title: 'Build an Advanced Data Visualization App in Android with Kotlin and MPAndroidChart' },
              { type: 'Website', url: 'https://github.com/PhilJay/MPAndroidChart', title: 'MPAndroidChart GitHub Repository' },
            ] },
            { name: 'Custom Camera App', technologies: ['Kotlin', 'CameraX', 'Android SDK'], message: 'Create a custom camera app! Focus on camera API and image processing. Start with Kotlin for this project.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=1jS-5-101Kk', title: 'Build a Custom Camera App in Android with Kotlin and CameraX' },
              { type: 'Website', url: 'https://developer.android.com/training/camera', title: 'Android CameraX Documentation' },
            ] },
          ],
        },
      },
      'machine-learning': {
        title: 'Machine Learning',
        description: 'Explore AI and ML with Python and popular frameworks.',
        levels: {
          'Basic': [
            { name: 'Simple Linear Regression Model', technologies: ['Python', 'Scikit-learn'], message: 'Build a linear regression model! Focus on data preprocessing and model training. Start with Python for this project.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=4lO_n1-01_g', title: 'Build a Linear Regression Model with Python and Scikit-learn' },
              { type: 'Website', url: 'https://scikit-learn.org/stable/modules/linear_model.html#linear-regression', title: 'Scikit-learn Linear Regression Documentation' },
            ] },
            { name: 'Basic Classification Model', technologies: ['Python', 'Scikit-learn'], message: 'Create a basic classification model! Focus on model evaluation and selection. Start with Python for this project.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=jD7FnbI767Q', title: 'Build a Classification Model with Python and Scikit-learn' },
              { type: 'Website', url: 'https://scikit-learn.org/stable/modules/classes.html#module-sklearn.linear_model', title: 'Scikit-learn Classification Documentation' },
            ] },
            { name: 'Handwritten Digit Recognition', technologies: ['Python', 'TensorFlow'], message: 'Build a handwritten digit recognition model! Focus on neural networks and image processing. Start with Python for this project.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=sE_00mJb0-o', title: 'Build a Handwritten Digit Recognition Model with Python and TensorFlow' },
              { type: 'Website', url: 'https://www.tensorflow.org/tutorials/quickstart/beginner', title: 'TensorFlow Beginner Tutorial' },
            ] },
            { name: 'Basic Clustering Model', technologies: ['Python', 'Scikit-learn'], message: 'Create a basic clustering model! Focus on unsupervised learning and data analysis. Start with Python for this project.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=9l9V-Ou0-6I', title: 'Build a Clustering Model with Python and Scikit-learn' },
              { type: 'Website', url: 'https://scikit-learn.org/stable/modules/clustering.html', title: 'Scikit-learn Clustering Documentation' },
            ] },
          ],
          'Intermediate': [
            { name: 'Image Classification Model', technologies: ['Python', 'TensorFlow', 'Keras'], message: 'Build an image classification model! Focus on convolutional neural networks and transfer learning. Start with Python for this project.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=bMknfKXIFA8', title: 'Build an Image Classification Model with Python, TensorFlow, and Keras' },
              { type: 'Website', url: 'https://keras.io/examples/vision/', title: 'Keras Image Classification Examples' },
            ] },
            { name: 'Sentiment Analysis Model', technologies: ['Python', 'NLTK', 'Scikit-learn'], message: 'Create a sentiment analysis model! Focus on natural language processing and text classification. Start with Python for this project.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=j59qQ7Yk20o', title: 'Build a Sentiment Analysis Model with Python, NLTK, and Scikit-learn' },
              { type: 'Website', url: 'https://www.nltk.org/book/ch06.html', title: 'NLTK Book: Text Classification' },
            ] },
            { name: 'Recommendation System', technologies: ['Python', 'Pandas', 'Scikit-learn'], message: 'Build a recommendation system! Focus on collaborative filtering and content-based filtering. Start with Python for this project.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=GuA0_QJ-70w', title: 'Build a Recommendation System with Python, Pandas, and Scikit-learn' },
              { type: 'Website', url: 'https://scikit-learn.org/stable/modules/generated/sklearn.metrics.pairwise.cosine_similarity.html', title: 'Scikit-learn Cosine Similarity Documentation' },
            ] },
            { name: 'Time Series Forecasting Model', technologies: ['Python', 'Pandas', 'Statsmodels'], message: 'Create a time series forecasting model! Focus on time series analysis and forecasting techniques. Start with Python for this project.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=1jS-5-101Kk', title: 'Build a Time Series Forecasting Model with Python, Pandas, and Statsmodels' },
              { type: 'Website', url: 'https://www.statsmodels.org/stable/tsa.html', title: 'Statsmodels Time Series Analysis Documentation' },
            ] },
          ],
          'Master': [
            { name: 'Object Detection Model', technologies: ['Python', 'TensorFlow', 'YOLO'], message: 'Build an object detection model! Focus on deep learning and computer vision. Start with Python for this project.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=jD7FnbI767Q', title: 'Build an Object Detection Model with Python, TensorFlow, and YOLO' },
              { type: 'Website', url: 'https://pjreddie.com/darknet/yolo/', title: 'YOLO Official Website' },
            ] },
            { name: 'Natural Language Processing Model', technologies: ['Python', 'Transformers', 'PyTorch'], message: 'Create a natural language processing model! Focus on transformers and text generation. Start with Python for this project.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=sE_00mJb0-o', title: 'Build a Natural Language Processing Model with Python, Transformers, and PyTorch' },
              { type: 'Website', url: 'https://huggingface.co/transformers/', title: 'Hugging Face Transformers Documentation' },
            ] },
            { name: 'Generative Adversarial Network (GAN)', technologies: ['Python', 'TensorFlow', 'Keras'], message: 'Build a generative adversarial network! Focus on generative models and image synthesis. Start with Python for this project.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=9l9V-Ou0-6I', title: 'Build a Generative Adversarial Network (GAN) with Python, TensorFlow, and Keras' },
              { type: 'Website', url: 'https://keras.io/examples/generative/dcgan_mnist/', title: 'Keras DCGAN Example' },
            ] },
            { name: 'Reinforcement Learning Model', technologies: ['Python', 'TensorFlow', 'Gym'], message: 'Create a reinforcement learning model! Focus on agent-environment interaction and policy optimization. Start with Python for this project.', resources: [
              { type: 'YouTube', url: 'https://www.youtube.com/watch?v=GuA0_QJ-70w', title: 'Build a Reinforcement Learning Model with Python, TensorFlow, and Gym' },
              { type: 'Website', url: 'https://gym.openai.com/', title: 'OpenAI Gym Documentation' },
            ] },
          ],
        },
      },
    };

    function ProjectDetails01() {
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

    export default ProjectDetails01;
