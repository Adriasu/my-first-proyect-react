import { StarIcon } from "lucide-react";
import React from "react";

const Rating = ({ number }) => {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => {
        return (
          <StarIcon
            key={i}
            className={number > i ? "fill-white text-white" : "text-white"}
          />
        );
      })}
    </div>
  );
};

export default Rating;
