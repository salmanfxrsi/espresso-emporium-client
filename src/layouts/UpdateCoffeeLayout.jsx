import { FaLeftLong } from "react-icons/fa6";
import { Link, useLoaderData } from "react-router-dom";
import UpdateCoffeeForm from "../components/UpdateCoffeePage/UpdateCoffeeForm";

const UpdateCoffeeLayout = () => {
  const coffee = useLoaderData();
  console.log(coffee)

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
          <UpdateCoffeeForm coffee={coffee} ></UpdateCoffeeForm>
        </section>
      </main>
    </div>
  );
};

export default UpdateCoffeeLayout;
