import "./Cardlist.css";
import Carditem from "../carditem/Carditem";
import Nosearch from "../nosearch/Nosearch";

const Cardlist = ({ filteredData }) => {
  return (
    <div className="Cardlist">
      {filteredData.length === 0 ? (
        <Nosearch />
      ) : (
        <div className="card-wrapper">
          {filteredData.map((item) => (
            <Carditem
              key={item.id}
              icon={item.icon}
              storeName={item.storeName}
              username={item.username}
              heart={item.heart}
              likes={item.likes}
              label={item.label}
              products={item.products}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Cardlist;
