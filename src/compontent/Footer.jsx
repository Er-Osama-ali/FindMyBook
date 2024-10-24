
import React from "react";
import { FaMapLocationDot } from "react-icons/fa6";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";


const FooterLinks = [
  {
    title: "Help",
    link: "/#",
  },
  {
    title: "Payment Method",
    link: "/payment-method",
  },
  {
    title: "Return & Refund",
    link: "/#Return",
  },
  {
    title: "Contact Us",
    link: "/#blog",
  },
];


const paymentImages = [
  "https://feb.unjani.ac.id/wp-content/uploads/2022/06/tenant-bank-bca-300x300-1.png",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG1rRkmCw-8lICgdFPDRsORpSI0Rrwv-1ElA&s",
  "https://www.svgrepo.com/show/328132/discover.svg",
  "https://static-00.iconduck.com/assets.00/payment-visa-icon-2048x1261-bxxvrf9b.png",
  "https://cdn.icon-icons.com/icons2/2341/PNG/512/mastercard_old_payment_method_card_icon_142735.png",
  "https://www.paymytuition.com/media/halh1kgn/accepts-paypal.png",
];

const Footer = () => {
  return (
    <div className="text-black bg-white ">
      <div className="container">
        <div data-aos="zoom-in" className="grid md:grid-cols-3 pb-44 pt-5">
         
          <div className="py-8 px-4">
            <h1 className="sm:text-3xl text-xl font-bold sm:text-left text-justify text-blue-400 mb-3 flex items-center gap-1">
              FindMyBook
            </h1>
            <p>
              Be it fiction, non-fiction, or educational resources, FindMYBook offers you the perfect blend of knowledge and entertainment for readers of all ages. You'll discover that the sky is the limit when it comes to the variety of books you can choose for different genres and interests.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10">
            <div>
              <div className="py-8 px-4">
                {/* Modified h4 for Customers Services */}
                <h4 className="text-base sm:text-lg font-bold mb-3 text-blue-400 whitespace-nowrap">
                  Customers Services
                </h4>
                <ul className="flex flex-col gap-3">
                  {FooterLinks.map((link) => (
                    <li
                      className="cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-black"
                      key={link.title}
                    >
                      <span>{link.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="py-8 px-4">
                {/* Modified h4 for Payment Methods */}
                <h4 className="text-base sm:text-lg font-bold mb-3 text-blue-400 whitespace-nowrap">
                  Payment Methods
                </h4>
                <div className="grid grid-cols-3 gap-3">
                  {paymentImages.slice(0, 3).map((src, index) => (
                    <img key={index} src={src} alt={`payment-method-${index}`} className="w-16 h-16 object-contain" />
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-3 mt-3">
                  {paymentImages.slice(3, 6).map((src, index) => (
                    <img key={index} src={src} alt={`payment-method-${index}`} className="w-16 h-16 object-contain" />
                  ))}
                </div>
              </div>
            </div>

            <div className="ml-5">
              <div className="flex items-center gap-3 mt-6">
                <a href="#">
                  <FaInstagram className="text-3xl" />
                </a>
                <a href="#">
                  <FaFacebook className="text-3xl" />
                </a>
                <a href="#">
                  <FaLinkedin className="text-3xl" />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3">
                  <FaMapLocationDot />
                  <p>INDIA</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <IoCall />
                  <p>+91 9667994337</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

