import './App.css';
import { useRef, useState, useEffect } from 'react';

function getStars(numStars = 400) {
  const stars = [];
  for (let i = 0; i < numStars; i++) {
    const size = Math.random() * 2 + 1;
    const top = Math.random() * 100;
    const left = Math.random() * 100;
    const opacity = Math.random() * 0.5 + 0.3;
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

function createParticles() {
  const particles = [];
  const particleCount = 50;
  
  for (let i = 0; i < particleCount; i++) {
    const particle = (
      <div
        key={i}
        className="particle"
        style={{
          left: Math.random() * 100 + '%',
          top: Math.random() * 100 + '%',
          animationDelay: Math.random() * 6 + 's',
          animationDuration: (Math.random() * 4 + 4) + 's',
        }}
      />
    );
    particles.push(particle);
  }
  return particles;
}

function App() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    
    if (isSubmitting) {
      return;
    }
    
    setIsSubmitting(true);
    
    const formData = new FormData(form.current);
    const data = {
      user_name: formData.get('user_name'),
      user_email: formData.get('user_email'),
      message: formData.get('message'),
    };

    console.log('Sending email data:', data);

    try {
      const response = await fetch('http://localhost:3001/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      console.log('Response status:', response.status);
      const result = await response.json();
      console.log('Response result:', result);
      
      if (response.ok) {
        alert('Message sent!');
        form.current.reset();
      } else {
        alert('Failed to send message: ' + (result.error || 'Unknown error'));
      }
    } catch (err) {
      console.error('Fetch error:', err);
      alert('Failed to send message. Please check if the server is running.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    // Mouse movement parallax effect
    const handleMouseMove = (e) => {
      const mouseX = e.clientX / window.innerWidth;
      const mouseY = e.clientY / window.innerHeight;
      
      const techIcons = document.querySelectorAll('.tech-icon');
      techIcons.forEach((icon, index) => {
        const speed = (index + 1) * 0.3;
        const x = (mouseX - 0.5) * speed;
        const y = (mouseY - 0.5) * speed;
        icon.style.transform = `translate(${x}px, ${y}px) rotate(${x * 1}deg)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="App">
      {/* Hero Section */}
      <div className="hero-container">
        {/* Animated particles background */}
        <div className="particles">
          {createParticles()}
        </div>
        
        {/* Programming language logos background */}
        <div className="geometric-bg">
          {/* JavaScript Logo */}
          <svg className="tech-icon tech-icon-1" viewBox="0 0 256 256" fill="none">
            <rect width="256" height="256" fill="#F7DF1E"/>
            <path d="M67 213L143 213C153 213 163 206 163 192L163 123L133 123L133 190C133 196 130 199 125 199L67 199L67 213Z" fill="#000"/>
            <path d="M171 199L196 199C206 199 213 194 213 185C213 176 206 171 196 171L186 171L186 141L213 141C223 141 230 136 230 127C230 118 223 113 213 113L156 113L156 199L171 199Z" fill="#000"/>
          </svg>
          
          {/* Python Logo */}
          <svg className="tech-icon tech-icon-2" viewBox="0 0 256 256" fill="none">
            <defs>
              <linearGradient id="python-gradient-1" x1="12.96%" y1="12.76%" x2="79.39%" y2="78.18%">
                <stop offset="0%" stopColor="#387EB8"/>
                <stop offset="100%" stopColor="#366994"/>
              </linearGradient>
              <linearGradient id="python-gradient-2" x1="19.13%" y1="20.59%" x2="90.14%" y2="85.69%">
                <stop offset="0%" stopColor="#FFE052"/>
                <stop offset="100%" stopColor="#FFC331"/>
              </linearGradient>
            </defs>
            <path d="M126.916.072c-64.832 0-60.784 28.115-60.784 28.115l.072 29.128h61.868v8.745H41.631S.145 61.355.145 126.77c0 65.417 36.21 63.097 36.21 63.097h21.61v-30.356s-1.165-36.21 35.632-36.21h61.362s34.475.557 34.475-33.319V33.97S194.67.072 126.916.072zM92.802 19.66a11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13 11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.13z" fill="url(#python-gradient-1)"/>
            <path d="M128.757 254.126c64.832 0 60.784-28.115 60.784-28.115l-.072-29.127H127.6v-8.745h86.441s41.486 4.705 41.486-60.712c0-65.416-36.21-63.096-36.21-63.096h-21.61v30.355s1.165 36.21-35.632 36.21h-61.362s-34.475-.557-34.475 33.32v56.013s-5.235 33.897 62.519 33.897zm34.114-19.586a11.12 11.12 0 0 1-11.13-11.13 11.12 11.12 0 0 1 11.13-11.131 11.12 11.12 0 0 1 11.13 11.13 11.12 11.12 0 0 1-11.13 11.13z" fill="url(#python-gradient-2)"/>
          </svg>
          
          {/* Java Logo */}
          <svg className="tech-icon tech-icon-3" viewBox="0 0 256 346" fill="none">
            <path d="M82.554 267.473s-13.198 7.675 9.393 10.272c27.369 3.122 41.356 2.675 71.517-3.034 0 0 7.93 4.972 19.001 9.279-67.665 28.977-153.219-1.679-99.911-16.517z" fill="#5382A1"/>
            <path d="M74.292 229.659s-14.803 10.958 7.805 13.296c29.236 3.018 52.324 3.263 92.276-4.43 0 0 5.526 5.602 14.215 8.666-81.747 23.904-172.798 1.885-114.296-17.532z" fill="#5382A1"/>
            <path d="M143.942 165.515c16.66 19.18-4.377 36.44-4.377 36.44s42.301-21.837 22.874-49.183c-18.144-25.567-32.041-38.293 43.228-82.098 0 0-118.238 29.53-61.725 94.841z" fill="#E76F00"/>
            <path d="M233.364 295.442s9.767 8.047-10.761 14.273c-39.056 11.827-162.432 15.396-196.714.471-12.323-5.36 10.787-12.8 18.056-14.362 7.581-1.644 11.914-1.346 11.914-1.346-13.705-9.655-88.583 18.957-38.034 27.15 137.853 22.356 251.292-10.066 215.539-26.186z" fill="#5382A1"/>
          </svg>
          
          {/* HTML5 Logo */}
          <svg className="tech-icon tech-icon-4" viewBox="0 0 256 361" fill="none">
            <path d="m23.377 0 20.946 234.379 93.964 26.063 94.209-26.062L253.582 0H23.377zm75.52 58.198h93.127l-6.383 71.518H85.397l6.5 72.847h90.207l-6.383 71.518-60.358 16.745-60.113-16.745-4.11-46.047h29.466l2.087 23.523 32.670 8.808.245-.069 32.671-8.739L148.35 232.73H64.802l-19.252-215.61h93.617l-.27 41.078z" fill="#E34F26"/>
            <path d="M128 26.362h121.657l-18.062 202.015L128 254.439V26.362zM128 110.97v62.284h86.336l-8.17 91.512L128 254.439v-26.063l60.358-16.745 6.383-71.518H128z" fill="#EF652A"/>
          </svg>
          
          {/* CSS3 Logo */}
          <svg className="tech-icon tech-icon-5" viewBox="0 0 256 361" fill="none">
            <path d="m23.377 0 20.946 234.379 93.964 26.063 94.209-26.062L253.582 0H23.377zm189.318 76.91c-.79 8.766-2.04 19.581-3.467 31.319l-.863 7.128H127.89v29.264h67.888l-2.675 29.827H127.89v29.939h63.567l-4.675 52.745L128 271.58l-.035.01-58.782-16.348-4.02-45.079h28.802l2.044 22.888L128 244.58l.02-.006 31.99-8.62 3.322-37.204h-68.93l-8.677-97.68-.897-10.05h132.07l-2.683 29.939H91.738l2.683 30.02H210.13l-2.435 26.027z" fill="#1572B6"/>
          </svg>
        </div>
        
        {/* Navigation */}
        <nav className="top-right-nav">
          <span className="hero-link" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })} style={{ cursor: 'pointer' }}>Contact</span>
          <a href="https://linkedin.com/in/elisa-goncalves-079713285" className="hero-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com/elisareineg" className="hero-link" target="_blank" rel="noopener noreferrer">GitHub</a>
        </nav>
        
        {/* Main content */}
        <div className="hero-content">
          <h1 className="hero-title">Hello there, I'm Elisa!</h1>
          <p className="hero-subtitle">
            I'm a <span className="web-highlight">&#123;Computer Science Student&#125;</span> and a <span className="web-highlight">&lt;Fullstack Developer&gt;</span>
          </p>
          <a href="#projects-section" className="hero-btn">
            Check out my projects →
          </a>
          <div className="down-arrow" onClick={() => window.scrollBy({ top: window.innerHeight, behavior: 'smooth' })}>↓</div>
        </div>
      </div>

      {/* About Section */}
      <section className="contact-section">
        <div className="stars">{getStars(200)}</div>
        <div className="about-columns">
          <div className="profile-photo-box">
            <img src="/headshot.jpg" alt="Profile" className="profile-photo-img" />
          </div>
          <div className="about-me-box">
            <h2 className="about-me-header">About Me</h2>
            <p className="about-me-text">
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
                <img className="skill-icon" src="https://upload.wikimedia.org/wikipedia/commons/1/18/C_Programming_Language.svg" alt="C" />
              </div>
              <div className="skill-item">
                <img className="skill-icon" src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS" />
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

      {/* Experience Section */}
      <section className="portfolio-section">
        <div className="stars">{getStars(200)}</div>
        <h2 className="portfolio-section-title">EXPERIENCE</h2>
        <div className="portfolio-section-underline"></div>
        <div className="experience-cards-container">
          {/* CrowdStrike */}
          <div className="experience-card">
            <img src="/crowdstrike_logo.png" alt="CrowdStrike Logo" className="experience-logo" />
            <div className="experience-role">Technical Account Management Launch Intern</div>
            <div className="experience-company-under-logo"><a href="https://www.crowdstrike.com/" target="_blank" rel="noopener noreferrer">CrowdStrike</a></div>
            <div className="experience-desc">Contributed to the development and training of the GenAI Cloud Security Assistant. Designed automated solutions for tech touch procedures through Salesforce and Gainsight.</div>
            <div className="experience-skills-row">
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
          <div className="experience-card">
            <img src="/iatsl_logo.png" alt="IATSL Logo" className="experience-logo" />
            <div className="experience-role">AI/ML Engineer Intern</div>
            <div className="experience-company-under-logo"><a href="https://iatsl.org/" target="_blank" rel="noopener noreferrer">Intelligent Assistive Technology Lab</a></div>
            <div className="experience-desc">Built predictive machine learning models to improve technology accessibility for older adults by analyzing adoption patterns and barrier factors. Achieved &gt;90% accuracy in identifying critical factors for elderly technology adoption using SHAP analysis on synthetic data.</div>
            <div className="experience-skills-row">
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

      {/* Projects Section */}
      <section id="projects-section" className="portfolio-section">
        <div className="stars">{getStars(200)}</div>
        <h2 className="portfolio-section-title">PROJECTS</h2>
        <div className="portfolio-section-underline"></div>
        <div className="portfolio-section-content">
          <ul>
            <li>
              <div className="project-header">
                <strong>Study Buddy AI</strong>
                <div className="project-desc">Study Buddy AI is an AI-powered web application designed to help students study smarter. Upload your notes (PDF, DOCX, or TXT), and Study Buddy AI will automatically generate flashcards and quizzes, making exam prep easier and more effective. The app supports multiple languages, so you can study in English, French, Spanish, or any language your notes are written in.</div>
              </div>
              <div className="project-screenshot-container">
                <img src="/studybuddy_screenshot.png" alt="Study Buddy AI Screenshot" className="project-screenshot-img" />
                <div className="project-links-on-image">
                  <a href="https://github.com/elisareineg/studybuddyai" className="project-link-icon" target="_blank" rel="noopener noreferrer">
                    <svg className="project-icon-img" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" fill="#181717"/>
                    </svg>
                  </a>
                  <a href="https://studybuddyai-five.vercel.app/studybuddy" className="project-link-icon" target="_blank" rel="noopener noreferrer">
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
                <div className="project-desc">Tamsactions is a web application designed for Queen's University students to sell their extra TAMs (trade-a-meal credits) in exchange for money at a reduced price. I created this platform as a means to combat financial insecurity for students surrounding food costs, while reducing waste from unused TAMs.</div>
              </div>
              <div className="project-screenshot-container">
                <img src="/tamsactions_screenshot.png" alt="Tamsactions Screenshot" className="project-screenshot-img" />
                <div className="project-links-on-image">
                  <a href="https://github.com/elisareineg/tamsactions_new" className="project-link-icon" target="_blank" rel="noopener noreferrer">
                    <svg className="project-icon-img" width="22" height="22" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 2C6.477 2 2 6.484 2 12.021c0 4.428 2.865 8.184 6.839 9.504.5.092.682-.217.682-.483 0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.342-3.369-1.342-.454-1.157-1.11-1.465-1.11-1.465-.908-.62.069-.608.069-.608 1.004.07 1.532 1.032 1.532 1.032.892 1.53 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.221-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.564 9.564 0 0 1 12 6.844c.85.004 1.705.115 2.504.337 1.909-1.295 2.748-1.025 2.748-1.025.546 1.378.202 2.397.1 2.65.64.7 1.028 1.595 1.028 2.688 0 3.847-2.337 4.695-4.566 4.944.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.749 0 .268.18.58.688.482C19.138 20.2 22 16.447 22 12.021 22 6.484 17.523 2 12 2Z" fill="#181717"/>
                    </svg>
                  </a>
                  <a href="https://tamsactions.web.app/" className="project-link-icon" target="_blank" rel="noopener noreferrer">
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

      {/* Extracurriculars Section */}
      <section className="portfolio-section">
        <div className="stars">{getStars(200)}</div>
        <h2 className="portfolio-section-title">EXTRACURRICULARS</h2>
        <div className="portfolio-section-underline"></div>
        <div className="experience-cards-container">
          {/* Queen's Web Development */}
          <div className="experience-card">
            <img src="/qweb-logo-square.png" alt="Queen's Web Development Logo" className="experience-logo" />
            <div className="experience-role">Co-Chair</div>
            <div className="experience-role">Outreach Director</div>
            <div className="experience-company-under-logo"><a href="#" target="_blank" rel="noopener noreferrer">Queen's Web Development</a></div>
            <div className="experience-desc">Lead strategic decision-making, event planning, finances, and website domain/deployment while managing the executive team and overseeing recruitment for a 500+ member community.</div>
            <div className="experience-skills-row">
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
          <div className="experience-card">
            <img src="/qwic_logo.png" alt="Queen's Women In Computing Logo" className="experience-logo" />
            <div className="experience-role">Web Developer</div>
            <div className="experience-company-under-logo"><a href="#" target="_blank" rel="noopener noreferrer">Queen's Women In Computing</a></div>
            <div className="experience-desc">Lead website updates and feature redesigns using React, Javascript, Next.js, and Tailwind CSS, enhancing user experience and interface components.</div>
            <div className="experience-skills-row">
              <span className="experience-skill-bubble">React</span>
              <span className="experience-skill-bubble">Javascript</span>
              <span className="experience-skill-bubble">Next.js</span>
              <span className="experience-skill-bubble">Tailwind CSS</span>
              <span className="experience-skill-bubble">Figma</span>
            </div>
          </div>
          {/* Queen's University Computing Students' Association */}
          <div className="experience-card">
            <img src="/COMPSA_logo.jpeg" alt="Queen's University Computing Students' Association Logo" className="experience-logo" />
            <div className="experience-role">Workshop Coordinator</div>
            <div className="experience-company-under-logo"><a href="#" target="_blank" rel="noopener noreferrer">Queen's University Computing Students' Association</a></div>
            <div className="experience-desc">Organized professional development workshops and competitions for 150+ students, collaborating with guest speakers and managing resources.</div>
            <div className="experience-skills-row">
              <span className="experience-skill-bubble">Workshops</span>
              <span className="experience-skill-bubble">Event Planning</span>
              <span className="experience-skill-bubble">Budgeting</span>
              <span className="experience-skill-bubble">Sponsorships</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="portfolio-section">
        <div className="stars">{getStars(200)}</div>
        <h2 className="portfolio-section-title">Contact Me</h2>
        <div className="portfolio-section-underline"></div>
        <div className="contact-message">Feel free to reach out if you'd like to work together, have a question, or just want to chat!</div>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label htmlFor="user_name" className="contact-label">Name</label>
          <input type="text" id="user_name" name="user_name" className="contact-input" required />

          <label htmlFor="user_email" className="contact-label">Email</label>
          <input type="email" id="user_email" name="user_email" className="contact-input" required />

          <label htmlFor="message" className="contact-label">Message</label>
          <textarea id="message" name="message" className="contact-textarea" rows={5} required placeholder="Type your message here..."></textarea>

          <button 
            type="submit" 
            className="contact-submit" 
            disabled={isSubmitting}
          >
            {isSubmitting ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </section>
    </div>
  );
}

export default App;
