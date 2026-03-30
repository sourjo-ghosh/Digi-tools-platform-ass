import React from 'react';
import {Check} from "lucide-react";

const Pricing = () => {
  return (
      <div className="py-15 flex flex-col justify-center items-center space-y-3">
        <p className="font-extrabold text-5xl text-[#101727]">Simple, Transparent Pricing</p>
        <p className="text-[16px] text-[#627382]">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch mt-8 ">
          <div className="first-card flex flex-col space-y-5 border border-gray-200 rounded-lg py-10 px-25">
            <p className="text-[#101727] text-3xl font-bold">
              Starter
            </p>
            <p className="text-[#627382] text-xl">Perfect for getting started</p>
          <p className="font-bold text-[#101727] text-4xl">
            $0 <span className="text-[16px] text-[#627382]">/Month</span>
          </p>
          <ul className="flex flex-col gap-2 flex-grow">
            <li className="text-[16px] text-[#627382] flex gap-2 items-center"><Check className="text-[#30B868]"></Check> Access to 10 free tools</li>
            <li className="text-[16px] text-[#627382] flex gap-2 items-center"><Check className="text-[#30B868]"></Check> Basic templates</li>
            <li className="text-[16px] text-[#627382] flex gap-2 items-center"><Check className="text-[#30B868]"></Check> Community support</li>
            <li className="text-[16px] text-[#627382] flex gap-2 items-center"><Check className="text-[#30B868]"></Check> 1 project per month</li>
          </ul>
            <button className="btn text-[16px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-full py-4 rounded-4xl">Get Started Free</button>
          </div>
          <div className="second-card relative flex flex-col bg-linear-to-r from-[#4F39F6] to-[#9514FA] space-y-5 border rounded-lg py-10 px-25">
            <p className="bg-[#FEF3C6] text-[14px] text-center p-3 rounded-4xl absolute -top-5 right-38 text-[#BB4D00]">Most Popular</p>
            <p className="text-[#FFFFFF] text-3xl font-bold">
              Pro
            </p>
            <p className="text-[#FFFFFF] text-xl">Best for professionals</p>
            <p className="font-bold text-[#FFFFFF] text-4xl">
              $29 <span className="text-[16px] text-[#FFFFFF]">/Month</span>
            </p>
            <ul className="space-y-1 flex flex-col gap-2 flex-grow">
              <li className="text-[16px] text-[#ffffff] flex gap-2 items-center"><Check className="text-[#30B868]"></Check> Access to all premium tools</li>
              <li className="text-[16px] text-[#ffffff] flex gap-2 items-center"><Check className="text-[#30B868]"></Check> Unlimited templates</li>
              <li className="text-[16px] text-[#ffffff] flex gap-2 items-center"><Check className="text-[#30B868]"></Check> Priority support</li>
              <li className="text-[16px] text-[#ffffff] flex gap-2 items-center"><Check className="text-[#30B868]"></Check> Unlimited projects</li>
              <li className="text-[16px] text-[#ffffff] flex gap-2 items-center"><Check className="text-[#30B868]"></Check> Cloud sync</li>
              <li className="text-[16px] text-[#ffffff] flex gap-2 items-center"><Check className="text-[#30B868]"></Check> Advanced analytics</li>
            </ul>
            <button className="btn text-[16px] text-purple-700 w-full py-4 rounded-4xl">Start Pro Trial</button>
          </div>
          <div className="third-card flex flex-col space-y-5 border border-gray-200 rounded-lg py-10 px-25">
            <p className="text-[#101727] text-3xl font-bold">
              Enterprise
            </p>
            <p className="text-[#627382] text-xl">For teams and businesses</p>
            <p className="font-bold text-[#101727] text-4xl">
              $99 <span className="text-[16px] text-[#627382]">/Month</span>
            </p>
            <ul className="space-y-1 flex flex-col gap-2 flex-grow">
              <li className="text-[16px] text-[#627382] flex gap-2 items-center"><Check className="text-[#30B868]"></Check> Everything in Pro</li>
              <li className="text-[16px] text-[#627382] flex gap-2 items-center"><Check className="text-[#30B868]"></Check> Team collaboration</li>
              <li className="text-[16px] text-[#627382] flex gap-2 items-center"><Check className="text-[#30B868]"></Check> Custom integrations</li>
              <li className="text-[16px] text-[#627382] flex gap-2 items-center"><Check className="text-[#30B868]"></Check> Dedicated support</li>
              <li className="text-[16px] text-[#627382] flex gap-2 items-center"><Check className="text-[#30B868]"></Check> SLA guarantee</li>
              <li className="text-[16px] text-[#627382] flex gap-2 items-center"><Check className="text-[#30B868]"></Check> Custom branding</li>
            </ul>
            <button className="btn text-[16px] bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white w-full py-4 rounded-4xl">Contact Sales</button>
          </div>
        </div>

      </div>
  ); gap-2
};

export default Pricing;