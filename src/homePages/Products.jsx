import { Check } from "lucide-react";
import React, { useState } from "react";
import { toast } from "react-toastify";

const Products = ({ data, setSelectedCart, SelectedCart }) => {
  const [Active, setActive] = useState(false);
  const HandleCartBtn = (data) => {
    const isAlreadyAdded = SelectedCart.some((item) => item.id === data.id);

    if (isAlreadyAdded) {
      toast.error(`${data.name} already in cart!`);
      return;
    }

    setActive(true);
    setSelectedCart([...SelectedCart, data]);
    toast.success(`${data.name} added to cart!`);
  };
  return (
    <div className="relative p-8 border border-gray-300 rounded-2xl gap-3 h-full flex flex-col items-start">
      <span
        className={`absolute top-4 right-4  text-sm font-semibold px-3 py-1 rounded-full
       ${
         data.tagType === "popular"
           ? "text-purple-700 bg-purple-100"
           : data.tagType === "new"
             ? "text-blue-700 bg-blue-100"
             : "text-yellow-700 bg-yellow-100"
       }
      `}
      >
        {data.tag}
      </span>
      <img
        src={data.img}
        alt=""
        className="p-3 border object-fit border-gray-300 rounded-full w-15"
        h-15
      />
      <p className="text-[24px] font-bold text-[#101727]">{data.name}</p>
      <p className="text-[#627382] text-[16px] h-full">{data.description}</p>
      <p className="text-[20px] text-[#101727] font-bold">
        ${data.price}{" "}
        <span className="text-[16px] text-[#627382] font-medium">
          /{data.period}
        </span>
      </p>
      <ul className="">
        {data.features.map((li) => (
          <li className="flex gap-2 text-[#627382] text-xl">
            <Check className="text-[#30B868]"></Check> {li}
          </li>
        ))}
      </ul>
      <button
        onClick={() => HandleCartBtn(data)}
        disabled={Active}
        className="btn w-full px-30 py-5 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white rounded-4xl"
      >
        {Active ? "Added to cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default Products;
