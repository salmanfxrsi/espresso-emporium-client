import Header from "../components/HomePage/Header";
import Highlights from "../components/HomePage/Highlights";
import InstaTrail from "../components/HomePage/InstaTrail";
import OurPopularProductHeader from "../components/HomePage/OurPopularProduct/OurPopularProductHeader";

const HomeLayout = () => {
  return (
    <div>
      <header>
        <Header></Header>
        <Highlights></Highlights>
      </header>
      <main className="py-[120px] bg-home-page">
        {/* Our Popular Product Section */}
        <div className="mb-[120px]">
            <OurPopularProductHeader></OurPopularProductHeader>
        </div>
        {/* InstaTrail Section */}
        <div className="container mx-auto">
          <InstaTrail></InstaTrail>
        </div>
      </main>
    </div>
  );
};

export default HomeLayout;