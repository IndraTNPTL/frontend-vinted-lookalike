import "./App.css";

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cookies from "js-cookie";

import Header from "./assets/components/Header";
import Home from "./assets/pages/Home";
import SingleOffer from "./assets/pages/SingleOffer";
import Signup from "./assets/pages/Signup";
import Login from "./assets/pages/Login";
import NotFound from "./assets/components/NotFound";

import logo from "./assets/images/logo.svg";
import noUserImg from "./assets/images/no-user-img.png";
// import herobanner from "./assets/images/hereobanner.jpeg";

import { library } from "@fortawesome/fontawesome-svg-core";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
library.add(faMagnifyingGlass);

function App() {
  const [token, setToken] = useState(Cookies.get("token") || null);

  const handleToken = (token) => {
    if (token) {
      Cookies.set("token", token, { expires: 15 });
      setToken(token);
    } else {
      Cookies.remove("token");
      setToken(null);
    }
  };

  const [search, setSearch] = useState("");

  return (
    <Router>
      <Header
        logo={logo}
        token={token}
        handleToken={handleToken}
        search={search}
        setSearch={setSearch}
      />
      <Routes>
        <Route
          path="/"
          element={<Home search={search} noUserImg={noUserImg} />}
        />
        <Route
          path="/offers/:id"
          element={<SingleOffer noUserImg={noUserImg} />}
        />
        <Route path="/signup" element={<Signup handleToken={handleToken} />} />
        <Route path="/login" element={<Login handleToken={handleToken} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
