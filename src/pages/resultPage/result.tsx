import { useSelector } from "react-redux";
import { RootState } from "../../store";
import "./result.css";
import { ScrollToTop } from "../../customHook/scrollToTop";
import { useEffect } from "react";

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
  useEffect(() => {
    ScrollToTop();
  }, []);
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
