
import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faEnvelope,
  faPhone
} from '@fortawesome/free-solid-svg-icons';
import {
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

import './style.css';

const Contact = () => {
  return (
    <section className="section-container">
      <Container className="text-center">
        <h2 className="section-heading">Contact</h2>
        <p className="contact-subtext">
          Feel free to reach out for collaboration or inquiries.
        </p>

        <div className="contact-list">
          <div className="contact-item">
            <FontAwesomeIcon icon={faEnvelope} className="contact-icon" />
            <span>apoorvapanigrahi.11@gmail.com</span>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faLinkedin} className="contact-icon" />
            <a
              href="https://linkedin.com/in/apoorva-panigrahi-459777284/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LinkedIn
            </a>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faGithub} className="contact-icon" />
            <a
              href="https://github.com/Apoorva160"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
          <div className="contact-item">
            <FontAwesomeIcon icon={faPhone} className="contact-icon" />
            <span>7447XXXXX7</span>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Contact;
