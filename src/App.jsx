import { Suspense } from "react";
import "./App.css";
import Banner from "./homePages/Banner";
import HomeStat from "./homePages/HomeStat";
import Navbar from "./homePages/Navbar";
import PremiumTools from "./homePages/PremiumTools";
import ProductsCard from "./homePages/ProductsCard";
import Tab from "./homePages/Tab";

function App() {
  const fetchPromises = async () =>{
      const res = await fetch('/Products.json')
      return res.json()
  }
  const ProductPromises = fetchPromises()
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <HomeStat></HomeStat>
      <PremiumTools></PremiumTools>
      <Suspense fallback={'loading....'}>
      <Tab ProductPromises={ProductPromises}></Tab>
      </Suspense>
    </>
  );
}

export default App;
