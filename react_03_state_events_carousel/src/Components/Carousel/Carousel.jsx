/* eslint-disable react/prop-types */
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleArrowLeft, faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./Carousel.css";
import CarouselData from "../../Components/Carousel/CarouselData.jsx";

function Carousel({ slides }) {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  const previousSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <div className="carousel-container">
      <div className="carousel">
        <FontAwesomeIcon className="left-arrow" icon={faCircleArrowLeft} onClick={previousSlide} />
        {CarouselData.map((slide, index) => (
          <div className={index === current ? "slide-active" : "slide"} key={index}>
            {index === current && <img src={slide.image} alt="travel image" />}
          </div>
        ))}
        <FontAwesomeIcon className="right-arrow" icon={faCircleArrowRight} onClick={nextSlide} />
      </div>
      <div className="thumbnail-container">
        {CarouselData.map((slide, index) => (
          <img
            key={index}
            src={slide.image}
            alt="travel image thumbnail"
            className={index === current ? "thumbnail-active" : "thumbnail"}
            onClick={() => setCurrent(index)}
          />
        ))}
      </div>
    </div>
  );
}

export default Carousel;
