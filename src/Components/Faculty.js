import React from "react";
import { FaChalkboardTeacher, FaUserTie, FaUserGraduate } from "react-icons/fa";

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

const profileStyle = {
  display: "flex",
  alignItems: "center",
  marginBottom: "20px",
};

const iconStyle = {
  fontSize: "2rem",
  color: "#007bff",
  marginRight: "15px",
};

const profileDetailsStyle = {
  fontSize: "1.125rem",
  color: "#495057",
};

const nameStyle = {
  fontWeight: "bold",
  color: "#343a40",
};

const positionStyle = {
  fontStyle: "italic",
  color: "#007bff",
};

function Faculty() {
  const facultyMembers = [
    {
      name: "John Doe",
      position: "Principal",
      qualifications: "M.Ed",
      experience: "20 years",
      icon: <FaUserTie />,
    },
    {
      name: "Jane Smith",
      position: "Vice Principal",
      qualifications: "M.Sc. in Physics",
      experience: "15 years",
      icon: <FaChalkboardTeacher />,
    },
    {
      name: "Emily Johnson",
      position: "English Teacher",
      qualifications: "M.A. in English",
      experience: "10 years",
      icon: <FaChalkboardTeacher />,
    },
    {
      name: "Michael Brown",
      position: "Mathematics Teacher",
      qualifications: "M.Sc. in Mathematics",
      experience: "8 years",
      icon: <FaChalkboardTeacher />,
    },
    {
      name: "Sophia Davis",
      position: "Science Teacher",
      qualifications: "M.Sc. in Chemistry",
      experience: "12 years",
      icon: <FaChalkboardTeacher />,
    },
    {
      name: "David Wilson",
      position: "Computer Science Teacher",
      qualifications: "B.Tech in Computer Science",
      experience: "5 years",
      icon: <FaUserGraduate />,
    },
  ];

  return (
    <div style={containerStyle}>
      <div className="container mt-5" style={{ maxWidth: "900px" }}>
        <h1 style={headingStyle} className="text-center mb-4">
          Faculty Profiles
        </h1>

        <section style={sectionStyle}>
          <h2 style={titleStyle}>Meet Our Faculty</h2>
          {facultyMembers.map((member, index) => (
            <div key={index} style={profileStyle}>
              <div style={iconStyle}>{member.icon}</div>
              <div style={profileDetailsStyle}>
                <div style={nameStyle}>{member.name}</div>
                <div style={positionStyle}>{member.position}</div>
                <div>{member.qualifications}</div>
                <div>{member.experience}</div>
              </div>
            </div>
          ))}
        </section>
      </div>
    </div>
  );
}

export default Faculty;
