import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className="my-3">
      <nav
        className="navbar navbar-expand-lg navbar-light bg-light
       sticky-top"
        style={{ background: "grey" }}
      >
        <Link className="navbar-brand" to="/">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdp_aD5TegYyC3trvM6Fulev8lQ0zu2LUHOg&s"
            alt="SpringPS"
            style={{ height: "90px", width: "150px" }}
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto" style={{ fontSize: "18px" }}>
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/About">
                About Us
              </Link>
            </li>
            <li className="nav-item dropdown">
              <Link
                className="nav-link dropdown-toggle"
                to="/academics"
                id="navbarDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Academics
              </Link>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                <Link className="dropdown-item" to="/curriculum">
                  Curriculum
                </Link>
                <Link className="dropdown-item" to="/teaching-methodologies">
                  Teaching Methodologies
                </Link>
                <Link className="dropdown-item" to="/educational-resources">
                  Educational Resources
                </Link>
                <div className="dropdown-divider"></div>
                <Link className="dropdown-item" to="/something-else">
                  Something else here
                </Link>
              </div>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/admission">
                Admissions
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/faculty">
                Faculty
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/gallery">
                Gallery
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/achievement">
                Achievement Desk
              </Link>
            </li>
          </ul>
          <form class="d-flex ms-auto" role="search">
            <input
              class="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button class="btn btn-outline-primary" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
}
