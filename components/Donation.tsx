import React from "react";

function Donation() {
  return (
    <footer className="w-full bg-base-100 py-14 border-t border-gray-100">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-10 px-8 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900">
          Be part of the Movement by giving
        </h2>

        <div className="flex w-full ml-42 flex-col items-center justify-center gap-8 md:flex-row md:justify-between">
          {/* Left contact */}
          <div className="flex items-center gap-4">
            <img
              src="/telebirr.png"
              alt="Telebirr logo"
              className="h-10 w-10  object-contain"
            />
            <div className="text-left text-sm md:text-base text-gray-800">
              <p className="font-medium">+251936197341</p>
              <p>Hiwot Abebe</p>
              <p className="text-gray-600">Director of Operations</p>
            </div>
          </div>

          {/* Right account */}
          <div className="flex items-center gap-4">
            <img
              src="/cbe.png"
              alt="CBE logo"
              className="h-20 w-20 rounded-full object-contain"
            />
            <div className="text-left text-sm md:text-base text-gray-800">
              <p className="font-medium">1000421527605</p>
              <p className="text-gray-600">
                Ethiopian Youth Mission Movement Ministries
              </p>
            </div>
          </div>
        </div>

        <button className="mt-2 rounded-md bg-amber-400 px-10 py-2 text-sm md:text-base font-semibold text-gray-900 shadow-md hover:bg-amber-500 transition-colors">
          Donate
        </button>
      </div>
    </footer>
  );
}

export default Donation;
