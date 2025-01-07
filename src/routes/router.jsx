import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorLayout from "../layouts/ErrorLayout";
import HomeLayout from "../layouts/HomeLayout";
import AddReviewLayout from "../layouts/AddReviewLayout";
import AllReviewsLayout from "../layouts/AllReviewsLayout";
import ReviewDetails from "../components/ReviewDetails";
import MyReviewsLayout from "../layouts/MyReviewsLayout";
import UpdateReviewLayout from "../layouts/UpdateReviewLayout";
import RegistrationFormLayout from "../layouts/RegistrationFormLayout";
import LoginFormLayout from "../layouts/LoginFormLayout";
import PrivateRoute from "./PrivateRoutes";
import WishlistLayout from "../layouts/WishlistLayout";

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
          element: <PrivateRoute><AddReviewLayout></AddReviewLayout></PrivateRoute>
        },
        {
          path: "/reviews",
          element: <AllReviewsLayout></AllReviewsLayout>,
          loader: () => fetch('https://chill-gamer-server-one.vercel.app/reviews'),
        },
        {
          path: "/reviews/:id",
          element: <PrivateRoute><ReviewDetails></ReviewDetails></PrivateRoute>,
          loader: ({ params }) => fetch(`https://chill-gamer-server-one.vercel.app/reviews/${params.id}`),
        },
        {
          path: "/my-reviews/:email",
          element: <PrivateRoute><MyReviewsLayout></MyReviewsLayout></PrivateRoute>,
          loader: ({ params }) => fetch(`https://chill-gamer-server-one.vercel.app/my-reviews/${params.email}`),
        },
        {
          path: "/watchList/:email",
          element: <PrivateRoute><WishlistLayout></WishlistLayout></PrivateRoute>,
          loader: ({ params }) => fetch(`https://chill-gamer-server-one.vercel.app/wishlist/${params.email}`),
        },
        {
          path: "/update-review/:id",
          element: <PrivateRoute><UpdateReviewLayout></UpdateReviewLayout></PrivateRoute>,
          loader: ({ params }) => fetch(`https://chill-gamer-server-one.vercel.app/reviews/${params.id}`),
        },
        {
          path: "/registration",
          element: <RegistrationFormLayout></RegistrationFormLayout>,
        },
        {
          path: "/login",
          element: <LoginFormLayout></LoginFormLayout>,
        },
      ]
    },
  ]);

export default router;