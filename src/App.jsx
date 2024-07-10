import React from "react";
import CreditCard from "./components/CreditCard";

const App = () => {
  return (
    <div>
      <CreditCard
        type={"visa"}
        number={"12364"}
        expirationMonth={12}
        expirationYear={26}
        bank={"BBVA"}
        owner={"adriana"}
        cssClass={"border-gray-900 bg-orange-400"}
      />
    </div>
  );
};

export default App;
