import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";




const ItemDetail = ({ item }) => {

  const [quantity, setquantity]= useState (0);

  const Onadd = (quantityToAdd) => {
    setquantity(quantityToAdd)

  };
 

  return (
    
    <article className="card">
      <div className="img-container">
        <img src={item.image} className="card-img"/>
      </div>
      <div className="card-description">
        <p className="card-title">{item.title}</p>

        <p>{item.description}</p>
        <p>Precio: $ {item.price}</p>
        {quantity ? ( <Link to= {"/carrito"}>Ver {quantity} productos en carrito</Link>
        ) : (  <ItemCount initial={1} stock={10} Onadd={Onadd} />
        
        )}
      </div>
      </article>
  );
};

export default ItemDetail;
