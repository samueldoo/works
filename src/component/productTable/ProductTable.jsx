import { useState } from "react";
import { GoArrowLeft } from "react-icons/go";
import { TiEdit } from "react-icons/ti";
import { RiDeleteBin6Line } from "react-icons/ri";
import images from "../../assets/rectangle-1.png"
 import imager from "../../assets/rectangle-5.png"
 import imag from "../../assets/rectangle-4.png"
 import photo from "../../assets/rectangle-3.png"
 import photoes from "../../assets/rectangle-6.png"
 import item2 from "../../assets/item2.png"
import { Link } from "react-router-dom";

const ProductTable = () => {
  const [products, setProducts] = useState([
    { id: 1, image: <img src={images} alt="" />, name: "Black Color Hoodie", size: "size: Large", price: 51, quantity: 2},
    {
      id: 2, image: <img src={imager} alt="" />, name: "Black Collar T-Shirt",
      size: "size: Extra Large",
      price: 49,
      quantity: 1,
    },
    { id: 3, image: <img src={imag} alt="" />, name: "Base Ball Cap", size: "size: Large", price: 10, quantity: 1 },
    { id: 4, image: <img src={photo} alt="" />, name: "Brown Sweater", size: "size: Large", price: 45, quantity: 2 },
    { id: 5, image: <img src={item2} alt="" />, name: "Red T-Shirt", size: "size: Medium", price: 30, quantity: 2 },
    { id: 6, image: <img src={photoes} alt="" />, name: "Black Color Hoodie", size: "size: Large", price: 51, quantity: 2},
  ]);

  const [couponCode, setCouponCode] = useState("");
  const [discount, setDiscount] = useState(0);
  const [notes, setNotes] = useState("");
  const shippingCharge = 56; // Replace with your actual shipping charge
  const estimatedTax = 156; // Replace with your actual tax amount
  const grandTotal = 56; // Replace with your actual total logic

  
  const handleCouponApply = () => {
    // Assuming MNTF25 provides a 25% discount
    if (couponCode === "MNTF25" ? 0.25 : 0) {
      setDiscount(0.25); // 25% discount
    } else {
      setDiscount(0); // No discount
    }
  };

  const calculateTotal = () => {
    return grandTotal - grandTotal * discount + shippingCharge + estimatedTax;
  };

  const handleContinueShopping = () => {
    // Add logic for continuing shopping
    window.location.href = "/";
  };

  const handleCheckout = () => {
    // Add logic for checkout
    alert("Note Added")
  }
  
  

  const handleIncrement = (index) => {
    const newProducts = [...products];
    newProducts[index].quantity += 1;
    setProducts(newProducts);
  };

  const handleDecrement = (index) => {
    const newProducts = [...products];
    if (newProducts[index].quantity > 1) {
      newProducts[index].quantity -= 1;
      setProducts(newProducts);
    }
  };

  const handleQuantityChange = (index, newQuantity) => {
      // Ensure newQuantity is a positive integer or 0
  newQuantity = Math.max(0, Math.floor(newQuantity));
  const newProducts = [...products];
  newProducts[index].quantity = newQuantity;
  setProducts(newProducts);
  };

const handleDelete = (id) => {
    const updatedProducts = products.filter((product) => product.id !== id);
    setProducts(updatedProducts);
  };

  return (
    <div className="flex  gap-20 w-screen justify-between bg-[#e7f9fa] mx-auto px-20 py-10 overflow-x-auto">
      <div className="flex flex-[3] flex-col mx-auto rounded shadow mt-5">
        <table className="w-full table-auto items-center border-collapse">
          <thead className="bg-[#D4EEEF]">
            <tr className="border-b">
              <th className="py-2">Product</th>
              <th className="py-2">Product Description</th>
              <th className="py-2">Price</th>
              <th className="py-2">Quantity</th>
              <th className="py-2">Total</th>
              <th className="py-2"></th>
            </tr>
          </thead>
          <tbody className=" bg-white">
            {products.map((product, index) => (
              <tr key={index} className="border-b ">
                <td className="flex justify-center py-2 text-gray-500">{product.image}</td>
                <td className="py-2 text-gray-500 text-center">{product.name} <br />{product.size}</td>
                
                <td className="py-2 text-gray-500 text-center">${product.price}</td>
                <td className="justify-center py-2 flex items-center">
                  <button
                    onClick={() => handleDecrement(index)}
                    className="bg-[#7ACBCE] w-12 h-10 px-2 py-1  focus:outline-none"
                  >
                    -
                  </button>
                  <input
                    type=""
                    value={product.quantity}
                    readOnly
                    onChange={() => {}}
                    className="w-12 p-2 border  text-center block"
                  />
                  <button
                    onClick={() => handleIncrement(index)}
                    className="bg-[#7ACBCE] w-12 h-10 px-2 py-1  focus:outline-none"
                  >
                    +
                  </button>
                  
                </td>
                <td className="py-2 text-center text-gray-400 ">${product.price * product.quantity}</td>
                <td className=""><button onClick={() => handleDelete(product.id)} className=" text-red-500"><RiDeleteBin6Line className=" mt-2 text-red-500 fas fa-heart" /></button></td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="mt-9">
          <label className="block text-sm font-medium text-gray-700">
            Add a Note (Optional):
          </label>
          <div className="relative">
          <textarea
            value={notes}
            rows="3"
            onChange={(e) => setNotes(e.target.value)}
            className="mt-1 block w-full p-2 border rounded-md resize-none"
            placeholder="You can add more description or details about what you want here."
          />
          <div className="absolute bottom-1 right-1">
          <TiEdit className=""/>
          </div>
          
          </div>
        </div>
        <div className="flex justify-between mt-4">
        <div className="flex items-center ml-5 justify-end">
        <GoArrowLeft className="flex items-center" />
          <p className="text-lg">
           <Link to='/'>Continue to Shopping</Link>
          </p>
          {/* <GoArrowRight className="w-6  gap-[9px] mr-" /> */}
          </div>
          {/* <div className="flex  items-center">
          
        <p onClick={handleContinueShopping} className="border-none bg-blue-50 text-black font-medium px-4 rounded"><GoArrowLeft className="flex items-center" />Continue to Shopping</p>
          </div> */}
        <div>
        <button onClick={handleCheckout} className="bg-[#7ACBCE] text-black font-medium text-lg px-4 py-2 rounded">
            Checkout
          </button>
        </div>
          
        </div>
        </div>



      
    
      <div className="flex flex-[2] flex-col max-w-md p-4 gap-4 h-fit mt-5">
      <table className="w-full  border-collapse table-auto bg-white ">
      <thead className="bg-[#D4EEEF] w-full">
        <tr className="border-b w-full  text-center">
      
            <th className=" py-2">Order Summary</th>
            
        <th className=" "></th>
      
            
           
           
        </tr>
      </thead>
        <tbody>
          <tr className=" *:px-5 ">
            <td className="py-3  ">Grand Total :</td>
            <td className="py-3 text-gray-400">${grandTotal}</td>
          </tr>
          <tr className=" *:px-5 ">
            <td className="py-3">Discount :</td>
            <td className="py-3 text-gray-400">${grandTotal * discount}</td>
          </tr>
          <tr className=" *:px-5 ">
            <td className="py-3">Shipping Charge :</td>
            <td className="py-3 text-gray-400">$56</td> {/* Replace with your actual shipping charge */}
          </tr>
          <tr className=" *:px-5 ">
            <td className="py-3">Estimated Tax :</td>
            <td className="py-3 text-gray-400">$156</td> {/* Replace with your actual tax amount */}
          </tr>
          <tr className=" *:px-5  ">
            <td className="py-3">Total :</td>
            <td className="py-3">${grandTotal - grandTotal * discount - 56 + 156}</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-4 space-y-7 ">
        <label className="bg-[#FDF1DB] py-3  px-6 text-base font-medium text-gray-400">Use coupon code MNTF25 and get 25% discount !</label>
        <div className="flex items-center">
          <input
            type="text"
            value={couponCode}
            placeholder="coupon code"
            onChange={(e) => setCouponCode(e.target.value)}
            className="bg-[#d7f5f7] flex-1 w-full p-2 border rounded text-gray-700 border-none"
          />
          <button onClick={handleCouponApply} className="bg-[#7ACBCE] text-white px-4 py-2">
            Apply
          </button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ProductTable;
