import { FaLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import CoffeeDetails from "../components/CoffeeDetailsPage/CoffeeDetails";

const CoffeeDetailsLayout = () => {
  const coffee = useLoaderData();

  return (
    <div className="pt-[50px] pb-[120px] bg-add-coffee-page">
      <main className="w-11/12 lg:container mx-auto">
        {/* Back To Home */}
        <section>
          <Link to={"/"} className="flex items-center gap-2 text-2xl">
            <FaLeftLong></FaLeftLong>
            <h1>Back to home</h1>
          </Link>
        </section>
        {/* Add Coffee Form */}
        <section className="mt-12">
          <CoffeeDetails coffee={coffee}></CoffeeDetails>
        </section>
      </main>
    </div>
  );
};

export default CoffeeDetailsLayout;
