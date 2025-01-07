import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";

const useReviews = () => {
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const { data } = await axios.get(
          "https://chill-gamer-server-one.vercel.app/reviews"
        );
        setReviews(data);
      } catch (error) {
        toast.error(error.message);
      }
    };

    fetchReviews();
  }, []);

  return [reviews, loading];
};

export default useReviews;
