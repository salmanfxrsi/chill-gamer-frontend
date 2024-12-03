import { Link } from "react-router-dom";

const ErrorLayout = () => {
    return (
        <div className="bg-error h-screen py-96">
            <h1 className="text-6xl font-bold text-white mb-4 text-center">Page Not <span className="text-[#FFC536]">Found</span></h1>
            <Link to={'/'}>
            <button className="btn btn-warning mx-auto block font-bold">Go Back</button>
            </Link>
        </div>
    );
};

export default ErrorLayout;