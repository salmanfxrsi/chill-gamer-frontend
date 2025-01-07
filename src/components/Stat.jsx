import PropTypes from "prop-types";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Stat = ({ data }) => {
  const { user } = useContext(AuthContext)

  return (
    <div className="stats shadow w-full">
      <div className="stat">
        <div className="stat-figure text-warning">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
            ></path>
          </svg>
        </div>
        <div className="stat-title light:text-black dark:text-white">Total Reviews</div>
        <div className="stat-value text-warning">{data.length}</div>
        <div className="stat-desc light:text-black dark:text-white">See reviews and chill here</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-warning">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            className="inline-block h-8 w-8 stroke-current"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M13 10V3L4 14h7v7l9-11h-7z"
            ></path>
          </svg>
        </div>
        <div className="stat-title light:text-black dark:text-white">Users</div>
        <div className="stat-value text-warning">211</div>
        <div className="stat-desc light:text-black dark:text-white">21% more than last month</div>
      </div>

      <div className="stat">
        <div className="stat-figure text-secondary">
          <div className="avatar online">
            <div className="w-16 rounded-full">
              <img src={user?.photoURL} />
            </div>
          </div>
        </div>
        <div className="stat-value text-warning">{user?.displayName}</div>
        <div className="stat-title light:text-black dark:text-white">{user?.email}</div>
      </div>
    </div>
  );
};

Stat.propTypes = {
    data: PropTypes.array
}
 
export default Stat;
