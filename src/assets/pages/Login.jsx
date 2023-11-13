import { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = ({ handleToken }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/user/login",
        {
          email,
          password,
        }
      );
      console.log(response.data);

      handleToken(response.data.token);
      alert("Vous êtes maintenant connecté 🎉");
      navigate("/");
    } catch (error) {
      console.log(error);
      if (error.response.data.message === "Unauthorized") {
        setErrorMessage("Please fill in all fields");
      } else if (error.response.status === 400) {
        setErrorMessage(
          "This email doesn't have an account, please use another one :)"
        );
      }
    }
  };

  return (
    <main>
      <div className="form-container">
        <h1>Se connecter</h1>
        <form onSubmit={handleSubmit}>
          {errorMessage && <p className="error-message">{errorMessage}</p>}
          <input
            type="email"
            placeholder="📧 Enter you email"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
            }}
          />
          <input
            type="password"
            placeholder="🤫 Enter your password"
            onChange={(event) => {
              setPassword(event.target.value);
            }}
          />
          <input type="submit" value="Se connecter" />
        </form>
        <Link to="/signup">
          😯 Tu n'as pas encore de compte ? Inscris-toi ici !
        </Link>
      </div>
    </main>
  );
};

export default Login;
