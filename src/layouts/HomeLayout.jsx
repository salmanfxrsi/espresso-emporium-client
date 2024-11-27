import { useLoaderData } from "react-router-dom";
import Header from "../components/HomePage/Header";
import Highlights from "../components/HomePage/Highlights";
import InstaTrail from "../components/HomePage/InstaTrail";
import OurPopularProductHeader from "../components/HomePage/OurPopularProduct/OurPopularProductHeader";
import CoffeeCard from "../components/HomePage/OurPopularProduct/CoffeeCard";

const HomeLayout = () => {
  const coffees = useLoaderData();

  return (
    <div>
      <header>
        <Header></Header>
        <Highlights></Highlights>
      </header>
      <main className="py-[120px] bg-home-page">
        {/* Our Popular Product Section */}
        <section className="mb-[120px] container mx-auto">
          <OurPopularProductHeader></OurPopularProductHeader>
          <div className="grid grid-cols-2 gap-6 mt-12">
            {coffees.map((coffee) => (
              <CoffeeCard key={coffee._id} coffee={coffee}></CoffeeCard>
            ))}
          </div>
        </section>
        {/* InstaTrail Section */}
        <div className="container mx-auto">
          <InstaTrail></InstaTrail>
        </div>
      </main>
    </div>
  );
};

export default HomeLayout;
