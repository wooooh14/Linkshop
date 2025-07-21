// import Header from "../components/header/Header";
// import Button from "../components/Button/Button";
// import Shopinput from "../components/shopinput/Shopinput";
// import Cardlist from "../components/card/Cardlist";
// import Cardfilter from "../components/card/Cardfilter";

// const Home = () => {
//   return (
//     <div>
//       <Header
//         title={"LINK SHOP"}
//         btnChild={<Button text="생성하기" to="/Search" />}
//       />
//       <Shopinput placeholder={"샵 이름으로 검색해 보세요."} />
//       <Cardfilter />
//       <Cardlist />
//     </div>
//   );
// };
// export default Home;
import { useState } from "react";
import Header from "../components/header/Header";
import Button from "../components/Button/Button";
import Shopinput from "../components/shopinput/Shopinput";
import Cardlist from "../components/card/Cardlist";
import Cardfilter from "../components/card/Cardfilter";

import { Carddata } from "../util/Carddata";

const Home = () => {
  const [search, setSearch] = useState("");

  const filteredCards = Carddata.filter((item) =>
    item.storeName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Header
        title={"LINK SHOP"}
        btnChild={<Button text="생성하기" to="/Search" />}
      />
      <Shopinput
        placeholder={"샵 이름으로 검색해 보세요."}
        search={search}
        setSearch={setSearch}
      />

      <Cardfilter />

      <Cardlist filteredData={filteredCards} />
    </div>
  );
};

export default Home;
