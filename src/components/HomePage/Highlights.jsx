import awesomeAroma from "../../assets/highlights/awesome-aroma.png";
import highQuality from "../../assets/highlights/high-quality.png";
import pureGrades from "../../assets/highlights/pure-grades.png";
import properRoasting from "../../assets/highlights/proper-roasting.png";

const Highlights = () => {
  return (
    <div className="bg-[#ECEAE3] py-14">
      <div className="container mx-auto flex justify-between flex-col lg:flex-row items-center gap-6 lg:gap-0">
        <div>
          <img src={awesomeAroma} alt="" />
          <h1 className="text-[#331A15] text-4xl mt-4 mb-2">Awesome Aroma</h1>
          <p className="text-[#1B1A1A]">
            You will definitely be a fan of the design <br /> & aroma of your
            coffee
          </p>
        </div>
        <div>
          <img src={highQuality} alt="" />
          <h1 className="text-[#331A15] text-4xl mt-4 mb-2">High Quality</h1>
          <p className="text-[#1B1A1A]">
            We served the coffee to you maintaining <br /> the best quality
          </p>
        </div>
        <div>
          <img src={pureGrades} alt="" />
          <h1 className="text-[#331A15] text-4xl mt-4 mb-2">Awesome Aroma</h1>
          <p className="text-[#1B1A1A]">
            The coffee is made of the green coffee <br /> beans which you will
            love
          </p>
        </div>
        <div>
          <img src={properRoasting} alt="" />
          <h1 className="text-[#331A15] text-4xl mt-4 mb-2">Proper Roasting</h1>
          <p className="text-[#1B1A1A]">
            Your coffee is brewed by first roasting <br /> the green coffee
            beans
          </p>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
