import PropTypes from "prop-types";
import { AiFillDelete } from "react-icons/ai";
import { FaEdit } from "react-icons/fa";
import ReactStars from "react-stars";

const MyReviewsCard = ({ review, index, setMyReviews, data }) => {
  const { _id, coverImage, gameTitle, rating, genre } = review;

  const handleDelete = (id) => {
    fetch(`http://localhost:5000/delete-reviews/${id}`,{
        method: 'DELETE'
    })
    .then(res => res.json())
    .then(result => {
        if(result.deletedCount > 0){
            alert('Deleted Successfully')
            setMyReviews(data.filter(review=>review._id !== id))
        }
    })
  }

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
        <button onClick={()=>handleDelete(_id)} className="text-white text-xl">
          <AiFillDelete />
        </button>
      </th>
    </tr>
  );
};

MyReviewsCard.propTypes = {
  review: PropTypes.object,
  index: PropTypes.number,
  data: PropTypes.object,
  setMyReviews: PropTypes.func
};

export default MyReviewsCard;
