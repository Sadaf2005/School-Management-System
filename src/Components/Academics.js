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

const curriculumCategoryStyle = {
  marginBottom: "30px",
};

const subCategoryTitleStyle = {
  fontSize: "1.25rem",
  color: "#007bff",
  marginBottom: "10px",
};

const ulStyle = {
  listStyleType: "disc",
  paddingLeft: "20px",
};

const liStyle = {
  fontSize: "1.125rem",
  color: "#495057",
  marginBottom: "8px",
};

function Academics() {
  return (
    <div style={containerStyle}>
      <div className="container mt-5" style={{ maxWidth: "900px" }}>
        <h1 style={headingStyle} className="text-center mb-4">
          Academics
        </h1>

        <section style={sectionStyle}>
          <h2 style={titleStyle}>Curriculum</h2>

          <div className="curriculum">
            <div style={curriculumCategoryStyle}>
              <h3>Primary (Grades 1-5)</h3>
              <ul style={ulStyle}>
                <li style={liStyle}>English</li>
                <li style={liStyle}>Mathematics</li>
                <li style={liStyle}>Science</li>
                <li style={liStyle}>Social Studies</li>
                <li style={liStyle}>Art</li>
                <li style={liStyle}>Physical Education</li>
              </ul>
            </div>

            <div style={curriculumCategoryStyle}>
              <h3>Secondary (Grades 6-10)</h3>
              <ul style={ulStyle}>
                <li style={liStyle}>English</li>
                <li style={liStyle}>Mathematics</li>
                <li style={liStyle}>Science (Physics, Chemistry, Biology)</li>
                <li style={liStyle}>Social Studies</li>
                <li style={liStyle}>Computer Science</li>
                <li style={liStyle}>Physical Education</li>
                <li style={liStyle}>Art</li>
              </ul>
            </div>

            <div style={curriculumCategoryStyle}>
              <h3>Senior Secondary (Grades 11-12)</h3>
              <div>
                <h4 style={subCategoryTitleStyle}>Science Stream</h4>
                <ul style={ulStyle}>
                  <li style={liStyle}>Physics</li>
                  <li style={liStyle}>Chemistry</li>
                  <li style={liStyle}>Biology</li>
                  <li style={liStyle}>Mathematics</li>
                  <li style={liStyle}>Computer Science</li>
                  <li style={liStyle}>English</li>
                </ul>
              </div>
              <div>
                <h4 style={subCategoryTitleStyle}>Commerce Stream</h4>
                <ul style={ulStyle}>
                  <li style={liStyle}>Accountancy</li>
                  <li style={liStyle}>Business Studies</li>
                  <li style={liStyle}>Economics</li>
                  <li style={liStyle}>Mathematics</li>
                  <li style={liStyle}>English</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section style={sectionStyle}>
          <h2 style={titleStyle}>Teaching Methodologies</h2>
          <p style={textStyle}>
            We use a blend of traditional and modern teaching techniques to
            cater to different learning styles.
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={titleStyle}>Educational Resources</h2>
          <p style={textStyle}>
            Digital classrooms, interactive learning modules, and access to
            online educational platforms.
          </p>
        </section>
      </div>
    </div>
  );
}

export default Academics;
