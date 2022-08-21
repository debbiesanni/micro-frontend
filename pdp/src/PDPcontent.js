import React, { useEffect, useState } from "react";
import { getProductById, currencyConvert } from "home/Products";
import { useParams } from "react-router-dom";

const PDPcontent = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});
  useEffect(() => {
    if (id) {
      getProductById(id).then(setProduct);
    } else setProduct(null);
  }, []);

  if (!product) {
    return <div>No product found</div>;
  } else
    return (
      <div className="grid grid-cols-2">
        <div>
          <img src={product.image} alt={product.name} />
        </div>
        <div>
          <div className="flex justify-between  font-bold text-3xl">
            <div className="flex-glow">{product.name}</div>
            <div className="flex-end">
              {currencyConvert.format(product.price)}
            </div>
          </div>
          <div className="my-5">{product.description}</div>
          <div className="my-5">{product.longDescription}</div>
        </div>
      </div>
    );
};

export default PDPcontent;
