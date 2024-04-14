import React, { useEffect, useState } from "react";
import { faker } from "@faker-js/faker";
import styles from "./Home.module.css";
import SingleProduct from "./SingleProduct";
import { useContext } from "react";
import { CartContext } from "../Context";

const Home = () => {
  /*
  const productArray = [...Array(20)].map(() => ({
    id: faker.string.uuid().slice(3, 8),
    pName: faker.commerce.productName(),
    img: faker.image.urlLoremFlickr({ width: 180, height: 180 }),
    pdesc: faker.commerce.productDescription().slice(0, 100),
    price: faker.commerce.price(),
  }));

  const [products] = useState(productArray);

  faker.seed(20);
  */

  const { products } = useContext(CartContext);

  return (
    <div className={styles.Container}>
      {products.map((product) => (
        <SingleProduct key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
