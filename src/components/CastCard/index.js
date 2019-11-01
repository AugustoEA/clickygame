import React from "react";
import "./style.css";

function CastCard(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.src} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
        </ul>
      </div>
        <span onClick={() => props.removeCast(props.id)} className="remove">
          𝘅
      </span>
      </div>
      );
    }
    
export default CastCard;