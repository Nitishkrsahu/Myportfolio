import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg" style={{
      backgroundColor: '#000'
    }}>
      <div className="container">
        <Link className="navbar-brand" to="/"><span className='text-white'>MyWebsite</span></Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/"><button className='btn btn-dark'>Home</button></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about"><button className='btn btn-dark'>About</button></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services"><button className='btn btn-dark'>Services</button></Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact"><button className='btn btn-dark'>Contact</button></Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
