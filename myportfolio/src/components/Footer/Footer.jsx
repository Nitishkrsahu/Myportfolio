
export default function Footer() {
  return (
    <footer className="bg-dark text-light pt-5 pb-3 mt-5">
      <div className="container">
        <div className="row">


          <div className="col-md-4 mb-4">
            <h5>MyWebsite</h5>
            <p>Building scalable web apps with style and performance.</p>
          </div>


          <div className="col-md-4 mb-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/" className="text-light text-decoration-none">Home</a></li>
              <li><a href="/about" className="text-light text-decoration-none">About</a></li>
              <li><a href="/services" className="text-light text-decoration-none">Services</a></li>
              <li><a href="/contact" className="text-light text-decoration-none">Contact</a></li>
            </ul>
          </div>


          <div className="col-md-4 mb-4">
            <h5>Follow Us</h5>
            <a href="https://facebook.com" className="text-light me-3">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="https://twitter.com" className="text-light me-3">
              <i className="bi bi-twitter"></i>
            </a>
            <a href="https://linkedin.com" className="text-light me-3">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://github.com" className="text-light">
              <i className="bi bi-github"></i>
            </a>
          </div>
        </div>

        <hr className="border-secondary" />

        <div className="text-center">
          <p className="mb-0">&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
