import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { AppDispatch, RootState } from "../../store";
import { logOut, updateTheme } from "../../feature/authSlice";
import "./navbar.css";

export const NavBar = () => {
  const [dropDown, setDropDown] = useState<boolean>(false);
  const { auth } = useSelector((store: RootState) => store);
  const dispatch: AppDispatch = useDispatch();
  const location = useLocation();

  const [theme, setTheme] = useState(auth.theme);

  const themeHandler = () => {
    if (theme === "dark") {
      localStorage.setItem("theme", "light");
      setTheme("light");
      dispatch(updateTheme());
    } else if (theme === "light") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
      dispatch(updateTheme());
    }
  };

  useEffect(() => setDropDown(false), [location.pathname, auth.isAuth]);
  return (
    <nav className="ui-nav">
      <div className="right-nav">
        <Link to="/">
          <span className="main-heading">Quiz Bizz</span>
        </Link>
      </div>
      <div className="left-nav">
        <p>Hey, {auth.userName}</p>
        <button
          className="bi bi-person-fill btn-icon"
          onClick={() => setDropDown((pre) => (pre ? false : true))}
        ></button>
        <button
          onClick={themeHandler}
          className={`bi ${
            theme === "dark" ? "bi-moon-fill" : "bi-brightness-high-fill"
          } btn-icon`}
        ></button>

        <div className={`drop-box ${dropDown ? "show-box" : ""}`}>
          {auth.isAuth ? (
            <p onClick={() => dispatch(logOut())}>Logout</p>
          ) : (
            <>
              <Link to="/login">
                <p>Login</p>
              </Link>
              <Link to="/signup">
                <p>SignUp</p>
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};
