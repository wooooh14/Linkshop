import "./Button.css";
import { Link } from "react-router-dom";

const Button = ({ text, type, to }) => {
  if (to) {
    return (
      <Link to={to} className={`Button Button_${type}`}>
        {text}
      </Link>
    );
  }
  return <button className={`Button Button_${type}`}>{text}</button>;
};

export default Button;
