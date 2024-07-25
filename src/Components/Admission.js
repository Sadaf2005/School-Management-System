import React from "react";

const containerStyle = {
  backgroundColor: "#f4f4f9",
  padding: "40px 0",
};

const headingStyle = {
  fontSize: "2.5rem",
  color: "#343a40",
  fontWeight: "bold",
};

const sectionStyle = {
  marginBottom: "40px",
  padding: "20px",
  borderRadius: "8px",
  backgroundColor: "#ffffff",
  boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
};

const titleStyle = {
  fontSize: "2rem",
  color: "#007bff",
  marginBottom: "15px",
  borderBottom: "2px solid #007bff",
  paddingBottom: "10px",
};

const textStyle = {
  fontSize: "1.125rem",
  color: "#495057",
  lineHeight: "1.6",
};

const ulStyle = {
  listStyleType: "none",
  paddingLeft: "0",
};

const liStyle = {
  fontSize: "1.125rem",
  color: "#495057",
  marginBottom: "10px",
  position: "relative",
  paddingLeft: "25px",
};

const iconStyle = {
  position: "absolute",
  left: "0",
  top: "0",
  fontSize: "1.25rem",
  color: "#28a745",
};

function Admission() {
  return (
    <div style={containerStyle}>
      <div className="container mt-5" style={{ maxWidth: "900px" }}>
        <h1 style={headingStyle} className="text-center mb-4">
          Admission Process
        </h1>

        <section style={sectionStyle}>
          <h2 style={titleStyle}>Process</h2>
          <p style={textStyle}>
            Admission forms are available for download. Submit the completed
            form along with required documents at the school office.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={titleStyle}>Criteria</h2>
          <p style={textStyle}>
            Admission is based on merit and availability of seats. Entrance
            tests may be conducted for certain grades.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={titleStyle}>Important Dates</h2>
          <ul style={ulStyle}>
            <li style={liStyle}>
              <span style={iconStyle}>✔️</span> Admission Form Availability:
              March 1st
            </li>
            <li style={liStyle}>
              <span style={iconStyle}>✔️</span> Last Date for Submission: March
              31st
            </li>
            <li style={liStyle}>
              <span style={iconStyle}>✔️</span> Entrance Test: April 15th
            </li>
            <li style={liStyle}>
              <span style={iconStyle}>✔️</span> Announcement of Results: April
              30th
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
}

export default Admission;
