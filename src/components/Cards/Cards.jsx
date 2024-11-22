import React from "react";
import "./Cards.css";

export default function Cards({ person, onClick }) {
  return (
    <main className="cards-main" onClick={onClick}>
      <div className="cards-inner">
        <div className="cards-front">
          <div className="cards-img-box">
            <img className="cards-img" src={person.img} alt={person.name} />
          </div>
          <div className="cards-name-box">
            <h2 className="cards-name">{person.name}</h2>
          </div>
        </div>
        <div className="cards-back">
          <div className="cards-desc">
            <h2 className="cards-subtitle">{person.subtitle}</h2>
            {person.icons?.length > 0 && (
              <div className="card-icons">
                {person.icons.map((icon, index) => (
                  <img
                    key={index}
                    src={icon}
                    alt={`${person.name} icon ${index + 1}`}
                    className="card-icon"
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
