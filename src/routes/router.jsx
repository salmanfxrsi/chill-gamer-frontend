import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorLayout from "../layouts/ErrorLayout";
import HomeLayout from "../layouts/HomeLayout";
import AddReviewLayout from "../layouts/AddReviewLayout";
import AllReviewsLayout from "../layouts/AllReviewsLayout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorLayout></ErrorLayout>,
      children: [
        {
          path: "/",
          element: <HomeLayout></HomeLayout>
        },
        {
          path: "/add-review",
          element: <AddReviewLayout></AddReviewLayout>
        },
        {
          path: "/reviews",
          element: <AllReviewsLayout></AllReviewsLayout>,
          loader: () => fetch('http://localhost:5000/reviews'),
        },
      ]
    },
  ]);

export default router;