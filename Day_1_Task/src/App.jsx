import React, { useState } from "react";

const App = () => {
  const [num, setNum] = useState(0);
  return (
    <div className="flex flex-col justify-center items-center gap-7 mt-50 rounded-2xl">
      <h1 className="font-bold text-4xl">Number: {num}</h1>
      <div className="flex gap-10">
        <button
          className="font-bold text-3xl p-3 rounded-2xl bg-green-600 text-white"
          onClick={() => setNum(num + 1)}
        >
          Increase
        </button>
        <button
          className="font-bold text-3xl p-3 rounded-2xl bg-red-600 text-white"
          onClick={() => setNum(num - 1)}
        >
          Decrease
        </button>
      </div>
      <div className="flex gap-10">
        <button
          className="font-bold text-3xl p-3 rounded-2xl bg-yellow-500 text-white"
          onClick={() => setNum(num * 2)}
        >
          Multiply
        </button>
        <button
          className="font-bold text-3xl p-3 rounded-2xl bg-blue-600 text-white"
          onClick={() => setNum(num / 2)}
        >
          Division
        </button>
      </div>
    </div>
  );
};

export default App;
