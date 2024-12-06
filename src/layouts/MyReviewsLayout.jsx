import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import MyReviewsCard from "../components/MyReviewsCard";

const MyReviewsLayout = () => {
  const data = useLoaderData();

  useEffect(() => {
    document.title = "Chill Gamer - My Reviews";
  }, []);

  return (
    <div className="overflow-x-auto">
      <table className="table">
        <thead>
          <tr>
            <th className="text-white">Serial</th>
            <th className="text-white">Name</th>
            <th className="text-white">Rating</th>
            <th className="text-white">Update</th>
            <th className="text-white">Delete</th>
            <th className="text-white"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((review, index) => (
            <MyReviewsCard
              key={review.id}
              index={index}
              review={review}
            ></MyReviewsCard>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyReviewsLayout;
