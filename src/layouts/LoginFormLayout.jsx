import { useContext, useState } from "react";
import { FaGithub, FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { Bounce, toast } from "react-toastify";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

const LoginFormLayout = () => {
  const [error, setError] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const { googleLogin, githubLogin, loginUser, setUser } =
    useContext(AuthContext);

  //   handle google login
  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        setUser(result.user);
        toast.success("Welcome back!", {
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
      })
      .catch((error) => console.log(error.message));
  };

  //   handle github login
  const handleGithubLogin = () => {
    githubLogin()
      .then((result) => {
        setUser(result.user);
        toast.success("Welcome back!", {
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
      })
      .catch((error) => setError(error.message));
  };

  // login user with email and password
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    loginUser(email, password)
      .then((result) => setUser(result.user))
      .catch((error) => setError(error.message));
  };

  return (
    <div className="flex items-center justify-center">
      <div className="lg:w-full w-11/12 max-w-lg p-6 rounded-lg shadow-lg bg-winter">
        <h2 className="text-3xl font-bold text-center text-white">Login</h2>
        <form onSubmit={handleSubmit} className="mt-6 space-y-4">
          {/* Photo URL */}
          <div className="mb-4">
            <label className="block text-white font-medium mb-2">Email</label>
            <input
              type="text"
              name="email"
              className="w-full p-2 border rounded"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password */}
          <div className="relative">
            <div className="mb-4">
              <label className="block text-white font-medium mb-2">
                Password
              </label>
              <input
                type="text"
                name="password"
                className="w-full p-2 border rounded"
                placeholder="Enter your password"
                required
              />
            </div>
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-10 text-gray-500 hover:text-indigo-500 focus:outline-none"
            >
              {showPassword ? (
                <AiOutlineEyeInvisible size={20} />
              ) : (
                <AiOutlineEye size={20} />
              )}
            </button>
          </div>

          {/* Error Messages */}
          <p className="text-red-500 font-black text-sm">{error && error}</p>

          {/* Register Button */}
          <button
            type="submit"
            className="w-full px-4 py-2 text-white btn btn-warning rounded-md"
          >
            Login
          </button>
        </form>

        <div className="my-2">
          <div className="relative flex justify-center text-sm text-gray-600">
            <span className="px-2 text-white font-black">OR</span>
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <button
            onClick={handleGoogleLogin}
            className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white btn btn-warning btn-outline"
          >
            <FaGoogle className="mr-2" />
            Login with Google
          </button>
        </div>
        <div className="flex flex-col gap-2 mt-4">
          <button
            onClick={handleGithubLogin}
            className="flex items-center justify-center px-4 py-2 text-sm font-medium text-white btn btn-warning btn-outline"
          >
            <FaGithub className="mr-2" />
            Login with Github
          </button>
        </div>
        {/* Redirect to Login */}
        <div className="mt-6 text-center">
          <p className="text-sm text-white">
            You have&apos;nt account?{" "}
            <Link
              to={"/registration"}
              className="font-medium text-warning hover:underline"
            >
              Register
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginFormLayout;
