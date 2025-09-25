/**
 * File Name: aboutme.jsx
 * Description: About Me component
 * Student Name: Sivaprasad Gunji
 * Student ID: 301546700
 * Date: September 25, 2025
 */

import profilePic from './assets/sivaprasad.jpg'
import './AboutMe.css'
import resumePDF from './assets/sivaprasad-gunji-resume.pdf'
export default function About() {
  return (
    <div className="about-container">
      <h1>About Me</h1>
      <img src={profilePic} alt="Sivaprasad Gunji" className="profile-pic" />
      <h2>Hi, I'm <span className="name-highlight">Sivaprasad Gunji</span></h2>
      <p>
        I’m a passionate and driven individual with a strong interest in technology and innovation. I enjoy exploring new ideas, solving complex problems, and continuously learning to grow both personally and professionally.
      </p>
      <a href={resumePDF} target="_blank" rel="noopener noreferrer" className="resume-link">
        📄 View My Resume (PDF)
      </a>
    </div>
  );
}
