import logo from "../assets/banner-forest.png";

function Banner() {
  return (
    <div className="banner">
      <img className="img-banner" alt="banner" src={logo}></img>
      <h2 className="catchphrase">Chez vous, partout et ailleurs</h2>
    </div>
  );
}

export default Banner;
