import cgu from "../datas/cgu.json";
import collapseArrow from "../assets/collapse-arrow.png";
import { useState } from "react";

function CollapseAbout(props) {
  const sectionName = props.type;
  const [open, setOpen] = useState(false);

  return (
    <div className="collapse-container about-collapse-container">
      <div className="collapse-header">
        <h6 className="collapse-title">{sectionName}</h6>
        <img
          alt="open collapse"
          className={`collapse-open-btn ${open ? "aiming-up" : "aiming-down"}`}
          src={collapseArrow}
          onClick={() => {
            setOpen(!open);
          }}
        ></img>
      </div>
      <div
        className={`collapse-content-container about-collapse-content-container ${
          open ? "active" : "inactive"
        }`}
      >
        <p className="collapse-content">{cgu[sectionName]}</p>
      </div>
    </div>
  );
}

export default CollapseAbout;
