import "./categoryCard.css";
import { CategoryType } from "../../types";

export const CategoryCard = ({ categoryName, img }: CategoryType) => {
  return (
    <div>
      <div className="card-component luffy-card">
        <div className="card-comp-img">
          <img
            className="card-top-img"
            id="category-img"
            src={`https://i.ytimg.com/vi/${img}/hqdefault.jpg`}
            alt="Category img"
          />
        </div>
        <div className="card-badge">{categoryName}</div>
      </div>
    </div>
  );
};
