import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported

const cardStyle = {
  marginBottom: "20px",
  textAlign: "center",
};

function AchievementCard({ title, imageUrl, description }) {
  return (
    <div className="col-md-6">
      <div className="card" style={cardStyle}>
        <img src={imageUrl} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
        </div>
      </div>
    </div>
  );
}

export default AchievementCard;
