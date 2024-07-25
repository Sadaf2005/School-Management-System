import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported

const alertContainerStyle = {
  position: "fixed",
  top: "20px",
  right: "20px",
  zIndex: 1050,
  width: "300px",
};

const alertStyle = {
  marginBottom: "10px",
};

function AlertComponent({ alerts }) {
  return (
    <div style={alertContainerStyle}>
      {alerts.map((alert, index) => (
        <div
          key={index}
          className={`alert alert-${alert.type} alert-dismissible fade show`}
          role="alert"
          style={alertStyle}
        >
          {alert.message}
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        </div>
      ))}
    </div>
  );
}

export default AlertComponent;
