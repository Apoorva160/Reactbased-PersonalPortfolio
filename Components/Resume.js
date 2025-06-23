
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './style.css';

const Resume = () => {
  return (
    <section className="section-container">
      <Container className="text-center">
        <h2 className="section-heading">Resume</h2>
        <p className="resume-text">
          You can view or download my resume to learn more about my experience, skills, and education. 
          I'm currently focused on frontend development using HTML, CSS, JavaScript, and React.
        </p>
        <div className="resume-buttons mt-3">
          <Button
            variant="info"
            href="/resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Resume
          </Button>{' '}
          <Button
            variant="outline-dark"
            href="/resume.pdf"
            download
          >
            Download Resume
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Resume;
