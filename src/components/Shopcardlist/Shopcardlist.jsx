import Shopcarditem from "../Shopcarditem/Shopcarditem";
import { Shopcarddata } from "../../util/Shopcarddata";
import Shopcardmain from "../Shopcarditem/Shopcardmain";
import { Shopheaderdata } from "../../util/Shopcarddata";

import "./Shopcardlist.css";

const Shopcardlist = () => {
  return (
    <>
      {Shopheaderdata.map((item) => (
        <Shopcardmain
          key={item.id}
          emptyheart={item.emptyheart}
          fillheart={item.fillheart}
          icon={item.icon}
          like={item.like}
          shopname={item.shopname}
          username={item.username}
          share={item.share}
          meatball={item.meatball}
        />
      ))}
      <p>대표상품</p>
      <div className="Shopcardlist">
        <div className="shop-card-wrapper">
          {Shopcarddata.map((item) => (
            <Shopcarditem
              key={item.id}
              item={item.item}
              itemname={item.itemname}
              price={item.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Shopcardlist;
