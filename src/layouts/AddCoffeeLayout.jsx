import { FaLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import AddCoffeeForm from "../components/AddCoffeePage/AddCoffeeForm";

const AddCoffeeLayout = () => {
  return (
    <div className="pt-[50px] pb-[120px] bg-add-coffee-page">
      <main className="container mx-auto">
        {/* Back To Home */}
        <section>
          <Link to={"/"} className="flex items-center gap-2 text-2xl">
            <FaLeftLong></FaLeftLong>
            <h1>Back to home</h1>
          </Link>
        </section>
        {/* Add Coffee Form */}
        <section className="mt-12"><AddCoffeeForm></AddCoffeeForm></section>
      </main>
    </div>
  );
};

export default AddCoffeeLayout;
