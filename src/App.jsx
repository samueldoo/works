//import { useState } from "react";
//import CartItem from "./component/cartItem/CartItem"
//import ImgSlider from "./component/imgSlider/ImgSlider"
import React from "react"
import ReactDOM  from "react-dom"
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"


import Page from "./component/page/Page"
import ProductTable from "./component/productTable/ProductTable"
// import Product from "./component/product/Product"
//import {data} from "./data";


function App() {
  return (
    
      <div>
        <Router>
          <Routes>
            <Route path="/" element={<Page />} />
            <Route path="/product" element={<ProductTable />} />
            <Route path="*" element={<h1>PAGE NOT FOUND</h1>} />
          </Routes >
        </Router>
      </div>
      
  )
}

export default App
