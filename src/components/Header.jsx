import { useState, useEffect } from 'react';
import "@/styles/components/header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <>
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container">
          <nav className="navbar">
            <a href="#" className="logo">Portfolio</a>
            <ul className="nav-links">
              <li><a href="#home" className="active">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#projects">Projects</a></li>
              <li><a href="#skills">Skills</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
            <div className="hamburger" onClick={toggleMenu}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </nav>
        </div>
      </header>

      <div className={`mobile-menu ${menuOpen ? 'active' : ''}`}>
        <span className="close-menu" onClick={closeMenu}>×</span>
        <nav className="mobile-nav-links">
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#skills" onClick={closeMenu}>Skills</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </nav>
      </div>
    </>
  );
};

export default Header;