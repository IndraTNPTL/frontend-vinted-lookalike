import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Publish = ({ token }) => {
  const navigate = useNavigate();

  const [picture, setPicture] = useState();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setErrorMessage("");

      const formData = new FormData();

      formData.append("picture", picture);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("price", price);

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert(
        "Votre offre a bien été prise en compte ! Elle sera publiée dans les plus brefs délais"
      );
      navigate("/");
      console.log(response.data);
    } catch (error) {
      setErrorMessage(error.response.message);
    }
  };

  return token ? (
    <main className="grey-background">
      <div className="form-container">
        <h1>Publie ton article !</h1>
        {errorMessage && <p className="error-message">{errorMessage}</p>}
        <form onSubmit={handleSubmit} className="secondary-forms">
          <div className="upload-img-container">
            <h4>Choisir une image</h4>
            <input
              // style={{display: "none"}}
              type="file"
              id="picture-input"
              onChange={(event) => {
                setPicture(event.target.files[0]);
              }}
            />
            {picture && (
              <img
                className="picture-upload-preview"
                src={URL.createObjectURL(picture)}
                alt=""
              />
            )}
          </div>

          <div className="text-inputs-section">
            <div className="text-input">
              <h4>Titre</h4>
              <input
                type="text"
                value={title}
                placeholder="ex: Chemise Sézane verte"
                onChange={(event) => {
                  setTitle(event.target.value);
                }}
              />
            </div>
            <div className="text-input">
              <h4>Décris ton article</h4>
              <textarea
                name=""
                id=""
                cols="30"
                rows="10"
                placeholder="ex: porté quelque fois, très confortable"
                value={description}
                onChange={(event) => {
                  setDescription(event.target.value);
                }}
              ></textarea>
            </div>
          </div>

          <div className="text-inputs-section">
            <div className="text-input">
              <h4>Marque</h4>
              <input
                type="text"
                placeholder="ex: Sézane"
                value={brand}
                onChange={(event) => {
                  setBrand(event.target.value);
                }}
              />
            </div>
            <div className="text-input">
              <h4>Taille</h4>
              <select
                value={size}
                id="size-select"
                onChange={(event) => {
                  setSize(event.target.value);
                }}
              >
                <option value="XS">XS</option>
                <option value="S">S</option>
                <option value="M">M</option>
                <option value="L">L</option>
                <option value="XL">XL</option>
                <option value="XXL">XXL</option>
              </select>
            </div>
            <div className="text-input">
              <h4>Couleur</h4>
              <input
                type="text"
                value={color}
                placeholder="ex: Vert Forêt"
                onChange={(event) => {
                  setColor(event.target.value);
                }}
              />
            </div>
            <div className="text-input">
              <h4>État</h4>
              <input
                type="text"
                value={condition}
                placeholder="ex: Neuf sans etiquette"
                onChange={(event) => {
                  setCondition(event.target.value);
                }}
              />
            </div>
            <div className="text-input">
              <h4>Lieu</h4>
              <input
                type="text"
                value={city}
                placeholder="ex: Case Navire"
                onChange={(event) => {
                  setCity(event.target.value);
                }}
              />
            </div>
          </div>
          <div className="text-inputs-section">
            <div className="text-input">
              <h4>Prix</h4>
              <input
                type="number"
                value={price}
                placeholder="ex: 50"
                onChange={(event) => {
                  setPrice(event.target.value);
                }}
              />
            </div>
          </div>
          <input type="submit" value="Publier mon offre" />
        </form>
      </div>
    </main>
  ) : (
    <Navigate to="/login" />
  );
};

export default Publish;
