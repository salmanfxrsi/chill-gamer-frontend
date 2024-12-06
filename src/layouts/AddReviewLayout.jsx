import { useEffect } from "react";
import { Bounce, toast } from "react-toastify";

const AddReviewLayout = () => {
  const genres = ["Action", "RPG", "Adventure", "Strategy", "Sports"];

  useEffect(()=>{
    document.title = "Chill Gamer - Add Review"
  },[])

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
    const review = {
      coverImage: coverImage,
      gameTitle: gameTitle,
      reviewDescription: reviewDescription,
      rating: rating,
      publishingYear: publishingYear,
      genre: genre,
      email: email,
      userName: userName,
    };
    fetch("https://chill-gamer-server-one.vercel.app/reviews", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(review),
    })
      .then((response) => response.json())
      .then((result) => {
        if (result.acknowledged) {
          e.target.reset();
          toast.success("Wow review added!", {
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
          console.log(result);
        }
      });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-4 w-11/12 lg:max-w-lg mx-auto bg-header shadow-md rounded my-24 bg-opacity-80"
    >
      <h2 className="text-2xl font-extrabold mb-4 text-center bg-gradient-to-r from-[#FFC536] to-white text-transparent bg-clip-text">
        Submit Game Review
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
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2 text-white">Genre</label>
          <select name="genre" className="w-full p-2 border rounded" required>
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
          />
        </div>
      </div>
      <button type="submit" className="btn btn-warning btn-outline w-full">
        Submit Review
      </button>
    </form>
  );
};

export default AddReviewLayout;
