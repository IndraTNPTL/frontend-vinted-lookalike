import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = ({ handleToken }) => {
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
      navigate("/login");
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
        <form onSubmit={handleSubmit}>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <input
            type="text"
            placeholder="Choose a username"
            value={username}
            onChange={(event) => {
              setUsername(event.target.value);
            }}
          />
          <input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="Choose a password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <input
            type="checkbox"
            checked={newsletter}
            onChange={() => {
              setNewsletter(!newsletter);
            }}
          />
          <input type="submit" value="S'inscrire" />
        </form>
        <Link to="/login">
          😯 Tu as déjà un compte ? Connecte-toi plutôt ici !
        </Link>
      </div>
    </main>
  );
};

export default Signup;
