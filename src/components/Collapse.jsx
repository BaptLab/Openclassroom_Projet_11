import collapseArrow from "../assets/collapse-arrow.png";
import { useState } from "react";
import CollapseContent from "./CollapseContent";

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
        <CollapseContent type={props.type} objectRef={objectRef}></CollapseContent>
      </div>
    </div>
  );
}

export default Collapse;

/* function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
} */
