import { useSelector } from "react-redux";
import { RootState } from "../../store";
import "./result.css";

const ResultQuiz = (data: any) => {
  const { question, options, answer, userAns } = data.data;

  const resultCheck = (opt: string) => {
    if (answer === opt) {
      return "right-ans";
    }
    if (userAns === opt) {
      if (userAns !== answer) {
        return "wrong-ans";
      }
    }

    // if (userAns === opt && userAns === answer) {
    //   return "right-ans";
    // } else if (userAns === opt) {
    //   return "wrong-ans";
    // } else {
    //   return "";
    // }
  };
  return (
    <>
      <div className="text-lg">{question}</div>
      {options.map((opt: any) => (
        <div className={`quiz-option ${resultCheck(opt.opt)}`} key={opt.opt}>
          {opt.opt}
        </div>
      ))}
    </>
  );
};

export const Result = () => {
  const { quiz } = useSelector((store: RootState) => store);

  return (
    <main>
      <div className="que-container">
        <div className="space-between score-box">
          <div>
            <h3>Finnal Result</h3>
          </div>
        </div>
        {quiz.result.map((data: any) => (
          <ResultQuiz key={data._id} data={data} />
        ))}
      </div>
    </main>
  );
};
