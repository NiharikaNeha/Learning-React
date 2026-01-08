import React, { useState } from "react";
import image1 from "../assets/css-loader.webp";
import image2 from "../assets/bunny.webp";

const Problem2 = () => {
  const [loader, setLoader] = useState(false);

  let loading;
  let download;
  let btnColor;

  if (loader == true) {
    loading = image1;
    btnColor = "bg-red-600 rounded-lg px-8 py-4 text-white text-lg font-semibold"
  } else {
    download = image2;
    btnColor = "bg-gray-600 rounded-lg px-8 py-4 text-white text-lg font-semibold"
  }

  return (
    <>
      {/* Problem 2: Loading State Show Loader when loading is true, else show Profile UI. */}
      <div className="flex flex-col justify-center items-center h-screen gap-4">
        <div className="bg-amber-200 rounded-2xl px-25 py-25 flex flex-col justify-center items-center gap-3">
          <h1 className="text-4xl font-serif font-semibold">Loader Updates</h1>
          <img src={loader ? loading : download} alt="" className="rounded-4xl p-2 border-6 border-amber-500 bg-red-100" />
          <button onClick={() => setLoader(!loader)} className={btnColor}>
            {loader ? "Stop Loading" : "Start Loading"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Problem2;
