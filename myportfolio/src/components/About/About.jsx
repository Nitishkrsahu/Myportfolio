
import SectionTitle from '../common/SectionTitle';

const About = () => {
  return (
    <section className="py-5" style={{
        backgroundColor: '#000',
        color: '#fff'
    }}>
      <div className="container">
        <SectionTitle title="About Me" subtitle="Get to know me" />
        
        <div className="row align-items-center">
          <div className="col-lg-4 mb-4 mb-lg-0">
            <div className="text-center">
              <img 
                src="/profile.jpg" 
                alt="Profile" 
                className="img-fluid rounded shadow-lg" 
                style={{ maxWidth: '310px' }}
              />
            </div>
          </div>
          <div className="col-lg-8">
            <h3 className="mb-3">Who am I?</h3>
            <p className="lead">
              I'm a passionate MERN stack developer with 3+ years of experience 
              building web applications.
            </p>
            <p>
              My approach focuses on clean, efficient code and creating intuitive 
              user experiences. I'm constantly learning new technologies and 
              frameworks to stay at the forefront of web development.
            </p>
            
            <div className="row mt-4">
              <div className="col-md-6">
                <div className="d-flex mb-3">
                  <span className="fw-bold me-2">Name:</span>
                  <p>Your Name</p>
                </div>
                <div className="d-flex mb-3">
                  <span className="fw-bold me-2">Email:</span>
                  <p>your.email@example.com</p>
                </div>
              </div>
              <div className="col-md-6">
                <div className="d-flex mb-3">
                  <span className="fw-bold me-2">Experience:</span>
                  <p>3+ Years</p>
                </div>
                <div className="d-flex mb-3">
                  <span className="fw-bold me-2">Location:</span>
                  <p>Your City, Country</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;