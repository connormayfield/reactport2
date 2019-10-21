import React from "react";

import Card from "../components/Card";
import miseEnPlace from "../assets/images/miseEnPlace.png";
import noLate from "../assets/images/noLate.png";
import tweetTrace from "../assets/images/tweetTrace.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

class Carousel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [
        {
          id: 0,
          title: "NoLate",
          subTitle: "Morning Commute Dashboard",
          imgSrc: noLate,
          link: "https://cf512.github.io/NoLate/",
          gitHub: "https://github.com/connormayfield/NoLate",
          selected: false
        },
        {
          id: 1,
          title: "Mise en Place",
          subTitle: "A weekly meal planner",
          imgSrc: miseEnPlace,
          link: "https://murmuring-brushlands-67751.herokuapp.com/",
          gitHub: "https://github.com/connormayfield/project-2",

          selected: false
        },
        {
          id: 2,
          title: "Tweet Trace",
          subTitle: "Twitter Analytics",
          imgSrc: tweetTrace,
          link: "https://pure-escarpment-67547.herokuapp.com/",
          gitHub: "https://github.com/connormayfield/twitter-analysis",

          selected: false
        }
      ]
    };
  }

  handleCardClick = (id, card) => {
    let items = [...this.state.items];

    items[id].selected = items[id].selected ? false : true;

    items.forEach(item => {
      if (item.id !== id) {
        item.selected = false;
      }
    });

    this.setState({
      items
    });
  };

  makeItems = items => {
    return items.map(item => {
      return (
        <Card
          item={item}
          click={e => this.handleCardClick(item.id, e)}
          key={item.id}
        />
      );
    });
  };

  render() {
    return (
      <Container fluid={true}>
        <Row className="justify-content-around">
          {this.makeItems(this.state.items)}
        </Row>
      </Container>
    );
  }
}

export default Carousel;
