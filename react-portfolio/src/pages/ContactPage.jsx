import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

import { Form, Button, Container, Row, Col } from "react-bootstrap/";
import Axios from "axios";
// import ScrollToTop from "../components/ScrollToTop";

const baseUrl = "http://localhost:3030";

class ContactPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
      disabled: false,
      emailSent: null,
      show: false,
      link: "https://bit.ly/32wms90"
    };
  }

  handleChange = event => {
    const target = event.target;
    const value = target.type === "checkbox" ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();

    this.setState({
      disabled: true
    });

    Axios.post(`${baseUrl}/api/email`, this.state)
      .then(res => {
        if (res.data.success) {
          this.setState({
            disabled: false,
            emailSent: true
          });
        } else {
          this.setState({
            disabled: false,
            emailSent: true
          });
        }
      })
      .catch(err => {
        this.setState({
          disabled: false,
          emailSent: false
        });
      });
  };

  render() {
    return (
      <Container fluid className="contactPage">
        <Hero title={this.props.title} />
        <Row>
          <Col lg={7}>
            <div className="contact-section" id="contact-section">
              <Content>
                <Form onSubmit={this.handleSubmit}>
                  <Form.Group>
                    <Form.Label htmlFor="full-name">Full Name</Form.Label>
                    <Form.Control
                      id="full-name"
                      name="name"
                      type="text"
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label htmlFor="email">Email</Form.Label>
                    <Form.Control
                      id="email"
                      name="email"
                      type="email"
                      value={this.state.email}
                      onChange={this.handleChange}
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label htmlFor="message">Message</Form.Label>
                    <Form.Control
                      id="full-name"
                      name="message"
                      as="textarea"
                      rows="3"
                      value={this.state.message}
                      onChange={this.handleChange}
                    />
                  </Form.Group>
                  {/* <a href={this.state.link} rel="noopener noreferrer">
              Resume
            </a> */}
                  <Button
                    className="d-inline-block"
                    type="submit"
                    disabled={this.state.disabled}
                    onClick={() => this.setState({ show: true })}
                  >
                    Send
                  </Button>

                  {this.state.emailSent === true && (
                    <p className="d-inline success-msg">Email Sent</p>
                  )}
                  {this.state.emailSent === false && (
                    <p className="d-inline err-msg">Email Sent</p>
                  )}
                </Form>
              </Content>
              {/* <ScrollToTop>button</ScrollToTop> */}
            </div>
          </Col>
          <Col sm={4}>
            <div className="divvy">
              <p className="contactContent">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquid iste fuga accusantium quod harum dicta hic obcaecati,
                praesentium consequuntur, commodi itaque, non soluta illum.
                Temporibus iste eaque assumenda eveniet obcaecati?
              </p>
            </div>
          </Col>
        </Row>
        <svg
          width="100%"
          className="contactSvg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#0099ff"
            fill-opacity="1"
            d="M0,256L80,245.3C160,235,320,213,480,218.7C640,224,800,256,960,234.7C1120,213,1280,139,1360,101.3L1440,64L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </Container>
    );
  }
}

export default ContactPage;
