import React from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
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
      <div className="container-fluid d-flex align-items-center justify-content-between">
        {/* Logo/Brand */}
          <button 
            className="navbar-brand d-flex align-items-center text-white border-0 bg-transparent" 
            style={{ fontWeight: 'bold', fontSize: '1.5rem' }}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
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
          <div className={`collapse navbar-collapse ${isMenuOpen ? 'show' : ''} justify-content-end`} id="navbarNav">
            <ul className="navbar-nav ms-auto d-flex align-items-lg-center">
              <li className="nav-item mx-2">
                <button
            className="nav-link btn btn-link text-white w-100 text-center"
            style={{ 
              border: 'none', 
              background: 'none', 
              fontWeight: '500',
              padding: '10px 0',
              transition: 'color 0.3s ease',
              color: '#fff'
            }}
            onClick={scrollToAbout}
            onMouseEnter={e => e.target.style.setProperty('color', '#ffc107', 'important')}
            onMouseLeave={e => e.target.style.setProperty('color', '#fff', 'important')}
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
              padding: '10px 0',
              transition: 'color 0.3s ease',
              color: '#fff'
            }}
            onClick={scrollToProjects}
            onMouseEnter={e => e.target.style.setProperty('color', '#ffc107', 'important')}
            onMouseLeave={e => e.target.style.setProperty('color', '#fff', 'important')}
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
              padding: '10px 0',
              transition: 'color 0.3s ease',
              color: '#fff'
            }}
            onClick={scrollToContact}
            onMouseEnter={e => e.target.style.setProperty('color', '#ffc107', 'important')}
            onMouseLeave={e => e.target.style.setProperty('color', '#fff', 'important')}
                >
            Contact
                </button>
              </li>
              <li className="nav-item mx-2">
                <a
                  href={process.env.PUBLIC_URL + "/Rangineni Vardhan.pdf"}
                  download="Vardhan_Rangineni_Resume.pdf"
                  className="nav-link btn btn-link text-white w-100 text-center"
                  style={{ 
                    border: 'none', 
                    background: 'none', 
                    fontWeight: '500',
                    padding: '10px 0',
                    transition: 'all 0.3s ease',
                    color: '#fff',
                    textDecoration: 'none'
                  }}
                  onMouseEnter={e => {
                    e.target.style.setProperty('color', '#ffc107', 'important');
                    const icon = e.target.querySelector('i');
                    if (icon) icon.style.setProperty('color', '#ffc107', 'important');
                  }}
                  onMouseLeave={e => {
                    e.target.style.setProperty('color', '#fff', 'important');
                    const icon = e.target.querySelector('i');
                    if (icon) icon.style.setProperty('color', '#fff', 'important');
                  }}
                >
                 <i className="bi bi-download ms-1" style={{ transition: 'all 0.3s ease' }}></i> Resume
                </a>
              </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
);

export default Navbar;
