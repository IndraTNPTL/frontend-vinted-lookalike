import SearchBar from "./SearchBar";
import Switch from "react-switch";

const Header = ({ logo, textBtn1, textBtn2, textBtn3 }) => {
  return (
    <header>
      <section className="top-header container">
        <div className="img-container">
          <img src={logo} alt="logo" />
        </div>
        <SearchBar
          className="search-bar-container"
          placeholder="Rechercher des articles"
        />
        <div>
          <button>{textBtn1}</button>
          <button>{textBtn2}</button>
        </div>
        <div>
          <button>{textBtn3}</button>
        </div>
      </section>
      <section className="bottom-header container">
        <div>
          <span>Trier par prix</span>
          {/* <Switch /> */}
        </div>
        <div>
          <span>Prix entre :</span>
          <div>bar</div>
        </div>
        <div>other filters</div>
      </section>
    </header>
  );
};

export default Header;
