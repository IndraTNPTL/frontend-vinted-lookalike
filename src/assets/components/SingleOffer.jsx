import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const SingleOffer = ({ noUserImg }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const id = params.id;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://lereacteur-vinted-api.herokuapp.com/offer/${id}`
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.response.data);
      }
    };
    fetchData();
  }, [id]);

  return isLoading ? (
    <p>Product infos are loading...</p>
  ) : (
    <main className="background-single-prod-page">
      <div className="single-product-container">
        <div className="single_product_img_container">
          <img
            src={data.product_image?.secure_url || "default_image_url"}
            alt={data.product_name}
          />
        </div>
        <div className="product-details-container">
          <div className="details-container">
            <div className="product-details">
              <p className="price">{data.product_price} €</p>
              {data.product_details.map((detail) => {
                const keys = Object.keys(detail);
                const key = keys[0];
                return (
                  <p key={key}>
                    <span>{key}</span> <span>{detail[key]}</span>
                  </p>
                );
              })}
            </div>

            <div className="user-infos-container">
              <div className="user-infos">
                {data.owner.account.avatar ? (
                  <img
                    src={data.owner.account.avatar.secure_url}
                    alt={data.owner.account.username}
                    className="avatar"
                  />
                ) : (
                  <img src={noUserImg} alt="" className="avatar" />
                )}
                <span>{data.owner.account.username}</span>
              </div>
            </div>
            <div className="go-to-cart-btn">
              <button className="primary-btn">Acheter</button>{" "}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleOffer;
