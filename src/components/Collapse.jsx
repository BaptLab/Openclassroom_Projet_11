import collapseArrow from "../assets/collapse-arrow.png";
import { useState } from "react";

function Collapse(props) {
  const objectRef = props.id;
  const [open, setOpen] = useState(true);
  return (
    <div className="collapse-container">
      <div className="collapse-header">
        <h6 className="collapse-title">{props.type}</h6>
        <img
          alt="open collapse"
          className={`collapse-open-btn ${open ? "aiming-up" : "aiming-down"}`}
          src={collapseArrow}
          onClick={() => {
            setOpen(!open);
          }}
        ></img>
      </div>
      <div className={`collapse-content-container ${open ? "active" : "inactive"}`}>
        {props.type === "Description" ? (
          <p className="collapse-content">{objectRef.description}</p>
        ) : (
          <ul className="equipment-list-container">
            {objectRef.equipments.map((equipment, index) => (
              <li className="collapse-content" key={index}>
                {equipment}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

export default Collapse;
