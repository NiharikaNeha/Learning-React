import React, { useState } from "react";
import Dark from "../assets/dark_theme.jpg";
import Light from "../assets/light-theme.jpg";

const Problem4 = () => {
  const [toggle, setToggle] = useState(false);

  let backImage;
  let color;
  let heading;

  if (toggle == true) {
    backImage = Light;
    color = "bg-black rounded-lg px-8 py-4 text-white text-lg font-semibold";
    heading = "text-black text-4xl font-serif font-semibold"
  } else {
    backImage = Dark;
    color = "bg-white rounded-lg px-8 py-4 text-black text-lg font-semibold";
    heading = "text-white text-4xl font-serif font-semibold"
  }

  return (
    <>
      {/* Problem 4: Toggle Details Toggle between “Dark” and “Light” theme button with
conditional text rendering. */}
      <div className="flex flex-col justify-center items-center h-screen gap-4">
        <div
        style={{backgroundImage: `url(${backImage})`}}
          className=
            " bg-cover bg-center w-full h-full flex flex-col justify-center items-center gap-6"
          
        >
          <h1 className={heading}>Welcome!</h1>
          <button onClick={() => setToggle(!toggle)} className={color}>
            {toggle ? "Dark" : "Light"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Problem4;
