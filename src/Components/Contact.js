import React from "react";

const Contact = () => {
  return (
    <section className="contact">
      <h2>Let's Connect</h2>
      <p>We're here to help. Reach out to us anytime.</p>
      <form>
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <textarea placeholder="Message"></textarea>
        <button type="submit">Send Message</button>
      </form>
    </section>
  );
};

export default Contact;
