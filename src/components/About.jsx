import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import avatar from "../images/Portfolio_headshot.png";
import "../style/About.css";

function About() {
  return (
    // About section
    <section id="about" className="py-5">
      <h1 className="about-heading">About Me</h1>
      <Container>
        <Row>
          <Col
            xs={12}
            md={4}
            className="d-flex justify-content-center align-items-center mb-4 mb-md-0"
          >
            <Image src={avatar} rounded fluid className="about-image" />
          </Col>
          <Col xs={12} md={8}>
            <Card>
              <Card.Body>
                <Card.Title className="text-center mb-4">
                  About Preksha Sangvikar
                </Card.Title>
                  <Card.Text>
                    Welcome, I'm Preksha Sangvikar, a 26-year-old whose professional and personal pursuits have been as diverse as they are profound.I am a highly motivated and detail-oriented Full Stack Web Developer, with a recent certification from the University of California Berkeley’s Coding Bootcamp. 
                  </Card.Text>
                  <Card.Text>
                  My passion for technology is complemented by a strong background in project management, where I excel in blending technical expertise with effective communication and strategic thinking. With hands-on experience in both frontend and backend development, I am proficient in creating user-friendly, dynamic web applications that prioritize seamless user experiences.
                  </Card.Text>
                  <Card.Text>
                  Having previously worked in business operations and customer qualification, I bring a unique perspective to development, always keeping the end-user in mind.
                  </Card.Text>
                  <Card.Text>
                    In an unexpected twist, I've also been fortunate in modeling and acting, realms that, while distinct, have enhanced my professional trajectory. These experiences have not only broadened my network but also honed my presentation and communication skills, further enriching my professional toolkit.
                  </Card.Text>
                  <Card.Text>
                    I view every situation as an opportunity to learn and grow, applying a unique blend of analytical and creative thinking to achieve outstanding results. As a lifelong learner, I am eager to integrate into your organization, aligning my diverse skills with your strategic goals to drive success and innovation.
                  </Card.Text>
                  <Card.Text>
                  I look forward to growing within a collaborative environment where I can further enhance my skills and contribute to meaningful projects.
                  </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

// Export About
export default About;