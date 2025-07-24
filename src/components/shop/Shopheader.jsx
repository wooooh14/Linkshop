import { FaChevronLeft } from "react-icons/fa";
import { getIcon } from "../../util/imageloader";

import "./Shopheader.css";
import { Link } from "react-router-dom";

const Shopheader = () => {
  return (
    <>
      <div className="Shop-header">
        <img src={getIcon("shopheader")} alt="shopheader" />
        <div className="shop-btn">
          <Link to="/">
            <FaChevronLeft />
            돌아가기
          </Link>
        </div>
      </div>
    </>
  );
};

export default Shopheader;
