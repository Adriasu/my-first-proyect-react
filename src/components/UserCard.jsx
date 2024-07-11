import React from "react";
import Rating from "./Rating";

const UserCard = () => {
  const ejemplo = [
    {
      id: 1,
      name: "Pascal Marshall",
      rating: 3,
      gender: "Male",
      job: "Structural Analysis Engineer",
      city: "Iowa City",
    },
  ];

  return (
    <div className="flex flex-col p-3 bg-[#455fb5] h-[150px] w-[300px] m-auto rounded-lg text-white">
      <h1>{ejemplo[0].name}</h1>
      <Rating number={ejemplo[0].rating} />
      <p>{ejemplo[0].gender}</p>
      <p>{ejemplo[0].job}</p>
      <p>{ejemplo[0].city}</p>
    </div>
  );
};

export default UserCard;
