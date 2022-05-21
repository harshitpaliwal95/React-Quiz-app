import "./categoryCard.css";
import { CategoryType } from "../../types";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../../store";
import { useDispatch } from "react-redux";
import { mcqQuiz } from "../../feature/quizSlice";

export const CategoryCard = ({ categoryName, img, _id }: CategoryType) => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const categoryHandler = (catName: any) => {
    navigate("/rules");
    dispatch(mcqQuiz(catName));
  };
  return (
    <div>
      <div
        className="card-component luffy-card"
        onClick={() => categoryHandler(_id)}
      >
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
