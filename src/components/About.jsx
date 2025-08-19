import { useEffect, useState } from 'react';
import "@/styles/components/about.css";
import aboutImage from "@/assets/images/about.png"; // Make sure path is correct

const About = () => {
  const fullText = "I build and secure robust network infrastructures";
  const [displayedText, setDisplayedText] = useState("");
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    let index = 0;

    // Delay slightly to sync with page load
    const timeout = setTimeout(() => {
      const type = () => {
        if (index <= fullText.length) {
          setDisplayedText(fullText.substring(0, index));
          index++;
          setTimeout(type, 60); // Adjust typing speed (ms per character)
        } else {
          setIsComplete(true); // Cursor fades out when done
        }
      };
      type();
    }, 150);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <p className="section-subtitle">
          Get to know me a little better
        </p>
        <div className="about-content">
          <div className="about-text">
            <h3>Networking Engineer</h3>
            
            {/* Typing Effect on the H2 */}
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

          {/* Image with Name Tag */}
          <div className="about-image-wrapper">
            <img src={aboutImage} alt="Uwera Tony Blaire" className="about-image-large" />
            <div className="image-name-tag">
              <h4>Uwera Tony Blaire</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;