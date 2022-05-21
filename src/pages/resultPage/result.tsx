import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { mcqQuiz } from "../../feature/quizSlice";
import { AppDispatch } from "../../store";
import "./result.css";

export const Result = () => {
  const dispatch: AppDispatch = useDispatch();

  useEffect(() => {
    dispatch(mcqQuiz("anime"));
  }, []);
  return (
    <main>
      <div className="que-container">
        <div className="space-between score-box">
          <div>
            <h3>Finnal Result</h3>
          </div>
          <div>
            <h3>Score: 20/100</h3>
          </div>
        </div>
        <div className="text-lg">Who is luffy's father</div>
        <div className="quiz-option worng-ans">1. Red Hair Shanks</div>
        <div className="quiz-option right-ans">2. Revolutionary Dragon</div>
        <div className="quiz-option">3. Navy Hero Garp</div>
      </div>
      <div className="que-container">
        <div className="text-lg">Who Kill Portgas D Ace</div>
        <div className="quiz-option right-ans">1. Akainu</div>
        <div className="quiz-option">2. Kizaru</div>
        <div className="quiz-option worng-ans">3. Marshall D. Teach</div>
      </div>
    </main>
  );
};
