import logo from "../assets/logo.png";

function Header(props) {
  let pageType = props.pageType;
  if (pageType === "Home") {
    return (
      <header className="header">
        <img className="logo" alt="logo" src={logo}></img>
        <nav className="nav-menu">
          <a className="header-btn header-home-btn header-btn-selected" href="/">
            Accueil
          </a>
          <a className="header-btn header-about-btn" href="/about">
            A Propos
          </a>
        </nav>
      </header>
    );
  } else if (pageType === "About") {
    return (
      <header className="header">
        <img className="logo" alt="logo" src={logo}></img>
        <nav className="nav-menu">
          <a className="header-btn header-home-btn" href="/">
            Accueil
          </a>
          <a className="header-btn header-about-btn header-btn-selected" href="/about">
            A Propos
          </a>
        </nav>
      </header>
    );
  } else {
    return (
      <header className="header">
        <img className="logo" alt="logo" src={logo}></img>
        <nav className="nav-menu">
          <a className="header-btn header-home-btn" href="/">
            Accueil
          </a>
          <a className="header-btn header-about-btn" href="/about">
            A Propos
          </a>
        </nav>
      </header>
    );
  }
}

export default Header;
