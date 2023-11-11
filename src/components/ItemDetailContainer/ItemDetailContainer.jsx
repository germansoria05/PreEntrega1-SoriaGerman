import React, {useState, useEffect} from 'react';
import productsJson from "../../Data/productsData.json";
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
      const getProducts = (productList) =>
        new Promise((resolve, reject) => {
          setTimeout(() => {
            if (productList[1]) {
              resolve(productList[1]);
            } else {
              reject("Error");
            }
          }, 1000);
        });
  <productsJson/>
      getProducts(productsJson)
        .then((res) => setProduct(res))
        .catch((err) => console.log("${err}: No disponible"));
    }, []);
  
  
    return (
    <section>
        {product ? <ItemDetail item={product}/> : <p>Buscnado...</p>}
      
    </section>
  )
}

export default ItemDetailContainer
