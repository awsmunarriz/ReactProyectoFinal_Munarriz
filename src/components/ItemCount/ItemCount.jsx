import { useState } from "react";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <>
      <div>
        <button
          type="button"
          className="btn btn-primary btn-sm me-md-2 my-md-2"
          onClick={decrement}
        >
          -
        </button>
        <span className="btnSpan">{quantity}</span>
        <button
          type="button"
          className="btn btn-primary btn-sm ms-md-2 my-md-2"
          onClick={increment}
        >
          +
        </button>
      </div>
      <div>
        <button
          type="button"
          className="btn btn-primary btn-sm my-md-2"
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
          Agregar al carrito
        </button>
      </div>
    </>
  );
};

export default ItemCount;
