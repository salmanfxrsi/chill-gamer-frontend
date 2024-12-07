import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import { Bounce, toast } from "react-toastify";

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
          toast.success("Review Updated!", {
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
        } else {
          toast.warning("Change Something For Update!", {
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
      <h2 className="text-2xl font-extrabold mb-10 text-center text-warning">
        Update {gameTitle}
      </h2>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
        <div className="mb-4">
          <label className="block text-white font-medium mb-2">
            Game Cover Image
          </label>
          <input
            type="url"
            name="coverImage"
            className="w-full p-2 border rounded"
            placeholder="https://example.com/game-cover.jpg"
            required
            defaultValue={coverImage}
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2 text-white">
            Game Title
          </label>
          <input
            type="text"
            name="gameTitle"
            className="w-full p-2 border rounded"
            placeholder="Enter game title"
            required
            defaultValue={gameTitle}
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2 text-white">
            Review Description
          </label>
          <textarea
            name="reviewDescription"
            className="w-full p-2 border rounded"
            rows="4"
            placeholder="Write your detailed review here..."
            required
            defaultValue={reviewDescription}
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2 text-white">Rating</label>
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
          <label className="block font-medium mb-2 text-white">
            Publishing Year
          </label>
          <input
            type="number"
            name="publishingYear"
            className="w-full p-2 border rounded"
            placeholder="e.g., 2024"
            required
            defaultValue={publishingYear}
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2 text-white">Genre</label>
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
          <label className="block font-medium mb-2 text-white">
            User Email
          </label>
          <input
            type="email"
            name="email"
            value={"rumaxprivate@gmail.com"}
            readOnly
            className="w-full p-2 border rounded bg-gray-200 cursor-not-allowed"
            defaultValue={email}
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2 text-white">User Name</label>
          <input
            type="text"
            name="userName"
            value={"rumaakther"}
            readOnly
            className="w-full p-2 border rounded bg-gray-200 cursor-not-allowed"
            defaultValue={userName}
          />
        </div>
      </div>
      <button type="submit" className="btn btn-warning btn-outline w-full">
        Update Review
      </button>
    </form>
  );
};

export default UpdateReviewLayout;
