import React from 'react';
import {Link , useNavigate} from 'react-router-dom';

const NavBar = () => {
    // const navigate = useNavigate();

    // const goToProfile = () => {
    //     // Logic to navigate to the user profile page
    //     // This could be a redirect or any other action
    //     Navigate('/profile');
    // };
    return (
        <nav className="flex justify-between items-center bg-gray-800 px-8 py-4">
            <div className="text-white text-2xl font-bold">E-Commerce</div>
            {/* Search bar */}
            <div className="flex-1 flex justify-center mx-8 bg-white rounded border border-gray-300 h-10 w-80">
                <input
                    type="text"
                    placeholder="Search items..."
                    className="w-80 px-4 py-2 rounded-l-md border-none focus:outline-none"
                />
                <button className="bg-blue-600 text-white px-4 py-2 rounded-r-md hover:bg-blue-700">
                    Search
                </button>
            </div>
            <ul className="flex gap-6 m-0 mr-2px p-0 list-none">
                <li>
                    <Link to="/" className="text-white no-underline text-base hover:text-gray-300">Home</Link>
                </li>
                <li>
                    <Link to="/products" className="text-white no-underline text-base hover:text-gray-300">Products</Link>
                </li>
                <li>
                    <Link to="/cart" className="text-white no-underline text-base hover:text-gray-300">Cart</Link>
                </li>
                <li>
                    <Link to="/login"  className="text-white no-underline text-base hover:text-gray-300">Login</Link>
                </li>
                <li>
                    <Link to="/profile"  className="text-white no-underline text-base hover:text-gray-300">Profile</Link>
                </li>
            </ul>
        </nav>
    );
};

export default NavBar;
