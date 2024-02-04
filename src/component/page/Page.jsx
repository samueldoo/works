import { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import ImageSlider from "../cartItem/CartItem";
import ProductTable from "../productTable/ProductTable";
import { Link } from "react-router-dom";
import img1 from '../../assets/rec-7.png'
import img2 from '../../assets/rec_63.png'
import img3 from '../../assets/rec_61.png'
const ImageData = [ img1, img2, img3];
const Page = () => {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("M");
  const [selectedColor, setSelectedColor] = useState("");
  const [size, setSize] = useState('Choose...');
  const [color, setColor] = useState('Choose...');
  const handleQuantityChange = (event) => {
    setQuantity(parseInt(event.target.value, 10));
  };

  const handleSizeChange = (event) => {
    setSelectedSize(event.target.value);
  };

  const handleColorChange = (event) => {
    setSelectedColor(event.target.value);
  };

  const handleAddToCart = () => {
    // Implement logic to add the selected sweatshirt to the cart
    console.log(
      `Added to cart: ${quantity} sweatshirt(s) of size ${selectedSize} and color ${selectedColor}`
    );
  };

  const handleCheckout = () => {
    // Implement logic to proceed to checkout
    console.log("Proceeding to checkout");
  };

  return (
    <div className="flex flex-col lg:flex flex-grow bg-[#FFFFFF] px-20 py-10 items-center justify-center w-screen">
      <div className="flex bg-[#fdf5f0] items-center justify-center w-fit  gap-5 p-7">
        <ImageSlider className="" images={ImageData}/>
        {/* <section>
          <div className="basis-[60%]">
            <img className="image w-64" src={image} alt="Sweat shirt" />
          </div>
          <div className="flex">
            <div className="bg-gray-300 border-2">
              <img src={images} alt="" />
            </div>
            <div className="bg-gray-300 border-2">
              <img src={imager} alt="" />
            </div>
            <div className="bg-gray-300 border-2">
              <img src={images} alt="" />
            </div>
          </div>
        </section> */}
            
        <div className="flex flex-col gap-4 basis-[40%]">
          <div className="flex justify-end">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g id="Edit / Close_Square">
                <path
                  id="Vector"
                  d="M9 9L11.9999 11.9999M11.9999 11.9999L14.9999 14.9999M11.9999 11.9999L9 14.9999M11.9999 11.9999L14.9999 9M4 16.8002V7.2002C4 6.08009 4 5.51962 4.21799 5.0918C4.40973 4.71547 4.71547 4.40973 5.0918 4.21799C5.51962 4 6.08009 4 7.2002 4H16.8002C17.9203 4 18.4801 4 18.9079 4.21799C19.2842 4.40973 19.5905 4.71547 19.7822 5.0918C20.0002 5.51962 20.0002 6.07967 20.0002 7.19978V16.7998C20.0002 17.9199 20.0002 18.48 19.7822 18.9078C19.5905 19.2841 19.2842 19.5905 18.9079 19.7822C18.4805 20 17.9215 20 16.8036 20H7.19691C6.07899 20 5.5192 20 5.0918 19.7822C4.71547 19.5905 4.40973 19.2842 4.21799 18.9079C4 18.4801 4 17.9203 4 16.8002Z"
                  stroke="black"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </g>
            </svg>
          </div>
          <h2 className="text-2xl font-bold mb-4">Sweat Shirts</h2>
          <p className="font-normal">100% pure cotton unisex sweat shirts</p>
          <div className="w-full flex items-center gap-5">
            <button className="rounded-[50%]   h-12 w-12 p-2 bg-[#FFFFFF]" onClick={handleColorChange}>2XL</button>
            <button className="rounded-[50%]   h-12 w-12 p-2   bg-[#edd7c8]" onClick={handleColorChange}>XL</button>
            <button className="rounded-[50%]    h-12 w-12 p-2  bg-[#FFFFFF]" onClick={handleColorChange}>L</button>
            <button className="rounded-[50%]    h-12 w-12 p-2  bg-[#FFFFFF]" onClick={handleColorChange}>M</button>
            <button className="rounded-[50%]    h-12 w-12 p-2 bg-[#FFFFFF]" onClick={handleColorChange}>S</button>
          </div>
            
          <label className="flex gap-4">
            Color:
            <select>
            <option value="Choose..." disabled>Choose...</option>
            </select>
          </label>

          <label className="flex gap-4">
            Quantity:
            <input
              type="number"
              value={quantity}
              onChange={handleQuantityChange}
              min="1"
            />
          </label>

          <div className="flex gap-4">
            <button
              onClick={handleAddToCart}
              className="flex font-semibold py-2 px-4 rounded-md bg-[#C9AB96]"
            >
              Add to Cart
            </button>
            <button
              onClick={handleCheckout}
              className="font-semibold py-2 px-4 rounded-md bg-[#C9AB96]"
            >
              Checkout
            </button>
          </div>
          <div className="flex items-center gap-0   mt-20 justify-end">
          <p className="text-lg">
            <Link to='/product'>Visit our Store</Link>
          </p>
          <GoArrowRight className="w-7" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
