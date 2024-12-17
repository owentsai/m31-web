import React, { useState, useEffect } from 'react';
import './Header.css'; // Optional: Add custom styles for your header.
import logo from './M31_logo.svg';

function Header() {
  // State to track if header is at the top
  const [isScrolled, setIsScrolled] = useState(false);

  // Scroll event listener
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="logo">
        <img src={logo} alt="Company Logo" />
      </div>
      <div className="bars">
        <nav className="navbar">
          <ul className="nav-links">
            <li><a href="#platform">Platform</a></li>
            <li><a href="#research">Research</a></li>
            <li><a href="#clinical">Clinical</a></li>
            <li><a href="#science">Science</a></li>
            <li><a href="#team">Team</a></li>
            <li><a href="#careers">Careers</a></li>
          </ul>
        </nav>
      </div>

      <div className = "contact">
        <nav className="navbar">
            <ul className="nav-links">
              <li><a href="#contact">Contact us</a></li>
            </ul>
          </nav>
      </div>
    </header>
  );
}
export default Header; // Ensure this line is included