import AddCoffeeButton from "../../AddCoffeeButton";

const OurPopularProductHeader = () => {
  return (
    <div>
      <p className="font-raleway text-xl text-[#1B1A1A] mb-2 text-center">
      --- Sip & Savor ---
      </p>
      <h1 className="text-[#331A15] text-6xl text-center">
      Our Popular Products
      </h1>
      <AddCoffeeButton></AddCoffeeButton>
    </div>
  );
};

export default OurPopularProductHeader;
