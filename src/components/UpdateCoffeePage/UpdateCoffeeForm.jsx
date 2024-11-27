import PropTypes from "prop-types";
import Swal from "sweetalert2";

const UpdateCoffeeForm = ({ coffee }) => {
  const { _id, name, chef, taste, photo, supplier, category, details } = coffee;

  const handleUpdateCoffeeDetails = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;
    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };
    fetch(`http://localhost:5000/coffees/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          console.log("successfully updated");
          Swal.fire({
            title: "Success!",
            text: "Coffee updated successfully",
            icon: "success",
            confirmButtonText: "Ok",
          });
          e.target.reset();
        }
      });
  };

  return (
    <div className="bg-[#F4F3F0] rounded-md p-6 lg:p-[70px]">
      <h1 className="text-[#374151] text-5xl text-center">
        Update Existing Coffee Details
      </h1>
      <p className="font-raleway text-lg text-[#1B1A1AB3] text-center lg:w-8/12 mx-auto mt-8">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      {/* Input Section */}
      <form onSubmit={handleUpdateCoffeeDetails}>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Name Input */}
          <div className="font-raleway">
            <h1 className="mb-4 font-semibold text-[#1B1A1ACC] text-xl">
              Name
            </h1>
            <input
              className="w-full p-3 rounded-md"
              type="text"
              name="name"
              id=""
              defaultValue={name}
              placeholder="Enter coffee name"
            />
          </div>
          {/* Coffee Chef Input */}
          <div className="font-raleway">
            <h1 className="mb-4 font-semibold text-[#1B1A1ACC] text-xl">
              Chef
            </h1>
            <input
              className="w-full p-3 rounded-md"
              type="text"
              name="chef"
              id=""
              defaultValue={chef}
              placeholder="Enter coffee chef"
            />
          </div>
          {/* Coffee Supplier Input */}
          <div className="font-raleway">
            <h1 className="mb-4 font-semibold text-[#1B1A1ACC] text-xl">
              Supplier
            </h1>
            <input
              className="w-full p-3 rounded-md"
              type="text"
              name="supplier"
              id=""
              defaultValue={supplier}
              placeholder="Enter coffee supplier"
            />
          </div>
          {/* Coffee Taste Input */}
          <div className="font-raleway">
            <h1 className="mb-4 font-semibold text-[#1B1A1ACC] text-xl">
              Taste
            </h1>
            <input
              className="w-full p-3 rounded-md"
              type="text"
              name="taste"
              id=""
              defaultValue={taste}
              placeholder="Enter coffee taste"
            />
          </div>
          {/* Coffee Category Input */}
          <div className="font-raleway">
            <h1 className="mb-4 font-semibold text-[#1B1A1ACC] text-xl">
              Category
            </h1>
            <input
              className="w-full p-3 rounded-md"
              type="text"
              name="category"
              id=""
              defaultValue={category}
              placeholder="Enter coffee category"
            />
          </div>
          {/* Coffee Details Input */}
          <div className="font-raleway">
            <h1 className="mb-4 font-semibold text-[#1B1A1ACC] text-xl">
              Details
            </h1>
            <input
              className="w-full p-3 rounded-md"
              type="text"
              name="details"
              id=""
              defaultValue={details}
              placeholder="Enter coffee details"
            />
          </div>
        </div>
        {/* Coffee Photo Input */}
        <div className="font-raleway mt-6">
          <h1 className="mb-4 font-semibold text-[#1B1A1ACC] text-xl">Photo</h1>
          <input
            className="w-full p-3 rounded-md"
            type="text"
            name="photo"
            id=""
            defaultValue={photo}
            placeholder="Enter photo URL"
          />
        </div>
        {/* Submit Button */}
        <input
          className="bg-[#D2B48C] hover:cursor-pointer p-3 w-full hover:bg-transparent rounded-md mt-6 border-2 border-black text-2xl text-[#331A15]"
          type="submit"
          value="Update Coffee Details"
        />
      </form>
    </div>
  );
};

UpdateCoffeeForm.propTypes = {
  coffee: PropTypes.object,
};

export default UpdateCoffeeForm;
