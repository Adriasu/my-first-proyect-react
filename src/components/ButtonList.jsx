import React from "react";
import Button from "./Button";

const ButtonList = ({ number }) => {
  const showNumber = (event) => {
    return console.log(event.target.innerHTML);
  };

  return (
    <div className="flex flex-wrap gap-3 w-[1200px]">
      {[...Array(number)].map((_, i) => {
        return (
          <div onClick={showNumber}>
            <Button key={i} text={i + 1} />
          </div>
        );
      })}
    </div>
  );
};

export default ButtonList;
