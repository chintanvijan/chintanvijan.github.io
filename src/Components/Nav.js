import React from 'react';

import '../static/lib/bootstrap/css/bootstrap.min.css';
import '../static/lib/font-awesome/css/font-awesome.min.css';
import '../static/lib/animate/animate.min.css';
import '../static/lib/ionicons/css/ionicons.min.css';
import '../static/lib/owlcarousel/assets/owl.carousel.min.css';
import '../static/lib/lightbox/css/lightbox.min.css';
import '../static/css/style.css';

const Nav = () => {
  return (
    <nav className="navbar navbar-b navbar-trans navbar-expand-md fixed-top" id="mainNav">
        <div className="container">
          <a className="navbar-brand js-scroll" href="#page-top">Chintan Vijan</a>
          <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault"
            aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
            <span></span>
            <span></span>
            <span></span>
          </button>
          <div className="navbar-collapse collapse justify-content-end" id="navbarDefault">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link js-scroll active" href="#home">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#about">About</a>
              </li>
             <li className="nav-item">
                <a className="nav-link js-scroll" href="#resume">Resume</a>
              </li>
              <li className="nav-item">
                <a className="nav-link js-scroll" href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Nav;
