import { useState } from "react";

import Button from "../Button/Button";
import "./Linkpostinput.css";

const ProductForm = () => {
  return (
    <div className="make-input-container">
      <div className="make-input-box">
        <div className="make-input-content">
          <h5>상품 대표 이미지</h5>
          <Button text="파일첨부" type="ADDBTN" />
        </div>
        <input
          className="make-input"
          type="text"
          placeholder="상품 이미지를 첨부해주세요"
        />
      </div>
      <div className="make-input-box">
        <h5>상품 이름</h5>
        <input
          className="make-input"
          type="text"
          placeholder="상품 이름을 입력해주세요"
        />
      </div>
      <div className="make-input-box">
        <h5>상품 가격</h5>
        <input
          className="make-input"
          type="text"
          placeholder="원화로 표기해 주세요"
        />
      </div>
    </div>
  );
};

const ShopForm = () => {
  return (
    <div className="make-input-container">
      <div className="make-input-box">
        <div className="make-input-content">
          <h5>상품 대표 이미지</h5>
          <Button text="파일첨부" type="ADDBTN" />
        </div>
        <input
          className="make-input"
          type="text"
          placeholder="상품 이미지를 첨부해주세요"
        />
      </div>
      <div className="make-input-box">
        <h5>이름</h5>
        <input
          className="make-input"
          type="text"
          placeholder="표시하고 싶은 이름을 적어 주세요"
        />
      </div>
      <div className="make-input-box">
        <h5>URL</h5>
        <input
          className="make-input"
          type="text"
          placeholder="URL을 입력해주세요"
        />
      </div>
      <div className="make-input-box">
        <h5>유저 ID</h5>
        <input
          className="make-input"
          type="text"
          placeholder="유저 ID를 입력해주세요"
        />
      </div>
      <div className="make-input-box">
        <h5>비밀번호</h5>
        <div className="make-input-password-wrapper">
          <input
            className="make-input"
            type="password"
            placeholder="비밀번호를 입력해주세요"
          />
          {/* 여기에 눈 아이콘 버튼도 추가 가능 */}
        </div>
      </div>
    </div>
  );
};

const Linkpostinput = () => {
  const [productForms, setProductForms] = useState([0]);

  const handleAddProductForm = () => {
    setProductForms((prev) => [...prev, prev.length]);
  };

  return (
    <div className="make-container">
      <div className="best-product">
        <h4>대표 상품</h4>
        <button onClick={handleAddProductForm}>추가</button>
      </div>

      {productForms.map((form, index) => (
        <ProductForm key={index} index={form} />
      ))}

      <h4 className="my-app-info">내 쇼핑몰</h4>
      <ShopForm />

      <div className="make-btn-wrapper">
        <Button text="생성하기" type="GREY" to={"/search"} />
      </div>
    </div>
  );
};

export default Linkpostinput;
