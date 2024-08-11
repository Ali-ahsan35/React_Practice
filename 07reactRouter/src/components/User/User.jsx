import React from "react";
import { useParams } from "react-router-dom";

function User() {
    const { userid } = useParams();

    return (
        <div className="flex items-center justify-center h-screen bg-gray-100 my-4">
            <div className="bg-white p-8 rounded shadow-md text-center">
                <h1 className="text-2xl font-semibold text-gray-800">User Profile</h1>
                <p className="mt-4 text-lg text-gray-600">User ID: <span className="text-indigo-600 font-medium">{userid}</span></p>
            </div>
        </div>
    );
}

export default User;
