import React from "react";
import "./quiz.css";

export const Quiz = () => {
  return (
    <main>
      {/* <!-- <div className="heading-x-lg">One Piece</div> --> */}
      <div className="que-container">
        <div className="space-between score-box">
          <div>
            <h4>Question: 1/5</h4>
          </div>
          <div>
            <h4>Score: 00</h4>
          </div>
        </div>
        <div className="text-lg">Who is luffy's father</div>
        <div className="quiz-option">1. Red Hair Shanks</div>
        <div className="quiz-option">2. Revolutionary Dragon</div>
        <div className="quiz-option">3. Navy Hero Garp</div>
        <div className="space-between btn-box">
          <button className="btn">
            <i className="bi bi-arrow-left"></i> Pre Question
          </button>
          <button className="btn">Skip Question</button>
          <button className="btn">
            <p>Next Question</p>
            <i className="bi bi-arrow-right"></i>
          </button>
        </div>
      </div>
    </main>
  );
};
