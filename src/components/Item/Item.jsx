
import { Link } from "react-router-dom";

const Item = ({ title, price, id, img }) => {
  return (
    <article className="card-list">
  
   <div className="img-container">
    <img src={img} className="card-img"/>
   </div>

    <div className="card-list-description">
      <p className="card-title">{title}</p>
      <p>Precio: $ {price}</p>
     <Link to={`/item/${id}`} className="btn">
      Detalles  
      </Link> 
    </div>

    </article>
  );
};

export default Item;
