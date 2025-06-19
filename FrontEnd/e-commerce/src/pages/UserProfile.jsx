import React from "react";

const UserProfile = () => {
  return (
    <div>
    <div className="max-w-3xl mx-auto p-6 bg-white rounded-lg shadow-lg mt-10">
        {/* Profile Header */}
        <div className="flex items-center space-x-6 mb-8">
            <img
                className="w-24 h-24 rounded-full border-4 border-blue-500 object-cover"
                src="https://i.pravatar.cc/150?img=3"
                alt="User avatar"
            />
            <div>
                <h2 className="text-2xl font-bold text-gray-800">John Doe</h2>
                <p className="text-gray-500">johndoe@email.com</p>
                <p className="text-gray-500">123 Main St, New York, NY</p>
                <button className="mt-2 px-4 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 transition">
                    Edit Profile
                </button>
            </div>
        </div>

        {/* Tabs */}
        <div className="flex border-b mb-6">
            <button className="px-4 py-2 text-blue-600 border-b-2 border-blue-600 font-semibold focus:outline-none">
                Orders
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-blue-600 focus:outline-none">
                Edit Profile
            </button>
            <button className="px-4 py-2 text-gray-600 hover:text-blue-600 focus:outline-none">
                Change Password
            </button>
        </div>

        {/* Orders Section */}
        <div>
            <h3 className="text-xl font-semibold mb-4">Current Order</h3>
            <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <div className="flex justify-between items-center">
                    <div>
                        <p className="font-medium">Order #12345</p>
                        <p className="text-gray-500 text-sm">Placed on: 2024-06-10</p>
                    </div>
                    <span className="px-3 py-1 bg-yellow-400 text-white rounded-full text-xs font-semibold">
                        Processing
                    </span>
                </div>
                <ul className="mt-2 text-gray-700 text-sm list-disc list-inside">
                    <li>Wireless Headphones x1</li>
                    <li>Bluetooth Speaker x2</li>
                </ul>
                <div className="text-right mt-2 font-bold text-gray-800">$120.00</div>
            </div>

            <h3 className="text-xl font-semibold mb-4">Order History</h3>
            <div className="space-y-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-medium">Order #12234</p>
                            <p className="text-gray-500 text-sm">Placed on: 2024-05-20</p>
                        </div>
                        <span className="px-3 py-1 bg-green-400 text-white rounded-full text-xs font-semibold">
                            Delivered
                        </span>
                    </div>
                    <ul className="mt-2 text-gray-700 text-sm list-disc list-inside">
                        <li>Smart Watch x1</li>
                    </ul>
                    <div className="text-right mt-2 font-bold text-gray-800">$80.00</div>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex justify-between items-center">
                        <div>
                            <p className="font-medium">Order #12111</p>
                            <p className="text-gray-500 text-sm">Placed on: 2024-04-15</p>
                        </div>
                        <span className="px-3 py-1 bg-green-400 text-white rounded-full text-xs font-semibold">
                            Delivered
                        </span>
                    </div>
                    <ul className="mt-2 text-gray-700 text-sm list-disc list-inside">
                        <li>USB-C Cable x3</li>
                    </ul>
                    <div className="text-right mt-2 font-bold text-gray-800">$15.00</div>
                </div>
            </div>
        </div>

        {/* Edit Profile Modal (hidden by default, for demonstration) */} 
        {/* <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
            <div className="bg-white p-6 rounded-lg w-full max-w-md">
                <h3 className="text-lg font-semibold mb-4">Edit Profile</h3>
                <form className="space-y-4">
                    <input className="w-full border px-3 py-2 rounded" placeholder="Name" />
                    <input className="w-full border px-3 py-2 rounded" placeholder="Email" />
                    <input className="w-full border px-3 py-2 rounded" placeholder="Address" />
                    <button className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition">
                        Save Changes
                    </button>
                </form>
            </div>
        </div> */}
    </div>
    </div>
  );
};

export default UserProfile;