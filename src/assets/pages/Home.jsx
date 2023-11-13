import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = ({ search, noUserImg }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offers?title=${search}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response);
      }
    };
    fetchData();
  }, [search]);

  return isLoading ? (
    <main>
      <span className="loading-message">
        Your Vinted lookalike is loading... ⏳
      </span>
    </main>
  ) : (
    <main className="container">
      <section className="cards-container">
        {data.offers.map((offer) => {
          return (
            <Link to={`/offers/${offer._id}`} key={offer._id}>
              <article className="card">
                <div className="card-user">
                  {offer.owner.account.avatar ? (
                    <img
                      src={offer.owner.account.avatar.secure_url}
                      alt={offer.owner.account.username}
                    />
                  ) : (
                    <img src={noUserImg} alt="" />
                  )}
                  <span>{offer.owner.account.username}</span>
                </div>
                <div className="product-image-container">
                  <img
                    src={offer.product_image.secure_url}
                    alt={offer.product_name}
                  />
                </div>
                <div className="product-infos">
                  <p className="home-price">{offer.product_price} €</p>
                  <p>{offer.product_details[2].ÉTAT}</p>
                  <p>{offer.product_details[1].TAILLE}</p>
                  <p>{offer.product_details[0].MARQUE}</p>
                </div>
              </article>
            </Link>
          );
        })}
      </section>
    </main>
  );
};

export default Home;
