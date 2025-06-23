
import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCode,
  faPaintBrush,
  faDatabase,
  faLaptopCode,
  faCoffee,
  faProjectDiagram,
  faCogs,
  faFileCode
} from '@fortawesome/free-solid-svg-icons';
import { faGitAlt, faReact, faJs, faHtml5, faCss3Alt, faFigma } from '@fortawesome/free-brands-svg-icons';

import './style.css';

const skills = [
  { name: 'HTML5', icon: faHtml5, desc: 'Semantic markup and structure for clean layouts' },
  { name: 'CSS3', icon: faCss3Alt, desc: 'Flexbox, Grid, media queries, and animations' },
  { name: 'JavaScript', icon: faJs, desc: 'ES6+, DOM manipulation, and logic building' },
  { name: 'React', icon: faReact, desc: 'JSX, components, and hooks' },
  { name: 'Git & GitHub', icon: faGitAlt, desc: 'Version control and collaboration' },
  { name: 'MySQL', icon: faDatabase, desc: 'Database queries and data storage' },
  { name: 'Power BI', icon: faProjectDiagram, desc: 'Data visualization and business intelligence' },
  { name: 'Python', icon: faCogs, desc: 'General-purpose language for automation and AI' },
  { name: 'Java(Basics)', icon: faCoffee, desc: 'OOP concepts, exception handling, and collections'},

];

const Skills = () => {
  return (
    <section className="section-container">
      <Container>
        <h2 className="section-heading">Skills</h2>
        <div className="skill-card-grid">
          {skills.map((skill, index) => (
            <div className="skill-card" key={index}>
              <div className="skill-icon">
                <FontAwesomeIcon icon={skill.icon} size="2x" />
              </div>
              <h5 className="skill-title">{skill.name}</h5>
              <p className="skill-desc">{skill.desc}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default Skills;
