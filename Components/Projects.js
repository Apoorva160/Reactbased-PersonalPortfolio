
import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './style.css';

const projectData = [
  {
    title: 'Carpooling Website',
    description: 'A web platform that connects students for safe and eco-friendly ridesharing. Built to optimize commuting and reduce traffic.',
    tech: 'HTML, CSS, JavaScript',
    github: 'https://github.com/Apoorva160/Carpooling-Website.git',
    demo: '#'
  },
  {
    title: 'Kitchen Tales',
    description: 'A recipe-sharing web app that allows users to discover, post, and explore recipes from around the world with a modern UI.',
    tech: 'HTML, CSS, JS, React',
    github: 'https://github.com/Apoorva160/Kitchen-Tales-.git',
    demo: '#'
  },
  {
    title: 'Lyrics Finder',
    description: 'Search and fetch lyrics for your favorite songs using an API-powered clean UI with the ability to save favourites.',
    tech: 'React, Axios API',
    github: 'https://github.com/Apoorva160/lyrics-finder-app.git',
    demo: '#'
  },
  {
    title: 'Weather App',
    description: 'Get real-time weather updates using OpenWeatherMap API with an intuitive interface and city-based search functionality.',
    tech: 'HTML, CSS, JavaScript, API',
    github: 'https://github.com/Apoorva160/WeatherTrack.git',
    demo: '#'
  },
  {
    title: 'Spotify Clone',
    description: 'A simple static clone of Spotify’s landing page featuring smooth UI, responsive layout, and modern styles.',
    tech: 'HTML, CSS, JS',
    github: 'https://github.com/Apoorva160/Spotify-Clone.git',
    demo: '#'
  },
  {
  title: 'Morse Code Translator',
    description: 'A frontend app that converts English text into Morse code and vice versa — with real-time updates and clean design.',
    tech: 'Python , HTML, CSS, JS',
    github: 'https://github.com/Apoorva160/MorseCode-translator.git',
    demo: '#'
  },
];

const Projects = () => {
  return (
    <section className="section-container">
      <Container>
        <h2 className="section-heading">Projects</h2>
        <Row>
          {projectData.map((project, index) => (
            <Col md={4} sm={6} xs={12} key={index} className="mb-4">
              <Card className="project-card">
                <Card.Body>
                  <Card.Title>{project.title}</Card.Title>
                  <Card.Text>{project.description}</Card.Text>
                  <p className="tech-used"><strong>Tech:</strong> {project.tech}</p>
                  <div className="project-links">
                    <Button variant="info" size="sm" href={project.github} target="_blank">GitHub</Button>{' '}
                    <Button variant="outline-dark" size="sm" href={project.demo} target="_blank">Demo</Button>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
