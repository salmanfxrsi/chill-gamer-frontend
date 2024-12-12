import { useLoaderData } from "react-router-dom";
import { useEffect } from "react";
import WishlistCard from "../components/WishlistCard";

const WishlistLayout = () => {
  const data = useLoaderData();

  useEffect(() => {
    document.title = "Chill Gamer - Wishlist";
  }, []);

  return (
    <div className="overflow-x-auto bg-black calc(100vh - 467px)"  style={{ height: "calc(100vh - 447px)" }}>
      <table className="table">
        <thead>
          <tr>
            <th className="text-white">Serial</th>
            <th className="text-white">Name</th>
            <th className="text-white">Rating</th>
            <th className="text-white">Publishing Year</th>
            <th className="text-white"></th>
            <th className="text-white"></th>
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