import logo from "../assets/footer-logo.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <img className="logo-footer" alt="logo" src={logo}></img>
        <span className="copyright">© 2020 Kasa. All rights reserved</span>
      </div>
    </footer>
  );
}

export default Footer;
