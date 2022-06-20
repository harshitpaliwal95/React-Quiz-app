import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearMcq, clearResult } from "../../feature/quizSlice";
import { AppDispatch, RootState } from "../../store";
import "./quiz.css";
import { QuizQuestion } from "./quizQuestion";

export const Quiz = () => {
  const { quiz } = useSelector((store: RootState) => store);
  const dispatch: AppDispatch = useDispatch();

  const [mcqValue, setMcqValue] = useState(1);
  const navigate = useNavigate();

  useEffect(() => {
    if (quiz.selectedMcq.length === 0) {
      navigate("/");
    }
  }, [quiz.selectedMcq]);

  const mcq = quiz.selectedMcq[mcqValue - 1];

  const quitHandler = () => {
    dispatch(clearMcq());
    dispatch(clearResult());
  };

  return (
    <main>
      <div className="que-container">
        <div className="space-between score-box">
          <div>
            <h4>Questions: 5</h4>
          </div>
          <div>
            <h4>Total Points: 50</h4>
          </div>
        </div>

        {mcq !== undefined ? <QuizQuestion data={mcq} /> : null}
      </div>
      <div className="btn-box space-between" id="btn-box-wd">
        <button className="btn" id="quit-btn" onClick={() => quitHandler()}>
          <i className="bi bi-arrow-left"> </i> <p> Quit</p>
        </button>
        {mcqValue === quiz.selectedMcq.length && (
          <button className="btn  quiz-btn" onClick={() => navigate("/result")}>
            <p>Result </p>
          </button>
        )}
        <button
          className="btn quiz-btn"
          id={`${mcqValue === quiz.selectedMcq.length ? "hidden" : null}`}
          onClick={() => setMcqValue((pre) => (pre += 1))}
        >
          <p>Next </p>
          <i className="bi bi-arrow-right"></i>
        </button>
      </div>
    </main>
  );
};
