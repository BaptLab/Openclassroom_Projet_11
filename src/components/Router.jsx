import Home from "./Home";
import About from "./About";
import Error404 from "./Error404";
import Logements from "./Logements";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "../styles/index.css";
import FicheLogement from "./FicheLogement";

function Routing(props) {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/logements" element={<Logements />} />
        <Route path={`/logements/*`} element={<FicheLogement />} />
      </Routes>
    </Router>
  );
}

export default Routing;
