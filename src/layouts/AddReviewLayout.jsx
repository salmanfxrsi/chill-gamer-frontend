import { useContext, useEffect } from "react";
import { Bounce, toast } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

const AddReviewLayout = () => {
  const genres = ["Action", "RPG", "Adventure", "Strategy", "Sports"];
  const { user } = useContext(AuthContext);

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
          e.target.reset()
          toast.success("Thanks For Your Review", {
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
      <h2 className="uppercase text-2xl font-extrabold mb-16 text-center light:text-white dark:text-[#FFC536]">
        Post Game Review
      </h2>

      <div className="grid lg:grid-cols-2 grid-cols-1 gap-2">
        <div className="mb-4">
          <label className="block light:text-black dark:text-white font-medium mb-2">
            Game Cover Image
          </label>
          <input
            type="url"
            name="coverImage"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2 light:text-black dark:text-white">
            Game Title
          </label>
          <input
            type="text"
            name="gameTitle"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2 light:text-black dark:text-white">
            Review Description
          </label>
          <textarea
            name="reviewDescription"
            className="w-full p-2 border rounded"
            rows="4"
            required
          ></textarea>
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2 light:text-black dark:text-white">Rating</label>
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
          <label className="block font-medium mb-2 light:text-black dark:text-white">
            Publishing Year
          </label>
          <input
            type="number"
            name="publishingYear"
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2 light:text-black dark:text-white">Genre</label>
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
          <label className="block font-medium mb-2 light:text-black dark:text-white">
            User Email
          </label>
          <input
            type="email"
            name="email"
            value={user?.email}
            readOnly
            className="w-full p-2 border rounded bg-gray-200 cursor-not-allowed"
          />
        </div>

        <div className="mb-4">
          <label className="block font-medium mb-2 light:text-black dark:text-white">User Name</label>
          <input
            type="text"
            name="userName"
            value={user?.displayName}
            readOnly
            className="w-full p-2 border rounded bg-gray-200 cursor-not-allowed"
          />
        </div>
      </div>
      <button type="submit" className="btn uppercase btn-warning w-full mt-8">
        Submit Review
      </button>
    </form>
  );
};

export default AddReviewLayout;
