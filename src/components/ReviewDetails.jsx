import { useEffect } from "react";
import { useLoaderData } from "react-router-dom";
import ReactStars from "react-stars";

const ReviewDetails = (id) => {
  useEffect(() => {
    document.title = `Chill Gamer - ${gameTitle}`;
  }, []);

  const handleWatchLater = () => {
    fetch(`/reviews/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(true),
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
    <div className="hero py-36 bg-black">
      <div className="hero-content flex-col lg:flex-row">
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
          <h1 className="text-5xl font-bold text-white">{gameTitle}</h1>
          <small className="card-title text-white text-base mt-1">
            Category: {genre}
          </small>
          <small className="card-title text-white text-base mt-1">
            Published In: {publishingYear}
          </small>
          <p className=" text-white mt-1">{reviewDescription}</p>
          <button
            onClick={() => handleWatchLater(_id)}
            className="btn btn-warning btn-outline mt-4"
          >
            Watch Later
          </button>
        </div>
      </div>
    </div>
  );
};

export default ReviewDetails;
