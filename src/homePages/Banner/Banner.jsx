import { Circle, Play } from "lucide-react";
import React from "react";

const Banner = () => {
  return (
    // <div className="py-20 flex md:justify-between md:items-center flex-col gap-15">
    <div className="w-11/12 mx-auto pt-20 mb-6 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 items-center gap-20 lg:px-30">
      <div className="left-side space-y-3">
        <p className="bg-[#E1E7FF] inline py-1.5 px-2 rounded-2xl">
          <span className="text-[16px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent leading-normal">
            New: AI-Powered Tools Available
          </span>
        </p>
        <p className="text-[60px] md:text-[50px] text-[#101727] font-extrabold">
          Supercharge Your <br />
          <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent leading-normal">
            Digital Workflow
          </span>
        </p>
        <p className="text-[#627382] text-2xl">
          Access premium AI tools, design assets, templates, and productivity{" "}
          <br />
          software—all in one place. Start creating faster today. <br /> Explore
          Products
        </p>
        <div className="flex items-center gap-3">
          <button className="btn btn-outline p-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-[16px] text-[white] rounded-4xl">
            Explore Products
          </button>
          <button className="btn border text-[16px] border-[#4F39F6] rounded-4xl p-6 bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent leading-normal">
            {<Play className="text-[#4F39F6]"></Play>}
            Watch Demo
          </button>
        </div>
      </div>
      <div>
        <img
          src={`https://i.ibb.co.com/qF9vpTw3/banner.png`}
          className="w-100 h-140 "
          alt=""
        />
      </div>
    </div>
  );
};
export default Banner;
