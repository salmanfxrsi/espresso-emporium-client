import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomeLayout from "../layouts/HomeLayout";
import AddCoffeeLayout from "../layouts/AddCoffeeLayout";
import CoffeeDetailsLayout from "../layouts/CoffeeDetailsLayout";
import ErrorPage from "../pages/ErrorPage";
import UpdateCoffeeLayout from "../layouts/UpdateCoffeeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>,
        loader: () => fetch('http://localhost:5000/coffees')
      },
      {
        path: "/add-coffee",
        element: <AddCoffeeLayout></AddCoffeeLayout>
      },
      {
        path: "/update-coffee/:id",
        element: <UpdateCoffeeLayout></UpdateCoffeeLayout>,
        loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`)
      },
      {
        path: "/coffees/:id",
        element: <CoffeeDetailsLayout></CoffeeDetailsLayout>,
        loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`)
      }
    ]
  },
]);

export default router;
