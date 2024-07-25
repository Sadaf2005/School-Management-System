import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer bg-dark text-white pt-4">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h5>Contact Us</h5>
            <p>
              Address: Springdale Public School, 123 Education Lane, Cityville,
              State, ZIP Code
            </p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Email: info@springdale.edu</p>
          </div>
          <div className="col-md-4">
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li>
                <a href="/" className="text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="/admissions" className="text-white">
                  Admissions
                </a>
              </li>
              <li>
                <a href="/contact" className="text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <h5>Follow Us</h5>
            <ul className="list-unstyled">
              <li>
                <a href="https://www.facebook.com" className="text-white">
                  Facebook
                </a>
              </li>
              <li>
                <a href="https://www.twitter.com" className="text-white">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com" className="text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com" className="text-white">
                  LinkedIn
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row mt-4">
          <div className="col-md-12 text-center">
            <p className="mb-0">
              &copy; {new Date().getFullYear()} Springdale Public School. All
              rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
