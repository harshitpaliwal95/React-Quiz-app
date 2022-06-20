import { useNavigate } from "react-router-dom";
import "./rules.css";
export const Rules = () => {
  const navigate = useNavigate();
  return (
    <main>
      <div className="rules-box">
        <div className="heading-small">
          1. The quiz has total of 5 questions.
        </div>
        <div className="heading-small">
          2. For every question there will be 4 options out of which only one is
          correct.
        </div>
        <div className="heading-small">
          3. Player will get 10 minutes to play the quiz post to which the quiz
          will automatically get submitted.
        </div>
        <div className="heading-small">
          4. Switching of tabs during the quiz is not allowed and hence would be
          disabled for the entire time during the quiz.
        </div>
        <div className="heading-small">
          5. Trying to switch the tabs will initally give a warning and then
          immediately submit the quiz for the same action done for the second
          time.
        </div>
        <div className="heading-small">
          6. Every correct answer will be awarded +10 points, and -5 points for
          every wrong answer.
        </div>
      </div>
      <button className="btn rules-box-btn" onClick={() => navigate("/quiz")}>
        <p>Start Quizz</p>
      </button>
    </main>
  );
};
