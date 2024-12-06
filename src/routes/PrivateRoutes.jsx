import { Navigate } from "react-router-dom";

const PrivateRoutes = () => {
    return <Navigate to={'/login'}></Navigate>
};

export default PrivateRoutes;