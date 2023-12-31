import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
import data from "../datas/logements.json";
import Footer from "../components/Footer.jsx";
import bannerPicture from "../assets/banner-forest.png";

function Home() {
  return (
    <div className="global-container">
      <div className="content-container">
        <Header pageType="Home" />
        <Banner picture={bannerPicture} />
        <div className="logements-container">
          {data.map((logement) => (
            <a
              href={`/logements/${logement.id}`}
              id={logement.id}
              key={logement.id}
              className="logement-box"
            >
              <img
                className="logement-img"
                alt={logement.title}
                src={logement.pictures[0]}
              />
              <span className="logement-name">{logement.title}</span>
            </a>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
