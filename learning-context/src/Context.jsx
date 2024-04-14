import React, { createContext, useState } from "react";
import { faker } from "@faker-js/faker";

export const CartContext = createContext();

faker.seed(20);

const Context = ({ children }) => {
  const [cart, setCart] = useState([]);

  const productArray = [...Array(20)].map(() => ({
    id: faker.string.uuid().slice(3, 8),
    pName: faker.commerce.productName(),
    img: faker.image.urlLoremFlickr({ width: 180, height: 180 }),
    pdesc: faker.commerce.productDescription().slice(0, 100),
    price: faker.commerce.price(),
  }));
  const [products] = useState(productArray);

  return (
    <CartContext.Provider value={{ cart, setCart, products }}>
      {children}
    </CartContext.Provider>
  );
};

export default Context;
