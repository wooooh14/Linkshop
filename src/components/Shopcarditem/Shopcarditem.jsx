import "./Shopcarditem.css";

const Shopcarditem = ({ item, itemname, price }) => {
  return (
    <>
      <div className="Shop-card-item">
        <img className="shop-item-img" src={item} alt={itemname} />

        <div className="shop-card-texts">
          <h3 className="item-name">{itemname}</h3>
          <p className="price">{price}</p>
        </div>
      </div>
    </>
  );
};

export default Shopcarditem;
