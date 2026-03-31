import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./homePages/Banner/Banner.jsx";
import HomeStat from "./homePages/Stat/HomeStat.jsx";
import Navbar from "./homePages/Navbar/Navbar.jsx";
import PremiumTools from "./homePages/PremiumToopsTab/PremiumTools.jsx";
import Tab from "./homePages/TabToggle/Tab.jsx";
import { ToastContainer } from "react-toastify";
import React from "react";
import GetStarted from "./homePages/GetStarted/GetStarted.jsx";
import SuspanseLoading from "./homePages/SuspanseSkeleton/SuspanseLoading.jsx";
import Pricing from "./homePages/Pricing/Pricing.jsx";
import ReadyTotransform from "./homePages/ReadyToTransform/ReadyTotransform.jsx";
import Footer from "./homePages/Footer/Footer.jsx";
import ProductsRender from "./homePages/ProductsRender/ProductsRender.jsx";

function App() {
  const [Active, setActive] = useState("products");
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
      <Tab setSelectedCart={setSelectedCart} SelectedCart={SelectedCart} Active={Active} setActive={setActive}></Tab>
      <Suspense fallback={<SuspanseLoading></SuspanseLoading>}>
      <ProductsRender ProductPromises={ProductPromises} setSelectedCart={setSelectedCart} SelectedCart={SelectedCart} Active={Active} setActive={setActive}></ProductsRender>
      </Suspense>
      <GetStarted></GetStarted>
      <Pricing></Pricing>
      <ReadyTotransform></ReadyTotransform>
      <Footer></Footer>
      <ToastContainer />
    </>
  );
}

export default App;
