import PropTypes from "prop-types";

const CoffeeDetails = ({ coffee }) => {
  const { name, chef, taste, photo, supplier, category, details } = coffee;

  return (
    <div className="bg-[#F4F3F0] rounded-md py-[72px] px-[185px] font-raleway flex items-center gap-24">
      <div>
        <img src={photo} alt="" />
      </div>
      <div>
        <h1 className="mb-8 text-4xl text-[#331A15] font-rancho">
          Espresso Emporium
        </h1>
        <div className="space-y-4">
          <p className="text-xl font-bold">
            Name: <span className="font-normal">{name}</span>
          </p>
          <p className="text-xl font-bold">
            Chef: <span className="font-normal">{chef}</span>
          </p>
          <p className="text-xl font-bold">
            Supplier: <span className="font-normal">{supplier}</span>
          </p>
          <p className="text-xl font-bold">
            Taste: <span className="font-normal">{taste}</span>
          </p>
          <p className="text-xl font-bold">
            Category: <span className="font-normal">{category}</span>
          </p>
          <p className="text-xl font-bold">
            Details: <span className="font-normal">{details}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

CoffeeDetails.propTypes = {
  coffee: PropTypes.object,
};

export default CoffeeDetails;
