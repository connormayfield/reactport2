import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";
import "../components/CardStyle.css";
import { Container, Row, Col } from "react-bootstrap";
import Blob from "../assets/images/blob-shape1.svg";

function AboutPage(props) {
  return (
    <Container fluid className="aboutPage">
      <div className="about-section" id="about-section">
        <Hero
          className="justify-content-center"
          id="aboutHero"
          title={props.title}
        />
        <img className="blob" alt="blob art" src={Blob}></img>
        <Row>
          <Col lg={12}>
            <Content className="aboutText">
              <p className="aboutParagraph">
                Self-motivated web developer looking to bring my strong work
                ethic and creativity from my experience in the restaurant
                industry to a new field where I can learn and grow. Experienced
                in each stage of website creation, from creating wireframes to
                deployment. Proven track record of overseeing and working with
                others to create a productive work environment and accomplish
                goals.
              </p>

              <a href="https://www.github.com/connormayfield">
                <i className="gitHubImage" class="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/connormayfield">
                <i className="linkedInImage" class="fab fa-linkedin"></i>
              </a>
            </Content>
          </Col>
        </Row>
      </div>
      <svg
        className="contactTopSvg"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
      >
        <path
          fill="#f3f3f3"
          fill-opacity="1"
          d="M0,128L60,160C120,192,240,256,360,234.7C480,213,600,107,720,96C840,85,960,171,1080,197.3C1200,224,1320,192,1380,176L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
        ></path>
      </svg>
    </Container>
  );
}

export default AboutPage;
