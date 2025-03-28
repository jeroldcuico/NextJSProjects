import React from "react";

export default function Header() {
  return (
    <header className="flex justify-between items-center mb-6">
      <h1 className="text-3xl font-bold">Data Catalog</h1>
      <div className="flex items-center space-x-2">
        <input
          placeholder="Search games..."
          className="bg-gray-800 border-gray-700 text-white"
        />
        <button className="bg-gray-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Search
        </button>
      </div>
    </header>
  );
}
