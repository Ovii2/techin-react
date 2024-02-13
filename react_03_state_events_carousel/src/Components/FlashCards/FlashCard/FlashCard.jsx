/* eslint-disable react/prop-types */
import { useState } from "react";
import "./FlashCard.css";

function FlashCard({ flashcard }) {
  const [flip, setFlip] = useState(false);

  const handleCardClick = () => {
    setFlip(!flip);
  };

  if (flip) {
    setTimeout(() => {
      setFlip(false);
    }, 2000);
  }

  return (
    <div className={`card ${flip ? "flip" : ""}`} onClick={handleCardClick}>
      <div className="front">
        {flashcard.question}
        <div className="flashcard-options">
          {flashcard.options.map((option) => {
            return (
              <div key={option} className="flashcard-option">
                {option}{" "}
              </div>
            );
          })}
        </div>
      </div>
      <div className="back">{flashcard.answer}</div>
    </div>
  );
}

export default FlashCard;
