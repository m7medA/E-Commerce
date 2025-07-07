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
