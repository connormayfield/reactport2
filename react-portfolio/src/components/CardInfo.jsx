import React from "react";
import { useSpring, animated } from "react-spring";
import { Container, Row, Col } from "react-bootstrap";

function CardInfo(props) {
  const style = useSpring({ opacity: 1, from: { opacity: 0 } });

  return (
    <animated.div className="g-card-info" style={style}>
      <p className="g-card-title">{props.title}</p>
      <p className="g-card-sub-title">{props.subTitle}</p>
      <Container fluid className="cardContainer</Container>">
        <Row>
          <Col lg={3}>
            <a href={props.link} target="_blank" rel="noopener noreferrer">
              <i class="fas fa-external-link-alt"></i>
            </a>
          </Col>
          <Col lg={3}>
            <a
              href={props.gitHub}
              id="gitHub"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="cardGitHubImage" class="fab fa-github"></i>
            </a>
          </Col>
        </Row>
      </Container>
    </animated.div>
  );
}

export default CardInfo;
