import React from "react";
import { IoIosReturnRight } from "react-icons/io";

const Button = ({ title = "Get Started" }) => {
  return (
    <div className="w-[140px] px-4 py-2 rounded-full flex items-center justify-between text-gray-700 bg-gradient-to-r from-pink-300 via-red-300 to-yellow-200 hover:bg-gradient-to-bl hover:scale-105 transition-transform duration-200 focus:ring-4 focus:outline-none focus:ring-red-200 dark:focus:ring-red-500 font-medium text-sm px-5 py-2 text-center mb-2 shadow-lg">
      <span className="text-sm font-semibold">{title}</span>
      <IoIosReturnRight className="text-lg" />
    </div>
  );
};

export default Button;
