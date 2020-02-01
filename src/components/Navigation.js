import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

//Contexts
import CartContext from "../contexts/CartContext";

const Navigation = props => {
  const { cart } = useContext(CartContext);

  return (
    <div className="navigation">
      {console.log("Nav console", cart)}
      <NavLink to="/">Products</NavLink>
      <NavLink to="/cart">
        Cart <span>{props.cart.length}</span>
      </NavLink>
    </div>
  );
};

export default Navigation;
