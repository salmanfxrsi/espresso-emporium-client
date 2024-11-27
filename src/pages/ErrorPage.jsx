import { FaLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import error from "../assets/404/error.gif";

const ErrorPage = () => {
  return (
    <div>
      {/* Header */}
      <nav>
        <Navbar></Navbar>
      </nav>
      <main className="py-[120px] container mx-auto">
        {/* Back To Home */}
        <section className="flex justify-center">
          <Link to={"/"} className="flex items-center gap-2 text-3xl">
            <FaLeftLong></FaLeftLong>
            <h1>Back to home</h1>
          </Link>
        </section>
        <section>
          <img className="w-full" src={error} alt="" />
        </section>
      </main>
      {/* Footer */}
      <footer>
        <Footer></Footer>
      </footer>
    </div>
  );
};

export default ErrorPage;
