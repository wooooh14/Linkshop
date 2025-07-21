import { FaRegHeart } from "react-icons/fa";
import iconred from "../../assets/icon/iconred.png";
import { HiOutlineShare } from "react-icons/hi";
import { MdMoreVert } from "react-icons/md";
import shoes1 from "../../assets/images/shoes1.png";
import shoes4 from "../../assets/images/shoes4.png";
import shoes5 from "../../assets/images/shoes5.png";
import shoes6 from "../../assets/images/shoes6.png";
import shoes2 from "../../assets/images/shoes2.png";
import item6 from "../../assets/images/item6.png";

import "./Shopheader.css";

const Shopcard = () => {
  return (
    <>
      <div className="shop-container">
        <div className="shop-like">
          <FaRegHeart />
          <span>65</span>
        </div>
        <div className="shop-info">
          <img src={iconred} alt="로고아이콘" />
          <h2>너구리 직구상점</h2>
          <p>@pumpkinraccoon</p>
        </div>
        <div className="card-btn-container">
          <button className="btn-box">
            <HiOutlineShare />
          </button>
          <button className="btn-box">
            <MdMoreVert />
          </button>
        </div>
      </div>
      <p className="menu-info">대표상품</p>
      <div className="sell-item-container">
        <div className="sell-item-box">
          <img src={shoes1} alt="아디다스신발" />
          <div className="item-info">
            <p>아디다스 가젤 HP5379</p>
            <p>₩134,000</p>
          </div>
        </div>
        <div className="sell-item-box">
          <img src={shoes2} alt="아디다스신발" />
          <div className="item-info">
            <p>아디다스 가젤 HP5379</p>
            <p>₩104,000</p>
          </div>
        </div>
        <div className="sell-item-box">
          <img src={item6} alt="나이키집업" />
          <div className="item-info">
            <p>나이키 집업</p>
            <p>₩154,000</p>
          </div>
        </div>
        <div className="sell-item-box">
          <img src={shoes6} alt="아디다스신발" />
          <div className="item-info">
            <p>아디다스 슈퍼스타</p>
            <p>₩124,000</p>
          </div>
        </div>
        <div className="sell-item-box">
          <img src={shoes4} alt="나이키신발" />
          <div className="item-info">
            <p>나이키 신발</p>
            <p>₩124,000</p>
          </div>
        </div>
        <div className="sell-item-box">
          <img src={shoes5} alt="나이키신발" />
          <div className="item-info">
            <p>나이키 신발</p>
            <p>₩124,000</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shopcard;
