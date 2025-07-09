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
            {/* Technologies list can go here later */}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
