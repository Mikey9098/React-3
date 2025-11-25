import React from "react";

export function Header({itemCount}) {
  return (
    <div className=" w-full h-20 bg-blue-900 text-center flex justify-between px-90 items-center">
      <div>
        <h1 className="text-white">Mystore</h1>
      </div>
      <div className="flex items-center gap-4">
        <a class="text-white hover:text-gray-900" href="/" data-discover="true">
          Home
        </a>
        <div class="bg-red-900 text-white px-4 py-2 rounded-full font-medium">
          Cart: {itemCount}
        </div>
      </div>
    </div>
  );
}
