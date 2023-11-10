import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SearchBar = ({ className, placeholder }) => {
  return (
    <div className={className}>
      <FontAwesomeIcon
        icon="fa-solid fa-magnifying-glass"
        style={{ color: "#757575" }}
        className="search-icon"
      />
      <input type="text" className="search-input" placeholder={placeholder} />
    </div>
  );
};

export default SearchBar;
