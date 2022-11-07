import React from "react";
import { FcGoogle } from "react-icons/fc";

const GoogleButton = ({ action }) => {
  return (
    <div
      onClick={() => action}
      className="border border-blue-700 hover:bg-blue-500 rounded group flex items-center p-1 transition duration-100 linear"
    >
      <div className="bg-white p-4 rounded">
        <FcGoogle size={30} />
      </div>
      <p className="font-bold ml-[20px] text-lg text-blue-600 uppercase transition duration-100 group-hover:text-white">
        Continue with Google
      </p>
    </div>
  );
};

export default GoogleButton;
