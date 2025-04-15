import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes, Link, useParams } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const products = [
  { id: 1, name: "Smartphone", price: "$699", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Laptop", price: "$999", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Headphones", price: "$199", image: "https://via.placeholder.com/150" },
];

const HeroSection = () => (
  <section className="text-center p-10 bg-gray-100">
    <h1 className="text-5xl font-bold">Tech Haven</h1>
    <p className="text-lg mt-2">Discover the latest gadgets at the best prices!</p>
  </section>
);

const ProductList = () => (
  <section className="p-10 grid grid-cols-1 md:grid-cols-3 gap-6">
    {products.map((product) => (
      <div key={product.id} className="border p-4 rounded-lg shadow-lg">
        <img src={product.image} alt={product.name} className="w-full" />
        <h2 className="text-xl font-semibold mt-3">{product.name}</h2>
        <p className="text-gray-700">{product.price}</p>
        <Link to={`/product/${product.id}`} className="mt-3 inline-block bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-800">View Details</Link>
      </div>
    ))}
  </section>
);

const ProductDetails = () => {
  const { id } = useParams();
  const product = products.find((p) => p.id === parseInt(id));
  if (!product) return <p className="text-center p-10">Product not found</p>;
  return (
    <div className="p-10 text-center">
      <img src={product.image} alt={product.name} className="w-full max-w-md mx-auto" />
      <h2 className="text-3xl font-bold mt-4">{product.name}</h2>
      <p className="text-lg text-gray-700">{product.price}</p>
    </div>
  );
};

const Navbar = () => (
  <nav className="p-4 bg-blue-700 text-white flex justify-between">
    <Link to="/" className="text-xl font-bold">Tech Haven</Link>
  </nav>
);

const Footer = () => (
  <footer className="p-4 bg-gray-900 text-white text-center">
    <div className="flex justify-center gap-4">
      <FaFacebook />
      <FaTwitter />
      <FaInstagram />
    </div>
  </footer>
);

const App = () => (
  <Router>
    <Navbar />
    <Routes>
      <Route path="/" element={<><HeroSection /><ProductList /></>} />
      <Route path="/product/:id" element={<ProductDetails />} />
    </Routes>
    <Footer />
  </Router>
);

export default App;
