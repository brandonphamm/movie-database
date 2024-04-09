import React from "react"  
import "./footer.css"

import { Link } from "react-router-dom"


function Footer() {
    const currentYear = new Date().getFullYear();
  
    return (
      <footer className="footer">
        <p>© Brandon Pham {currentYear} | Front-End Web Developer</p>
      </footer>
    );
  }

export default Footer