import { Card } from "react-bootstrap";
import { useContext, useState } from "react";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";

const ItemDetail = ({ id, name, img, category, description, price, stock }) => {
  const [quantityAdded, setQuantityAdded] = useState(0);

  const { addItem } = useContext(CartContext);

  const handleOnAdd = (quantity) => {
    setQuantityAdded(quantity);

    const item = {
      id,
      name,
      price,
      img,
    };

    addItem(item, quantity);
  };

  return (
    <div className="d-flex justify-content-center">
      <Card style={{ width: "18rem", margin: "18px" }}>
        <Card.Img variant="top" src={img} alt={name} />
        <Card.Body>
          <Card.Title>{name}</Card.Title>
          <Card.Text>
            Categoría: {category}
            <br />
            {description}
            <br />
            Precio: ${price}
            <br />
            {quantityAdded > 0 ? (
              <Link to="/cart">
                <button type="button" className="btn btn-primary btn-sm my-md-2">
                  Ir al carrito
                </button>
              </Link>
            ) : (
              <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
            )}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ItemDetail;
