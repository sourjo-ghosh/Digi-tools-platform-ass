import { Palette } from "lucide-react";
import React from "react";
import Products from "./Products";

const ProductsCard = ({ ProductsData, SelectedCart, setSelectedCart }) => {
  console.log(SelectedCart.length)
//   console.log(ProductsData);
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-15">
      {ProductsData.map((data) => {
        return <Products data={data} key={data.id} SelectedCart={SelectedCart} setSelectedCart={setSelectedCart}></Products>;
      })}
    </div>
  );
};

export default ProductsCard;
