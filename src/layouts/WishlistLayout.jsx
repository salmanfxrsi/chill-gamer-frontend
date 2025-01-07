import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import WishlistCard from "../components/WishlistCard";

const WishlistLayout = () => {
  const data = useLoaderData();

  useEffect(() => {
    document.title = "Chill Gamer - Wishlist";
  }, []);

  return (
    <div className="overflow-x-auto my-6 calc(100vh - 467px)"  style={{ height: "calc(100vh - 447px)" }}>
      <table className="table">
        <thead>
          <tr>
            <th className="dark:text-white light:text-black">Serial</th>
            <th className="dark:text-white light:text-black">Name</th>
            <th className="dark:text-white light:text-black">Rating</th>
            <th className="dark:text-white light:text-black">Publishing Year</th>
            <th className="dark:text-white light:text-black"></th>
            <th className="dark:text-white light:text-black"></th>
          </tr>
        </thead>
        <tbody>
          {data.map((wish, index) => (
            <WishlistCard
              key={wish._id}
              index={index}
              wish={wish}
            ></WishlistCard>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default WishlistLayout;