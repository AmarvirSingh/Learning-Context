import React from "react";
import styles from "./Home.module.css";
import { useContext } from "react";
import { CartContext } from "../Context";

const SingleProduct = ({ product }) => {
  const { cart, setCart } = useContext(CartContext);

  return (
    <div className={styles.card}>
      <img className={styles.img} src={product.img} alt="image" />
      <p className={styles.title}>{product.pName}</p>
      <p className={styles.description}>{`${product.pdesc}...`}</p>
      <div className={styles.foot}>
        {cart.includes(product) ? (
          <button
            onClick={() => {
              setCart(cart.filter((c) => c.id !== product.id));
            }}
            className={styles.btn}
          >
            {" "}
            Remove from Cart{" "}
          </button>
        ) : (
          <button
            onClick={() => {
              setCart([...cart, product]);
            }}
            className={styles.btn}
          >
            {" "}
            Add To Cart{" "}
          </button>
        )}

        <p>{product.price}</p>
      </div>
    </div>
  );
};

export default SingleProduct;
