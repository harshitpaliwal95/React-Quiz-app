import React from "react";
import demoImg from "../../assets/luffy.jpg";

export const CategoryCard = () => {
  return (
    <div>
      <a href="pages/category-page/category.html">
        <div className="card-component luffy-card">
          <div className="card-comp-img">
            <img className="card-top-img" src={demoImg} alt="Category img" />
          </div>
          <div className="card-badge">Anime Quizz</div>
        </div>
      </a>
    </div>
  );
};
