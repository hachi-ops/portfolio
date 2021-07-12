import React from "react";
import './header.css'


const Header = () => {
    return (
      <div className="nav-wrapper">
      <div className="left-side">
          <div className="brand">
              <div>Hachi-ops</div>
          </div>
         </div>


      <div className="right-side">
          <div className="nav-link-wrapper">
              <a href="about.html">Services</a>
          </div>
              <div className="nav-link-wrapper active-nav-link">
                  <a href="index.html">Projects</a>
              </div>

          </div>
  </div>
    );
  }

  export default Header;