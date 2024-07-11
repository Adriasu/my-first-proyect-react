import React from "react";

const CreditCard = () => {
  const creditCards = [
    {
      type: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Visa_Logo.png/640px-Visa_Logo.png",
      number: "1236478512548845",
      expirationMonth: 11,
      expirationYear: 26,
      bank: "BBVA",
      owner: "Maxence Bouret",
      cssClass: "h-40 w-72 bg-green-400 rounded-2xl text-white flex flex-col",
    },
    {
      type: "https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg",
      number: "1236478512540995",
      expirationMonth: 10,
      expirationYear: 28,
      bank: "N26",
      owner: "Adriana Suárez",
      cssClass: "h-40 w-72 bg-gray-400 rounded-2xl text-black flex flex-col",
    },
    {
      type: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Visa_Logo.png/640px-Visa_Logo.png",
      number: "1236478512546984",
      expirationMonth: 12,
      expirationYear: 25,
      bank: "Revolut",
      owner: "Max Beltran",
      cssClass: "h-40 w-72 bg-yellow-500 rounded-2xl text-white flex flex-col",
    },
  ];

  return (
    <div className="flex gap-8 justify-center m-16">
      {creditCards.map((cart, i) => {
        return (
          <div key={i}>
            <div className="h-40 w-72 bg-yellow-500 rounded-2xl text-white flex flex-col items-start  ">
              <p>hola</p>
            </div>

            <div className={cart.cssClass}>
              <div className="flex justify-end">
                <img src={cart.type} alt="logo" className="h-5 w-16" />
              </div>
              <p>{cart.number}</p>
              <div className="flex">
                <p>
                  Expires {cart.expirationMonth}/{cart.expirationYear}
                </p>
                <p>{cart.bank}</p>
              </div>
              <p>{cart.owner}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CreditCard;
