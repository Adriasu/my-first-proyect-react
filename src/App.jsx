import React from "react";
import CreditCard from "./components/CreditCard";
import dataCreditCard from "./data/dataCreditCart.json";
import UserCard from "./components/UserCard";
import dataUserCard from "./data/dataUserCard.json";
import ButtonList from "./components/ButtonList";
import WorldPopulation from "./components/WorldPopulation";
import TitleWorldPopulation from "./components/TitleWorldPopulation";
import dataGraphics from "./data/dataGraphics.json";

const App = () => {
  return (
    <div className="flex flex-col">
      <p className="m-auto p-10">EJERCICIO 1</p>
      <div className="flex justify-center gap-7 mt-3 ">
        {dataCreditCard.map((cart) => {
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

      <div className="flex flex-wrap gap-3 m-6">
        {dataUserCard.map((user) => {
          return (
            <UserCard
              key={user.id}
              name={user.name}
              rating={user.rating}
              gender={user.gender}
              job={user.job}
              city={user.city}
            />
          );
        })}
      </div>

      <p className="m-auto p-10">EJERCICIO 3</p>

      <div className="flex justify-center">
        <ButtonList number={20} />
      </div>

      <p className="m-auto p-10">EJERCICIO 4</p>

      <div className="flex flex-col">
        <TitleWorldPopulation />
        <div className="flex flex-col">
          {dataGraphics.map((data, i) => {
            return (
              <WorldPopulation
                key={i}
                country={data.country.toLocaleUpperCase()}
                population={data.population}
              />
            );
          })}
        </div>
      </div>
      <p className="m-auto p-10">EJERCICIO 5</p>
    </div>
  );
};

export default App;
