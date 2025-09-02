import React from 'react';
import Silk from '../Silk';

const Navbar = ({ isMenuOpen, setIsMenuOpen, scrollToAbout, scrollToProjects, scrollToContact }) => (
  <>
    {/* Background */}
    <div className="position-fixed top-0 start-0 w-100 h-100" style={{ zIndex: 0 }}>
      <Silk speed={10} scale={1} color="#2e2c2cff" noiseIntensity={0} rotation={0} />
    </div>
    {/* Custom Navigation Bar */}
    <nav 
      className="navbar navbar-expand-lg position-fixed"
      style={{
        zIndex: 1000,
        top: '20px',
        left: '50%',
        transform: 'translateX(-50%)',
        width: '90%',
        maxWidth: '1200px',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(15px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '50px',
        boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
        padding: '10px 20px'
      }}
    >
      <div className="container-fluid">
        {/* Logo/Brand */}
        <button className="navbar-brand d-flex align-items-center text-white border-0 bg-transparent" style={{ fontWeight: 'bold', fontSize: '1.5rem' }}>
          <img
            src={process.env.PUBLIC_URL + "/Images/6d6f81f5-3c4f-47e3-989a-bc9cfc42770b.png.png"}
            alt="Vardhan Rangineni Logo"
            style={{ height: '35px', marginRight: '10px' }}
          />
            <img
              src={process.env.PUBLIC_URL + "/Images/6d6f81f5-3c4f-47e3-989a-bc9cfc42770b.png.png"}
              alt="Vardhan Rangineni Logo"
              style={{ height: '35px', marginRight: '10px' }}
            />
          <span className="text-warning"></span>
        </button>
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
            <ul className="navbar-nav mx-auto d-flex align-items-lg-center">
              <li className="nav-item mx-2">
                <button
            className="nav-link btn btn-link text-white w-100 text-center"
            style={{ 
              border: 'none', 
              background: 'none', 
              fontWeight: '500',
              padding: '10px 0'
            }}
            onClick={scrollToAbout}
            onMouseOver={e => e.target.style.color = '#ffc107'}
            onMouseOut={e => e.target.style.color = '#fff'}
                >
            About
                </button>
              </li>
              <li className="nav-item mx-2">
                <button
            className="nav-link btn btn-link text-white w-100 text-center"
            style={{ 
              border: 'none', 
              background: 'none', 
              fontWeight: '500',
              padding: '10px 0'
            }}
            onClick={scrollToProjects}
            onMouseOver={e => e.target.style.color = '#ffc107'}
            onMouseOut={e => e.target.style.color = '#fff'}
                >
            Projects
                </button>
              </li>
              <li className="nav-item mx-2">
                <button
            className="nav-link btn btn-link text-white w-100 text-center"
            style={{ 
              border: 'none', 
              background: 'none', 
              fontWeight: '500',
              padding: '10px 0'
            }}
            onClick={scrollToContact}
            onMouseOver={e => e.target.style.color = '#ffc107'}
            onMouseOut={e => e.target.style.color = '#fff'}
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
                className="btn btn-btn-sm rounded-circle me-2"
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
                <img src={process.env.PUBLIC_URL + "/Images/317750_linkedin_icon.png"} style={{ width: '40px', height: '40px' }} />
              </a>
              <a
                href="https://github.com/VardhanRangineni"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-btn-sm rounded-circle me-2"
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
                <img src={process.env.PUBLIC_URL + "/Images/1298743_github_git_logo_social_icon.png"} style={{ width: '40px', height: '40px' }} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
);

export default Navbar;
