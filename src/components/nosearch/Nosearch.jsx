import nosearchic from "../../assets/icon/nosearchic.png";
import "./Nosearch.css";

const Nosearch = () => {
  return (
    <>
      <div className="search-container">
        <img className="search-img" src={nosearchic} alt="검색어없음" />
        <p>검색 결과가 없어요</p>
        <p>지금 프로필을 만들고 내 상품을 소개해보세요</p>
      </div>
    </>
  );
};

export default Nosearch;
