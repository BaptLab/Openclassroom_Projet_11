import cgu from "../datas/cgu.json";

function CollapseContent(props) {
  const contentCategory = props.type;

  if (contentCategory === "Description") {
    return <p className="collapse-content">{props.objectRef.description}</p>;
  } else if (props.type === "Equipements") {
    return (
      <ul className="equipment-list-container">
        {props.objectRef.equipments.map((equipment, index) => (
          <li className="collapse-content" key={index}>
            {equipment}
          </li>
        ))}
      </ul>
    );
  } else {
    return <p className="collapse-content">{cgu[contentCategory]}</p>;
  }
}

export default CollapseContent;
