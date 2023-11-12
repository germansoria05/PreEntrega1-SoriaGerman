import React, { useState } from "react";

const ItemCount = ({ initial, stock, onAdd }) => {
  const [count, setCount] = useState(initial);

  const increment = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const decrement = () => {
    if (count > initial) {
      setCount(count - 1);
    }
  };

  return (
    <div className="counter"> 
    <p>Stock: {stock}</p>
   
      <button onClick={decrement} disabled={count == initial}>
        -
      </button>
      <p>Stock: {stock}</p>
      <p>Cantidad: {count}</p>

      <button onClick={increment} disabled={count == stock}>
        +
      </button>
     <button> </button>
      </div>

        
      
   
  );
};


export default ItemCount;
