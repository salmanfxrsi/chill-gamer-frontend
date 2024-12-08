import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";

const WishlistCard = ({ wish, index }) => {
    const { _id, coverImage, gameTitle, rating, genre, publishingYear } = wish;

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
          <div className="font-bold text-white">{publishingYear}</div>
          </th>
          <th>
            <Link
              className="text-white text-xl"
              to={`/reviews/${_id}`}
            >
              View Details
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