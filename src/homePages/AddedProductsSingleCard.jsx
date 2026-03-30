import React from "react";
import { toast } from "react-toastify/unstyled";

const AddedProductsSingleCard = ({ data, SelectedCart, setSelectedCart }) => {
  const handleRemove = (data) => {
    toast.success('Product removes successfully')
    const remaining = SelectedCart.filter((item) => item.id !== data.id);
    setSelectedCart(remaining);
  };

  //   console.log({SelectedCart, setSelectedCart});
  return (
    <div className="flex justify-between items-center border border-gray-200 p-4 rounded-2xl mb-3">
      <div className="flex items-center gap-3">
        <div className="w-12 h-12 flex items-center justify-center border border-gray-200 rounded-full bg-gray-50 overflow-hidden">
          <img src={data.img} alt="" className="w-8 h-8 object-contain" />
        </div>
        <div>
          <p className="font-bold text-[#101727] text-lg">{data.name}</p>
          <p className="text-[#627382] text-sm">
            ${data.price}
            <span> /{data.period}</span>
          </p>
        </div>
      </div>

      <button
        onClick={()=> handleRemove(data)}
        className="px-4 py-2 rounded-xl border border-gray-300 text-sm text-gray-500 hover:bg-red-50 hover:text-red-500 hover:border-red-300 transition-all"
      >
        Remove
      </button>
    </div>
  );
};

export default AddedProductsSingleCard;
