const AddCoffeeForm = () => {
    const handleAddCoffee = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const details = form.details.value;
        const photo = form.photo.value;
        const coffee = {name, chef, supplier, taste, category, details, photo};
        console.log(coffee)
    }

  return (
    <div className="bg-[#F4F3F0] rounded-md p-[70px]">
      <h1 className="text-[#374151] text-5xl text-center">Add New Coffee</h1>
      <p className="font-raleway text-lg text-[#1B1A1AB3] text-center w-8/12 mx-auto mt-8">
        It is a long established fact that a reader will be distraceted by the
        readable content of a page when looking at its layout. The point of
        using Lorem Ipsum is that it has a more-or-less normal distribution of
        letters, as opposed to using Content here.
      </p>
      {/* Input Section */}
      <form onSubmit={handleAddCoffee}>
        <div className="mt-12 grid grid-cols-2 gap-6">
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
            placeholder="Enter photo URL"
          />
        </div>
        {/* Submit Button */}
        <input
          className="bg-[#D2B48C] p-3 w-full rounded-md mt-6 border-2 border-black text-2xl text-[#331A15]"
          type="submit"
          value="Add Coffee"
        />
      </form>
    </div>
  );
};

export default AddCoffeeForm;
