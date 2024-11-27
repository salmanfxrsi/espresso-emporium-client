const Header = () => {
  return (
    <div className="bg-home-header py-[288px] flex justify-between lg:pr-[300px] text-center lg:text-left">
      <div></div>
      <div>
        <h1 className="text-[#FFFFFF] text-[55px] mb-4">
          Would you like a Cup of Delicious Coffee?
        </h1>
        <div className="flex justify-center">
          <p className="text-[#FFFFFF] mb-8">
            It&apos;s coffee time - Sip & Savor - Relaxation in every sip! Get
            the nostalgia back!! Your companion of <br /> every moment!!! Enjoy
            the beautiful moments and make them memorable.
          </p>
        </div>
        <button className="bg-[#E3B577] hover:bg-transparent hover:text-white border-[#E3B577] border-2 hover:border-white py-2 px-4 text-2xl mx-auto block">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Header;
