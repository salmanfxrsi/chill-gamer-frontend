import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

const ReviewCard = ({ review }) => {
  const { _id, coverImage, gameTitle, rating, genre } = review;

  return (
    <div className="card shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={coverImage}
          alt="Shoes"
          className="rounded-xl h-[222px] w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-white text-2xl">{gameTitle}</h2>
        <small className="card-title text-white text-base">
          Category: {genre}
        </small>
        <div className="flex items-center gap-2">
        <ReactStars
          value={rating}
          onChange={false}
          size={24}
          color2={"#ffd700"}
        />
        <h1 className="text-warning">{rating}</h1>
        </div>
        <div className="card-actions">
          <Link
            to={`/reviews/${_id}`}
            className="mt-4 btn btn-warning btn-outline"
          >
            Explore Details
          </Link>
        </div>
      </div>
    </div>
  );
};

ReviewCard.propTypes = {
  review: PropTypes.object,
};

export default ReviewCard;
