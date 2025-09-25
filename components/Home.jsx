
/**
 * File Name: Home.jsx
 * Student Name: Sivaprasad Gunji
 * Student ID: 301546700
 * Date: September 25, 2025
 */


export default function Home() {
    return (
    <div className="welcome-container">
      <h1>Welcome to My Portfolio</h1>
      <h2>Hello, I'm <span className="highlight">Sivaprasad Gunji</span></h2>
      <p>
        A passionate professional with a drive for excellence and creativity.
      </p>

      <section className="intro-section">
        <h3>What You'll Find Here:</h3>
        <ul>
          <li><strong>About Me</strong> – My background, interests, and journey.</li>
          <li><strong>Projects</strong> – A showcase of my work and achievements.</li>
          <li><strong>Services</strong> – Technologies and tools I specialize in.</li>
          <li><strong>Contact</strong> – Let’s connect!</li>
        </ul>
      </section>

      <blockquote className="quote">
        "Strive not to be a success, but rather to be of value." – Albert Einstein
      </blockquote>

      <footer>
        <p>© {new Date().getFullYear()} Sivaprasad Gunji</p>
      </footer>
    </div>
  );
}

