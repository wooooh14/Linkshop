import "./Header.css";
import { Link } from "react-router-dom";

function Header({ title, btnChild }) {
  return (
    <>
      <header className="Header">
        <div className="header-logo">
          <Link to="/">{title}</Link>
        </div>
        <div className="header-btn">{btnChild}</div>
      </header>
    </>
  );
}

export default Header;
