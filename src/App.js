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
                <img className="skill-icon" src="https://www.svgrepo.com/show/353735/firebase.svg" alt="Firebase" />
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

      {/* EXPERIENCE SECTION */}
      <section className="portfolio-section">
        <div className="stars">{getStars(200)}</div>
        <h2 className="portfolio-section-title">EXPERIENCE</h2>
        <div className="portfolio-section-underline"></div>
        <div className="experience-cards-container">
          {/* CrowdStrike */}
          <div className="experience-card experience-card-vertical">
            <img src="/crowdstrike_logo.png" alt="CrowdStrike Logo" className="experience-logo experience-logo-vertical" />
            <div className="experience-role experience-role-vertical">Technical Account Management Launch Intern</div>
            <div className="experience-company-under-logo experience-company-vertical"><a href="https://www.crowdstrike.com/" target="_blank" rel="noopener noreferrer">CrowdStrike</a></div>
            <div className="experience-desc experience-desc-vertical">Contributed to the development and training of a GenAI Cloud Security Assistant using Python scripts and prompt engineering. Designed automated solutions for tech touch procedures through Salesforce and Gainsight.</div>
            <div className="experience-skills-row experience-skills-row-vertical">
              <span className="experience-skill-bubble">Cloud Security & Configuration</span>
              <span className="experience-skill-bubble">Falcon</span>
              <span className="experience-skill-bubble">Python</span>
              <span className="experience-skill-bubble">GenAI</span>
              <span className="experience-skill-bubble">Account Management</span>
              <span className="experience-skill-bubble">Salesforce</span>
              <span className="experience-skill-bubble">Gainsight</span>
            </div>
          </div>
          {/* IATSL */}
          <div className="experience-card experience-card-vertical">
            <img src="/iatsl_logo.png" alt="IATSL Logo" className="experience-logo experience-logo-vertical" />
            <div className="experience-role experience-role-vertical">AI/ML Research Intern</div>
            <div className="experience-company-under-logo experience-company-vertical"><a href="https://www.utoronto.ca/" target="_blank" rel="noopener noreferrer">Intelligent Assistive Technology Lab</a></div>
            <div className="experience-desc experience-desc-vertical">Built predictive machine learning models to improve technology accessibility for older adults by analyzing adoption patterns and barrier factors. Achieved &gt;90% accuracy in identifying critical factors for elderly technology adoption using SHAP analysis on synthetic data.</div>
            <div className="experience-skills-row experience-skills-row-vertical">
              <span className="experience-skill-bubble">Python</span>
              <span className="experience-skill-bubble">scikit-learn</span>
              <span className="experience-skill-bubble">SHAP</span>
              <span className="experience-skill-bubble">ML</span>
              <span className="experience-skill-bubble">NumPy</span>
              <span className="experience-skill-bubble">Pandas</span>
              <span className="experience-skill-bubble">Jupyter Notebook</span>
            </div>
          </div>
        </div>
      </section>

      {/* PROJECTS SECTION */}
      <section className="portfolio-section">
        <div className="stars">{getStars(200)}</div>
        <h2 className="portfolio-section-title">PROJECTS</h2>
        <div className="portfolio-section-underline"></div>
        <div className="portfolio-section-content">
          <ul>
            <li>
              <strong>Study Buddy AI</strong> | <em>Next.js, React, DynamoDB, AWS IAM, Firebase, Google Cloud, Tailwind CSS, Anthropic API</em><br/>
              <ul>
                <li>An AI-powered study platform that generates flashcards and practice quizzes based on user file upload.</li>
              </ul>
              <div className="project-screenshot-placeholder">
                Project Screenshot (add here)
              </div>
            </li>
            <li>
              <strong>Tamsactions</strong> | <em>Javascript, React.js, Node.js, Typescript, Firebase, Google Cloud, Tailwind CSS, Stripe API</em><br/>
              <ul>
                <li>A web application for Queen’s University students to sell their extra TAMs (trade-a-meal credits) in exchange for money at a reduced price.</li>
              </ul>
              <div className="project-screenshot-placeholder">
                Project Screenshot (add here)
              </div>
            </li>
          </ul>
        </div>
      </section>

      {/* EXTRACURRICULARS SECTION */}
      <section className="portfolio-section">
        <div className="stars">{getStars(200)}</div>
        <h2 className="portfolio-section-title">EXTRACURRICULARS</h2>
        <div className="portfolio-section-underline"></div>
        <div className="portfolio-section-content">
          <ul>
            <li>
              <strong>Queen’s Web Development</strong><br/>
              <em>Co-Chair</em> <span style={{float: 'right'}}>September 2024 - Present</span>
              <ul>
                <li>Manage website domain, deployment, and development projects across <strong>20+</strong> teams, while overseeing educational workshops for <strong>60+</strong> students on <strong>React.js, Git, Node.js, MongoDB</strong>, and other developer tools.</li>
                <li>Lead strategic decision-making, event planning, budget allocation, and grant applications while managing the executive team and overseeing recruitment for a <strong>500+</strong> member community.</li>
              </ul>
            </li>
            <li>
              <strong>Queen’s Women In Computing</strong><br/>
              <em>Web Developer</em> <span style={{float: 'right'}}>April 2025 - Present</span>
              <ul>
                <li>Lead website updates and feature redesigns using <strong>React, Javascript, Next.js, and Tailwind CSS</strong>, enhancing user experience and interface components.</li>
                <li>Develop new features through cross-functional teamwork and prototyping UI components in Figma before implementation.</li>
              </ul>
            </li>
            <li>
              <strong>Queen’s University Computing Students’ Association</strong><br/>
              <em>Workshop Coordinator</em> <span style={{float: 'right'}}>July 2024 - April 2025</span>
              <ul>
                <li>Organized professional development workshops and competitions (e.g., resume, LeetCode, interviews) for <strong>150+</strong> computing students while facilitating workshop materials and resources in collaboration with guest speakers.</li>
              </ul>
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
