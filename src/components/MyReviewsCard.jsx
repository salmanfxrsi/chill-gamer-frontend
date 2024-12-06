import PropTypes from "prop-types";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import ReactStars from "react-stars";

const MyReviewsCard = ({ review, index }) => {
  const { coverImage, gameTitle, rating, genre } = review;

  return (
    <tr>
      <th className="text-white">{index + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar">
            <div className="mask mask-squircle h-12 w-12">
              <img src={coverImage} alt="Avatar Tailwind CSS Component" />
            </div>
          </div>
          <div>
            <div className="font-bold text-white">{gameTitle}</div>
            <div className="text-sm opacity-50 text-white">{genre}</div>
          </div>
        </div>
      </td>
      <td>
        <ReactStars
          value={rating}
          onChange={false}
          size={24}
          color2={"#ffd700"}
        />
      </td>
      <th>
        <button className="text-white text-lg">
          <FaEdit></FaEdit>
        </button>
      </th>
      <th>
        <button className="text-white text-xl">
          <AiFillDelete />
        </button>
      </th>
    </tr>
  );
};

MyReviewsCard.propTypes = {
  review: PropTypes.object,
  index: PropTypes.number,
};

export default MyReviewsCard;
