
import Item from '../Item/Item';

const ItemList = ({ list }) => {
    return (
        <>
        {list.map (products => (
            <Item key='{prod.id} item={product} }'/>
        ))}
            
        </>
    );
};

export default ItemList;