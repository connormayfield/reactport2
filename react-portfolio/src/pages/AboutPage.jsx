import React from "react";
import Hero from "../components/Hero";
import Content from "../components/Content";

function AboutPage(props) {
  return (
    <div className="about-section" id="about-section">
      <Hero className="justify-content-center" title={props.title} />

      <Content>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
          perferendis non voluptatem voluptatum laudantium! Animi ad sit
          dignissimos quibusdam id, deleniti, ex fugit atque sed at quasi a
          voluptates velit! Lorem ipsum dolor sit amet
        </p>
        <p>
          consectetur adipisicing elit. Incidunt, ad. Dolores nam, ullam facilis
          nesciunt iste quae expedita quos rem sint debitis accusantium
          consequuntur mollitia obcaecati nihil placeat illum corrupti?
        </p>
      </Content>
    </div>
  );
}

export default AboutPage;
