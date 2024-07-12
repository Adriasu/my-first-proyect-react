import React from "react";

const Button = ({ text }) => {
  const primeNumber = () => {
    if (text < 2) {
      return false;
    }
    for (let i = 2; i < text; i++) {
      if (text % i === 0) {
        return false;
      }
    }
    return true;
  };

  const backGroundColorButtonOddEven = () => {
    if (primeNumber()) {
      return "bg-[#fc5f53]";
    }
    if (text % 2 === 0) {
      return "bg-[#21bf73]";
    }
    return "bg-[#fcdc3a]";
  };

  return (
    <div>
      <button
        className={`size-20 text-white text-4xl font-mono shadow-lg ${backGroundColorButtonOddEven()}`}
      >
        {text}
      </button>
    </div>
  );
};

export default Button;
