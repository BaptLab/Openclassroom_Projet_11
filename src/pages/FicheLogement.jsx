import { useParams } from "react-router-dom";
import data from "../datas/logements.json";
import Error404 from "./Error404";
import arrow from "../assets/vector.png";
import Stars from "../components/Stars";
import Tags from "../components/Tags";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";

function FicheLogement() {
  //Récupération de l'ID dans l'URL
  const params = useParams();
  let logementData = data.find((logement) => logement.id === params.id);
  console.log(logementData);
  //Carroussel

  //Render conditionnel
  if (logementData === undefined) {
    return <Error404 />;
  } else {
    const images = logementData.pictures.map((picture, index) => {
      return (
        //créer un état/state qui change lors du clic sur la flêche, qui affiche l'url différente sleon l'index
        <img
          className="carrousel-img"
          alt={"Photo du logement n°" + (index + 1)}
          src={picture}
          key={index}
          //ajouter un id
        ></img>
      );
    });

    return (
      <div className="page-container">
        <div className="carrousel-container">
          {images}
          <img
            src={arrow}
            alt="next slide"
            className="slide-arrow next-slide-arrow"
          ></img>
          <img
            src={arrow}
            alt="previous slide"
            className="slide-arrow previous-slide-arrow"
          ></img>
        </div>
        <div className="infos-container">
          <div className="basic-infos-container">
            <div className="basic-infos-left-container">
              <h2 className="basic-infos-title">{logementData.title}</h2>
              <h3 className="basic-infos-location">{logementData.location}</h3>
            </div>
            <div className="infos-right-container">
              <div className="owner-infos-container">
                <h3 className="owner-name">{logementData.host.name}</h3>
                <img
                  alt={logementData.host.name}
                  src={logementData.host.picture}
                  className="owner-picture"
                ></img>
              </div>
            </div>
          </div>
          <div className="tags-and-rating-container">
            <div className="tags-container">
              <Tags id={logementData}></Tags>
            </div>
            <div className="stars-container">
              <Stars id={logementData}></Stars>
            </div>
          </div>
          <div className="collapse-section">
            <Collapse type="Description" id={logementData} />
            <Collapse type="Equipements" id={logementData} />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default FicheLogement;
