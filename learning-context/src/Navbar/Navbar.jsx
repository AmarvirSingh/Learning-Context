import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { CartContext } from "../Context";

const Navbar = () => {
  const { cart, setCart } = useContext(CartContext);
  return (
    <nav className={styles.navbar}>
      <h3 className={styles.title}>Context UI</h3>
      <div className={styles.linkContainer}>
        <ul>
          <li>
            <Link className={styles.link} to="/">
              Home{" "}
            </Link>
          </li>
          <li>
            <Link className={styles.link} to="/cart">
              Cart ({cart.length})
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
