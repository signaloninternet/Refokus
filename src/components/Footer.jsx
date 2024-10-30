import React from "react";

const Footer = () => {
    return (
        <div className="w-full bg-gradient-to-b from-gray-900 to-gray-800 text-gray-300">
            <div className="max-w-screen-xl mx-auto py-12 px-8 flex flex-col lg:flex-row gap-12 lg:gap-32">
                {/* Logo and Title Section */}
                <div className="flex-1">
                    <h1 className="text-[6rem] lg:text-[11.5rem] font-bold leading-none tracking-tight text-gray-100">
                        refokus.
                    </h1>
                </div>

                {/* Links and Info Section */}
                <div className="flex-1 lg:flex gap-8 lg:gap-4">
                    {/* Socials Links */}
                    <div className="flex-1">
                        <h4 className="mb-6 text-gray-400 font-semibold text-lg">Socials</h4>
                        {["Instagram", "Twitter", "LinkedIn"].map((item, index) => (
                            <a
                                key={index}
                                href={`#${item}`}
                                className="block mt-2 text-gray-500 hover:text-gray-300 transition-colors duration-200"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* Sitemap Links */}
                    <div className="flex-1">
                        <h4 className="mb-6 text-gray-400 font-semibold text-lg">Sitemaps</h4>
                        {["Home", "Work", "Careers", "Contact"].map((item, index) => (
                            <a
                                key={index}
                                href={`#${item}`}
                                className="block mt-2 text-gray-500 hover:text-gray-300 transition-colors duration-200"
                            >
                                {item}
                            </a>
                        ))}
                    </div>

                    {/* About and Logo Section */}
                    <div className="flex-1 lg:flex flex-col items-end text-right">
                        <p className="text-gray-400 leading-relaxed">
                            Refokus is a pioneering digital agency driven by design and empowered by technology.
                        </p>
                        <img
                            src="https://assets-global.website-files.com/6334198f239547d0f9cd84b3/63349803431f1562dccf1802_refokus%20logo.svg"
                            alt="Refokus Logo"
                            className="w-24 px-4 py-1 mt-6 bg-indigo-600 rounded-md"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
