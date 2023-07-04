import { Link } from "react-router-dom";
import { Card } from "react-bootstrap";

const Item = ({ id, name, img, price, stock }) => {
  return (
    <Card style={{ width: "15rem", margin: "4px" }}>
      <Card.Img variant="top" src={img} alt={name} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          Precio: ${price}
          <br />
          Stock disponible: {stock}
        </Card.Text>
        <Link to={`/item/${id}`}>
          <button type="button" className="btn btn-primary btn-sm">
            Ver detalle
          </button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default Item;
