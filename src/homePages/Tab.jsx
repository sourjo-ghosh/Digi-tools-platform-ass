import React, { use, useState } from "react";
import ProductsCard from "./ProductsCard";
import AddedProductsCard from "./AddedProductsCard";

const Tab = ({ ProductPromises }) => {
  const ProductsData = use(ProductPromises);
  const [Active, setActive] = useState("products");
  const HandleTabBtn = () => {};
  return (
    <>
      <div className="flex justify-center items-center">
        <div className="flex p-2 border border-gray-300 rounded-full w-fit">
          <button
            onClick={() => {
              HandleTabBtn();
              setActive("products");
            }}
            className={`cursor-pointer border-none px-8 py-3 rounded-4xl text-xl font-semibold transition-all ${
              Active === "products"
                ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
                : "text-[#1a0066]"
            }`}
          >
            Products
          </button>
          <button
            onClick={() => {
              HandleTabBtn();
              setActive("cart");
            }}
            className={`cursor-pointer border-none px-8 py-3 rounded-full text-xl font-semibold transition-all ${
              Active === "cart"
                ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white"
                : "text-[#1a0066]"
            }`}
          >
            Cart (2)
          </button>
        </div>
      </div>
      {Active === "products" ? (
        <ProductsCard ProductsData={ProductsData}></ProductsCard>

      ) : (
        <AddedProductsCard ProductsData={ProductsData}></AddedProductsCard>
      )}
    </>
  );
};

export default Tab;
