import './App.css';
import landingpagevid from './images/landingpage2.mp4'
import aboutimg1 from './images/imaging.png';
import aboutimg2 from './images/clinics.png';
import aboutimg3 from './images/research.png';
import logoimg from './images/m31logolight.png'
import article1 from './images/medsam.webp';
import article2 from './images/41592_2024_2233_Fig1_HTML.webp'
import article3 from './images/segmentation_model.webp'
import headshot1 from './images/headshot_bowang.png'
import headshot2 from './images/jun_ma.jpeg'
import logo_linkedin from './images/linkedin_logo.png'
import logo_googlescholar from './images/google_scholar_logo.png'
import logo_twitter from './images/twitter_logo.png'
import React, { useEffect, useState } from "react";

// import partner1 from './images/sickkids.png'
// import partner2 from './images/UThealth.png'
// import partner3 from './images/sunnybrook.png'




function App() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const sections = [
    { id: "Landing", label: "Landing" },
    { id: "About", label: "About" },
    { id: "Science", label: "Science" },
    { id: "Team", label: "Team" },
    { id: "Careers", label: "Careers" },
    { id: "Contact", label: "Contact" },
  ];

  const [activeSection, setActiveSection] = useState("About");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to a server)
    console.log('Form Data Submitted:', formData);
    alert('Form submitted successfully!');
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  const teamMembers = [
      {
        name: 'Bo Wang',
        role: 'Founder & CEO',
        description: ['CIFAR AI Chair', 'Canada Research Chair'],
        imgSrc: headshot1,
        twitter: 'https://x.com/BoWang87',
        linkedin: 'https://www.linkedin.com/in/bo-wang-a6065240/',
        googlescholar: 'https://scholar.google.ca/citations?user=37FDILIAAAAJ&hl=en'
      },
      {
        name: 'Jun Ma',
        role: 'Co-Founder & CTO',
        description: ["AI Scientist"],
        imgSrc: headshot2,
        twitter: 'https://x.com/JunMa_11',
        linkedin: 'https://www.linkedin.com/in/jun-ma-867b34224/',
        googlescholar: 'https://scholar.google.com.hk/citations?user=bW1UV4IAAAAJ&hl=en'
      },
  ];

  

  useEffect(() => {
    const observerOptions = {
      root: null, // viewport
      rootMargin: "-15% 0px -80% 0px",
      threshold: 0, // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const target = document.getElementById(section.id);
      if (target) observer.observe(target);
    });

    return () => observer.disconnect();
  }, []);

const articles = [
  {
    title: 'Segment anything in medical images',
    authors: 'Jun Ma, Yuting He ... Bo Wang',
    journal: 'Nature Communication',
    date: '22 January, 2024',
    img: article1,
    link: 'https://www.nature.com/articles/s41467-024-44824-z'
  },
  {
    title: 'The multimodality cell segmentation challenge: toward universal solutions',
    authors: 'Jun Ma, Ronald Xie ... Bo Wang',
    journal: 'Nature Methods',
    date: '26 March, 2024',
    img: article2,
    link: 'https://www.nature.com/articles/s41467-024-44824-z'
  },
  {
    title: 'Towards foundation models of biological image segmentation',
    authors: 'Jun Ma & Bo Wang',
    journal: 'Nature Methods',
    date: '11 July, 2023',
    img: article3,
    link: 'https://www.nature.com/articles/s41592-023-01885-0'
  }
];



  return (
    <div className="App">
      <div className="landing" id='Landing'>
        <div className="video-wrapper">
          <video autoPlay loop muted>
            <source src={landingpagevid}>
            </source>
          </video>
        </div>
        <div className="landing-text">
          <img src={logoimg} alt="landing-logo"/>
          <h1>COMING SOON</h1>
          <p>Future of <span class="bold-ai">AI</span> Biomedical Imaging</p>
        </div>
        
        <div className="nav-bar-wrapper">
          <nav className="nav-bar-menu">
            <ul>
              <li className="nav-item"><a href="#About">About</a></li>
              <li className="nav-item"><a href="#Science">Science</a></li>
              <li className="nav-item"><a href="#Team">Team</a></li>
              <li className="nav-item"><a href="#Careers">Careers</a></li>
              <li className="nav-item"><a href="#Contact">Contact</a></li>
            </ul>
          </nav>
        </div>
      </div>

      {activeSection !== "Landing" && (
        <nav className="fixed-nav">
          <ul>
            {sections
              .filter((section) => section.id !== "Landing") // Exclude "Landing" in nav links
              .map((section) => (
                <li key={section.id} className="nav-item">
                  <a
                    href={`#${section.id}`}
                    className={activeSection === section.id ? "active" : ""}
                  >
                    {section.label}
                  </a>
                </li>
              ))}
          </ul>
        </nav>
      )}
      <div id="About" className="about-container">
          <div className="about-us">
            <h1>About Us</h1>
            <p className="padded-paragraph">M3I AI was founded in 2024 to help push the boundaries AI research in biomedical imaging. We want to develop and promote open-source AI models that can be used within the healthcare sector to help further discovery in the clinical and basic sciences.</p>
          </div>
          <div className="what-we-do">
            <h2>What We Do</h2>
            <p className="padded-paragraph">We aim to accelerate the progress of biomedical imaging analysis using AI through collaborations with leading health systems, pharmaceutical companies, and research organizations across North America.</p>
          </div>
          <div className="our-approach">
            <h2>Our Approach</h2>
            <p className="padded-paragraph">We work at the intersection of science & technology to achieve progress across our focus areas:</p>
            <div className="our-approach-image-container">
              <div className="image-item">
                <img alt= "Imaging Foundation Models" src={aboutimg1}/>
                <h3>Imaging Foundation Models</h3>
              </div>
              <div className="image-item">
                <img alt= "Clinical Deployment" src={aboutimg2}/>
                <h3>Clinical Deployment</h3>
              </div>
              <div className="image-item">
                <img alt= "Research Discovery" src={aboutimg3}/>
                <h3>Research Discovery</h3>
              </div>
            </div>
          </div> 
      </div>
      <div id="Science" className="science-container">
        {articles.map((article, index) => (
          <div key={index} className="article-container" onClick={() => window.open(article.link, "_blank")}>
            <img alt="articleimg" src={article.img}></img>
            <div className="article-title"><h1>{article.title}</h1></div>
            <h2>{article.authors}</h2>
            <div className="journal-date">
              <p className="journal">{article.journal}</p>
              <p>{article.date}</p>
            </div>
          </div>
        ))} 
      </div>
      <div id="Team" className="team-container">
        <h1>Founders</h1>
        <div className="team-cards-container">
        {teamMembers.map((member, index) => (
        <div key={index} className="team-card">
          <div className="team-img">
            <img src={member.imgSrc} alt={member.name} />
          </div>
          <div className="team-info">
            <h1>{member.name}</h1>
            <div className="team-socials">
              <a href={member.linkedin} target="_blank" rel="noopener noreferrer">
                <img src={logo_linkedin} alt="Twitter" />
              </a>
              <a href={member.twitter} target="_blank" rel="noopener noreferrer">
                <img src={logo_twitter} alt="LinkedIn" />
              </a>
              <a href={member.googlescholar} target="_blank" rel="noopener noreferrer">
                <img src={logo_googlescholar} alt="GoogleScholar" />
              </a>
            </div>
            <p className="team-role">{member.role}</p>
            <div className="team-description">
              {member.description.map((desc, index) => (
                <p key={index} className="team-description">{desc}</p>
              ))}
            </div>
          </div>
        </div>
      ))}
        </div>
      </div>
      <div id="Careers" className="careers-container">
          <h1>Be part of our vision!</h1>
          <button onClick={() => window.open("https://www.linkedin.com/company/m31-ai/jobs/", "_blank")}>View Job Postings</button>
      </div>
      <div id="Contact" className="contact-container">
        <h1>Get in touch!</h1>
        <p>We look forward to hearing from you! Your inquiry will be addressed as soon as possible.</p>
        <form onSubmit={handleSubmit}>
          <div className="form-container">
            <input
              className="form-data"
              type="text"
              name="name"
              placeholder="Full Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <input
              className="form-data"
              type="email"
              id="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              className="form-data"
              type="text"
              id="affiliation"
              name="affiliation"
              placeholder="Affiliation or Company"
              onChange={handleChange}
              required
            />
            <input
              className="form-data"
              type="text"
              id="subject"
              name="subject"
              placeholder="Subject"
              onChange={handleChange}
              required
            />
            <textarea
              className="form-message"
              id="message"
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
        </form>
        <div className="button-container">
            <button type="submit">SUBMIT FORM</button>
        </div>
      </div>
      <footer className="footer-container">
        <div className="footer-logo">
          <img src={logoimg} alt="logo">
          </img>
        </div>
        <div className="footer-link-wrapper">
          <a href="https://www.linkedin.com/company/m31-ai/" target="_blank" rel="noopener noreferrer">
            <img src={logo_linkedin} alt="LinkedIn"/>
          </a>
          <a href="mailto:general@m31.bio" class="footer-link">
          general@m31.bio
          </a>
        </div>

      </footer>
    </div>
  );
}
export default App;