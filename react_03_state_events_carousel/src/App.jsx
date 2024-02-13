import Carousel from "./Components/Carousel/Carousel";
import CarouselData from "./Components/Carousel/CarouselData";
import CheckList from "./Components/CheckList/CheckList/CheckList";
import ItemList from "./Components/Search/ItemList/ItemList";
import "./index.css";
import CollapsingAccordion from "./Components/Accordion/CollapsingAccordion";
import "bootstrap/dist/css/bootstrap.min.css";
import FlashQuestions from "./Components/FlashCards/FlashQuestions.jsx";
import FlashCardList from "./Components/FlashCards/FlashCardList/FlashCardList.jsx";
import { useState } from "react";

function App() {
  const [cards, setCards] = useState(FlashQuestions);
  return (
    <>
      <ItemList />
      <CheckList />
      <Carousel slides={CarouselData} />
      <CollapsingAccordion />
      <FlashCardList flashcards={cards} />
    </>
  );
}

export default App;
