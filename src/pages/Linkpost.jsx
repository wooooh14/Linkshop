import Button from "../components/Button/Button";
import Header from "../components/header/Header";
import Linkpostinput from "../components/Linkpostinput/Linkpostinput";

const Linkpost = () => {
  return (
    <div>
      <Header
        title={"LINK SHOP"}
        btnChild={<Button text="돌아가기" to="/" />}
      />
      <Linkpostinput />
    </div>
  );
};

export default Linkpost;
