import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt, FaWhatsapp, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white text-center py-10">
     
      <h4 className="text-xl font-semibold mb-6">Contact Us</h4>

      <div className="flex items-center justify-center mb-3">
        <MdEmail className="text-2xl  mr-2" />
        <span className="text-lg">chbjhr@gmail.com</span>
      </div>

      <div className="flex items-center justify-center mb-8">
        <FaPhoneAlt className="text-2xl mr-2" />
        <span className="text-lg">5455122351</span>
      </div>

     
      <h5 className="text-lg font-medium mb-4">Connect with Us</h5>
      <div className="flex justify-center space-x-6">
        <a href="#" className="text-2xl  transition-colors">
          <FaWhatsapp />
        </a>
        <a href="#" className="text-2xl  transition-colors">
          <FaInstagram />
        </a>
      </div>
    </footer>
  )
}

export default Footer
