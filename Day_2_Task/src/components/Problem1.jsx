import React, { useState } from "react";

const Problem1 = () => {
  const [loggedIn, setloggedIn] = useState(false);

  let message;
  let design;
  let text;

  if (loggedIn == true) {
    message = "Welcome,Users",
      design =
        "bg-red-500 rounded-lg px-8 py-4 text-white text-lg font-semibold",
      text = "LogOut";
  } else {
    message = "Please Login",
      design =
        "bg-green-500 rounded-lg px-8 py-4 text-white text-lg font-semibold",
      text = "Login";
  }
  return (
    <>
      {/*Problem 1: Login Status Show “Welcome, User” if isLoggedIn is true, else show “Please Login”.*/}
      <div className="flex flex-col justify-center items-center h-screen gap-4 ">
        <div className="bg-amber-200 rounded-2xl px-28 py-48 flex flex-col justify-center items-center gap-3">
          <h1 className="text-4xl font-mono">Login Status</h1>
          <h2 className="text-3xl font-bold font-serif">{message}</h2>
          <button
            className={design}
            onClick={() => {
              setloggedIn(!loggedIn);
            }}
          >
            {text}
          </button>
        </div>
      </div>
    </>
  );
};

export default Problem1;
