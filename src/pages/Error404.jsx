import Header from "../components/Header";

function Error404() {
  return (
    <div className="page-container">
      <Header />
      <div className="error-infos-container">
        <span className="error404">404</span>
        <span className="error-infos">Oups! La page que vous demandez n'existe pas.</span>
        <a className="back-home-btn" href="/">
          Retourner sur la page d'accueil
        </a>
      </div>
    </div>
  );
}

export default Error404;
