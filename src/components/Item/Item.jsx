import React from "react";

const Item = (item) => {
  return (
    <article>
      <p>Titulo: {item.title}</p>
      <p>Descripcion:{item.description}</p>
      <p>Preco:${item.price}</p>
    </article>
  );
};

export default Item;
