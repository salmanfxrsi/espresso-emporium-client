import logo from '../assets/more/logo.png'

const Navbar = () => {
    return (
        <div className="py-5 bg-navbar flex items-center justify-center gap-4">
            <img className='w-20 h-20' src={logo} alt="" />
            <p className="text-6xl text-white">Espresso Emporium</p>
        </div>
    );
};

export default Navbar;