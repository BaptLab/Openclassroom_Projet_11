import Header from "./Header/Header.jsx";
import ListeLogement from "./ListeLogements.jsx";
import Banner from "./banner.jsx";

function Home() {
  return (
    <div>
      <Header pageType="Home" />
      <Banner />
      <ListeLogement />
    </div>
  );
}

export default Home;
