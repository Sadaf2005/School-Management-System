import React from "react";
import "./About.css"; // Ensure you have this CSS file for styling

function About() {
  return (
    <div className="about-container">
      <div className="container mt-5">
        <h1 className="text-center mb-4">About Us</h1>

        <section className="about-section">
          <h2 className="section-title">History</h2>
          <p className="section-text">
            Founded in 1985, Springdale Public School has been dedicated to providing quality education and holistic development to students.
          </p>
        </section>

        <section className="about-section">
          <h2 className="section-title">Vision</h2>
          <p className="section-text">
            To create a learning environment that fosters academic excellence, critical thinking, and ethical values.
          </p>
        </section>

        <section className="about-section">
          <h2 className="section-title">Mission</h2>
          <p className="section-text">
            To empower students with the knowledge, skills, and values needed to thrive in a dynamic world.
          </p>
        </section>

        <section className="about-section">
          <h2 className="section-title">Principal's Message</h2>
          <p className="section-text">
            At Springdale, we believe in nurturing the potential of every student and guiding them towards a successful future.
          </p>
        </section>

        <section className="about-section">
          <h2 className="section-title">Infrastructure and Facilities</h2>
          <ul className="facilities-list">
            <li>State-of-the-art science and computer labs</li>
            <li>Spacious and well-equipped classrooms</li>
            <li>Library with a vast collection of books and digital resources</li>
            <li>Sports facilities including a playground, gymnasium, and swimming pool</li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default About;
