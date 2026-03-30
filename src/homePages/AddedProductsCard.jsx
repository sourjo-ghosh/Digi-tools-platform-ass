import React from "react";
import AddedProductsSingleCard from "./AddedProductsSingleCard";

const AddedProductsCard = ({ SelectedCart, setSelectedCart }) => {
  const total = SelectedCart.reduce((sum, item) => sum + item.price, 0);
  return (
    <div className="border border-gray-300 p-5 rounded-4xl mt-10">
      <p className="font-bold text-xl text-[#101727] mb-4">Your Cart</p>
      <div className="flex flex-col gap-4">
        {SelectedCart.map((data) => (
          <AddedProductsSingleCard
            SelectedCart={SelectedCart}
            data={data}
            key={data.id}
            setSelectedCart={setSelectedCart}
          />
        ))}
      </div>
      <div className="mt-6 pt-4 border-t border-gray-200">
        <div className="flex justify-between items-center mb-4">
        <p className="text-[#627382]">Total :</p>
          <p className="text-2xl font-bold text-[#101727]">${total}</p>
        </div>
        <button className="w-full py-4 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold text-lg">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default AddedProductsCard;
