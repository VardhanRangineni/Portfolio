import React from 'react';

const About = React.forwardRef((props, ref) => (
  <section ref={ref} className="container py-5">
    <div className="row align-items-center g-4">
      <div className="col-lg-6 text-center">
        <div className="position-relative d-inline-block">
          <img
            src={process.env.PUBLIC_URL + "/Images/Generated Image September 02, 2025 - 6_59PM.jpeg"}
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
              Welcome to my portfolio! I'm <strong>Vardhan Rangineni</strong>, an Information Technology graduate (Batch of 2025) with a strong passion for coding, problem-solving, and building impactful digital solutions.
            </p>
            <p className="mb-4">
              I am currently working as a <span className="text-info fw-bold">Java Full Stack Developer</span>, with expertise in:
            </p>
            <ul className="list-unstyled mb-4">
              <li className="mb-2">• Spring Framework & Spring Boot</li>
              <li className="mb-2">• React & Modern Frontend Development</li>
              <li className="mb-2">• Core & Advanced Java</li>
              <li className="mb-2">• Python Development</li>
            </ul>
            <p>
              I thrive on developing efficient, scalable, and user-focused applications while continuously learning and adapting to emerging technologies. My goal is to contribute to innovative projects that make a real difference.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
));

export default About;
