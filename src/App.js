import './App.css';

function getStars(numStars = 150) {
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    const size = Math.random() * 2 + 1;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    stars.push(
      <div
        key={i}
        className="star"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`,
          left: `${left}%`,
        }}
      />
    );
  }
  return stars;
}

function App() {
  return (
    <div className="App">
      <nav className="top-right-nav">
        <span className="hero-link">Contact</span>
        <a href="https://linkedin.com/in/elisa-goncalves-079713285" className="hero-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        <a href="https://github.com/elisareineg" className="hero-link" target="_blank" rel="noopener noreferrer">GitHub</a>
      </nav>
      <header className="App-header">
        <div className="stars">{getStars(300)}</div>
        <div className="hero-content">
          <h1 className="hero-title">
            Hello there, I'm Elisa!<span className="blinking-cursor">|</span>
          </h1>
          <h2 className="hero-subtitle">
            I'm a Fullstack <span className="web-highlight">&lt;Web&gt;</span> Developer
          </h2>
          <a className="hero-btn" href="#contact-section">
            Check out my projects &rarr;
          </a>
          <div className="down-arrow">&#8595;</div>
        </div>
      </header>
      <section id="contact-section" className="contact-section">
        <div className="stars contact-stars">{getStars(200)}</div>
        <div className="about-columns">
          <div className="profile-photo-box"></div>
          <div className="about-me-box">
            <h2 className="about-me-header about-me-header-left">About Me</h2>
            <p className="about-me-text about-me-text-left">
              Hello! I'm Elisa, a computer science student at Queen's University. I have a passion for cybersecurity, web development, and AI. Below are some technologies I have experience with:
            </p>
            <div className="skills-section">
              <div className="skill-item">
                <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" alt="Python" />
              </div>
              <div className="skill-item">
                <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" alt="Java" />
              </div>
              <div className="skill-item">
                <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" alt="JavaScript" />
              </div>
              <div className="skill-item">
                <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" alt="TypeScript" />
              </div>
              <div className="skill-item">
                <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" alt="HTML" />
              </div>
              <div className="skill-item">
                <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" alt="CSS" />
              </div>
              <div className="skill-item">
                <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" alt="React" />
              </div>
              <div className="skill-item">
                <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg" alt="Next.js" />
              </div>
              <div className="skill-item">
                <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/c/c-original.svg" alt="C" />
              </div>
              <div className="skill-item">
                <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" />
              </div>
              <div className="skill-item">
                <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" alt="SQL" />
              </div>
              <div className="skill-item">
                <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg" alt="GCP" />
              </div>
              <div className="skill-item">
                <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" alt="Linux" />
              </div>
              <div className="skill-item">
                <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg" alt="Firebase" />
              </div>
            </div>
            <div className="skills-bubble-container">
              <div className="skills-bubble">
                I'm also familiar with more and always learning!
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
