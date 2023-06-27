import Home from "./pages/Home";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import FicheLogement from "./pages/FicheLogement";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.css";
import PageLogement from "./pages/PageLogements";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
        <Route path="/logements" element={<FicheLogement />} />
        <Route path={`/logements/:id`} element={<PageLogement />} />
      </Routes>
    </Router>
  );
}

export default Routing;
