import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { HashLink as Link } from "react-router-hash-link";
import { Link } from "react-scroll";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

import "./App.css";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "Connor Mayfield",
      headerLinks: [
        { title: "Home", path: "/" },
        { title: "About", path: "/about" },
        { title: "Contact", path: "/contact" }
      ],
      home: {
        title: "Connor Mayfield",
        subTitle: "My Portfolio",
        text: "Check out some of my projects below"
      },
      about: {
        title: "About Me"
      },
      contact: {
        title: "Contact"
      }
    };
  }

  render() {
    return (
      <Router>
        <Container className="p-0" fluid={true}>
          <Navbar className="border-none " bg="transparent" expand="lg">
            <Navbar.Toggle
              className="border-0 nav"
              aria-controls="navbar-toggle"
            />
            <Navbar.Collapse id="navbar-toggle">
              <Nav className="ml-auto">
                <Link
                  className="nav-link"
                  to="main"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={2000}
                >
                  Home
                </Link>
                <Link
                  className="nav-link"
                  to="about-section"
                  spy={true}
                  smooth={true}
                  offset={0}
                  duration={1500}
                >
                  About
                </Link>
                <Link
                  className="nav-link"
                  to="contact-section"
                  spy={true}
                  smooth={true}
                  offset={-160}
                  duration={1500}
                >
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
          <Route
            path="/"
            exact
            render={() => (
              <div>
                <HomePage
                  title={this.state.home.title}
                  subTitle={this.state.home.subTitle}
                  text={this.state.home.text}
                />
                <AboutPage title={this.state.about.title} />
                <ContactPage
                  id={"section-three"}
                  title={this.state.contact.title}
                />
                <Link
                  className="toTop"
                  to="main"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={2000}
                >
                  <i class="fas fa-arrow-circle-up uppy"></i>
                </Link>
              </div>
            )}
          />
          <Route
            path="/about"
            render={() => <AboutPage title={this.state.about.title} />}
          />
          <Route
            path="/contact"
            render={() => <ContactPage title={this.state.contact.title} />}
          />
        </Container>
      </Router>
    );
  }
}

export default App;
