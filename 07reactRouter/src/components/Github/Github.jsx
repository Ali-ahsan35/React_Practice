import React, { useEffect, useState } from "react";

import { useLoaderData } from "react-router-dom";

function Github() {
// 1st Method
//   const [data, setData] = useState();

//   useEffect(() => {
//     fetch("https://api.github.com/users/hiteshchoudhary")
//       .then((response) => response.json())
//       .then((data) => {
//         setData(data);
//       });
//   }, []);

const data = useLoaderData();

  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="bg-white p-6 rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold text-gray-800">GitHub Profile</h1>
        
        {/* User Image */}
        {data && (
          <img
            src={data.avatar_url}
            alt="User Avatar"
            className="w-24 h-24 rounded-full mx-auto mt-4"
          />
        )}
        
        {/* User Name */}
        <p className="mt-4 text-xl text-gray-600">
          User Name:{" "}
          <span className="text-blue-500 font-medium">
            {data ? data.login : "Loading..."}
          </span>
        </p>

        {/* Followers */}
        <p className="mt-4 text-xl text-gray-600">
          Followers:{" "}
          <span className="text-blue-500 font-medium">
            {data ? data.followers : "Loading..."}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Github;

// 2nd Method
export const githubInfoLoader = async () => {
    const response = await fetch(`https://api.github.com/users/hiteshchoudhary`)

    return response.json();
}