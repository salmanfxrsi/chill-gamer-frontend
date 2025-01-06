import { useLoaderData } from "react-router-dom";
import Stat from "../components/Stat";
import ReviewCard from "../components/ReviewCard";
import Trending from "../components/Trending";
import { useEffect } from "react";

const HomeLayout = () => {
  const data = useLoaderData();

  useEffect(()=>{
    document.title = "Chill Gamer - Home"
  },[])

  return (
    <div>
      {/* <section className="w-11/12 lg:container mx-auto py-24">
        <Slider></Slider>
      </section> */}
      <h1 className="dark:text-white text-center font-extrabold text-5xl mb-24 mt-24 uppercase">Top Rated Game</h1>
      <section className="w-11/12 lg:container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-center gap-6 pb-24">
        {data.sort((a, b) => b.rating - a.rating).slice(0,6).map((review) => (
          <ReviewCard key={review._id} review={review}></ReviewCard>
        ))}
      </section>
      <section className="flex justify-center pb-24 w-11/12 lg:container mx-auto">
        <Stat data={data}></Stat>
      </section>
      <section className="flex justify-center pb-24 w-11/12 lg:container mx-auto">
        <Trending></Trending>
      </section>
    </div>
  );
};

export default HomeLayout;
