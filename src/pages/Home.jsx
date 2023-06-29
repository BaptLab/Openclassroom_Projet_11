import Header from "../components/Header.jsx";
import Banner from "../components/Banner.jsx";
import data from "../datas/logements.json";
import Footer from "../components/Footer.jsx";

function Home() {
  return (
    <div>
      <Header pageType="Home" />
      <Banner />
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
      <Footer />
    </div>
  );
}

export default Home;
