import React from 'react';

const ReadyTotransform = () => {
  return (
      <div className="flex flex-col justify-center items-center p-20 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white">
          <p className=" font-bold text-4xl ">Ready to Transform Your Workflow?</p>
          <p className="text-[16px] mt-4">Join thousands of professionals who are already using Digitools to work smarter. Start your free trial today.</p>
        <div className="flex gap-2 justify-center items-center mt-6">
          <button className="p-5 cursor-pointer rounded-4xl bg-white text-purple-700">Explore Products</button>
          <button className="p-5 cursor-pointer rounded-4xl border border-white">View Pricing</button>
        </div>
        <p className="mt-5 text-[16px]">14-day free trial • No credit card required • Cancel anytime</p>
      </div>
  );
};

export default ReadyTotransform;