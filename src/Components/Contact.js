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

const formGroupStyle = {
  marginBottom: "20px",
};

const inputStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ced4da",
};

const textareaStyle = {
  width: "100%",
  padding: "10px",
  borderRadius: "5px",
  border: "1px solid #ced4da",
  minHeight: "100px",
};

const buttonStyle = {
  backgroundColor: "#007bff",
  color: "#ffffff",
  border: "none",
  padding: "10px 20px",
  borderRadius: "5px",
  cursor: "pointer",
};

const mapStyle = {
  width: "100%",
  height: "400px",
  border: "none",
  borderRadius: "8px",
};

function Contact() {
  return (
    <div style={containerStyle}>
      <div className="container mt-5" style={{ maxWidth: "900px" }}>
        <h1 style={headingStyle} className="text-center mb-4">
          Contact Us
        </h1>

        <section style={sectionStyle}>
          <h2 style={titleStyle}>Address</h2>
          <p style={textStyle}>
            Springdale Public School, 123 Education Lane, Cityville, State, ZIP
            Code
          </p>
        </section>

        <section style={sectionStyle}>
          <h2 style={titleStyle}>Phone</h2>
          <p style={textStyle}>+1 (123) 456-7890</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={titleStyle}>Email</h2>
          <p style={textStyle}>info@springdale.edu</p>
        </section>

        <section style={sectionStyle}>
          <h2 style={titleStyle}>Contact Form</h2>
          <form>
            <div style={formGroupStyle}>
              <label htmlFor="name" style={textStyle}>
                Name
              </label>
              <input type="text" id="name" style={inputStyle} />
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="email" style={textStyle}>
                Email
              </label>
              <input type="email" id="email" style={inputStyle} />
            </div>
            <div style={formGroupStyle}>
              <label htmlFor="message" style={textStyle}>
                Message
              </label>
              <textarea id="message" style={textareaStyle}></textarea>
            </div>
            <button type="submit" style={buttonStyle}>
              Send Message
            </button>
          </form>
        </section>

        <section style={sectionStyle}>
          <h2 style={titleStyle}>Our Location</h2>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.083406217936!2d-122.41941568468134!3d37.77492967975863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085808d5d1a9b35%3A0x8a8d74c8f7c1cf6!2sSpringdale%20Public%20School!5e0!3m2!1sen!2sus!4v1609455767946!5m2!1sen!2sus"
            style={mapStyle}
            allowFullScreen
            loading="lazy"
          ></iframe>
        </section>
      </div>
    </div>
  );
}

export default Contact;
