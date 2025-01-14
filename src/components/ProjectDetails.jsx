import React from 'react';
    import ProjectDetails01 from './project/ProjectDetails01';
    import ProjectDetails02 from './project/ProjectDetails02';
    import { useParams } from 'react-router-dom';
    import ProjectDetails03 from './project/ProjectDetails03';

    function ProjectDetails() {
      const { projectTitle } = useParams();

      if (projectTitle === 'web-development' || projectTitle === 'android-development' || projectTitle === 'machine-learning') {
        return <ProjectDetails01 />;
      }
       if (projectTitle === 'data-science' || projectTitle === 'cloud-computing' || projectTitle === 'cybersecurity') {
        return <ProjectDetails02 />;
      }
       if (projectTitle === 'iot-projects' || projectTitle === 'data-analytics' || projectTitle === 'devops' || projectTitle === 'game-development') {
        return <ProjectDetails03 />;
      }
      return null;
    }

    export default ProjectDetails;
