import { useState, useEffect,useRef } from 'react';
import Button from '../common/Button'

const Hero = () => {

  const fullText = "Nitish Kumar Sahu";
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const indexRef = useRef(0); // typing index

  useEffect(() => {
    const speed = isDeleting ? 100 : 200;

    const interval = setInterval(() => {
      if (!isDeleting) {
        // Typing
        const char = fullText.charAt(indexRef.current);
        setDisplayText((prev) => prev + char);
        indexRef.current++;

        if (indexRef.current === fullText.length) {
          clearInterval(interval);
          setTimeout(() => {
            setIsDeleting(true);
          }, 1000); // pause before deleting
        }
      } else {
        // Deleting
        setDisplayText((prev) => prev.slice(0, -1));
        indexRef.current--;

        if (indexRef.current === 0) {
          clearInterval(interval);
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearInterval(interval);
  }, [displayText, isDeleting]);

  return (
    <section className="hero py-5 text-white" style={{
        backgroundColor: '#000',
        height: '100%'
    }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-6 mb-4 mb-lg-0">
            <h1 className="display-5 fw-bold mb-3 fs-1">
              Hi, I'm <span className="text-warning">{displayText}</span>
            </h1>
            <h2 className="h4 mb-4">MERN Stack Developer</h2>
            <p className="lead mb-4">
              I build exceptional digital experiences with modern web technologies.
            </p>
            <div className="d-flex gap-3">
              <Button text="View Projects" link="/about" variant="btn btn-warning" />
              <Button text="Contact Me" link="/contact" variant="btn btn-outline-light" />
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