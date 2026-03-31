import { Suspense, useState } from "react";
import "./App.css";
import Banner from "./homePages/Banner/Banner.jsx";
import HomeStat from "./homePages/Stat/HomeStat.jsx";
import Navbar from "./homePages/Navbar/Navbar.jsx";
import PremiumTools from "./homePages/PremiumToopsTab/PremiumTools.jsx";
import ProductsCard from "./homePages/AllProductsBeforeAddedToCart/ProductsCard.jsx";
import Tab from "./homePages/TabToggle/Tab.jsx";
import { ToastContainer } from "react-toastify";
import React from "react";
import GetStarted from "./homePages/GetStarted/GetStarted.jsx";
import Confirmation from "./homePages/OrderSuccessComp/OrderSuccess.jsx";
import SuspanseLoading from "./homePages/SuspanseSkeleton/SuspanseLoading.jsx";
import Pricing from "./homePages/Pricing/Pricing.jsx";
import ReadyTotransform from "./homePages/ReadyToTransform/ReadyTotransform.jsx";
import Footer from "./homePages/Footer/Footer.jsx";

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
      <Suspense fallback={<SuspanseLoading></SuspanseLoading>}>
      <Tab ProductPromises={ProductPromises} setSelectedCart={setSelectedCart} SelectedCart={SelectedCart}></Tab>
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
