import IconButton from "@mui/material/IconButton";
import LocalGroceryStoreIcon from "@mui/icons-material/LocalGroceryStore";
import Badge from "@mui/material/Badge";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";
import { Link } from "react-router-dom";

const CartWidget = () => {
  const { totalQuantity } = useContext(CartContext);
  return (
    <Link to="/cart" style={{ display: totalQuantity() > 0 ? "block" : "none" }}>
      <IconButton size="large" aria-label="show 4 new products" color="black">
        <Badge badgeContent={totalQuantity()} color="error">
          <LocalGroceryStoreIcon />
        </Badge>
      </IconButton>
    </Link>
  );
};

export default CartWidget;
