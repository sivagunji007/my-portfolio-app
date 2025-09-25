/**
 * File Name: services.jsx
 * Description: Services component listing offered services
 * Student Name: Sivaprasad Gunji
 * Student ID: 301546700
 * Date: September 25, 2025
 */


// === Imports and Setup ===
import './services.css'

export default function Services() {
   return (
    <div className="services-container">
      <h1>Services I Offer</h1>
      <ul className="services-list">
        <li>💻 General Programming</li>
        <li>🌐 Web Development</li>
        <li>📱 Mobile App Development</li>
        <li>🛠️ Cloud Services</li>
        <li>🔧 Technical Consulting</li>
      </ul>
    </div>
  );
}
