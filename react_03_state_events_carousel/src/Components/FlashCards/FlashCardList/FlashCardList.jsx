/* eslint-disable react/prop-types */
import FlashCard from "../FlashCard/FlashCard";
import "./FlashCardList.css";

function FlashCardList({ flashcards }) {
  return (
    <div className="card-grid">
      {flashcards.map((flashcard) => (
        <FlashCard flashcard={flashcard} key={flashcard.id} />
      ))}
    </div>
  );
}

export default FlashCardList;
