import React from 'react';

const Contact = React.forwardRef(({ contactInfo }, ref) => (
  <footer ref={ref} className="container py-5">
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
              onMouseOver={e => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'translateY(-5px)';
              }}
              onMouseOut={e => {
                e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <div className="mb-3">
                <div style={{
                  width: '70px',
                  height: '70px',
                  //backgroundColor: 'rgba(135, 30, 226, 0.8)',
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
            className="btn btn-outline-light btn-lg"
            style={{
              borderRadius: '50px',
              padding: '12px 35px',
              fontWeight: 'bold',
              transition: 'all 0.3s ease'
            }}
            onClick={() => window.open('https://github.com/VardhanRangineni', '_blank')}
            onMouseOver={e => e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.1)'}
            onMouseOut={e => e.target.style.backgroundColor = 'transparent'}
          >
              <img src={process.env.PUBLIC_URL + "/Images/1298743_github_git_logo_social_icon.png"} alt="GitHub Logo" style={{ width: '40px', height: '40px' }} />  View GitHub
          </button>
        </div>
      </div>
    </div>
    <div className="text-center py-4 mt-4">
      <p className="text-light mb-0">
        © 2025 Vardhan Rangineni. All rights reserved.
      </p>
    </div>
  </footer>
));

export default Contact;
