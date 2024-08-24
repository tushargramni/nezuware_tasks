import React from "react";
import "./Testimonials.css";

const Testimonials = () => (
  <section className="testimonials">
    <h2>What Our Clients Say</h2>
    <div className="testimonial-list">
      <div>
        <p>
          "Nezuware transformed our business with their cutting-edge solutions."
        </p>
        <span>- Client Name, Company</span>
      </div>
      {/* Add more testimonials here */}
    </div>
  </section>
);

export default Testimonials;
