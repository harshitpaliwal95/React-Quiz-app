import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store";
import "./result.css";
import { ScrollToTop } from "../../customHook/scrollToTop";
import { useEffect } from "react";
import { clearMcq } from "../../feature/quizSlice";
import { useNavigate } from "react-router-dom";

const ResultQuiz = ({ data }: any) => {
  const { question, options, answer, userAns } = data;

  const resultCheck = (opt: string) => {
    if (answer === opt) {
      return "right-ans";
    }
    if (userAns === opt && userAns !== answer) {
      return "wrong-ans";
    }
  };
  return (
    <>
      <div className="text-lg">{question}</div>
      {options.map((opt: any) => (
        <div className={`quiz-option ${resultCheck(opt)}`} key={opt}>
          {opt}
        </div>
      ))}
    </>
  );
};

export const Result = () => {
  const { quiz } = useSelector((store: RootState) => store);

  const score = quiz.result.filter((item: any) => item.answer === item.userAns);

  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    ScrollToTop();
    dispatch(clearMcq());

    if (quiz.result.length === 0) {
      navigate("/");
    }
  }, [quiz.result]);

  return (
    <main>
      <div className="que-container">
        <div className="space-between score-box">
          <div>
            <h3>Final Result</h3>
          </div>
          <div>
            <h3>Your Score {score.length * 10}</h3>
          </div>
        </div>
        {quiz.result.map((data: any) => (
          <ResultQuiz key={data._id} data={data} />
        ))}
      </div>
    </main>
  );
};
