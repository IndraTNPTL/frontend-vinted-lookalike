import { Link, useNavigate, useLocation } from "react-router-dom";

import SearchBar from "./SearchBar";
// import Switch from "react-switch";

const Header = ({ logo, token, handleToken, search, setSearch }) => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="container">
      <section className="top-header ">
        <Link to="/">
          <div className="logo-container">
            <img src={logo} alt="logo" />
          </div>
        </Link>
        <SearchBar
          className="search-bar-container"
          placeholder="Rechercher des articles"
          search={search}
          setSearch={setSearch}
        />
        <div className="header-btn-container">
          {token ? (
            <button
              className="logout"
              onClick={() => {
                handleToken(null);
                navigate("/");
              }}
            >
              Se deconnecter
            </button>
          ) : (
            <>
              <Link to="/signup">
                <button className="login-signup-btns">S'inscrire</button>
              </Link>
              <Link to="/login">
                <button className="login-signup-btns">Se connecter</button>
              </Link>
            </>
          )}
        </div>

        <div>
          {token ? (
            <button
              onClick={() => {
                navigate("/");
              }}
              className="primary-btn"
            >
              Vends tes articles
            </button>
          ) : (
            <button
              onClick={() => {
                navigate("/login");
              }}
              className="primary-btn"
            >
              Vends tes articles
            </button>
          )}
        </div>
      </section>
      {location.pathname !== "/signup" && location.pathname !== "/login" && (
        <section className="bottom-header">
          <div>
            <span>Trier par prix :</span>
          </div>
          <div className="price-filter">
            <span>Prix entre :</span>
            <div>bar</div>
          </div>
          <span>other filters</span>
        </section>
      )}
    </header>
  );
};

export default Header;
