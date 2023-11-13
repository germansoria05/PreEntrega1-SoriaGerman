import React, { useState, useEffect, } from "react";
import productsJson from "../../Data/productsData.json";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {
  const [productsData, setProducts] = useState(null);
  const { item } = useParams();

  useEffect(() => {
   
    const fetchData = () => {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve(productsJson);
        }, 1000);
      });
    };

    fetchData().then((data) => setProducts(data));
  }, []);

  return (
    <section className="product-detail">
      <h1>Product List</h1>
      {productsData ? (
        productsData.map((product) => (
          <ItemDetail key={product.id} item={product} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </section>
  );
};

export default ItemDetailContainer;
