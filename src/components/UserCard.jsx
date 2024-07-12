import React from "react";
import Rating from "./Rating";

const UserCard = ({name, rating, gender, job, city}) => {
 
  return (
    <div className="flex flex-col justify-between p-5 bg-[#455fb5] h-[200px] w-[350px] m-auto rounded-lg text-white font-serif">
      <h1 className="font-extrabold text-3xl">{name}</h1>
      <Rating number={rating} />
      <p>{gender}</p>
      <p className="text-xl">{job}</p>
      <p className="text-xl">{city}</p>
    </div>
  );
};

export default UserCard;
