import { useLoaderData } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import { useEffect } from "react";

const AllReviewsLayout = () => {
  const data = useLoaderData();
  
  useEffect(()=>{
    document.title = "Chill Gamer - All Reviews"
  },[])

  return (
    <div className="flex items-center py-24">
      <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 grid-cols-1 justify-center gap-12">
        {data.map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </div>
    </div>
  );
};

export default AllReviewsLayout;
