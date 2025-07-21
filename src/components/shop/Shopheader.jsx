import shopheaderic from "../../assets/icon/shopheaderic.png";
import { FaChevronLeft } from "react-icons/fa";
import Shopcard from "./ShopCard";
import "./Shopheader.css";

const Shopheader = () => {
  return (
    <>
      <div className="shop-header-container">
        <img src={shopheaderic} alt="shopheader" />
        <div>
          <button className="back-btn">
            <FaChevronLeft />
            돌아가기
          </button>
        </div>
      </div>
      <Shopcard />
    </>
  );
};

export default Shopheader;
