import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { finnalResult } from "../../feature/quizSlice";
import { AppDispatch } from "../../store";
import "./quiz.css";

export const QuizQuestion = ({ data }: any) => {
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
