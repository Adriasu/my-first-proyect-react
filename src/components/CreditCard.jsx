import React from 'react'

const CreditCard = ({type, number, expirationMonth, expirationYear, bank, owner, cssClass }) => {

    const creditCards = [
        {type}, {number}, {expirationMonth}, {expirationYear}, {bank}, {owner}, {cssClass}
    ]


  return (
    <div>

        {creditCards.map((dato, i) => {
            return <div key={i}>{dato}</div>
        })}


      
    </div>
  )
}

export default CreditCard
