import React from "react";
import CreditCard from "./components/CreditCard";
import Rating from "./components/Rating";
import dataCreditCardJSON from "./data/dataCreditCart.json";

const App = () => {
  return (
    <div className="flex flex-col">
       <p className="m-auto p-10">EJERCICIO 1</p>
      <div className="flex justify-center gap-7 mt-3 ">
        {dataCreditCardJSON.map((cart) => {
          return (
            <CreditCard
              key={cart.id}
              type={cart.type}
              number={cart.number}
              expirationMonth={cart.expirationMonth}
              expirationYear={cart.expirationYear}
              bank={cart.bank}
              owner={cart.owner}
              cssClass={cart.cssClass}
            />
          );
        })}
      </div>
    </div>
  );
};

export default App;
