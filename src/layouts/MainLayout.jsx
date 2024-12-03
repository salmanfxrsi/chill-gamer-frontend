import Banner from "../components/Banner";
import Navbar from "../components/Navbar";

const MainLayout = () => {
    return (
        <div className="bg-header">
            <Navbar></Navbar>
            <Banner></Banner>
        </div>
    );
};

export default MainLayout;