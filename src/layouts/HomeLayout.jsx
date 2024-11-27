import { Outlet } from "react-router-dom";
import Header from "../components/HomePage/Header";
import Highlights from "../components/HomePage/Highlights";
import InstaTrail from "../components/HomePage/InstaTrail";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <Highlights></Highlights>
      </header>
      <main className="py-[120px] bg-home-outlet">
        {/* InstaTrail Section */}
        <div className="container mx-auto">
          <InstaTrail></InstaTrail>
        </div>
      </main>
    </div>
  );
};

export default HomeLayout;