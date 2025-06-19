import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="bg-gradient-to-r from-blue-500 to-indigo-600 min-h-screen flex items-center justify-center">
            <div className="max-w-3xl text-center px-6 py-16 bg-white bg-opacity-80 rounded-lg shadow-lg">
                <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                    Welcome to ShopEase
                </h1>
                <p className="text-lg md:text-xl text-gray-700 mb-8">
                    Discover the latest trends and best deals on electronics, fashion, and more. Shop with confidence and enjoy fast delivery!
                </p>
                <Link
                    to="/products"
                    className="inline-block px-8 py-3 bg-indigo-600 text-white font-semibold rounded hover:bg-indigo-700 transition"
                >
                    Start Shopping
                </Link>
            </div>
        </section>
    );
};

export default Hero;