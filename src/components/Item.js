import React, { useState } from "react";

function Item({ name, category }) {
  // state variable to track if the item is in the cart
  const [inCart, setInCart] = useState(false);

  // determine className based on inCart state
  const itemClass = inCart ? "in-cart" : "";

  // event handler for toggling the item in the cart
  function handleCartClick() {
    setInCart((inCart) => !inCart);
  }

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={handleCartClick} className={inCart ? "remove" : "add"}>
        {inCart ? "Remove From Cart" : "Add to Cart"}
      </button>
    </li>
  );
}

export default Item;
