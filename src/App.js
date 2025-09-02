
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useRef, useState, useEffect } from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

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
      icon: <img src={process.env.PUBLIC_URL + "/Images/7123031_mail_google_gmail_icon.png"} alt="Email Icon" style={{ width: '65px', height: '65px' }} />,
      title: 'Email',
      value: 'ranginenivardhan@gmail.com',
      action: () => window.open('mailto:ranginenivardhan@gmail.com'),
      displayValue: 'ranginenivardhan@gmail.com'
    },
    {
      icon: <img src={process.env.PUBLIC_URL + "/Images/10750658_telephone_phone_call_communication_message_icon.png"} alt="Phone Icon" style={{ width: '55px', height: '55px' }} />,
      title: 'Phone',
      value: '+919949592611',
      action: () => window.open('tel:+919949592611'),
      displayValue: '+91 9949592611'
    },
    {
      icon: <img src={process.env.PUBLIC_URL + "/Images/317750_linkedin_icon.png"} alt="LinkedIn Icon" style={{ width: '90px', height: '70px' }} />,
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
      <Navbar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToAbout={() => scrollToSection(aboutRef)}
        scrollToProjects={() => scrollToSection(projectsRef)}
        scrollToContact={() => scrollToSection(contactRef)}
      />
      <div className="position-relative" style={{ zIndex: 1, paddingTop: '80px' }}>
        <Hero
          scrollToProjects={() => scrollToSection(projectsRef)}
          scrollToContact={() => scrollToSection(contactRef)}
        />
        <About ref={aboutRef} />
        <Projects ref={projectsRef} projects={projects} />
        <Contact ref={contactRef} contactInfo={contactInfo} />
      </div>
    </div>
  );
}

export default App;
