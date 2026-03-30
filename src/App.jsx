import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./homePages/Banner";
import HomeStat from "./homePages/HomeStat";
import Navbar from "./homePages/Navbar";
import PremiumTools from "./homePages/PremiumTools";
import ProductsCard from "./homePages/ProductsCard";
import Tab from "./homePages/Tab";
import { ToastContainer } from "react-toastify";
import React from "react";

function App() {
  const fetchPromises = async () =>{
      const res = await fetch('/Products.json')
      return res.json()
  }
  const ProductPromises = fetchPromises()
    const [SelectedCart, setSelectedCart] = useState([]);
  return (
    <>
      <Navbar setSelectedCart={setSelectedCart} SelectedCart={SelectedCart}></Navbar>
      <Banner></Banner>
      <HomeStat></HomeStat>
      <PremiumTools></PremiumTools>
      <Suspense fallback={'loading....'}>
      <Tab ProductPromises={ProductPromises} setSelectedCart={setSelectedCart} SelectedCart={SelectedCart}></Tab>
      </Suspense>


      <ToastContainer />
    </>
  );
}

export default App;
