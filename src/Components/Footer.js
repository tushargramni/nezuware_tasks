import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-5 pb-4">
      <div className="container text-center text-md-left">
        <div className="row text-center text-md-left">
          <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">About Us</h5>
            <p>
              We are committed to delivering the best experience for our users.
            </p>
          </div>

          <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">
              Quick Links
            </h5>
            <p>
              <a href="#home" className="text-white">
                Home
              </a>
            </p>
            <p>
              <a href="#features" className="text-white">
                Features
              </a>
            </p>
            <p>
              <a href="#about" className="text-white">
                About
              </a>
            </p>
            <p>
              <a href="#contact" className="text-white">
                Contact
              </a>
            </p>
          </div>

          <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Contact Us</h5>
            <p>Email: contact@yourcompany.com</p>
            <p>Phone: +123 456 7890</p>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Follow Us</h5>
            <a href="https://facebook.com" className="text-white me-4">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://twitter.com" className="text-white me-4">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://instagram.com" className="text-white me-4">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://linkedin.com" className="text-white me-4">
              <i className="fab fa-linkedin"></i>
            </a>
          </div>

          <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
            <h5 className="text-uppercase mb-4 font-weight-bold">Subscribe</h5>
            <form>
              <div className="form-group">
                <input
                  type="email"
                  className="form-control mb-2"
                  placeholder="Your Email"
                />
                <button type="submit" className="btn btn-outline-light">
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>

        <hr className="mb-4" />

        <div className="row align-items-center">
          <div className="col-md-7 col-lg-8">
            <p className="text-white">
              © 2024 Your Company. All rights reserved.
            </p>
          </div>

          <div className="col-md-5 col-lg-4">
            <div className="text-center text-md-right">
              <ul className="list-unstyled list-inline">
                <li className="list-inline-item">
                  <a
                    href="https://facebook.com"
                    className="btn-floating btn-sm text-white"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://twitter.com"
                    className="btn-floating btn-sm text-white"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://instagram.com"
                    className="btn-floating btn-sm text-white"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
                <li className="list-inline-item">
                  <a
                    href="https://linkedin.com"
                    className="btn-floating btn-sm text-white"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
