import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported

function Gallery() {
  return (
    <div className="container my-5">
      <h1>
        Image~Wall
        <span style={{ fontSize: "30px", color: "grey" }}>
          Ensuring that the right is always given
        </span>
      </h1>
      <div id="galleryCarousel" className="carousel slide">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src="https://images.pexels.com/photos/2982449/pexels-photo-2982449.jpeg?cs=srgb&dl=pexels-droosmo-2982449.jpg&fm=jpg"
              className="d-block w-100"
              alt="Gallery 1"
              style={{ height: "400px", width: "400px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Insight Image-1</h5>
              <p>Vinyard Corridor Connecting Primary and Secondary Wing</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/1164572/pexels-photo-1164572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block w-100"
              alt="Gallery 2"
              style={{ height: "400px", width: "400px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Insight Image 2</h5>
              <p>UN Rao Sports Complex</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/256559/pexels-photo-256559.jpeg?auto=compress&cs=tinysrgb&w=600"
              className="d-block w-100"
              alt="Gallery 3"
              style={{ height: "400px", width: "400px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Insight Image 3</h5>
              <p>Unleash your inner bookworm with Huge Library</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/159671/pupils-school-children-red-scarf-159671.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block w-100"
              alt="Gallery 3"
              style={{ height: "400px", width: "400px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Insight Image 4</h5>
              <p>Assembly to pay tribute to God.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/10643463/pexels-photo-10643463.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block w-100"
              alt="Gallery 3"
              style={{ height: "400px", width: "400px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Insight Image 5</h5>
              <p>Innovative Classrooms and Labs</p>
            </div>
          </div>
          <div className="carousel-item">
            <img
              src="https://images.pexels.com/photos/16850890/pexels-photo-16850890/free-photo-of-children-playing-on-playground-near-school.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              className="d-block w-100"
              alt="Gallery 3"
              style={{ height: "400px", width: "400px", objectFit: "cover" }}
            />
            <div className="carousel-caption d-none d-md-block">
              <h5>Insight Image 6</h5>
              <p>Indoor Play-arena for Kindergarten</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#galleryCarousel"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#galleryCarousel"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Gallery;
