import React, { useState, useEffect } from "react";
import productsJson from "../../Data/productsData.json";
import ItemList from "../ItemList/ItemList";

const Itemlistcontainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const getProducts = (productsList) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (productsList.length) {
            resolve(productsList);
          } else {
            reject("Error");
          }
        }, 1000);
      });

    getProducts(productsJson)
      .then((res) => setProducts(res))
      .catch(() => console.log("${err}: No disponible"));
  }, []);

  return (
    <section>
      <h1>{greeting}</h1>
      {products.length ? <ItemList list={products} /> : <p>No hay productos</p>}
    </section>
  );
};

export default Itemlistcontainer;
