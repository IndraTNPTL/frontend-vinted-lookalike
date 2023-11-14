import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = ({ handleToken }) => {
  const [picture, setPicture] = useState();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newsletter, setNewsletter] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(event);
    try {
      setErrorMessage("");

      // const formData = new FormData();

      // formData.append("picture", picture);
      // formData.append("email", email);
      // formData.append("username", username);
      // formData.append("password", password);
      // formData.append("newsletter", newsletter);

      // const response = await axios.post(
      //   "https://lereacteur-vinted-api.herokuapp.com/user/signup",
      //   {
      //     formData,
      //   }
      // );

      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/signup",
        {
          email,
          username,
          password,
          newsletter,
        }
      );

      handleToken(response.data.token);
      alert("Votre compte a été créé 🎉 Connectez-vous maintenant !");
      navigate("/");
    } catch (error) {
      if (error.response.data.message === "Missing parameters") {
        setErrorMessage("Please fill in all fields");
      } else if (error.response.status === 409) {
        setErrorMessage(
          "This email already has an account, please use another one :)"
        );
      }
    }
  };

  return (
    <main>
      <div className="form-container">
        <h1>S'inscrire</h1>
        <form className="light-forms primary-forms" onSubmit={handleSubmit}>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          {/* <h4 className="avatar-title">Votre avatar</h4>
          <div className="upload-avatar-container">
            {picture && (
              <img
                className="avatar-upload-preview"
                src={URL.createObjectURL(picture)}
                alt=""
              />
            )}
            <input
              // style={{display: "none"}}
              type="file"
              id="picture-input"
              onChange={(event) => {
                setPicture(event.target.files[0]);
              }}
            />
          </div> */}

          <input
            type="text"
            placeholder="Nom d'utilisateur"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Choisir un mot de passe"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <div className="newsletter-checkbox-container">
            <div>
              <input
                type="checkbox"
                checked={newsletter}
                onChange={() => {
                  setNewsletter(!newsletter);
                }}
              />

              <p className="TermsandConditions-title">
                S'inscrire à notre newsletter
              </p>
            </div>
            <span className="TermsandConditions-subtext">
              En m'inscrivant je confirme avoir lu et accepté les Termes &
              Conditions et Politique de Confidentialité de Vinted. Je confirme
              avoir au moins 18 ans.
            </span>
          </div>
          <input type="submit" value="S'inscrire" />
        </form>
        <Link to="/login" className="login-or-signup-text">
          😯 Tu as déjà un compte ? Connecte-toi plutôt ici !
        </Link>
      </div>
    </main>
  );
};

export default Signup;
