import { Link } from "react-router-dom";

const ExploreGameNow = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img
          src="https://i.ibb.co.com/KbDbv2w/Spider-Man-Miles-Morales.jpg"
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-4xl font-bold uppercase">Explore Game Now</h1>
          <p className="py-6">
          Go and explore game reviews. Choose the best game, enjoy it, and immerse yourself in a world of thrilling adventures and captivating stories. Discover the perfect game that fits your preferences, dive into in-depth reviews, and make an informed decision before jumping into your next gaming experience.
          </p>
          <Link to='/reviews' className="btn btn-warning">Watch Reviews</Link>
        </div>
      </div>
    </div>
  );
};

export default ExploreGameNow;
