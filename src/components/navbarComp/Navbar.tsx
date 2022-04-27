import React from "react";

export const NavBar = () => {
  return (
    <nav className="ui-nav">
      <div className="right-nav">
        <span className="main-heading">Quiz Bizz</span>
      </div>
      <ul className="left-nav">
        <div className="nav-item">
          <p className="text-lg">Rules</p>
        </div>
        <div className="nav-item">
          <p className="text-lg">Category</p>
        </div>
      </ul>
    </nav>
  );
};
