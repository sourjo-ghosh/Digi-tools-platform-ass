import { Palette } from "lucide-react";
import React from "react";
import Products from "./Products";

const ProductsCard = ({ ProductsData }) => {
    // for(let data of ProductsData){
    //     console.log
    // }
  console.log(ProductsData)
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-15">
      {ProductsData.map((data) => {
        
        return <Products data={data} key={data.id}></Products>;
      })}

    </div>
  );
};

export default ProductsCard;
