import Home from "./pages/Home";
import About from "./pages/About";
import Error404 from "./pages/Error404";
import FicheLogement from "./pages/FicheLogement";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./styles/index.css";

function Routing() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<Error404 />} />
        <Route path={`/logements/:id`} element={<FicheLogement />} />
      </Routes>
    </Router>
  );
}

export default Routing;
