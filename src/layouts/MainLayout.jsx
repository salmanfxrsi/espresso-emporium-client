import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Copyright from "../components/Copyright";

const MainLayout = () => {
    return (
        <div>
            <nav><Navbar></Navbar></nav>
            <main><Outlet></Outlet></main>
            <footer><Footer></Footer><Copyright></Copyright></footer>
        </div>
    );
};

export default MainLayout;