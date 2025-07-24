import { FaSearch } from "react-icons/fa";
import "./Shopinput.css";

const Shopinput = ({ placeholder, search, setSearch, onSearch }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <>
      <div className="search-box">
        <FaSearch className="input-icon" />
        <input
          type="text"
          placeholder={placeholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown}
        />
      </div>
    </>
  );
};

export default Shopinput;
