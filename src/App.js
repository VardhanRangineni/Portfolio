import './App.css';
import Silk from './Components/Silk';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState, useEffect } from 'react';

function App() {
  const contactRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  };

  // Project data
  const projects = [
    {
      title: 'Library Management System',
      description: 'Full-stack web application with REST API, Spring Boot and React. Features real-time data processing and interactive user interface.',
      technologies: ['Java', 'React', 'Spring Boot', 'MySQL'],
      type: 'Full Stack'
    },
    {
      title: 'Expense Management System',
      description: 'Java full-stack application with user authentication, CRUD operations, and responsive design built with REST API.',
      technologies: ['Java', 'MySQL', 'REST API', 'React'],
      type: 'Full Stack'
    },
    {
      title: 'Oil Price Prediction',
      description: 'Data analysis project using Python and machine learning algorithms to predict oil prices with high accuracy.',
      technologies: ['Python', 'Pandas', 'Matplotlib', 'ML'],
      type: 'Data Science'
    }
  ];

  // Contact information
  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'ranginenivardhan@gmail.com',
      action: () => window.open('mailto:ranginenivardhan@gmail.com'),
      displayValue: 'ranginenivardhan@gmail.com'
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+919949592611',
      action: () => window.open('tel:+919949592611'),
      displayValue: '+91 9949592611'
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'https://www.linkedin.com/in/vardhan-rangineni-8488921bb',
      action: () => window.open('https://www.linkedin.com/in/vardhan-rangineni-8488921bb', '_blank'),
      displayValue: 'Connect on LinkedIn'
    }
  ];

  if (isLoading) {
    return (
      <div className="d-flex justify-content-center align-items-center min-vh-100" style={{ backgroundColor: '#1a1a2e' }}>
        <div className="text-white text-center">
          <div className="spinner-border text-light mb-3" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <h5>Loading Portfolio...</h5>
        </div>
      </div>
    );
  }

  return (
    <div className="position-relative min-vh-100" style={{ fontFamily: 'Poppins, sans-serif', overflow: 'hidden' }}>
      {/* Background */}
      <div className="position-fixed top-0 start-0 w-100 h-100" style={{ zIndex: 0 }}>
        <Silk
          speed={5}
          scale={1}
          color="#871ee2ff"
          noiseIntensity={0}
          rotation={0}
        />
      </div>

      {/* Custom Navigation Bar */}
        <nav 
          className="navbar navbar-expand-lg position-fixed w-100"
          style={{
            zIndex: 1000,
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(15px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
            padding: '15px 0'
          }}
        >
          <div className="container">
            {/* Logo/Brand */}
            <a className="navbar-brand d-flex align-items-center text-white" href="#" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          <img
            src={process.env.PUBLIC_URL + "/Images/ChatGPT_Image_Jul_23__2025__05_05_17_PM-removebg-preview (1).png"}
            alt="Vardhan Rangineni"
            style={{ height: '40px', marginRight: '10px' }}
          />
          <span className="text-warning">Vardhan</span>
            </a>

            {/* Mobile Toggle Button */}
            <button
          className="navbar-toggler border-0 p-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          style={{ 
            color: '#fff',
            backgroundColor: 'transparent',
            outline: 'none',
            boxShadow: 'none'
          }}
            >
          <span style={{ 
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            width: '25px',
            height: '20px'
          }}>
            <div style={{ 
              width: '100%',
              height: '2px', 
              backgroundColor: '#fff', 
              margin: '2px 0',
              transition: 'all 0.3s ease',
              transform: isMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none'
            }}></div>
            <div style={{ 
              width: '100%',
              height: '2px', 
              backgroundColor: '#fff', 
              margin: '2px 0',
              transition: 'all 0.3s ease',
              opacity: isMenuOpen ? '0' : '1'
            }}></div>
            <div style={{ 
              width: '100%',
              height: '2px', 
              backgroundColor: '#fff', 
              margin: '2px 0',
              transition: 'all 0.3s ease',
              transform: isMenuOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none'
            }}></div>
          </span>
            </button>

          {/* Navigation Links */}
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''}`} id="navbarNav">
            <ul className="navbar-nav ms-auto d-flex align-items-lg-center">
            <li className="nav-item mx-2">
              <button
            className="nav-link btn btn-link text-white w-100 text-start text-lg-center"
            style={{ 
              border: 'none', 
              background: 'none', 
              fontWeight: '500',
              padding: '10px 0'
            }}
            onClick={() => scrollToSection(aboutRef)}
            onMouseOver={(e) => e.target.style.color = '#ffc107'}
            onMouseOut={(e) => e.target.style.color = '#fff'}
              >
            About
              </button>
            </li>
            <li className="nav-item mx-2">
              <button
            className="nav-link btn btn-link text-white w-100 text-start text-lg-center"
            style={{ 
              border: 'none', 
              background: 'none', 
              fontWeight: '500',
              padding: '10px 0'
            }}
            onClick={() => scrollToSection(projectsRef)}
            onMouseOver={(e) => e.target.style.color = '#ffc107'}
            onMouseOut={(e) => e.target.style.color = '#fff'}
              >
            Projects
              </button>
            </li>
            <li className="nav-item mx-2">
              <button
            className="nav-link btn btn-link text-white w-100 text-start text-lg-center"
            style={{ 
              border: 'none', 
              background: 'none', 
              fontWeight: '500',
              padding: '10px 0'
            }}
            onClick={() => scrollToSection(contactRef)}
            onMouseOver={(e) => e.target.style.color = '#ffc107'}
            onMouseOut={(e) => e.target.style.color = '#fff'}
              >
            Contact
              </button>
            </li>
            
            {/* Social Links */}
            <li className="nav-item mx-2 d-flex justify-content-start justify-content-lg-center align-items-center">
              <a
            href="https://www.linkedin.com/in/vardhan-rangineni-8488921bb"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light btn-sm rounded-circle me-2"
            style={{ 
              width: '40px', 
              height: '40px', 
              padding: '0', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              margin: '5px 0'
            }}
            title="LinkedIn"
              >
            💼
              </a>
              <a
            href="https://github.com/VardhanRangineni"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-outline-light btn-sm rounded-circle me-2"
            style={{ 
              width: '40px', 
              height: '40px', 
              padding: '0', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center',
              margin: '5px 0'
            }}
            title="GitHub"
              >
            🐙
              </a>
            </li>
            
            {/* Resume Download Button */}
            {/* <li className="nav-item mx-2">
              <button
            className="btn btn-sm w-100 w-lg-auto"
            style={{
              backgroundColor: 'rgba(135, 30, 226, 0.9)',
              color: '#fff',
              border: 'none',
              borderRadius: '25px',
              padding: '8px 20px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease',
              margin: '10px 0'
            }}
            onClick={() => window.open('/resume.pdf', '_blank')}
            onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
            onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
              >
            📄 Resume
              </button>
            </li> */}
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Content */}
      <div className="position-relative" style={{ zIndex: 1, paddingTop: '80px' }}>
        {/* Hero Section */}
        <section className="container-fluid py-5 text-white" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
          <div className="container text-center">
            <div className="row justify-content-center">
              <div className="col-lg-8">
                <h1 className="display-3 fw-bold mb-4 animate__animated animate__fadeInUp">
                  Welcome to My Portfolio
                </h1>
                <p className="lead mb-4 fs-4">
                  I'm <span className="text-warning fw-bold">Vardhan Rangineni</span>, a passionate Java Full Stack Developer
                </p>
                <p className="fs-5 mb-4 text-light">
                  Building innovative solutions with modern technologies
                </p>
                <button 
                  className="btn btn-lg me-3 mb-3"
                  style={{
                    backgroundColor: 'rgba(135, 30, 226, 0.9)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '50px',
                    padding: '15px 40px',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => scrollToSection(projectsRef)}
                  onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                  onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  View My Work
                </button>
                <button 
                  className="btn btn-outline-light btn-lg mb-3"
                  style={{
                    borderRadius: '50px',
                    padding: '15px 40px',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => scrollToSection(contactRef)}
                  onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                  onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  Get In Touch
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section ref={aboutRef} className="container py-5">
          <div className="row align-items-center g-4">
            <div className="col-lg-6 text-center">
              <div className="position-relative d-inline-block">
                <img
                  src={process.env.PUBLIC_URL + "/Images/WhatsApp Image 2025-07-23 at 5.46.57 PM.jpeg"}
                  alt="Vardhan Rangineni"
                  className="img-fluid"
                  style={{
                    width: '100%',
                    maxWidth: '350px',
                    height: '350px',
                    objectFit: 'cover',
                    borderRadius: '20px',
                    border: '4px solid rgba(255, 255, 255, 0.3)',
                    boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
                    transition: 'transform 0.3s ease'
                  }}
                  onMouseOver={(e) => e.target.style.transform = 'scale(1.05)'}
                  onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
                />
              </div>
            </div>
            
            <div className="col-lg-6">
              <div className="text-white p-4">
                <h2 className="display-5 fw-bold mb-4 text-warning">About Me</h2>
                <div className="fs-5 leading-relaxed">
                  <p className="mb-4">
                    Welcome to my portfolio! I'm <strong>Vardhan Rangineni</strong>, an IT graduate from the 2025 batch with a deep passion for coding and problem-solving.
                  </p>
                  <p className="mb-4">
                    Currently working as a <span className="text-info fw-bold">Java Full Stack Developer</span>, I specialize in:
                  </p>
                  <ul className="list-unstyled mb-4">
                    <li className="mb-2">✨ Spring Framework & Spring Boot</li>
                    <li className="mb-2">⚛️ React & Modern Frontend</li>
                    <li className="mb-2">☕ Core Java & Advanced Java</li>
                    <li className="mb-2">🐍 Python Development</li>
                  </ul>
                  <p>
                    I'm passionate about creating efficient, scalable solutions and always eager to learn new technologies that push the boundaries of innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section ref={projectsRef} className="container py-5">
          <div className="text-center mb-5">
            <h2 className="display-4 fw-bold text-white mb-3">My Projects</h2>
            <p className="fs-5 text-light">Showcasing my technical expertise and creativity</p>
          </div>
          
          <div className="row g-4">
            {projects.map((project, index) => (
              <div key={index} className="col-lg-4 col-md-6">
                <div 
                  className="h-100 text-white p-4"
                  style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.1)',
                    borderRadius: '20px',
                    border: '2px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.3)',
                    backdropFilter: 'blur(15px)',
                    transition: 'all 0.3s ease',
                    cursor: 'pointer'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.transform = 'translateY(-10px)';
                    e.target.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.4)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.transform = 'translateY(0)';
                    e.target.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.3)';
                  }}
                >
                  <div className="d-flex justify-content-between align-items-center mb-3">
                    <h4 className="mb-0 fw-bold">{project.title}</h4>
                    <span className="badge" style={{ backgroundColor: 'rgba(135, 30, 226, 0.8)' }}>
                      {project.type}
                    </span>
                  </div>
                  <p className="mb-4 text-light" style={{ lineHeight: '1.6' }}>
                    {project.description}
                  </p>
                  <div className="mb-3">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="me-2 mb-2 d-inline-block"
                        style={{
                          backgroundColor: 'rgba(135, 30, 226, 0.8)',
                          padding: '6px 12px',
                          borderRadius: '15px',
                          fontSize: '0.85rem',
                          fontWeight: '500'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Contact Section */}
        <footer ref={contactRef} className="container py-5">
          <div 
            className="text-white p-4 p-md-5"
            style={{
              backgroundColor: 'rgba(255, 255, 255, 0.1)',
              borderRadius: '25px',
              border: '2px solid rgba(255, 255, 255, 0.2)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
              backdropFilter: 'blur(15px)'
            }}
          >
            <div className="text-center mb-5">
              <h2 className="display-5 fw-bold mb-3 text-warning">Let's Connect</h2>
              <p className="fs-5 mb-0 text-light">Ready to build something amazing together!</p>
            </div>
            
            <div className="row g-4 mb-5">
              {contactInfo.map((contact, index) => (
                <div key={index} className="col-lg-4 col-md-6 text-center">
                  <div 
                    className="p-4 h-100"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      borderRadius: '15px',
                      transition: 'all 0.3s ease',
                      cursor: 'pointer'
                    }}
                    onClick={contact.action}
                    onMouseOver={(e) => {
                      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                      e.target.style.transform = 'translateY(-5px)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    <div className="mb-3">
                      <div style={{
                        width: '70px',
                        height: '70px',
                        backgroundColor: 'rgba(135, 30, 226, 0.8)',
                        borderRadius: '50%',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontSize: '28px'
                      }}>
                        {contact.icon}
                      </div>
                    </div>
                    <h5 className="fw-bold mb-2">{contact.title}</h5>
                    <p className="mb-0 text-break" style={{ fontSize: '0.95rem' }}>
                      {contact.displayValue}
                    </p>
                  </div>
                </div>
              ))}
  </div>
  
  <div className="text-center">
              <div className="d-flex flex-column flex-sm-row justify-content-center gap-3">
                <button 
                  className="btn btn-lg"
                  style={{
                    backgroundColor: 'rgba(135, 30, 226, 0.9)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '50px',
                    padding: '15px 35px',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => window.open('/resume.pdf', '_blank')}
                  onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                  onMouseOut={(e) => e.target.style.transform = 'translateY(0)'}
                >
                  📄 Download Resume
                </button>
                <button 
                  className="btn btn-outline-light btn-lg"
                  style={{
                    borderRadius: '50px',
                    padding: '15px 35px',
                    fontWeight: 'bold',
                    transition: 'all 0.3s ease'
                  }}
                  onClick={() => window.open('https://github.com/VardhanRangineni', '_blank')}
                  onMouseOver={(e) => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
                  onMouseOut={(e) => e.target.style.backgroundColor = 'transparent'}
                >
                  🐙 View GitHub
                </button>
              </div>
            </div>
          </div>
        </footer>

        {/* Copyright */}
        <div className="text-center py-4">
          <p className="text-light mb-0">
            © 2025 Vardhan Rangineni. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
