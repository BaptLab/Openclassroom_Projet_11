import Banner from "../components/Banner";
import CollapseAbout from "../components/CollapseAbout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import bannerPicture from "../assets/banner-mountain.png";

function About() {
  return (
    <div className="page-container">
      <Header pageType="About" />
      <Banner picture={bannerPicture} />
      <div className="collapse-about-page-container">
        <CollapseAbout type="Fiabilité" />
        <CollapseAbout type="Respect" />
        <CollapseAbout type="Service" />
        <CollapseAbout type="Sécurité" />
      </div>
      <Footer />
    </div>
  );
}

export default About;
