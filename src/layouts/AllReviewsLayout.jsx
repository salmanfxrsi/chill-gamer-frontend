import { useEffect, useState } from "react";
import ReviewCard from "../components/ReviewCard";

const AllReviewsLayout = () => {
  const [reviews, setReviews] = useState([]);
  const [filteredReviews, setFilteredReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedGenre, setSelectedGenre] = useState("");
  const [sortOption, setSortOption] = useState("");

  const genres = ["Action", "RPG", "Adventure", "Strategy", "Sports"];

  useEffect(() => {
    document.title = "Chill Gamer - All Reviews";

    // Fetch data from the API
    const fetchReviews = async () => {
      try {
        const response = await fetch(
          "https://chill-gamer-server-one.vercel.app/reviews"
        );
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setReviews(data);
        setFilteredReviews(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  // Handle Genre Filter
  const handleGenreChange = (genre) => {
    setSelectedGenre(genre);
    if (genre === "") {
      // Show all reviews if no genre is selected
      setFilteredReviews(reviews);
    } else {
      // Filter reviews based on the selected genre
      const filtered = reviews.filter((review) => review.genre === genre);
      setFilteredReviews(filtered);
    }
  };

  const resetFilter = () => {
    setSelectedGenre("");
    setFilteredReviews(reviews);
  };

  // Handle Sort
  const handleSortChange = (option) => {
    setSortOption(option);
    let sortedReviews = [...filteredReviews];

    if (option === "rating-asc") {
      sortedReviews.sort((a, b) => a.rating - b.rating); // Sort by rating (low to high)
    } else if (option === "rating-desc") {
      sortedReviews.sort((a, b) => b.rating - a.rating); // Sort by rating (high to low)
    } else if (option === "year-asc") {
      sortedReviews.sort((a, b) => a.publishingYear - b.publishingYear); // Sort by year (old to new)
    } else if (option === "year-desc") {
      sortedReviews.sort((a, b) => b.publishingYear - a.publishingYear); // Sort by year (new to old)
    }

    setFilteredReviews(sortedReviews);
  };

  if (loading) {
    return <div className="text-center py-24">Loading...</div>;
  }

  if (error) {
    return <div className="text-center py-24 text-red-500">{error}</div>;
  }

  return (
    <div className="py-24">
      {/* Filter and Sort Controls */}
      <div className="container mb-16 space-x-4 mx-auto flex justify-between">
        <div>
          {/* Genre Filter Dropdown */}
          <select
            className="border px-4 py-2 rounded-md mr-4"
            value={selectedGenre}
            onChange={(e) => handleGenreChange(e.target.value)}
          >
            <option value="">Filter by Genre</option>
            {genres.map((genre, index) => (
              <option key={index} value={genre}>
                {genre}
              </option>
            ))}
          </select>

          {/* Sort Dropdown */}
          <select
            className="border px-4 py-2 rounded-md"
            value={sortOption}
            onChange={(e) => handleSortChange(e.target.value)}
          >
            <option value="">Sort By</option>
            <option value="rating-asc">Rating (Low to High)</option>
            <option value="rating-desc">Rating (High to Low)</option>
            <option value="year-asc">Year (Old to New)</option>
            <option value="year-desc">Year (New to Old)</option>
          </select>
        </div>

        <div>
          <button className="btn btn-warning" onClick={resetFilter}>
            Reset Filter
          </button>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="container mx-auto grid sm:grid-cols-2 lg:grid-cols-3 grid-cols-1 justify-center gap-6">
        {filteredReviews.length === 0 ? (
          <div className="text-center col-span-4 py-12">
            No reviews found for this genre
          </div>
        ) : (
          filteredReviews.map((review) => (
            <ReviewCard key={review._id} review={review} />
          ))
        )}
      </div>
    </div>
  );
};

export default AllReviewsLayout;
