import React from 'react';

const Projects = React.forwardRef(({ projects }, ref) => (
  <section ref={ref} className="container py-5">
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
            onMouseOver={e => {
              e.currentTarget.style.transform = 'translateY(-10px)';
              e.currentTarget.style.boxShadow = '0 25px 50px rgba(0, 0, 0, 0.4)';
            }}
            onMouseOut={e => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 15px 35px rgba(0, 0, 0, 0.3)';
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
));

export default Projects;
