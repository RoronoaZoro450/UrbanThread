import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Shop />} />

        {/* Shop Categories */}
        <Route
          path="/men"
          element={<ShopCategory banner="/banners/men.png" category="men" />}
        />
        <Route
          path="/women"
          element={<ShopCategory banner="/banners/women.png" category="women" />}
        />
        <Route
          path="/kids"
          element={<ShopCategory banner="/banners/kids.png" category="kids" />}
        />

        {/* Product Page */}
        <Route path="/product/:productId" element={<Product />} />

        {/* Cart */}
        <Route path="/cart" element={<Cart />} />

        {/* Login/Signup */}
        <Route path="/login" element={<LoginSignup />} />
      </Routes>
    </Router>
  );
}

export default App;
