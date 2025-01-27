import React from 'react';

const Locations = () => {
  return (
    <div className="text-center my-12">
      {/* All Locations Title */}
      <h2 className="text-2xl font-semibold text-gray-800">All Locations</h2>

      {/* Main Locations in Nairobi */}
      <div className="mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">Call Girls in CBD</button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">Call Girls in Westlands</button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">Call Girls in Karen</button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">Call Girls in Lavington</button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">Call Girls in Gigiri</button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">Call Girls in Runda</button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">Call Girls in Upper Hill</button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">Call Girls in Parklands</button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">Call Girls in Hurlingham</button>
        </div>
      </div>

      {/* Outer Places */}
      <div className="mt-12">
        <h3 className="text-xl font-medium text-gray-700 mb-4">Outer Places</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">Call Girls in Thika</button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">Call Girls in Kiambu</button>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-full hover:bg-blue-600">Call Girls in Juja</button>
        </div>
      </div>
    </div>
  );
};

export default Locations;
