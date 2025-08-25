import { useEffect, useState } from 'react';
import "@/styles/components/about.css";
import aboutImage from "@/assets/images/about.png";

const About = () => {
  const fullText = "I build and secure robust network infrastructures";
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;
    const timeout = setTimeout(() => {
      const type = () => {
        if (index <= fullText.length) {
          setDisplayedText(fullText.substring(0, index));
          index++;
          setTimeout(type, 60);
        } else {
          setIsComplete(true);
        }
      };
      type();
    }, 150);

    return () => clearTimeout(timeout);
  }, []);

  const [isHovered, setIsHovered] = useState(false);

  // ✅ Define keyframe animation in JavaScript using `@keyframes`
  const bounceAnimation = `
    @keyframes bounce {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-15px); }
    }
  `;

  // ✅ Inline styles
  const imageWrapperStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1rem',
    marginTop: '10px'
  };

  const imageStyle = {
    width: '300px',
    height: '300px',
    borderRadius: '50%',
    objectFit: 'cover',
    boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
    border: '5px solid white',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
    cursor: 'pointer',
    // ✅ Apply bounce animation once on load
    animation: 'bounce 0.8s ease-in-out'
  };

  const imageHoverStyle = {
    ...imageStyle,
    transform: 'scale(1.05) translateY(-15px)',
    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'
  };

  const nameTagStyle = {
    textAlign: 'center',
    margin: 0
  };

  const nameStyle = {
    fontSize: '1.5rem',
    fontWeight: '600',
    color: 'black',
    margin: '0',
    letterSpacing: '0.5px'
  };

  const nameUnderlineStyle = {
    display: 'block',
    width: '60px',
    height: '3px',
    backgroundColor: 'black',
    margin: '0.5rem auto 0',
    borderRadius: '3px'
  };

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">Get to know me a little better</p>

        <div className="about-content">
          <div className="about-text">
            <h3>Networking Engineer</h3>
            <h2>
              {displayedText}
              <span className={`cursor ${isComplete ? 'visible' : ''}`}>|</span>
            </h2>

            <p>
              I'm a dedicated Networking Engineer with over 5 years of experience designing, implementing, and maintaining scalable and secure network solutions for enterprise environments. I specialize in routing, switching, firewall configuration, and network automation.
            </p>
            <p>
              My journey in networking began with a fascination for how data travels across systems and networks. This curiosity led me to pursue a career where I could ensure reliable, high-performance connectivity and cybersecurity. I am passionate about optimizing network performance and protecting digital assets from evolving threats.
            </p>

            <a href="/resume.pdf" className="btn btn-primary resume-btn">
              <i className="fas fa-download"></i> Download Resume
            </a>
          </div>

          {/* Image with Bounce Animation */}
          <div style={imageWrapperStyle}>
            {/* Inject the keyframes animation */}
            <style>{bounceAnimation}</style>
            <img
              src={aboutImage}
              alt="Uwera Tony Blaire"
              style={isHovered ? imageHoverStyle : imageStyle}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            />
            <div style={nameTagStyle}>
              <h4 style={nameStyle}>
                Uwera Tony Blaire
                <span style={nameUnderlineStyle}></span>
              </h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
