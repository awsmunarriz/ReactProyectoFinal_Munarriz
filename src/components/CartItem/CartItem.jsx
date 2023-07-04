import { Card } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ id, name, img, price, quantity }) => {
  const { removeItem } = useContext(CartContext);
  return (
    <Card style={{ width: "15rem", margin: "4px" }}>
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Precio: ${price}
          <br />
          Cantidad: {quantity}
          <br />
        </Card.Text>
        <button
          type="button"
          className="btn btn-primary btn-sm"
          onClick={() => removeItem(id)}
        >
          Quitar
        </button>
      </Card.Body>
    </Card>
  );
};

export default CartItem;
