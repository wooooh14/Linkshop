import { useState } from "react";
import Header from "../components/header/Header";
import Button from "../components/Button/Button";
import Shopinput from "../components/shopinput/Shopinput";
import Cardlist from "../components/card/Cardlist";
import Cardfilter from "../components/card/Cardfilter";

import { Carddata } from "../util/Carddata";

const Home = () => {
  const [searchInput, setSearchInput] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredCards = Carddata.filter((item) =>
    item.storeName.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleSearch = () => {
    setSearchTerm(searchInput);
  };

  return (
    <div>
      <Header
        title={"LINK SHOP"}
        btnChild={<Button text="생성하기" to="/Linkpost" />}
      />
      <Shopinput
        placeholder={"샵 이름으로 검색해 보세요."}
        search={searchInput}
        setSearch={setSearchInput}
        onSearch={handleSearch}
      />

      <Cardfilter />

      <Cardlist filteredData={filteredCards} />
    </div>
  );
};

export default Home;
