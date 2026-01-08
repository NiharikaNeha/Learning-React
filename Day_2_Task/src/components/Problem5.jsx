import React, { useState } from "react";

const Problem5 = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  let message;
  let btnPaint;

  if (isSubmitting === true) {
    message = "Submitting...";
    btnPaint =
      "bg-gray-400 rounded-lg px-8 py-4 text-white text-lg font-semibold";
  } else {
    message = "Submit";
    btnPaint =
      "bg-blue-500 hover:bg-blue-900 rounded-lg px-8 py-4 text-white text-lg font-semibold";
  }

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <div className="bg-amber-200 rounded-2xl p-10 flex flex-col justify-center items-center gap-3">
        <h1 className="text-3xl font-serif font-semibold">Submit Button</h1>

        <h2 className="text-2xl font-bold font-serif">{message}</h2>

        <button
          onClick={() => setIsSubmitting(true)}
          disabled={isSubmitting}
          className={btnPaint}
        >
          {isSubmitting ? "Submitting..." : "Submit"}
        </button>
      </div>
    </div>
  );
};

export default Problem5;
