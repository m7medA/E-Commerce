import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./routes/AppLayout";
import Error from "./components/Error";
import Home from "./pages/Home";
import WishListPage from "./featuers/wishlist/WishListPage";
import About from "./pages/About";
import SearchResults, { loader as queryLoader } from "./pages/SearchResults";
import CategoriesPage, {
  loader as categoriesLoader,
} from "./pages/CategoriesPage";
import CategoryPage, { loader as categryLoader } from "./pages/CategoryPage";
import AllProductsPage from "./pages/AllProductsPage";
import CartPage from "./featuers/cart/CartPage";
import ProductPageDetails, {
  loader as idLoader,
} from "./pages/ProductPageDetails";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/loginpage",
        element: <LoginPage />,
      },
      {
        path: "/searchresults/:query",
        element: <SearchResults />,
        loader: queryLoader,
      },
      {
        path: "/categoriespage",
        element: <CategoriesPage />,
        loader: categoriesLoader,
      },
      {
        path: "/categoryPage/:category",
        element: <CategoryPage />,
        loader: categryLoader,
      },
      {
        path: "/allproductspage",
        element: <AllProductsPage />,
      },
      {
        path: "/productpagedetials/:id",
        element: <ProductPageDetails />,
        loader: idLoader,
      },
      {
        path: "/cartpage",
        element: <CartPage />,
      },
      {
        path: "/wishlist",
        element: <WishListPage />,
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
