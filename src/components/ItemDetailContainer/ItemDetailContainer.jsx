import React, {useState, useEffect} from 'react';
import productsJson from "../../Data/productsData.json";
import ItemDetail from '../ItemDetail/ItemDetail';
import { useParams } from 'react-router-dom';
import {itemID} from 'react-router-dom';



const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    const { itemID } = useParams()

    useEffect(() => {
      const getProducts = (productList) =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            if (productList[0]) {
              resolve(productList.find ((product) => product.id === itemID));
            } else {
              reject("Error");
            }
          }, 1000);
        });
 
      getProducts(productsJson)
        .then((res) => setProduct(res))
        .catch((err) => console.log("${err}: No disponible"));
    }, [itemID]);
  
  
    return (
    <section className="product-detail">
      <h1>Descripcion</h1>
        {product ? <ItemDetail item={product}/> : <p>Buscnado...</p>}
      
    </section>
  )
}

export default ItemDetailContainer
