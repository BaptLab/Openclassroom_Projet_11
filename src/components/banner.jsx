function Banner(props) {
  return (
    <div className="banner">
      <img className="img-banner" alt="banner" src={props.picture}></img>
      <h2 className="catchphrase">{"Chez vous,\n partout et ailleurs"}</h2>
    </div>
  );
}

export default Banner;
