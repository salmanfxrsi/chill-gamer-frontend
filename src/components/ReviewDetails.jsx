import { useContext, useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import ReactStars from "react-stars";
import { AuthContext } from "../provider/AuthProvider";
import { Bounce, toast } from "react-toastify";

const ReviewDetails = () => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    document.title = `Chill Gamer - ${gameTitle}`;
  }, []);

  const handleWatchLater = () => {
    const gameData = {
      _id: _id,
      coverImage: coverImage,
      gameTitle: gameTitle,
      reviewDescription: reviewDescription,
      rating: rating,
      publishingYear: publishingYear,
      genre: genre,
      email: email,
      userName: userName,
      wisherEmail: user.email,
    };
    fetch('https://chill-gamer-server-one.vercel.app/wishlist',{
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(gameData)
    })
    .then(response => response.json())
    .then(result => {
      if(result.acknowledged){
        toast.success("Added In Your Wishlist!", {
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

  const {
    _id,
    coverImage,
    gameTitle,
    reviewDescription,
    rating,
    publishingYear,
    genre,
    email,
    userName,
  } = useLoaderData();

  return (
    <div className="hero py-36">
      <div className="hero-content flex-col lg:flex-row gap-6">
        <img src={coverImage} className="max-w-sm rounded-lg shadow-2xl" />
        <div>
          <div className="flex gap-4 mb-4">
            <div className="badge badge-warning gap-2">{userName}</div>
            <div className="badge badge-warning gap-2">{email}</div>
          </div>
          <ReactStars
            value={rating}
            onChange={false}
            size={24}
            color2={"#ffd700"}
          />
          <h1 className="text-5xl font-bold dark:text-white light:text-black">{gameTitle}</h1>
          <small className="card-title dark:text-white light:text-black text-base mt-1">
            Category: {genre}
          </small>
          <small className="card-title dark:text-white light:text-black text-base mt-1">
            Published In: {publishingYear}
          </small>
          <p className=" dark:text-white light:text-black mt-1">{reviewDescription}</p>
          <button
            onClick={() => handleWatchLater(_id)}
            className="btn btn-warning mt-4"
          >
            Watch Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
