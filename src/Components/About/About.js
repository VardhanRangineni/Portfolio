import React from 'react';

const About = React.forwardRef((props, ref) => (
  <section ref={ref} className="container py-5">
    <div className="row align-items-center g-4">
      <div className="col-lg-6 text-center">
        <div className="position-relative d-inline-block">
          <img
            src={process.env.PUBLIC_URL + "/Images/Generated Image September 02, 2025 - 6_58PM.jpeg"}
            alt="Vardhan Rangineni"
            className="img-fluid"
            style={{
              width: '120%',
              alignSelf: 'center',
              maxWidth: '500px',
              height: '500px',
              objectFit: 'cover',
              borderRadius: '20px',
              border: '4px solid rgba(255, 255, 255, 0.3)',
              boxShadow: '0 20px 40px rgba(0, 0, 0, 0.3)',
              transition: 'transform 0.3s ease',
              marginLeft: '-10%'
            }}
            onMouseOver={e => e.target.style.transform = 'scale(1.05)'}
            onMouseOut={e => e.target.style.transform = 'scale(1)'}
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
              Currently working as a <span className="text-info fw-bold">Java Full Stack Developer</span>, I'm specialize in:
            </p>
            <ul className="list-unstyled mb-4">
              <li className="mb-2">• Spring Framework & Spring Boot</li>
              <li className="mb-2">• React & Modern Frontend Development</li>
              <li className="mb-2">• Core Java & Advanced Java</li>
              <li className="mb-2">• Python Development</li>
            </ul>
            <p>
              I'm passionate about creating efficient, scalable solutions and always eager to learn new technologies that push the boundaries of innovation.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
));

export default About;
