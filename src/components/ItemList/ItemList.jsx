import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center">
        {products.map((prod) => (
          <Item key={prod.id} {...prod} />
        ))}
      </div>
    </div>
  );
};

export default ItemList;
