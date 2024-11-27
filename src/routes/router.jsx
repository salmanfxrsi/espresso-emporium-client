import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomeLayout from "../layouts/HomeLayout";
import AddCoffeeLayout from "../layouts/AddCoffeeLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <HomeLayout></HomeLayout>
      },
      {
        path: "/add-coffee",
        element: <AddCoffeeLayout></AddCoffeeLayout>
      }
    ]
  },
]);

export default router;
