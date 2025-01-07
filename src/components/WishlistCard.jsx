import PropTypes from "prop-types";
import { AiFillDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

const WishlistCard = ({ wish, index }) => {
  const { _id, coverImage, gameTitle, rating, genre } = wish;

  return (
    <tr>
      <th className="dark:text-white light:text-black">{index + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar hidden md:block">
            <div className="mask mask-squircle h-12 w-12">
              <img src={coverImage} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold dark:text-white light:text-black">
              {gameTitle}
            </div>
            <div className="text-sm opacity-50 dark:text-white light:text-black">
              {genre}
            </div>
          </div>
        </div>
      </td>
      <td>
        <div className="hidden lg:block">
          <ReactStars
            value={rating}
            onChange={false}
            size={24}
            color2={"#ffd700"}
          />
        </div>
        <div>
          <h2 className="font-bold lg:hidden">{rating}</h2>
        </div>
      </td>
      <th>
        <div className="text-xl dark:text-white light:text-black">
          <AiFillDelete />
        </div>
      </th>
      <th>
        <Link
          className="btn btn-warning dark:text-white light:text-black text-sm uppercase"
          to={`/reviews/${_id}`}
        >
          Details
        </Link>
      </th>
    </tr>
  );
};

WishlistCard.propTypes = {
  wish: PropTypes.object,
  index: PropTypes.number,
};

export default WishlistCard;
