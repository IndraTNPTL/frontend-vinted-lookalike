import SearchBar from "./SearchBar";
// import Switch from "react-switch";

const Header = ({ logo, textBtn1, textBtn2, textBtn3 }) => {
  return (
    <header className="container">
      <section className="top-header ">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <SearchBar
          className="search-bar-container"
          placeholder="Rechercher des articles"
        />
        <div className="header-btn-container">
          <button className="login-signup-btns">{textBtn1}</button>
          <button className="login-signup-btns">{textBtn2}</button>
        </div>
        <div>
          <button className="primary-btn">{textBtn3}</button>
        </div>
      </section>

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
    </header>
  );
};

export default Header;
