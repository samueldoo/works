import { useState } from "react";
import { FaAnglesLeft, FaAnglesRight } from "react-icons/fa6";

const ImageSlider = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const isFirstImage = currentIndex === 0;
    const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastImage = currentIndex === images.length - 1;
    const newIndex = isLastImage ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="flex image-slider basis-[60%] flex-col justify-center items-center overflow-hiden">
      <div className="flex justify-center items-center">
        <button className="rounded-[50%] p-[10px] bg-white" onClick={goToPrevious}>
        <FaAnglesLeft className="font-normal "/>
        </button>
        <div className="slider-main-image">
          <img className="w-full aspect-square" src={images[currentIndex]} alt={`Slide ${currentIndex}`} />
        </div>
        <button className="rounded-[50%] p-[10px] bg-white" onClick={goToNext}>
        <FaAnglesRight className="stroke-1 "/>
        </button>
      </div>

      <div className="image-indicators flex gap-2">
        {images?.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Indicator ${index}`}
            onClick={() => goToImage(index)}
            className={`image-indicator border p-1  ${
              currentIndex === index ? "active" : ""
            }`}
            style={{
              width: "100px",
              height: "120px",
              opacity: currentIndex === index ? 1 : 0.5,
              cursor: "pointer",
              margin: "0",
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
