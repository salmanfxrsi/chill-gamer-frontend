import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import useReviews from "../hooks/useReviews";

const Slider = () => {
  const [reviews] = useReviews();

  return (
    <>
    <h1 className="dark:text-white text-center font-extrabold text-4xl mb-24 uppercase">Explore Games</h1>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination]}
        className="mySwiper"
      >
        {reviews.map(review => <SwiperSlide key={review._id}>
          <img className="h-[400px] w-full" src={review.coverImage} alt="" />
        </SwiperSlide>)}
      </Swiper>
    </>
  );
};

export default Slider;
