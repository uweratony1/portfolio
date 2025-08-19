import { useEffect, useState } from 'react';
import "@/styles/components/hero.css";
import profileImage from "@/assets/images/profile.png"; // ✅ Correct import

const Hero = () => {
  const fullText = "A passionate full-stack developer focused on creating beautiful, functional, and user-centered digital experiences.";
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);
  const typingSpeed = 80;     // ms per character
  const deletingSpeed = 40;   // ms per character
  const pauseTime = 1500;     // ms at end of typing / before deleting

  useEffect(() => {
    const handleType = () => {
      setDisplayedText(prev => fullText.substring(0, index + 1));

      if (!isDeleting && index === fullText.length) {
        setTimeout(() => setIsDeleting(true), pauseTime);
      } else if (isDeleting && index === 0) {
        setIsDeleting(false);
        setIndex(0);
        return; // restart typing
      }

      const currentSpeed = isDeleting ? deletingSpeed : typingSpeed;
      const timeout = setTimeout(() => {
        setIndex(prev => (isDeleting ? prev - 1 : prev + 1));
      }, currentSpeed);

      return () => clearTimeout(timeout);
    };

    const timer = handleType();
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [index, isDeleting]);

  return (
    <section id="home" className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <h1>
              Hi, I'm <span>Uwera Tony Blaire</span>
            </h1>
            <p>
              {displayedText}
              <span className="cursor">|</span>
            </p>
            <div className="hero-btns">
              <a href="#projects" className="btn btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn btn-outline">
                Get In Touch
              </a>
            </div>
          </div>
          <div className="hero-image">
            <img src={profileImage} alt="Uwera Tony Blaire" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;