import React from "react";
import CreditCard from "./components/CreditCard";
import dataCreditCardJSON from "./data/dataCreditCart.json";
import UserCard from "./components/UserCard";

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
      <p className="m-auto p-10">EJERCICIO 2</p>
      <div className="flex">
      <UserCard/>

      </div>

     




    </div>
  );
};

export default App;
