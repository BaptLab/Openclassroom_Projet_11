import { useParams } from "react-router-dom";
import data from "../datas/logements.json";
import Error404 from "./Error404";
import arrow from "../assets/vector.png";
import Stars from "../components/Stars";
import Tags from "../components/Tags";
import Collapse from "../components/Collapse";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { useState } from "react";

let currentImage = 0;

function FicheLogement() {
  //Récupération de l'ID dans l'URL
  const params = useParams();
  let logementData = data.find((logement) => logement.id === params.id);
  const images = logementData.pictures;
  //state du carrousel
  let [img, setImage] = useState(images[currentImage]);

  //A revérifier
  function HandleClickArrows(e) {
    const arrowClicked = e.target.id;
    if (arrowClicked === "right-arrow") {
      console.log(currentImage);
      if (currentImage === images.length - 1) {
        currentImage = 0;
        setImage(images[currentImage]);
      } else {
        currentImage++;
        setImage(images[currentImage]);
      }

      setImage(images[currentImage]);
    } else if (arrowClicked === "left-arrow") {
      currentImage--;
      console.log(currentImage);
      if (currentImage === -1) {
        currentImage = images.length - 1;
        setImage(images[currentImage]);
      } else {
        setImage(images[currentImage]);
      }
    }
  }

  //Render conditionnel
  if (logementData === undefined) {
    return <Error404 />;
  } else {
    //Carroussel
    /* const images = logementData.pictures.map((picture, index) => {
      return (
        //créer un état/state qui change lors du clic sur la flêche, qui affiche l'url différente sleon l'index
        
      );
    }); */

    return (
      <div className="global-container">
        <div className="content-container">
          <Header />
          {/* Carrousel */}
          <div className="carrousel-container">
            <img
              className="carrousel-img"
              alt={"s du logemddent n°"}
              src={img}

              //ajouter un id
            ></img>
            <img
              onClick={HandleClickArrows}
              src={arrow}
              alt="next slide"
              className="slide-arrow next-slide-arrow"
              id="right-arrow"
            ></img>
            <img
              onClick={HandleClickArrows}
              src={arrow}
              alt="previous slide"
              className="slide-arrow previous-slide-arrow"
              id="left-arrow"
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
        </div>
        <Footer />
      </div>
    );
  }
}

export default FicheLogement;
