import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported
import Carousel from "react-bootstrap/Carousel";
import AchievementCard from "./AchievementCard";

const sectionStyle = {
  margin: "50px 0",
  padding: "20px",
  backgroundColor: "#f8f9fa",
  borderRadius: "10px",
};

const headingStyle = {
  textAlign: "center",
  marginBottom: "30px",
};

const paragraphStyle = {
  marginBottom: "20px",
  fontSize: "18px",
};

const carouselContainerStyle = {
  display: "flex",
  justifyContent: "center",
};

function AchievementSection() {
  return (
    <div style={sectionStyle}>
      <h1 style={headingStyle}>
        Achievements{" "}
        <span style={{ fontSize: "25px", color: "grey" }}>
          Validating Our Efforts..
        </span>
      </h1>
      <p style={paragraphStyle}>
        At Springdale Public School, we believe in the holistic development of
        our students. Our students are encouraged to participate in a variety of
        extracurricular activities, clubs, and societies. We are proud of their
        numerous achievements and accolades in various fields.
      </p>
      <p style={paragraphStyle}>
        Our student council provides leadership opportunities and helps in
        fostering a sense of responsibility and community among students.
      </p>

      <Carousel
        interval={7000}
        style={{ width: "80%", alignItems: "center", justifyContent: "center" }}
      >
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/1369500/pexels-photo-1369500.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="First slide"
            style={{ height: "500px", width: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h5>Sports Fair</h5>
            <p>Our students won first place in the district Sports fair.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/2116469/pexels-photo-2116469.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Second slide"
            style={{ height: "500px", width: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h5>Sports Basketball Championship</h5>
            <p>
              Our school team clinched the championship in the inter-school
              basketball tournament.
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/6620546/pexels-photo-6620546.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="Third slide"
            style={{ height: "500px", width: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h5>Archery Competition</h5>
            <p>
              Our students displayed outstanding creativity and won top prizes
              in Archery!!Congrats to our sports Department..
            </p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="Fourth slide"
            style={{ height: "500px", width: "400px", objectFit: "cover" }}
          />
          <Carousel.Caption>
            <h5>Marathon on World Fitness Day.</h5>
            <p>Our runners excelled in the regional Marathon competition.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <div className="container my-5">
        <h1 className="text-center mb-4">
          Achievements
          <span style={{ color: "grey", fontSize: "30px" }}>
            Our Students, Our Pride.
          </span>
        </h1>
        <div className="row">
          <AchievementCard
            title="National Science Olympiad Winner"
            imageUrl="https://qph.cf2.quoracdn.net/main-qimg-f6b861a9af4af3531a8c0ba558e27fcc"
            description="Our student John Doe won the National Science Olympiad, making us proud with his outstanding performance."
          />
          <AchievementCard
            title="State Basketball Championship"
            imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAMx5oSTRAkKvWsdZavBtqJKnzc06ryFKf8w&s"
            description="Our school basketball team clinched the state championship with remarkable teamwork and determination."
          />
        </div>
      </div>
    </div>
  );
}

export default AchievementSection;
