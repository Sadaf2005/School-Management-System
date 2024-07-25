import React, { useState } from "react";
import "./Home.css";
// import GoogleMap from "./GoogleMap"; // Correct import path
// import "./GoogleMap.css";
import Gallery from "./Gallery"; // Import the new Gallery component
import "bootstrap/dist/css/bootstrap.min.css";
import AlertComponent from "./AlertComponent";
import AchievementCard from "./AchievementCard";
// import Footer from "./Footer";

const principalSectionStyle = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  margin: "50px 0",
  padding: "20px",
  backgroundColor: "#f8f9fa",
  borderRadius: "10px",
};

const principalImageStyle = {
  maxWidth: "400px",
  maxHeight: "400px",
  borderRadius: "50%",
  marginRight: "20px",
};

// const noteStyle = {
//   maxWidth: "600px",
// };
const noteStyle = {
  maxWidth: "600px",
  textAlign: "center",
  position: "relative",
  padding: "20px",
  backgroundImage:
    "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQE4ouTYSZRXUIWCde6l56NA9D_tw53DfvMjQ&s')",
  backgroundSize: "contain",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
  opacity: 0.7,
};

function Home() {
  const [alerts, setAlerts] = useState([
    { type: "success", message: "Welcome to Springdale Public School!" },
    {
      type: "info",
      message: "New admissions are now open.Click On Apply Button Now!!",
    },
  ]);
  return (
    <div>
      <header className="home-header">
        <div className="overlay">
          <div className="container text-center">
            <h1 className="display-4 fw-bold text-white">
              Springdale Public School
            </h1>
            <p className="lead text-white">
              Welcome to Springdale Public School's official website. We are
              dedicated to providing quality education and fostering a nurturing
              environment for our students.
            </p>
          </div>
          <a
            href="/admission"
            className="btn btn-primary position-absolute apply-btn"
            style={{
              marginTop: "-30%",
              marginLeft: "80%",
            }}
          >
            APPLY NOW!!
          </a>
          <a
            href="/"
            className="btn btn-primary position-absolute apply-btn"
            style={{
              marginTop: "-23%",
              marginLeft: "80%",
            }}
          >
            PARENT PORTAL
          </a>
          <a
            href="/"
            className="btn btn-primary position-absolute apply-btn"
            style={{
              marginTop: "-16%",
              marginLeft: "80%",
            }}
          >
            E-RESULTS
          </a>
          <a
            href="/"
            className="btn btn-primary position-absolute apply-btn"
            style={{
              marginTop: "-9%",
              marginLeft: "80%",
            }}
          >
            tech-QNA
          </a>
        </div>
      </header>
      <AlertComponent alerts={alerts} />

      <div style={principalSectionStyle}>
        <img
          src="https://t4.ftcdn.net/jpg/00/28/46/75/360_F_28467576_wuPsMwtN7hDd90XEmApk0yXuE76wLkI8.jpg"
          alt="Principal"
          style={principalImageStyle}
        />
        <div style={noteStyle}>
          <h1>~Note from the Principal</h1>
          <p style={{ fontSize: "20px" }}>
            Dear Students and Parents,
            <br />
            It is with immense pride and pleasure that I welcome you all to
            Springdale Public School. This institution is more than just a place
            of learning; it’s a vibrant community where young minds are
            nurtured, ignited, and empowered.
            <br />
            We are thrilled to welcome you to the Springdale Public School
            family. Our school is dedicated to fostering a nurturing environment
            where every student can reach their full potential. We believe in
            the power of education to transform lives and prepare students for
            success.
            <br />
            Together, we will create a vibrant learning community that values
            curiosity, creativity, and collaboration. Your child's growth and
            development are our top priorities. We look forward to a year filled
            with learning, growth, and achievement.
            <br />
            Welcome once again!
            <br />
            Sincerely,
            <br />
            Ms. Harris Loius
            <br />
            Springdale Public School
          </p>
        </div>
      </div>
      <div>
        <Gallery />
      </div>
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

export default Home;
