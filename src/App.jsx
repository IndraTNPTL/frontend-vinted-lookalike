import "./App.css";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Header from "./assets/components/Header";
import Home from "./assets/components/Home";
import SingleOffer from "./assets/components/SingleOffer";
import NotFound from "./assets/components/NotFound";

import logo from "./assets/images/logo.svg";
import noUserImg from "./assets/images/no-user-img.png";
// import herobanner from "./assets/images/hereobanner.jpeg";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
library.add(faMagnifyingGlass);

function App() {
  return (
    <Router>
      <Header
        logo={logo}
        textBtn1="S'inscrire"
        textBtn2="Se connecter"
        textBtn3="Vends tes articles"
      />
      <Routes>
        <Route path="/" element={<Home noUserImg={noUserImg} />} />
        <Route
          path="/offers/:id"
          element={<SingleOffer noUserImg={noUserImg} />}
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
