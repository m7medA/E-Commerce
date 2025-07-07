import { NavLink } from "react-router-dom";
import ProductItem from "../components/ProductItemHome";
import { useSelector } from "react-redux";

const fakeProducts = [
  {
    id: 1,
    title: "Nike Air Max",
    price: 120.99,
    discountPercentage: 0,
    stock: 0,
    images:
      "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp",
    rating: 5.0,
  },
  {
    id: 2,
    title: "Adidas Ultraboost",
    price: 140.5,
    discountPercentage: 10.48,
    stock: 99,
    images:
      "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/1.webp",
    rating: 5.0,
  },
  {
    id: 3,
    title: "Puma RS-X",
    price: 110,
    discountPercentage: 10.48,
    stock: 99,
    images:
      "https://cdn.dummyjson.com/product-images/beauty/powder-canister/1.webp",
    rating: 5.0,
  },
  {
    id: 4,
    title: "New Balance 574",
    price: 95.75,
    discountPercentage: 10.48,
    stock: 99,
    images:
      "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/1.webp",
    rating: 5.0,
  },
  {
    id: 5,
    title: "Converse Chuck Taylor",
    price: 70.25,
    discountPercentage: 10.48,
    stock: 99,
    images:
      "https://cdn.dummyjson.com/product-images/beauty/red-nail-polish/1.webp",
    rating: 5.0,
  },
];

function HomePage() {
  const wishlistIds = useSelector((store) => store.wishlist.wishlistIds);

  return (
    <div>
      <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {fakeProducts.map((product) => (
          <ProductItem
            product={product}
            key={product.id}
            loved={wishlistIds.includes(product.id)}
          />
        ))}
      </ul>
    </div>
  );
}

export default HomePage;
