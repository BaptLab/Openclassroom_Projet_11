import React from "react";
import activeStar from "../assets/star-active.png";
import inactiveStar from "../assets/star-inactive.png";

function Stars(props) {
  const objectRef = props.id;
  const howManyStars = objectRef.rating;
  const howManyNoStars = 5 - howManyStars;

  let activeStars = [];
  let inactiveStars = [];

  for (let i = 0; i < howManyStars; i++) {
    activeStars.push(<img key={i} alt="star" src={activeStar} />);
  }

  for (let j = 0; j < howManyNoStars; j++) {
    inactiveStars.push(<img key={j} alt="star" src={inactiveStar} />);
  }

  return (
    <div>
      {activeStars}
      {inactiveStars}
    </div>
  );
}

export default Stars;
