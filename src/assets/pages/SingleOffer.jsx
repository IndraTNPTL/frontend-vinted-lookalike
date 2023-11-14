import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const SingleOffer = ({ noUserImg, token }) => {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);

  const params = useParams();
  const id = params.id;

  const navigate = useNavigate();

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
    <main>
      <span className="loading-message">Product infos are loading...</span>
    </main>
  ) : (
    <main className="grey-background">
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
              <div>
                {data.product_details.map((detail) => {
                  const keys = Object.keys(detail);
                  const key = keys[0];
                  return (
                    <p key={key}>
                      <span className="">{key}</span> <span>{detail[key]}</span>
                    </p>
                  );
                })}
              </div>
            </div>
            {/* <div className="infos-divider"></div> */}
            <div className="product-description-container">
              <p className="product-name">{data.product_name}</p>
              <p className="product-description">{data.product_description}</p>
            </div>
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
            {token ? (
              <button
                className="go-to-cart-btn"
                onClick={() => {
                  navigate("/payment");
                }}
              >
                Acheter
              </button>
            ) : (
              <button
                className="go-to-cart-btn"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Acheter
              </button>
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default SingleOffer;
