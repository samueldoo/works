// import React, { useState } from 'react';

// const ImageSlider = ({ images }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);

//   const goToPrevious = () => {
//     const isFirstImage = currentIndex === 0;
//     const newIndex = isFirstImage ? images.length - 1 : currentIndex - 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToNext = () => {
//     const isLastImage = currentIndex === images.length - 1;
//     const newIndex = isLastImage ? 0 : currentIndex + 1;
//     setCurrentIndex(newIndex);
//   };

//   const goToImage = (index) => {
//     setCurrentIndex(index);
//   };

//   return (
//     <div className="image-slider">
//       <button onClick={goToPrevious}>Previous</button>
//       <div className="slider-main-image">
//         <img src={images[currentIndex]} alt={Slide ${currentIndex}} />
//       </div>
//       <button onClick={goToNext}>Next</button>
//       <div className="image-indicators">
//         {images.map((image, index) => (
//           <img
//             key={index}
//             src={image}
//             alt={Indicator ${index}}
//             onClick={() => goToImage(index)}
//             className={image-indicator ${currentIndex === index ? 'active' : ''}}
//             style={{
//               width: '50px',
//               height: '50px',
//               opacity: currentIndex === index ? 1 : 0.5,
//               cursor: 'pointer',
//               margin: '0 5px',
//             }}
//           />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default ImageSlider;
