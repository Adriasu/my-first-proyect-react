import React from "react";
import Button from "./Button";

const ButtonList = ({ number }) => {

  return (
    <div className="flex flex-wrap gap-3 w-[1200px]">
      {[...Array(number)].map((_, i) => {
        return <Button 
        key={i} 
        text={i + 1}
        />;
      })}
    </div>
  );
};

export default ButtonList;
