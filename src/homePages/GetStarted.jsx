import { Package, Rocket, User } from "lucide-react";
import React from "react";

const GetStarted = () => {
  return (
    <div className="py-25 flex flex-col justify-center items-center">
      <p className="text-[#101727] font-bold text-5xl">
        Get Started in 3 Steps
      </p>
      <p className="text-[16px] text-[#627382] mt-5">
        Start using premium digital tools in minutes, not hours.
      </p>
      <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        <div className="flex flex-col rounded-2xl relative justify-center items-center p-15 bg-gray-100 space-y-3">
          <p className="absolute top-3 right-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-2 rounded-full">01</p>
            <span className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
              <User></User>
            </span>
          <p className="text-[#101727] font-bold text-2xl">Create Account</p>
          <p>Sign up for free in seconds. No credit card required to get started.</p>
        </div>
        <div className="flex flex-col rounded-2xl relative justify-center items-center p-15 bg-gray-100 space-y-3">
          <p className="absolute top-3 right-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-2 rounded-full">02</p>
            <span className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
              <Package></Package>
            </span>
          <p className="text-[#101727] font-bold text-2xl">Choose Products</p>
          <p>Browse our catalog and select the tools that fit your needs.</p>
        </div>
        <div className="flex flex-col rounded-2xl relative justify-center items-center p-15 bg-gray-100 space-y-3">
          <p className="absolute top-3 right-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white p-2 rounded-full">02</p>
            <span className="w-20 h-20 bg-purple-100 rounded-full flex items-center justify-center">
              <Rocket></Rocket>
            </span>
          <p className="text-[#101727] font-bold text-2xl">Start Creating</p>
          <p>Download and start using your premium tools immediately.</p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;

