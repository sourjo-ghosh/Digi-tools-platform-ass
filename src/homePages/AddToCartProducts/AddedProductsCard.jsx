import React, { useState } from "react";
import AddedProductsSingleCard from "./AddedProductsSingleCard.jsx";
import OrderSuccess from "../OrderSuccessComp/OrderSuccess.jsx";
import { toast } from "react-toastify";

const AddedProductsCard = ({ SelectedCart, setSelectedCart }) => {
  const [showSuccess, setShowSuccess] = useState(false);
  let total = SelectedCart.reduce((sum, item) => sum + item.price, 0);
  const HandleProceedCheckoutBtn = () => {
    if(SelectedCart.length === 0){
        toast.error(`You don't have added any product to your cart`)
    } else {
        
        setSelectedCart([]);
        setShowSuccess(true);
    }
  };
  if(showSuccess) return <OrderSuccess setShowSuccess={setShowSuccess} />;
  return (
    <div className="w-11/12 mx-auto border border-gray-300 p-5 rounded-4xl mt-10">
      <p className="font-bold text-xl text-[#101727] mb-4">Your Cart</p>
      <div>
        <div className="flex flex-col gap-4">
          {SelectedCart.length === 0 ? (
            <div className="p-15 flex flex-col gap-3 justify-center items-center">
              <h2 className="text-2xl font-bold text-[#131313]">
                No Product Added To Cart Yet!
              </h2>
              <p className="text-xl text-[#131313]/50">
                Go to product section.
              </p>
            </div>
          ) : (
            SelectedCart.map((data) => {
              return (
                <AddedProductsSingleCard
                  SelectedCart={SelectedCart}
                  data={data}
                  key={data.id}
                  setSelectedCart={setSelectedCart}
                />
              );
            })
          )}
        </div>
        <div className="mt-6 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center mb-4">
            <p className="text-[#627382]">Total :</p>
            <p className="text-2xl font-bold text-[#101727]">${total}</p>
          </div>
          <button
            onClick={() => HandleProceedCheckoutBtn()}
            className="cursor-pointer w-full py-4 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold text-lg"
          >
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddedProductsCard;
