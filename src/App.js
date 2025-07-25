import './App.css';
import { useRef } from 'react';
import { db } from './firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';

function getStars(numStars = 400) {
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    const size = Math.random() * 2 + 1;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const opacity = Math.random() * 0.5 + 0.3; // Random opacity between 0.3 and 0.8
    stars.push(
      <div
        key={i}
        className="star"
        style={{
          width: `${size}px`,
          height: `${size}px`,
          top: `${top}%`,
          left: `${left}%`,
          opacity: opacity,
        }}
      />
    );
  }
  return stars;
}

// In your App component's render/return:
// Make sure this is placed in your JSX where you want the stars
<div className="stars">{getStars(400)}</div>
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
      <div className="stars">{getStars(150)}</div>
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
          <a className="hero-btn" href="#projects-section">
            Check out my projects &rarr;
          </a>
          <div className="down-arrow">&#8595;</div>
        </div>
      </header>
      <section id="contact-section" className="contact-section">
        <div className="stars contact-stars">{getStars(200)}</div>
        <div className="about-columns">
          <div className="profile-photo-box">
            <img src="/headshot.jpg" alt="Profile" className="profile-photo-img" />
          </div>
          <div className="about-me-box">
            <h2 className="about-me-header about-me-header-left">About Me</h2>
            <p className="about-me-text about-me-text-left">
              Hello! I'm Elisa, a computer science student at Queen's University. My biggest passions lie in cybersecurity, web development, and AI. I love challenging myself with solving problems and learning about different skills or obscure topics, especially relating to technology. Below are some tools I have experience with:
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
                <img className="skill-icon" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" alt="Node.js" />
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
      <section id="projects-section" className="portfolio-section">
        <div className="stars">{getStars(200)}</div>
        <h2 className="portfolio-section-title">PROJECTS</h2>
        <div className="portfolio-section-underline"></div>
        <div className="portfolio-section-content">
          <ul>
            <li>
              <div className="project-header">
                <strong>Study Buddy AI</strong>
                <div className="project-desc">An AI-powered study platform that generates flashcards and practice quizzes based on user file upload.</div>
              </div>
              <div className="project-screenshot-container">
                <img src="/studybuddy_screenshot.png" alt="Study Buddy AI Screenshot" className="project-screenshot-img" />
                <div className="project-links-on-image">
                  <a href="https://github.com/elisareineg/studybuddyai" className="project-link-icon" target="_blank" rel="noopener noreferrer">
                    {/* GitHub SVG icon */}
                    <svg className="project-icon-img" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" fill="#181717"/>
                    </svg>
                  </a>
                  <a href="https://studybuddyai-five.vercel.app/studybuddy" className="project-link-icon" target="_blank" rel="noopener noreferrer">
                    {/* External link SVG icon */}
                    <svg className="project-icon-img" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 3h7v7m0-7L10 14" stroke="#181717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <rect x="5" y="5" width="14" height="14" rx="2" stroke="#181717" strokeWidth="2"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="project-skills-row">
                <span className="project-skill-bubble">JavaScript</span>
                <span className="project-skill-bubble">Next.js</span>
                <span className="project-skill-bubble">React.js</span>
                <span className="project-skill-bubble">AWS (DynamoDB, IAM)</span>
                <span className="project-skill-bubble">Firebase</span>
                <span className="project-skill-bubble">Google Cloud</span>
                <span className="project-skill-bubble">Tailwind CSS</span>
                <span className="project-skill-bubble">Anthropic API</span>
              </div>
            </li>
            <li>
              <div className="project-header">
                <strong>Tamsactions</strong>
                <div className="project-desc">A web application for Queen's University students to sell their extra TAMs (trade-a-meal credits) in exchange for money at a reduced price.</div>
              </div>
              <div className="project-screenshot-container">
                <img src="/tamsactions_screenshot.png" alt="Tamsactions Screenshot" className="project-screenshot-img" />
                <div className="project-links-on-image">
                  <a href="https://github.com/elisareineg/tamsactions_new" className="project-link-icon" target="_blank" rel="noopener noreferrer">
                    {/* GitHub SVG icon */}
                    <svg className="project-icon-img" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" fill="#181717"/>
                    </svg>
                  </a>
                  <a href="https://tamsactions.web.app/" className="project-link-icon" target="_blank" rel="noopener noreferrer">
                    {/* External link SVG icon */}
                    <svg className="project-icon-img" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M14 3h7v7m0-7L10 14" stroke="#181717" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <rect x="5" y="5" width="14" height="14" rx="2" stroke="#181717" strokeWidth="2"/>
                    </svg>
                  </a>
                </div>
              </div>
              <div className="project-skills-row">
                <span className="project-skill-bubble">JavaScript</span>
                <span className="project-skill-bubble">React.js</span>
                <span className="project-skill-bubble">Node.js</span>
                <span className="project-skill-bubble">Typescript</span>
                <span className="project-skill-bubble">Firebase</span>
                <span className="project-skill-bubble">Google Cloud</span>
                <span className="project-skill-bubble">Tailwind CSS</span>
                <span className="project-skill-bubble">Stripe API</span>
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
              <span className="experience-skill-bubble">Budgeting</span>
              <span className="experience-skill-bubble">Sponsorships</span>
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
          <div className="contact-form-bow" aria-hidden="true">
            <svg width="60" height="40" viewBox="0 0 60 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M30 20
                C 20 0, 0 0, 10 20
                C 0 40, 20 40, 30 20
                C 40 0, 60 0, 50 20
                C 60 40, 40 40, 30 20
                Z"
                fill="#e75480"
                stroke="#e75480"
                strokeWidth="2"
              />
            </svg>
          </div>
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
