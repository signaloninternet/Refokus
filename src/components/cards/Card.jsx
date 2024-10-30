import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { motion } from "framer-motion";

const Card = ({ width, start, para, hover, header, title }) => {
    return (
        <motion.div
            whileHover={{ padding: "25px" }}
            className={`bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-800 p-5 rounded-xl ${width} min-h-[30rem] flex flex-col justify-between ${
                hover ? "hover:bg-gradient-to-bl hover:from-purple-700 hover:via-purple-500 hover:to-pink-500" : ""
            }`}
        >
            <div className="w-full">
                <div className="w-full flex justify-between items-center text-white">
                    <h3 className="text-lg font-semibold">{header}</h3>
                    <IoIosArrowRoundForward className="text-2xl text-indigo-300" />
                </div>
                <h1 className="text-3xl font-bold mt-5 text-indigo-100">{title}</h1>
            </div>
            <div className="down w-full">
                {start && (
                    <>
                        <h1 className="text-6xl font-bold tracking-tight leading-none text-pink-200">
                            Start a Project
                        </h1>
                        <button className="rounded-full mt-5 py-2 px-5 border-[1px] border-pink-300 text-pink-200 hover:bg-pink-500 hover:text-white">
                            Contact Us
                        </button>
                    </>
                )}
                {para && (
                    <p className="text-sm text-indigo-200 font-light">
                        Explore what drives our team.
                    </p>
                )}
            </div>
        </motion.div>
    );
};

export default Card;
