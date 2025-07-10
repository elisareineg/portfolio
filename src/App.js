import './App.css';
import { useRef } from 'react';
import { db } from './firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

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
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();
    const formData = new FormData(form.current);
    const data = {
      user_name: formData.get('user_name'),
      user_email: formData.get('user_email'),
      message: formData.get('message'),
      to: 'elisareine.a.goncalves@gmail.com',
      created: Timestamp.now()
    };

    try {
      await addDoc(collection(db, "messages"), data);
      alert('Message sent!');
      form.current.reset();
    } catch (err) {
      alert('Failed to send message.');
    }
  };

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
        <div className="experience-cards-container">
          {/* Queen's Web Development */}
          <div className="experience-card experience-card-vertical">
            <img src="/qweb-logo-square.png" alt="Queen's Web Development Logo" className="experience-logo experience-logo-vertical" />
            <div className="experience-role experience-role-vertical">Co-Chair</div>
            <div className="experience-role experience-role-vertical">Outreach Director</div>
            <div className="experience-company-under-logo experience-company-vertical"><a href="#" target="_blank" rel="noopener noreferrer">Queen's Web Development</a></div>
            <div className="experience-desc experience-desc-vertical">Lead strategic decision-making, event planning, finances, and website domain/deployment while managing the executive team and overseeing recruitment for a 500+ member community.</div>
            <div className="experience-skills-row experience-skills-row-vertical">
              <span className="experience-skill-bubble">React.js</span>
              <span className="experience-skill-bubble">Git</span>
              <span className="experience-skill-bubble">Node.js</span>
              <span className="experience-skill-bubble">MongoDB</span>
              <span className="experience-skill-bubble">Javascript</span>
              <span className="experience-skill-bubble">HTML/CSS</span>
              <span className="experience-skill-bubble">Deployment</span>
            </div>
          </div>
          {/* Queen's Women In Computing */}
          <div className="experience-card experience-card-vertical">
            <img src="/qwic_logo.png" alt="Queen's Women In Computing Logo" className="experience-logo experience-logo-vertical" />
            <div className="experience-role experience-role-vertical">Web Developer</div>
            <div className="experience-company-under-logo experience-company-vertical"><a href="#" target="_blank" rel="noopener noreferrer">Queen's Women In Computing</a></div>
            <div className="experience-desc experience-desc-vertical">Lead website updates and feature redesigns using React, Javascript, Next.js, and Tailwind CSS, enhancing user experience and interface components.</div>
            <div className="experience-skills-row experience-skills-row-vertical">
              <span className="experience-skill-bubble">React</span>
              <span className="experience-skill-bubble">Javascript</span>
              <span className="experience-skill-bubble">Next.js</span>
              <span className="experience-skill-bubble">Tailwind CSS</span>
              <span className="experience-skill-bubble">Figma</span>
            </div>
          </div>
          {/* Queen's University Computing Students' Association */}
          <div className="experience-card experience-card-vertical">
            <img src="/COMPSA_logo.jpeg" alt="Queen's University Computing Students' Association Logo" className="experience-logo experience-logo-vertical" />
            <div className="experience-role experience-role-vertical">Workshop Coordinator</div>
            <div className="experience-company-under-logo experience-company-vertical"><a href="#" target="_blank" rel="noopener noreferrer">Queen's University Computing Students' Association</a></div>
            <div className="experience-desc experience-desc-vertical">Organized professional development workshops and competitions for 150+ students, collaborating with guest speakers and managing resources.</div>
            <div className="experience-skills-row experience-skills-row-vertical">
              <span className="experience-skill-bubble">Workshops</span>
              <span className="experience-skill-bubble">Event Planning</span>
              <span className="experience-skill-bubble">Collaboration</span>
              <span className="experience-skill-bubble">Professional Development</span>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT SECTION */}
      <section id="contact" className="portfolio-section">
        <div className="stars">{getStars(200)}</div>
        <h2 className="portfolio-section-title">Contact Me</h2>
        <div className="portfolio-section-underline"></div>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label htmlFor="user_name" className="contact-label">Name</label>
          <input type="text" id="user_name" name="user_name" className="contact-input" required />

          <label htmlFor="user_email" className="contact-label">Email</label>
          <input type="email" id="user_email" name="user_email" className="contact-input" required />

          <label htmlFor="message" className="contact-label">Message</label>
          <textarea id="message" name="message" className="contact-textarea" rows={5} required placeholder="Type your message here..."></textarea>

          <button type="submit" className="contact-submit">Send Message</button>
        </form>
      </section>
    </div>
  );
}

export default App;
