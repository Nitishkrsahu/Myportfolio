import Button from '../common/Button';

const Hero = () => {
  return (
    <section className="hero py-5 text-white" style={{
        backgroundColor: '#000',
        height: '100%'
    }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="display-4 fw-bold mb-3">
              Hi, I'm <span className="text-warning">Your Name</span>
            </h1>
            <h2 className="h4 mb-4">MERN Stack Developer</h2>
            <p className="lead mb-4">
              I build exceptional digital experiences with modern web technologies.
            </p>
            <div className="d-flex gap-3">
              <Button text="View Projects" link="#projects" variant="warning" />
              <Button text="Contact Me" link="#contact" variant="outline-light" />
            </div>
          </div>
          <div className="col-lg-6">
            <img 
              src="./bio-pic.jpg" 
              alt="Developer" 
              className="img-fluid rounded-circle shadow-lg"
              width={550} 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;