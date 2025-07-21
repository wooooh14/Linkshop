import Header from "../components/header/Header";
import Button from "../components/Button/Button";

const Search = () => {
  return (
    <div>
      <Header
        title={"LINK SHOP"}
        to={"/"}
        btnChild={<Button text="임시" to="/" />}
      />
    </div>
  );
};

export default Search;
