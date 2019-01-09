import React from 'react';
import PropTypes from 'prop-types';
import ScrollToNext from '../../components/ScrollToNext';
import './style.scss';
import { Container, Row, Col } from 'react-grid-system';


const ResumePage = (props, context) => {
  const {
    theme: { colorPrimary, colorHighlight, bgPrimary, textPrimary }
  } = context;

  return (
    <div className="resume-page" style={{ backgroundColor: bgPrimary }}>
      <style jsx="true">
        {`
          .highlight {
            background-color: ${colorHighlight};
          }
          ::selection {
            background-color: ${colorHighlight};
          }
        `}
      </style>
      <div className="content-grid">
        <h1 style={{ color: colorPrimary }}>Experience</h1>
        <br />
        <br />
        <Container fluid>
          <Row justify="center">
            <Col>
            <h2 style={{color: colorPrimary }}>Work Experience</h2>
            </Col>
          </Row>
          <br/>
          <Row>
            <Col>
              <h3>Ario</h3>
              <h4>Full Stack Developer Student | September 2018 - Present</h4>
              <br />
              <p>
                Worked with a small, agile team to deliver backend features using Ruby on Rails. Added features including integrating third party APIs and removing our sandbox environment. Experienced work in a new start-up as we launched our product. Gained exposure to tools like GitHub issue tracking, CircleCI, Code cov, and Heroku.
              </p>
            </Col>
            <Col>
              <h3>Foko</h3>
              <h4>Co-op Developer | January 2018 - April 2018</h4>
              <br />
              <p>
              Worked on the Android team to fix bugs using Android Studio. Worked on the backend/web team to implement new features in the admin panel using Ember, Node.js, and MongoDB. Learned more about the development process, especially agile development and scrum methodologies. Gained exposure to tools like JIRA, GitHub, Jenkins, and Travis
              </p>
            </Col>
            <Col>
              <h3>CRA</h3>
              <h4>Co-op Developer | May 2017 - August 2017</h4>
              <br />
              <p>
              Worked with a team to implement changes and fixes to business applications using ABAP in the SAP environment. Created documentation for a new peer review process. Created documentation for new development standards.
              </p>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col>
              <h2 style={{color: colorPrimary}}>Education</h2>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <h3>University of Ottawa</h3>
              <h4>BASc. in Software Engineering | September 2016 - December 2010</h4>
              <br />
              <p>
              Currently in 3rd year. CGPA of 8.95 on a 10 point scale (approximately 3.9 on a 4 point scale). Awards including: Nortel Founding Scholarship ($3000), Faculty of Engineering Memorial Scholarship ($2000), and uOttawa Admission Scholarship ($3000).
              </p>
            </Col>
            <Col>
            </Col>
            <Col>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col>
              <h2 style={{color: colorPrimary}}>Skills</h2>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <h3>Languages and Frameworks</h3>
              <br />
              <p>
              <ul>
                <li>Experienced in Java, Python, Ruby, and JavaScript Experienced with developing using Ruby on Rails, Node.js, and Android Studio</li>
                <li>Experienced with writing tests using Mocha, Jasmine, and Rspec</li>
                <li>Learned the basics of Ember, Angular, and React Native at a previous co-op placements</li>
                <li>Designed and developed promotional, informative, and gaming websites with JavaScript, HTML, and CSS</li>
                <li>Self-taught React to build this site</li>
              </ul>
              </p>
            </Col>
            <Col>
            <h3>Working as Part of a Team</h3>
              <br />
              <p>
              <ul>
                <li>Understanding of and experience with using Git and Github to manage source code (https://github.com/rachelmharrison)</li>
                <li>Experience using JIRA, Asana, and GitHub to track issues and work, specifically using the KanBan methodology</li>
                <li>Experience working with a small team in a scrum based, agile environment</li>
                <li>Worked with teams on large programming projects including mobile, web, and backend features, games, and complex competition problems</li>
              </ul>
              </p>
            </Col>
            <Col>
            </Col>
          </Row>
          <br/>
          <br/>
          <Row>
            <Col>
              <h2 style={{color: colorPrimary}}>Other Experience</h2>
            </Col>
          </Row>
          <br />
          <Row>
            <Col>
              <h3>Student Federation of the University of Ottawa</h3>
              <h4>Engineering Board Member | May 2018 - Present</h4>          
            </Col>
            <Col>
              <h3>Treasury Board Secretariat</h3>
              <h4>Digital Youth Advisor | July 2017 - April 2018</h4> 
            </Col>
            <Col>
              <h3>Univeristy of Ottawa</h3>
              <h4>Ambassador and Tour Guide | January 2017 - Present</h4>
            </Col>
          </Row>
        </Container>

      </div>

    </div>
  );
};

ResumePage.contextTypes = {
  theme: PropTypes.any
};

export default ResumePage;