import ProductItem from "./ProductItemHome";

function ProductContianer({ products }) {
  return (
    <ul className="flex items-center justify-between flex-wrap">
      {products.map((product) => (
        <ProductItem product={product} key={product.id} />
      ))}
    </ul>
  );
}

export default ProductContianer;
