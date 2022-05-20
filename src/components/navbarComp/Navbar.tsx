import { useState } from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const NavBar = () => {
  const [dropDown, setDropDown] = useState<boolean>(false);
  return (
    <nav className="ui-nav">
      <div className="right-nav">
        <Link to="/">
          <span className="main-heading">Quiz Bizz</span>
        </Link>
      </div>
      <div className="left-nav">
        <button
          className="bi bi-person-fill btn-icon"
          onClick={() => setDropDown((pre) => (pre ? false : true))}
        ></button>
        <button className="bi bi-moon-fill btn-icon"></button>
        <div className={`drop-box ${dropDown ? "show-box" : ""}`}>
          <Link to="/login">
            <p>Login</p>
          </Link>
          <Link to="/signup">
            <p>SignUp</p>
          </Link>
        </div>
      </div>
    </nav>
  );
};
