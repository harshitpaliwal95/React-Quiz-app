import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { finnalResult } from "../../feature/quizSlice";
import { AppDispatch, RootState } from "../../store";
import "./quiz.css";

const QuizQuestion = ({ data }: any) => {
  const dispatch: AppDispatch = useDispatch();

  const optHandler = (selectedOpt: any) => {
    dispatch(finnalResult({ selectedOpt, _id }));
  };

  const { question, options, _id } = data;
  return (
    <>
      <div className="text-lg">{question}</div>
      {options.map((opt: any) => (
        <div className="quiz-option" key={opt}>
          <label>
            <input
              type="radio"
              value={opt}
              onChange={() => optHandler(opt)}
              name={_id}
            ></input>
            {opt}
          </label>
        </div>
      ))}
    </>
  );
};

export const Quiz = () => {
  const { quiz } = useSelector((store: RootState) => store);

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
        {quiz.selectedMcq.map((data: any) => (
          <QuizQuestion key={data._id} data={data} />
        ))}
      </div>
      <div className="btn-box">
        <button className="btn" onClick={() => navigate("/result")}>
          Result
        </button>
      </div>
    </main>
  );
};
