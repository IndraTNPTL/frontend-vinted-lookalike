const SearchBar = ({ className, placeholder }) => {
  return (
    <div className={className}>
      <input type="text" className="search-input" placeholder={placeholder} />
    </div>
  );
};

export default SearchBar;
