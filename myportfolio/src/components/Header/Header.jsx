import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  const [bgColor, setBgColor] = useState("");

  return (
    <nav className="navbar navbar-expand-lg animate__animated animate__bounce" style={{
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
          <img src='/app-menu.svg' className='bg-dark p-2 rounded rounded-1'></img>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ms-auto border border-1 rounded rounded-2 text-center border-dark">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
              <span className='btn w-100 btn-dark' 
              style={{
                backgroundColor: `${bgColor === "Home" ? "#fe0087" : "#0E1616"}`,
                transition: '1s'
                }} 
                onClick={()=>setBgColor("Home")}
                >Home
              </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">
              <span className='btn w-100 btn-dark' 
              style={{
                backgroundColor: `${bgColor === "About" ? "#fe0087" : "#0E1616"}`,
                transition: '1s'
              }}
                 onClick={()=>setBgColor("About")}
                 >About
              </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">
              <span className='btn w-100 btn-dark' 
              style={{
                backgroundColor: `${bgColor === "Services" ? "#fe0087" : "#0E1616"}`,
                transition: '1s'              
              }} 
                onClick={()=>setBgColor("Services")}
                >Services
              </span>
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
              <span className='btn w-100 btn-dark'
               style={{
                backgroundColor: `${bgColor === "Contact" ? "#fe0087" : "#0E1616"}`,
                transition: '1s'
              }}
                 onClick={()=>setBgColor("Contact")}
                 >Contact
              </span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
