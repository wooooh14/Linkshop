import "./Carditem.css";

const Carditem = ({
  icon,
  storeName,
  username,
  heart,
  likes,
  label,
  products,
}) => {
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-info">
          <img className="icon" src={icon} alt="아이콘" />
          <div className="texts">
            <h3 className="store-name">{storeName}</h3>
            <p className="username">{username}</p>
          </div>
        </div>
        <div className="likes">
          <img src={heart} alt="heart" className="heart" />
          {likes}
        </div>
      </div>

      <div className="main-label">{label}</div>

      <div className="products">
        {products.map((product, idx) => (
          <img
            key={idx}
            src={product}
            alt={`product-${idx}`}
            className="product-image"
          />
        ))}
      </div>
    </div>
  );
};

export default Carditem;
