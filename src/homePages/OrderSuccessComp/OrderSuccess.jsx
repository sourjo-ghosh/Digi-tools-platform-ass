import { Check } from "lucide-react";

const OrderSuccess = ({ setShowSuccess }) => {
  return (
    <div className="flex flex-col items-center justify-center py-16 gap-6">
      <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center">
        <span>
          <Check></Check>
        </span>
      </div>

      <h2 className="text-2xl font-bold text-[#101727]">Order Confirmed!</h2>

      <p className="text-[#627382] text-center">
        Your purchase was successful. <br />
        Check your email for details.
      </p>

      <button
        onClick={() => setShowSuccess(false)}
        className="btn px-8 py-3 rounded-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white font-semibold"
      >
        Back to Products
      </button>
    </div>
  );
};

export default OrderSuccess;
