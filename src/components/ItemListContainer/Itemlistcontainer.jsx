import React, { useState, useEffect } from "react";
import productsJson from "../../Data/productsData.json";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const Itemlistcontainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    const getProducts = (productsList) =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (productsList.length) {
          
            categoryId ? resolve(productsList.filter(product => product.category === categoryId)) : resolve(productsList);
          } 
         
else {
            reject("Error");
          }
        }, 1000);
      });

    getProducts(productsJson)
      .then((res) => setProducts(res))
      .catch(() => console.log(`${Error}: No disponible`));
  }, [categoryId]);

  
 
return (
    <section>
      <h1>{greeting}</h1>
      {products.length ? <ItemList list={products} /> : <p>No hay productos</p>}
    </section>
  );
};

export default Itemlistcontainer;
