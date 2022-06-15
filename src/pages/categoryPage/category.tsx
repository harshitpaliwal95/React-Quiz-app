import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { QuizCard } from "../../components";
import { getAllQuiz, subQuiz } from "../../feature/quizSlice";
import { AppDispatch, RootState } from "../../store";

export const Category = () => {
  const { quiz } = useSelector((store: RootState) => store);
  const { categoryName } = useParams();
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    (async () => {
      await dispatch(getAllQuiz());
      dispatch(subQuiz(categoryName));
    })();
  }, [categoryName]);

  return (
    <main>
      <div className="heading-x-lg">Quizzes</div>
      <div className="grid-two">
        {quiz.subQuiz.map((data: any) => (
          <QuizCard key={data._id} data={data} />
        ))}
      </div>
    </main>
  );
};
