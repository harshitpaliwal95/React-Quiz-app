import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

import "./auth.css";
export const Login = () => {
  const [email, setEmail] = useState<string>("");

  const [password, setPassword] = useState<string>("");

  const [showPassword, setShowPassword] = useState<string>("password");

  const logInHandler = async () => {
    console.log("clicked");

    const body = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post("/api/auth/login", body);
      localStorage.setItem("token", response.data.encodedToken);
      console.log("succes", response.data.encodedToken);
    } catch (Error) {
      console.log(Error);
    }
  };

  return (
    <div>
      <main>
        <div className="form-container">
          <div className="form-info">
            <p className="heading-x-lg text-center">Login</p>
            <div className="form-input">
              <div className="input-box">
                <label className="text-medium">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={email}
                  placeholder="demo@yahoo.com"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="input-box">
                <label className="text-medium">Password</label>
                <input
                  type={showPassword}
                  name="password"
                  value={password}
                  placeholder="*******"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button
                  className="btn-icon"
                  onClick={() =>
                    setShowPassword(
                      showPassword === "password" ? "text" : "password"
                    )
                  }
                >
                  <i
                    className={`bi bi-eye${
                      showPassword === "password" ? "" : "-slash"
                    }`}
                  ></i>
                </button>
              </div>
              <div className="space-between forget-pass">
                <span>
                  <label className="text-medium">
                    <input type="checkbox" /> Remember Me
                  </label>
                </span>
                <span>
                  <span className="text-medium">Forgot your password?</span>
                </span>
              </div>
              <div className="form-btn">
                <button
                  className="btn btn-outline"
                  onClick={() => logInHandler()}
                >
                  Log In
                </button>
                <button
                  className="btn btn-outline guest-btn"
                  onClick={() => {
                    setEmail("user@gmail.com");
                    setPassword("123456");
                  }}
                >
                  Log In As Guest
                </button>
              </div>
              <div className="new-ac">
                <Link to="/signup">
                  <p className="text-center">
                    Create new account
                    <i className="bi bi-chevron-compact-right"></i>
                  </p>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
