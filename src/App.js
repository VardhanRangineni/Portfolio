import './App.css';
import Silk from './Components/Silk';
import CardNav from './Components/Cardnav';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="position-relative min-vh-100" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="position-absolute top-0 start-0 w-100 h-100" style={{ zIndex: 0 }}>
        <Silk
          speed={5}
          scale={1}
          color="#871ee2ff"
          noiseIntensity={0}
          rotation={0}
        />
      </div>
      <CardNav
        logo={process.env.PUBLIC_URL + "/Images/ChatGPT_Image_Jul_23__2025__05_05_17_PM-removebg-preview (1).png"}
        logoAlt="My Portfolio Logo"
        items={[
          {
            label: 'About',
            bgColor: 'rgba(255, 255, 255, 0.1)',
            textColor: '#fff',
          },
          {
            label: 'Projects',
            bgColor: 'rgba(255, 255, 255, 0.1)',
            textColor: '#fff',
          },
          {
            label: 'Contact',
            bgColor: 'rgba(255, 255, 255, 0.1)',
            textColor: '#fff',
          }
        ]}
        className="position-relative"
        baseColor="rgba(255, 255, 255, 0.05)"
        menuColor="#fff"
        buttonBgColor="rgba(135, 30, 226, 0.8)"
        buttonTextColor="#fff"
      />
      <div className="position-relative" style={{ zIndex: 1 }}>
        <div className="container py-5 text-white mt-5" style={{ textAlign: "center" }}>
          <h1>Welcome to My Portfolio</h1>
        </div>
        
        {/* About Section */}
        <div className="container py-5">
          <div className="row align-items-center">
            <div className="col-md-6 d-flex justify-content-center mb-4 mb-md-0">
              <div className="position-relative">
                <img
                          src={process.env.PUBLIC_URL + "/Images/WhatsApp Image 2025-07-23 at 5.46.57 PM.jpeg"}
                          alt="Vardhan Rangineni"
                          className="img-fluid"
                          style={{
                            width: '300px',
                            height: '300px',
                            objectFit: 'cover',
                            borderRadius: '20px',
                            border: '3px solid rgba(255, 255, 255, 0.3)',
                            boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)'
                          }}
                        />
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="text-white p-4">
                <h2 className="mb-4">About Me</h2>
                <p className="mb-3">
                  Welcome to my portfolio! I'm VARDHN RANGINENI an IT graduate student from the 2025 batch with a deep passion for coding. 
                  I love solving complex problems and building innovative solutions through technology.
                </p>
                <p className="mb-3">
                  Currently working as a Java Full Stack Developer, I have expertise in Spring Framework, Spring Boot, 
                  React, Core Java, and Advanced Java concepts. I also have some experience with Python and am always 
                  eager to expand my technical skills.
                </p>
                <p>
                  When I'm not coding, you can find me exploring new music, learning about design trends, 
                  or working on personal projects that push the boundaries of what's possible on the web.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Section */}
        <div className="container py-5">
          <div className="text-white text-center mb-5">
            <h2>My Projects</h2>
          </div>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="text-white p-4" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                border: '3px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(10px)'
              }}>
                <h4 className="mb-3">Java Project</h4>
                <p className="mb-3">
                  A LIBRARY MANAGEMENT SYSTEM full-stack java web application built with REST api, Spring Boot and React. 
                  Features interactive user interface, real-time data processing.
                </p>
                <div className="mb-3">
                  <span style={{
                    backgroundColor: 'rgba(135, 30, 226, 0.8)',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    marginRight: '8px'
                  }}>Java</span>
                  <span style={{
                    backgroundColor: 'rgba(135, 30, 226, 0.8)',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    marginRight: '8px'
                  }}>React</span>
                  <span style={{
                    backgroundColor: 'rgba(135, 30, 226, 0.8)',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '0.8rem'
                  }}>Spring Boot</span>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="text-white p-4" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                border: '3px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(10px)'
              }}>
                <h4 className="mb-3">Java Project</h4>
                <p className="mb-3">
                  A EXPENSE MANAGEMENT java full Stack web application built with REST api, Spring Boot and React.
                  Features user authentication, CRUD operations, and responsive design.
                </p>
                <div className="mb-3">
                  <span style={{
                    backgroundColor: 'rgba(135, 30, 226, 0.8)',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    marginRight: '8px'
                  }}>Java</span>
                  <span style={{
                    backgroundColor: 'rgba(135, 30, 226, 0.8)',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    marginRight: '8px'
                  }}>MySQL</span>
                  <span style={{
                    backgroundColor: 'rgba(135, 30, 226, 0.8)',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '0.8rem'
                  }}>REST API</span>
                </div>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="text-white p-4" style={{
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                border: '3px solid rgba(255, 255, 255, 0.3)',
                boxShadow: '0 8px 32px rgba(0, 0, 0, 0.3)',
                backdropFilter: 'blur(10px)'
              }}>
                <h4 className="mb-3">Python Project</h4>
                <p className="mb-3">
                  A DATA ANALYSIS project using Python, Pandas, and Matplotlib to analyze and visualize complex datasets.
                  it give accurate predictions of the OIL PRICES using various ML algorithms.
                </p>
                <div className="mb-3">
                  <span style={{
                    backgroundColor: 'rgba(135, 30, 226, 0.8)',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    marginRight: '8px'
                  }}>Python</span>
                  <span style={{
                    backgroundColor: 'rgba(135, 30, 226, 0.8)',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '0.8rem',
                    marginRight: '8px'
                  }}>Pandas</span>
                  <span style={{
                    backgroundColor: 'rgba(135, 30, 226, 0.8)',
                    padding: '4px 8px',
                    borderRadius: '12px',
                    fontSize: '0.8rem'
                  }}>Matplotlib</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
