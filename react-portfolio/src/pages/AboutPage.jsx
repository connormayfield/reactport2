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
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
                perferendis non voluptatem voluptatum laudantium! Animi ad sit
                dignissimos quibusdam id, deleniti, ex fugit atque sed at quasi
                a voluptates velit! Lorem ipsum dolor sit amet
              </p>
              <p>
                consectetur adipisicing elit. Incidunt, ad. Dolores nam, ullam
                facilis nesciunt iste quae expedita quos rem sint debitis
                accusantium consequuntur mollitia obcaecati nihil placeat illum
                corrupti?
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
    </Container>
  );
}

export default AboutPage;
