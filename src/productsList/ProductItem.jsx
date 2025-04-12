import React from "react";

const ProductItem = React.memo(({ product, onLike }) => {
  return (
    <div style={{ border: "1px solid #ccc", margin: "8px", padding: "8px" }}>
      <h1>{product.id}</h1>
      <h3>{product.name}</h3>
      <button onClick={() => onLike(product.id)}>Like</button>
    </div>
  );
});

export default ProductItem;
