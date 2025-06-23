
import React from 'react';
import { Container, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import './style.css';

const About = () => {
  const navigate = useNavigate();

  return (
    <section className="about-section">
      <Container className="about-container text-center">
        <img src="/apoorva.jpg" alt="Apoorva Panigrahi" className="profile-pic" />

        <div className="about-content">
          <h1>Hello, I'm <span className="highlight">Apoorva Panigrahi</span></h1>
          <h3 className="role">Frontend Enthusiast</h3>
          <p>
            I’m a frontend developer who enjoys turning ideas into interactive, visually appealing websites.
  With a strong foundation in HTML, CSS, JavaScript, and currently learning React, I’m passionate
  about building seamless user experiences. I love combining clean design with functional code, and
  I’m always eager to learn new technologies that push my creativity further. Whether it's a personal
  project or a team collaboration, I bring energy, detail, and a user-first mindset to everything I build.
          </p>
          <div className="about-buttons">
            <Button variant="info" onClick={() => navigate('/projects')}>View Projects</Button>
            <Button variant="outline-dark" onClick={() => navigate('/contact')}>Contact Me</Button>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
