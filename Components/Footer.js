
import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faGithub,
  faLinkedin,
  faInstagram,
} from '@fortawesome/free-brands-svg-icons';
import './style.css';

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="footer-container">
        <div className="footer-text">© 2025 Apoorva Panigrahi</div>
        <div className="footer-icons">
          <a href="https://github.com/Apoorva160" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://linkedin.com/in/apoorva-panigrahi-459777284/" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="https://www.instagram.com/appy1104?igsh=MWlsdDYyeHI3cjlnOA==" target="_blank" rel="noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
