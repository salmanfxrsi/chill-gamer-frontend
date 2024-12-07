import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorLayout from "../layouts/ErrorLayout";
import HomeLayout from "../layouts/HomeLayout";
import AddReviewLayout from "../layouts/AddReviewLayout";
import AllReviewsLayout from "../layouts/AllReviewsLayout";
import ReviewDetails from "../components/ReviewDetails";
import MyReviewsLayout from "../layouts/MyReviewsLayout";
import UpdateReviewLayout from "../layouts/UpdateReviewLayout";

const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      errorElement: <ErrorLayout></ErrorLayout>,
      children: [
        {
          path: "/",
          element: <HomeLayout></HomeLayout>,
          loader: () => fetch('https://chill-gamer-server-one.vercel.app/reviews'),
        },
        {
          path: "/add-review",
          element: <AddReviewLayout></AddReviewLayout>
        },
        {
          path: "/reviews",
          element: <AllReviewsLayout></AllReviewsLayout>,
          loader: () => fetch('https://chill-gamer-server-one.vercel.app/reviews'),
        },
        {
          path: "/reviews/:id",
          element: <ReviewDetails></ReviewDetails>,
          loader: ({ params }) => fetch(`https://chill-gamer-server-one.vercel.app/reviews/${params.id}`),
        },
        {
          path: "/my-reviews/:email",
          element: <MyReviewsLayout></MyReviewsLayout>,
          loader: ({ params }) => fetch(`https://chill-gamer-server-one.vercel.app/my-reviews/${params.email}`),
        },
        {
          path: "/update-review/:id",
          element: <UpdateReviewLayout></UpdateReviewLayout>,
          loader: ({ params }) => fetch(`https://chill-gamer-server-one.vercel.app/reviews/${params.id}`),
        },
      ]
    },
  ]);

export default router;