import { useContext, useEffect } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { Bounce, toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

const UpdateReviewLayout = () => {
  const genres = ["Action", "RPG", "Adventure", "Strategy", "Sports"];
  const data = useLoaderData();
  const {
    _id,
    coverImage,
    gameTitle,
    rating,
    genre,
    reviewDescription,
    publishingYear,
    email,
    userName,
  } = data;
  const { user } = useContext(AuthContext);
  const navigate = useNavigate()

  useEffect(() => {
    document.title = "Chill Gamer - Update Review";
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const coverImage = form.coverImage.value;
    const gameTitle = form.gameTitle.value;
    const reviewDescription = form.reviewDescription.value;
    const rating = Number(form.rating.value);
    const publishingYear = Number(form.publishingYear.value);
    const genre = form.genre.value;
    const email = form.email.value;
    const userName = form.userName.value;
    const updatedReview = {
      coverImage,
      gameTitle,
      reviewDescription,
      rating,
      publishingYear,
      genre,
      email,
      userName,
    };
    fetch(`https://chill-gamer-server-one.vercel.app/update-review/${_id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedReview),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.modifiedCount > 0) {
          toast.success("Review Updated", {
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
          navigate(`/my-reviews/${user?.email}`)
        } else {
          toast.warning("Change Something For Update", {
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
        }
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 w-11/12 lg:container mx-auto bg-form shadow-md rounded my-24 bg-opacity-80"
    >
      <h2 className="text-2xl font-extrabold mb-16 text-center dark:text-white light:text-black uppercase">
        Update {gameTitle}
      </h2>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
        <div className="mb-4">
          <label className="block dark:text-white light:text-black font-medium mb-2">
            Game Cover Image
          </label>
          <input
            type="url"
            name="coverImage"
            className="w-full p-2 border rounded"
            required
            defaultValue={coverImage}
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2 dark:text-white light:text-black">
            Game Title
          </label>
          <input
            type="text"
            name="gameTitle"
            className="w-full p-2 border rounded"
            required
            defaultValue={gameTitle}
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2 dark:text-white light:text-black">
            Review Description
          </label>
          <textarea
            name="reviewDescription"
            className="w-full p-2 border rounded"
            rows="4"
            required
            defaultValue={reviewDescription}
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2 dark:text-white light:text-black">Rating</label>
          <input
            type="text"
            name="rating"
            className="w-full p-2 border rounded"
            min="1"
            max="10"
            placeholder="Rate between 1-10"
            required
            defaultValue={rating}
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2 dark:text-white light:text-black">
            Publishing Year
          </label>
          <input
            type="number"
            name="publishingYear"
            className="w-full p-2 border rounded"
            required
            defaultValue={publishingYear}
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2 dark:text-white light:text-black">Genre</label>
          <select
            name="genre"
            className="w-full p-2 border rounded"
            required
            defaultValue={genre}
          >
            <option value="" disabled>
              Select Genre
            </option>
            {genres.map((genre) => (
              <option key={genre} value={genre}>
                {genre}
              </option>
            ))}
          </select>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2 dark:text-white light:text-black">
            User Email
          </label>
          <input
            type="email"
            name="email"
            value={user?.email}
            readOnly
            className="w-full p-2 border rounded bg-gray-200 cursor-not-allowed"
            defaultValue={email}
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2 dark:text-white light:text-black">User Name</label>
          <input
            type="text"
            name="userName"
            value={user.displayName}
            readOnly
            className="w-full p-2 border rounded bg-gray-200 cursor-not-allowed"
            defaultValue={userName}
          />
        </div>
      </div>
      <button type="submit" className="mt-8 uppercase btn btn-warning w-full">
        Update Review
      </button>
    </form>
  );
};

export default UpdateReviewLayout;
