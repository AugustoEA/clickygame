import React from "react";

function MemberCard(props) {
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
        </ul>
      </div>
        <span onClick={() => props.removeMember(props.id)} className="remove">
          𝘅
      </span>
      </div>
      );
    }
    
export default MemberCard;