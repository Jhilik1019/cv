import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer" id='contact'>
      <div className="footer-container">
        <h2 className="footer-title">Get In Touch</h2>
        <p className="footer-text">
          If you have any questions or want to collaborate, feel free to reach out!
        </p>
        <div className="footer-contact">
          <p>
            📧 Email: <a href="mailto:your.jhilikb894@gmail.com">jhilikb894@gmail.com</a>
          </p>
         
          
        </div>
        <div className="footer-socials">
          <a
            href="https://github.com/Jhilik1019"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            GitHub
          </a>
          <a
            href="www.linkedin.com/in/jhilik-barman-a459b6322"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            LinkedIn
          </a>
          
        </div>
        <p className="footer-copyright">
          © {new Date().getFullYear()} Your Name. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

    
      
    
