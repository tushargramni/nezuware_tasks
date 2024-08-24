import React from "react";
import "./Portfolio.css";

const Portfolio = () => (
  <section className="portfolio">
    <h2>Our Work</h2>
    <p>
      Explore our portfolio to see the innovative solutions we've developed for
      our clients.
    </p>
    <div className="portfolio-list">{/* Add portfolio items here */}</div>
  </section>
);

export default Portfolio;
