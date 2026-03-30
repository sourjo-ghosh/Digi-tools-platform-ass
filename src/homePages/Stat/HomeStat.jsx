import React from "react";

const HomeStat = () => {
  return (
    <div className="flex flex-col py-10 md:flex-row justify-around items-center bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
      <div className="p-10 text-center">
        <p className="flex flex-row text-white font-extrabold text-[50px]">
          50K+
        </p>
        <p className="text-[#FFFFFF]/70">Active Users</p>
      </div>
      <div className="p-10 text-center">
        <p className="flex flex-row text-white font-extrabold text-[50px]">
          200+
        </p>
        <p className="text-[#FFFFFF]/70">Premium Tools</p>
      </div>
      <div className="p-10">
        <p className="flex flex-row text-white font-extrabold text-[50px]">
          4.9
        </p>
        <p className="text-[#FFFFFF]/70">Rating</p>
      </div>
    </div>
  );
};

export default HomeStat;
