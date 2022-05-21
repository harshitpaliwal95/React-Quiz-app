import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectedMcq } from "../../feature/quizSlice";
import { AppDispatch } from "../../store";

export const QuizCard = (data: any) => {
  const { title, img, categoryName } = data.data;
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();

  const quizHandler = () => {
    navigate("/rules  ");
    dispatch(selectedMcq(title));
  };
  return (
    <div>
      <div onClick={quizHandler}>
        <div className="card-component luffy-card">
          <div className="card-comp-img">
            <img
              className="card-top-img"
              src={`https://i.ytimg.com/vi/${img}/hqdefault.jpg`}
              alt="category img"
            />
          </div>
          <div className="card-badge">{categoryName}</div>
          <div className="card-comp-contant">
            <h2 className="card-h2">{title}</h2>
            <h3 className="card-h3">Take this quizz to test yourself!</h3>
            <h3 className="card-h3">5 Question</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
