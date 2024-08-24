import React from "react";
import "./Blog.css";

const Blog = () => (
  <section className="blog">
    <h2>Insights & Resources</h2>
    <p>
      Stay ahead of the curve with our insights into the latest trends in
      software development, design, and digital marketing.
    </p>
    <div className="blog-list">{/* Add blog posts here */}</div>
  </section>
);

export default Blog;
