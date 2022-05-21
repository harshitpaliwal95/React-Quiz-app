import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import "./quiz.css";

const QuizQuestion = ({ data }: any) => {
  const { question, options, answer } = data;
  return (
    <React.Fragment>
      <div className="text-lg">{question}</div>

      {options.map((opt: any) => (
        <div className="quiz-option" key={opt}>
          <label>
            <input type="radio" value={opt} name="quiz"></input> {opt}
          </label>
        </div>
      ))}
    </React.Fragment>
  );
};

export const Quiz = () => {
  const { quiz } = useSelector((store: RootState) => store);

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
    </main>
  );
};
