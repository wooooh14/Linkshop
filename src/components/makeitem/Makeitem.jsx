import "./Makeitem.css";

const Makeitem = () => {
  return (
    <>
      <div className="make-container">
        <div className="make-item-header">
          <h1>LINK SHOP</h1>
          <button>돌아가기</button>
        </div>
        <div className="best-product">
          <h4>대표 상품</h4>
          <button>추가</button>
        </div>
        <div className="make-input-container">
          <div className="make-input-box">
            <div className="make-input-content">
              <h5>상품 대표 이미지</h5>
              <button>파일첨부</button>
            </div>
            <p>상품 이미지를 첨부해주세요</p>
          </div>
          <div className="make-input-box">
            <h5>상품 이동</h5>
            <p>상품 이름을 입력해주세요</p>
          </div>
          <div className="make-input-box">
            <h5>상품 기록</h5>
            <p>원화로 표기해 주세요</p>
          </div>
        </div>
        <div className="make-input-container">
          <div className="make-input-box">
            <div className="make-input-content">
              <h5>상품 대표 이미지</h5>
              <button>파일첨부</button>
            </div>
            <p>상품 이미지를 첨부해주세요</p>
          </div>
          <div className="make-input-box">
            <h5>상품 이동</h5>
            <p>상품 이름을 입력해주세요</p>
          </div>
          <div className="make-input-box">
            <h5>상품 기록</h5>
            <p>원화로 표기해 주세요</p>
          </div>
        </div>
        <h4 className="my-app-info">내 쇼핑몰</h4>
        <div className="make-input-container">
          <div className="make-input-box">
            <div className="make-input-content">
              <h5>상품 대표 이미지</h5>
              <button>파일첨부</button>
            </div>
            <p>상품 이미지를 첨부해주세요</p>
          </div>
          <div className="make-input-box">
            <h5>이름</h5>
            <p>표시하고 싶은 이름을 적어 주세요</p>
          </div>
          <div className="make-input-box">
            <h5>url</h5>
            <p>Url을 입력해주세요</p>
          </div>
          <div className="make-input-box">
            <h5>유저 ID</h5>
            <p>유저 ID를 입력하세요</p>
          </div>
          <div className="make-input-box">
            <h5>비밀번호</h5>
            <p>비밀번호를 입력하세요</p>
          </div>
        </div>
        <button className="make-btn">생성하기</button>
      </div>
    </>
  );
};
export default Makeitem;
