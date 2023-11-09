import "./App.css";

import { useState, useEffect } from "react";
import axios from "axios";

import Header from "./assets/components/Header";

import logo from "./assets/images/logo.svg";

function App() {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/offers"
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, []);

  return isLoading ? (
    <span>Your Vinted lookalike is loading... ⏳</span>
  ) : (
    <>
      <Header
        logo={logo}
        textBtn1="S'inscrire"
        textBtn2="Se connecter"
        textBtn3="Vends tes articles"
      />
      <main>
        <section className="hero-container">
          <img src="" alt="" />
        </section>
        <section className="cards-container">
          {data.offers.map((offer) => {
            return (
              <article key={offer._id} className="card">
                <div>
                  <img
                    src={offer.owner.account.avatar.secure_url}
                    alt={offer.owner.account.username}
                  />
                  <span>{offer.owner.account.username}</span>
                </div>
              </article>
            );
          })}
        </section>
      </main>
      <footer></footer>
    </>
  );
}

export default App;
