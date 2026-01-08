import React, { useState } from "react";

const Problem3 = () => {
  const [data, setData] = useState(false);
  let list;
  const products = [
    "Laptops, ",
    "Mobiles, ",
    "Golgappes, ",
    "Burger, ",
    "Pizza, ",
    "Fries, ",
    "Donuts",
  ];

  if (data == true) {
    list = products;
  } else {
    list = "No Products Founds";
  }

  return (
    <>
      {/* Problem 3: Empty List Handling If products list is empty, show “No products found”, else render
product list. */}
      <div className="flex flex-col justify-center items-center h-screen gap-4">
        <div className="bg-amber-200 rounded-2xl px-25 py-25 flex flex-col justify-center items-center gap-3">
          <h1 className="text-4xl font-serif font-semibold">List Handling</h1>
          <h2 className="text-3xl font-bold font-mono">
            <ul>
              <li>{list}</li>
            </ul>
          </h2>
          <button
            onClick={() => setData(!data)}
            className="bg-gray-600 rounded-lg px-8 py-4 text-white text-lg font-semibold"
          >
            Show Data
          </button>
        </div>
      </div>
    </>
  );
};

export default Problem3;
