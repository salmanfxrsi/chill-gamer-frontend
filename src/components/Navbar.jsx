import { Link, NavLink, useNavigate } from "react-router-dom";
import SwapButton from "./SwapButton";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { userSignOut, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignOut = () => {
    userSignOut();
    navigate("/");
  };

  const links = (
    <>
      <NavLink to={"/"}>Home</NavLink>
      <NavLink to={"/reviews"}>All Reviews</NavLink>
      {user && (
        <>
          <NavLink to={"/add-review"}>Add Review</NavLink>
          <NavLink to={`/my-reviews/${user?.email}`}>My Reviews</NavLink>
          <NavLink to={`/watchList/${user?.email}`}>Game WatchList</NavLink>
        </>
      )}
    </>
  );

  return (
    <div className="">
      <div className="navbar container mx-auto py-6">
        <div className="navbar-start flex gap-2">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-warning bg-transparent lg:hidden text-warning hover:text-black"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <div
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {links}
            </div>
          </div>
          <Link to='/' className="text-3xl text-white font-bold uppercase hidden sm:block">
            <span className="text-warning">Chill</span>
            Gamer
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <div className="menu menu-horizontal flex gap-6 text-white">
            {links}
          </div>
        </div>
        <div className="navbar-end flex gap-4 items-center">
          <SwapButton></SwapButton>
          <div
            className="tooltip tooltip-warning tooltip-bottom mt-2"
            data-tip={user?.displayName}
          >
            {user && (
              <div className="avatar online hover:cursor-pointer">
                <div className="w-12 rounded-full">
                  <img src={user?.photoURL} />
                </div>
              </div>
            )}
          </div>
          {user ? (
            <button
              onClick={handleSignOut}
              className="btn btn-outline btn-warning"
            >
              LogOut
            </button>
          ) : (
            <Link to={"/login"} className="btn btn-warning">
              Login
            </Link>
          )}
          {!user && (
            <Link to={"/registration"} className="btn btn-warning">
              Register
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
