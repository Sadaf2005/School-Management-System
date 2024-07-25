// src/Components/GoogleMap.js
import React from "react";
import "./GoogleMap.css";

const GoogleMap = () => {
  return (
    <div className="google-map-container my-5">
      <div>
        <h1 className="">
          Google~Navigation
          <span style={{ fontSize: "30px", color: "grey" }}>
            Discovering the perfect destination..
          </span>
        </h1>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093746!2d144.9559283153164!3d-37.81627927975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf5770fd247da4488!2sVictoria%20State%20Library%2C%20Melbourne%20VIC%203000%2C%20Australia!5e0!3m2!1sen!2sus!4v1605111123456!5m2!1sen!2sus"
        width="80%"
        height="450"
        style={{ border: 0, alignItems: "center" }}
        allowFullScreen=""
        loading="lazy"
        aria-hidden="false"
        tabIndex="0"
        title="Google Maps"
      ></iframe>
    </div>
  );
};

export default GoogleMap;
