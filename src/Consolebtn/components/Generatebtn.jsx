import React from 'react';
import "../Consolebtn.css";

const Generatebtn = ({ isInputsValid }) => {
  return (
    <button
      id="generate-btn"
      className={`bg-blue-500 text-black w-auto border-none rounded-lg px-4 py-2 mt-2 cursor-pointer ${
        isInputsValid ? "hover:bg-blue-600" : "bg-gray-300 cursor-not-allowed"
      } ${isInputsValid ? "" : "opacity-50"}`}
      disabled={!isInputsValid}
    >
      Generate
    </button>
  );
};

export default Generatebtn;
