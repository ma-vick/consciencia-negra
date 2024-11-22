import React from "react";
import "./Page.css";

export default function Page({ person, onClose }) {
  return (
    <div className="page-overlay">
      <div className="page-main">
        <button className="close-btn" onClick={onClose}>
          X
        </button>
        <h2>{person.name}</h2>
        <p>{person.description}</p>
      </div>
    </div>
  );
}
