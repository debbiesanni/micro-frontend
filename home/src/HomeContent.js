import React, { useEffect, useState } from "react";
import { getProduct, currencyConvert } from "./products";

export default function HomeContent() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    getProduct().then(setProducts);
  }, []);

  return (
    <div className="grid grid-cols-4 gap-5 my-10">
      {products.map((product, index) => (
        <div key={index} className="">
          <img src={product.image} alt={product.name} />
          <div className="flex">
            <div className="flex-glow font-bold">
              <a>{product.name}</a>
            </div>
            <div className="flex-end">
              {currencyConvert.format(product.price)}
            </div>
          </div>
          <div className="text-sm mt-4">{product.description}</div>
        </div>
      ))}
    </div>
  );
}
