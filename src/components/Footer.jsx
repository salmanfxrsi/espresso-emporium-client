import { FaFacebook } from "react-icons/fa";
import logo from "../assets/more/logo.png";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";
import { BiPhone } from "react-icons/bi";
import { FaLocationPin } from "react-icons/fa6";
import { MdMail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="bg-footer py-24">
      <div className="w-11/12 lg:container mx-auto flex justify-between gap-12 lg:gap-0 flex-col lg:flex-row">
        {/* Footer Details */}
        <div className="space-y-8">
          <img className="w-20 h-20" src={logo} alt="" />
          <h1 className="text-[#331A15] text-5xl">Espresso Emporium</h1>
          <p className="text-[#1B1A1A] text-xl font-raleway">
            Always ready to be your friend. Come & Contact with us to share your{" "}
            <br /> memorable moments, to share with your best companion.
          </p>
          {/* Social Icon Logo */}
          <div className="text-3xl text-[#331A15] flex gap-3">
            <FaFacebook></FaFacebook>
            <BsTwitter></BsTwitter> 
            <BsInstagram></BsInstagram>
            <BsLinkedin></BsLinkedin>
          </div>
          <h1 className="text-5xl text-[#331A15]">Get in Touch</h1>
          <div className="flex items-center gap-2 text-xl text-[#1B1A1A]">
            <BiPhone></BiPhone>
            <p>+8801754800757</p>
          </div>
          <div className="flex gap-2 items-center text-xl text-[#1B1A1A]">
            <MdMail></MdMail>
            <p>espresso@gmail.com</p>
          </div>
          <div className="flex gap-2 items-center text-xl text-[#1B1A1A]">
            <FaLocationPin></FaLocationPin>
            <p>Espresso City</p>
          </div>
        </div>
        {/* Footer Input */}
        <div className="">
          <p className="text-[#331A15] text-5xl mb-8">Contact With Us</p>
          <input
            className="rounded-md py-4 px-3 w-[503px] font-raleway mb-4"
            type="text"
            name="name"
            id=""
            placeholder="Name"
          />
          <br />
          <input
            className="rounded-md py-4 px-3 w-[503px] font-raleway mb-4"
            type="email"
            name="email"
            id=""
            placeholder="Email"
          />
          <br />
          <textarea
            className="rounded-md py-4 px-3 w-[503px] font-raleway mb-6"
            name="message"
            id=""
            placeholder="Message"
          ></textarea>
          <br />
          <button className="text-[#331A15] py-2 px-4 rounded-xl border-2 border-[#331A15]">
            Send Message
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
