import React from 'react';

const Hero = ({ scrollToProjects, scrollToContact }) => (
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
            onClick={scrollToProjects}
            onMouseOver={e => e.target.style.transform = 'translateY(-2px)'}
            onMouseOut={e => e.target.style.transform = 'translateY(0)'}
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
            onClick={scrollToContact}
            onMouseOver={e => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            onMouseOut={e => e.target.style.backgroundColor = 'transparent'}
          >
            Get In Touch
          </button>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
