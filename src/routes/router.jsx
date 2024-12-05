import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorLayout from "../layouts/ErrorLayout";
import HomeLayout from "../layouts/HomeLayout";
import AddReviewLayout from "../layouts/AddReviewLayout";
import AllReviewsLayout from "../layouts/AllReviewsLayout";
import ReviewDetails from "../components/ReviewDetails";
import MyReviewsLayout from "../layouts/MyReviewsLayout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorLayout></ErrorLayout>,
      children: [
        {
          path: "/",
          element: <HomeLayout></HomeLayout>,
          loader: () => fetch('http://localhost:5000/reviews'),
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
        {
          path: "/reviews/:id",
          element: <ReviewDetails></ReviewDetails>,
          loader: ({ params }) => fetch(`http://localhost:5000/reviews/${params.id}`),
        },
        {
          path: "/my-reviews/:email",
          element: <MyReviewsLayout></MyReviewsLayout>,
          loader: ({ params }) => fetch(`http://localhost:5000/my-reviews/${params.email}`),
        },
      ]
    },
  ]);

export default router;