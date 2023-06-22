import data from "../datas/logements.json";

//se contenter d'afficher la première photo du tableau de photo
function ListeLogement() {
  return (
    <div className="logements-container">
      {data.map((logement) => (
        <a
          href={`/logements/${logement.id}`}
          id={logement.id}
          key={logement.id}
          className="logement-box"
        >
          <img className="logement-img" alt={logement.title} src={logement.pictures[0]} />
          <span className="logement-name">{logement.title}</span>
        </a>
      ))}
    </div>
  );
}

/*   function photoIteration(pictures) {
    return pictures.map((picture, index) => (
      <img alt={picture.title} key={index} className="logement-img" src={picture}></img>
    ));
  } */

export default ListeLogement;
