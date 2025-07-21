import { FaSearch } from "react-icons/fa";
import "./Shopinput.css";

const Shopinput = ({ placeholder, search, setSearch }) => {
  return (
    <>
      <div className="search-box">
        <FaSearch className="input-icon" />
        <input
          type="text"
          placeholder={placeholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
    </>
  );
};

export default Shopinput;
