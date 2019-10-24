import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

import { Form, Button, Container, Row, Col } from "react-bootstrap/";
import Axios from "axios";

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
                    variant="primary"
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
            </div>
          </Col>
          <Col sm={4}>
            <div className="divvy">
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                Aliquid iste fuga accusantium quod harum dicta hic obcaecati,
                praesentium consequuntur, commodi itaque, non soluta illum.
                Temporibus iste eaque assumenda eveniet obcaecati?
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default ContactPage;
