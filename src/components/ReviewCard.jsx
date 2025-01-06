import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

const ReviewCard = ({ review }) => {
  const { _id, coverImage, gameTitle, rating, genre } = review;

  return (
    <div className="card shadow-xl uppercase">
      <figure className="">
        <img
          src={coverImage}
          alt="Shoes"
          className="rounded h-[222px] w-full"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {gameTitle}
          <div className="badge badge-warning">{genre}</div>
        </h2>

        <div className="flex items-center gap-2">
          <ReactStars
            value={rating}
            onChange={false}
            size={24}
          />
          <h1 className="light:text-black font-bold dark:text-white">{rating}</h1>
        </div>
        <div className="card-actions">
          <Link to={`/reviews/${_id}`} className="mt-2 btn btn-warning">
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
