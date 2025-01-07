import { useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import MyReviewsCard from "../components/MyReviewsCard";

const MyReviewsLayout = () => {
  const data = useLoaderData();
  const [myReviews,setMyReviews] = useState(data);

  useEffect(() => {
    document.title = "Chill Gamer - My Reviews";
  }, []);

  return (
    <div className="overflow-x-auto my-6 calc(100vh - 467px)"  style={{ height: "calc(100vh - 447px)" }}>
      <table className="table">
        <thead>
          <tr>
            <th className="dark:text-white light:text-black">Serial</th>
            <th className="dark:text-white light:text-black">Name</th>
            <th className="dark:text-white light:text-black">Rating</th>
            <th className="dark:text-white light:text-black">Update</th>
            <th className="dark:text-white light:text-black">Delete</th>
            <th className="dark:text-white light:text-black"></th>
          </tr>
        </thead>
        <tbody>
          {myReviews.map((review, index) => (
            <MyReviewsCard
              key={review._id}
              index={index}
              review={review}
              setMyReviews={setMyReviews}
              myReviews={myReviews}
              data={data}
            ></MyReviewsCard>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MyReviewsLayout;
