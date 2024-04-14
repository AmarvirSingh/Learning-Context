import React, { useContext, useState } from "react";
import { CartContext } from "../Context";
import SingleProduct from "./SingleProduct";
import { useEffect } from "react";
import styles from "../Components/Home.module.css";

const Cart = () => {
  const { cart } = useContext(CartContext);

  const [total, setTotal] = useState();

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + Number(curr.price), 0));
  }, [cart]);

  return (
    <div>
      <h2>My Cart</h2>
      <h4>Total Cart Price: {total}</h4>
      <div className={styles.container}>
        {cart.map((product) => (
          <SingleProduct key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
