import PropTypes from "prop-types";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import { Link } from "react-router-dom";
import ReactStars from "react-stars";
import { Bounce, toast } from "react-toastify";

const MyReviewsCard = ({ review, index, setMyReviews, myReviews }) => {
  const { _id, coverImage, gameTitle, rating, genre } = review;

  const handleDelete = (id) => {
    fetch(`https://chill-gamer-server-one.vercel.app/delete-reviews/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((result) => {
        setMyReviews(myReviews.filter((review) => review._id != id));
        console.log(result);
        toast.warning("Review Deleted!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
          transition: Bounce,
        });
      });
  };

  return (
    <tr>
      <th className="dark:text-white light:text-black">{index + 1}</th>
      <td>
        <div className="flex items-center gap-3">
          <div className="avatar hidden md:block">
            <div className="mask mask-squircle h-12 w-12">
              <img src={coverImage} />
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
        <Link
          to={`/update-review/${_id}`}
          className="dark:text-white light:text-black text-lg"
        >
          <FaEdit></FaEdit>
        </Link>
      </th>
      <th>
        <button
          onClick={() => handleDelete(_id)}
          className="dark:text-white light:text-black text-xl"
        >
          <AiFillDelete />
        </button>
      </th>
    </tr>
  );
};

MyReviewsCard.propTypes = {
  review: PropTypes.object,
  index: PropTypes.number,
  myReviews: PropTypes.array,
  setMyReviews: PropTypes.func,
};

export default MyReviewsCard;
