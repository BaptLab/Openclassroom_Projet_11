import Banner from "../components/Banner";
import Footer from "../components/Footer";
import Header from "../components/Header";
import bannerPicture from "../assets/banner-mountain.png";
import Collapse from "../components/Collapse";

function About() {
  return (
    <div className="global-container">
      <div className="content-container content-container-about">
        <Header pageType="About" />
        <Banner picture={bannerPicture} />
        <div className="collapse-about-page-container">
          <Collapse type="Fiabilité" />
          <Collapse type="Service" />
          <Collapse type="Respect" />
          <Collapse type="Sécurité" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default About;
