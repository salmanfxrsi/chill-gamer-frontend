import { Link } from "react-router-dom";

const Banner = () => {
  return (
    <div className="py-12 lg:py-24 w-11/12 lg:container mx-auto">
      <div>
        <h1 className="text-6xl font-bold text-white mb-4">
          The Ultimate <br /> Platform for{" "}
          <span className="text-[#FFC536]">Games</span>
          <br /> Reviews
        </h1>
        <p className="text-white text-opacity-80 w-5/12 hidden lg:block">
          The ultimate platform where gamers can explore detailed reviews, share
          their opinions, and connect with a community, all within a sleek and
          user-friendly interface.
        </p>
        <div className="flex gap-4 mt-8">
          <Link to={"/login"} className="btn btn-warning btn-outline">
            Login Now
          </Link>
          <Link
            to={"/reviews"}
            className="btn btn-outline lg:text-white lg:border-white"
          >
            All Reviews
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Banner;
