import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import CartItem from "../CartItem/CartItem";
import { Link } from "react-router-dom";
import "./Cart.css";

const Cart = () => {
  const { cart, clearCart, totalQuantity, total } = useContext(CartContext);
  console.log(totalQuantity());
  console.log(total());
  console.log(cart);

  if (cart.length === 0) {
    return (
      <div>
        <h1>No hay items en el carrito</h1>
        <Link to="/">
          <button type="button" className="btn btn-primary btn-sm">
            Productos
          </button>
        </Link>
      </div>
    );
  }

  return (
    <div className="container">
      <h3>Total: ${total()}</h3>
      <button
        type="button"
        className="btn btn-primary btn-sm me-md-2"
        onClick={() => clearCart()}
      >
        Vaciar carrito
      </button>
      <Link to="/checkout">
        <button type="button" className="btn btn-primary btn-sm">
          Finalizar compra
        </button>
      </Link>
      <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 justify-content-center">
        {cart.map((p) => (
          <CartItem key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
