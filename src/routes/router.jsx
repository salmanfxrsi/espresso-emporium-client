import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomeLayout from "../layouts/HomeLayout";
import AddCoffeeLayout from "../layouts/AddCoffeeLayout";
import CoffeeDetailsLayout from "../layouts/CoffeeDetailsLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
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
        path: "/coffees/:id",
        element: <CoffeeDetailsLayout></CoffeeDetailsLayout>,
        loader: ({ params }) => fetch(`http://localhost:5000/coffees/${params.id}`)
      }
    ]
  },
]);

export default router;
