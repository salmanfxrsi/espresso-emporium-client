import { BsCup } from "react-icons/bs";
import { Link } from "react-router-dom";

const AddCoffeeButton = () => {
    return (
        <Link to={'/add-coffee'} className="bg-[#E3B577] rounded-md border-2 border-black mx-auto w-[150px] flex items-center justify-center py-3 gap-2 mt-6">
            <p className="text-white text-2xl">Add Coffee</p>
            <BsCup className="text-2xl"></BsCup>
        </Link>
    );
};

export default AddCoffeeButton;