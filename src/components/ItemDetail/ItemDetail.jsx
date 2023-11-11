import React, { useState } from "react";
import ItemCount from "../ItemCount/ItemCount";


const ItemDetail = ({ item }) => {

  const [quantity, setquantity]= useState (0);

  const Onadd = (quantityToAdd) => {
    setquantity(quantityToAdd)

  }
  return (
    <article>
      <p>Titulo: {item.title}</p>
      <p>Descripcion: {item.description}</p>
      <p>Precio: {item.price}</p>
      <p>Imagen:{item.image}</p>
      <ItemCount initial={1} stock={10} Onadd={Onadd} />
    
    </article>
  );
};

export default ItemDetail;
