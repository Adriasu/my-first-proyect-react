import React from "react";

const CreditCard = ({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  cssClass,
}) => {
  const backGroundColor = () => {
    switch (cssClass) {
      case "green":
        return "bg-[#4ca698] text-white";

      case "gray":
        return "bg-[#ededed] text-black";

      case "gold":
        return "bg-[#d9bc66] text-white";
      default:
        return "bg-[#edf0f7] text-bla";
    }
  };

  const lastFourNum = number.slice(-4);
  const numberToDisplay = `**** **** **** ${lastFourNum}`;

  return (
    <div
      className={`h-[190px] w-[320px] rounded-2xl flex flex-col p-6 justify-between ${backGroundColor()}`}
    >
      <div className="flex justify-end">
        <img src={type} alt="logo" className="h-5 w-16" />
      </div>
      <p className="text-[28px] tracking-wider text-center flex justify-center items-center">
        {numberToDisplay}
      </p>
      <div>
        <div className="flex gap-9">
          <p>
            Expires {expirationMonth}/{expirationYear}
          </p>
          <p>{bank}</p>
        </div>
        <p>{owner}</p>
      </div>
    </div>
  );
};

export default CreditCard;
