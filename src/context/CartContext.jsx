import { createContext, useState } from "react";

export const CartContext = createContext({
  cart: [],
});

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (item, quantity) => {
    if (!isInCart(item.id)) {
      setCart((prev) => [...prev, { ...item, quantity }]);
    } else {
      console.error("El producto ya fue agregado");
    }
  };

  const removeItem = (itemId) => {
    const cartUpdated = cart.filter((prod) => prod.id !== itemId);
    setCart(cartUpdated);
  };

  const clearCart = () => {
    setCart([]);
  };

  const isInCart = (itemId) => {
    return cart.some((prod) => prod.id === itemId);
  };

  // Total de items en carrito.
  const totalQuantity = () => {
    let totalCart = 0;
    cart.forEach(
      (totalQuantity) => (totalCart = totalCart + totalQuantity.quantity)
    );
    return totalCart;
  };

  const total = () => {
    // precio total de la compra.
    let totalPrice = 0;
    cart.forEach(
      (product) => (totalPrice = totalPrice + product.price * product.quantity)
    );
    return totalPrice;
  };

  return (
    <CartContext.Provider
      value={{ cart, addItem, removeItem, clearCart, totalQuantity, total }}
    >
      {children}
    </CartContext.Provider>
  );
};
