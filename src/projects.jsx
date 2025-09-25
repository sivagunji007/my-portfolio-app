/**
 * File Name: projects.jsx
 * Description: Projects component showcasing various projects
 * Student Name: Sivaprasad Gunji
 * Student ID: 301546700
 * Date: September 25, 2025
 */


// === Imports and Setup ===
import './Projects.css'; // Optional styling
import project1Img from './assets/project1.jpg';
import project2Img from './assets/project2.jpg';
import project3Img from './assets/project3.jpg';

const Projects = () => {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>

      <div className="project-card">
        <img src={project1Img} alt="Project 1" />
        <h2>Portfolio Website</h2>
        <p>
          I designed and developed a personal portfolio website using React. My role included responsive layout, and integration of interactive components. The outcome was a clean site that showcases my skills and projects.
        </p>
      </div>

      <div className="project-card">
        <img src={project2Img} alt="Project 2" />
        <h2>I deployed EKS cluster</h2>
        <p>
          I deployed an EKS (Elastic Kubernetes Service) cluster on AWS. My responsibilities included setting up the cluster, configuring networking, and ensuring proper security measures were in place. The deployment improved the scalability and reliability of the application.
        </p>
      </div>

      <div className="project-card">
        <img src={project3Img} alt="Project 3" />
        <h2>I implemented GitOps practices using ArgoCD</h2>
        <p>
          I established GitOps practices for a microservices-based application using ArgoCD. This involved setting up CI/CD pipelines, managing Kubernetes manifests with Git, and ensuring automated deployments. The approach enhanced collaboration and streamlined the deployment process.
        </p>
      </div>
    </div>
  );
};

export default Projects;