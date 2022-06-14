import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { finnalResult } from "../../feature/quizSlice";
import { AppDispatch, RootState } from "../../store";
import "./quiz.css";

const QuizQuestion = ({ data }: any) => {
  const dispatch: AppDispatch = useDispatch();
  const [btnDisable, setBtnDisable] = useState(false);
  const [userAns, setUserAns] = useState(String);

  let i = 1;

  useEffect(() => {
    setBtnDisable(false);
  }, [data]);

  const optHandler = (selectedOpt: string) => {
    setUserAns(selectedOpt);
    dispatch(finnalResult({ selectedOpt, _id }));
    setBtnDisable(true);
  };

  const { question, options, _id } = data;

  return (
    <>
      <div className="text-lg">{question}</div>
      {options.map((opt: any) => (
        <button
          className={`quiz-option ${btnDisable && "disable"} ${
            userAns === opt && " selected-opt"
          }`}
          key={opt}
          onClick={() => optHandler(opt)}
          disabled={btnDisable}
        >
          <p>{i++}.</p>
          <p>{opt}</p>
        </button>
      ))}
    </>
  );
};

export const Quiz = () => {
  const { quiz } = useSelector((store: RootState) => store);

  const [mcqValue, setMcqValue] = useState(1);

  const mcq = quiz.selectedMcq[mcqValue - 1];
  const navigate = useNavigate();

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
        <button className="btn" id="quit-btn">
          <i className="bi bi-arrow-left"> </i> <p> Quit</p>
        </button>
        {mcqValue === quiz.selectedMcq.length && (
          <button className="btn" onClick={() => navigate("/result")}>
            <p>Result </p>
          </button>
        )}
        <button
          className="btn"
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
