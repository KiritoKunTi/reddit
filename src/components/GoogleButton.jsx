import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleButton = () => {
  return (
    <div className="border border-slate-400 hover:bg-blue-50 rounded-full flex items-center px-3 py-2 transition duration-300 linear">
      <FcGoogle size={30} />
      <p className="font-medium ml-[13%] text-lg text-gray-800">
        Continue with Google
      </p>
    </div>
  );
};

export default GoogleButton;
